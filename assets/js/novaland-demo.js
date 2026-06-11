(function () {
  const mount = document.getElementById("novaland-demo-app");

  if (!mount || !window.Vue) {
    return;
  }

  const steps = [
    {
      label: "Arrival",
      short: "Enter the virtual state",
      title: "You arrive in Novaland as a resident with ordinary public needs.",
      body: "The experiment starts by placing participants inside a civic environment rather than asking for abstract institutional opinions. The state is visible through services, rules, and administrative responses.",
      scene: ["Resident office", "Service queue", "Civic notice"],
      choices: [],
    },
    {
      label: "Services",
      short: "Observe performance",
      title: "Public services become the first treatment experience.",
      body: "Participants encounter service quality as something they can experience: the office may be responsive, delayed, transparent, or difficult to navigate. This creates an institutional signal before any solidarity choice is requested.",
      scene: ["Clinic response", "School funding", "Permit desk"],
      choices: [],
    },
    {
      label: "Integrity",
      short: "See institutional cues",
      title: "The same service environment can reveal fairness or corruption cues.",
      body: "The design can vary whether participants see impartial administration, favoritism, or informal payments. These cues are experimentally controlled, but the participant sees them as part of a coherent public environment.",
      scene: ["Case file", "Priority lane", "Audit board"],
      choices: [],
    },
    {
      label: "Response",
      short: "Make a civic choice",
      title: "Now choose how much solidarity you would sustain in this environment.",
      body: "The preview uses a simplified response. In the real research design, choices can be mapped to contribution, redistribution, support, trust, or behavioral willingness to cooperate with public institutions.",
      scene: ["Public budget", "Households", "Contribution"],
      choices: [
        {
          id: "maintain",
          title: "Maintain support",
          detail: "Keep contributing despite the institutional signal.",
          result:
            "This response is consistent with resilient solidarity: institutional problems are noticed, but shared provision still receives support.",
        },
        {
          id: "condition",
          title: "Condition support",
          detail: "Support public provision only if integrity improves.",
          result:
            "This response is useful for measuring conditional solidarity: citizens remain willing to cooperate, but institutional quality becomes central.",
        },
        {
          id: "withdraw",
          title: "Withdraw support",
          detail: "Reduce contribution after the negative signal.",
          result: "This response illustrates institutional withdrawal: poor service or corruption can weaken support for shared provision.",
        },
      ],
    },
    {
      label: "Interpretation",
      short: "Connect choice to design",
      title: "The research value is in comparing responses across controlled institutional worlds.",
      body: "Novaland can hold the interface and task structure constant while varying the institutional experience. That makes it possible to estimate how service quality, corruption, and fairness shape trust and solidarity.",
      scene: ["Treatment map", "Behavioral log", "Research output"],
      choices: [],
    },
  ];

  window.Vue.createApp({
    data() {
      return {
        steps,
        activeIndex: 0,
        selectedChoice: "",
      };
    },
    computed: {
      activeStep() {
        return this.steps[this.activeIndex];
      },
      selectedResult() {
        const choice = this.activeStep.choices.find((item) => item.id === this.selectedChoice);
        return choice ? choice.result : "";
      },
      canGoBack() {
        return this.activeIndex > 0;
      },
      canGoForward() {
        return this.activeIndex < this.steps.length - 1;
      },
    },
    methods: {
      setStep(index) {
        this.activeIndex = index;
        this.selectedChoice = "";
      },
      nextStep() {
        if (this.canGoForward) {
          this.setStep(this.activeIndex + 1);
        }
      },
      previousStep() {
        if (this.canGoBack) {
          this.setStep(this.activeIndex - 1);
        }
      },
      selectChoice(choiceId) {
        this.selectedChoice = choiceId;
      },
    },
    mounted() {
      mount.dataset.mounted = "true";
    },
    template: `
      <nav class="novaland-demo__nav" aria-label="Novaland preview steps">
        <button
          v-for="(step, index) in steps"
          :key="step.label"
          class="novaland-demo__step-button"
          :class="{ 'is-active': index === activeIndex }"
          type="button"
          @click="setStep(index)"
        >
          <span>{{ String(index + 1).padStart(2, "0") }}</span>
          <span>
            <strong>{{ step.label }}</strong>
            <small>{{ step.short }}</small>
          </span>
        </button>
      </nav>

      <div class="novaland-demo__stage">
        <div class="novaland-demo__scene" aria-hidden="true">
          <div class="novaland-demo__scene-inner">
            <div class="novaland-demo__building">{{ activeStep.scene[0] }}</div>
            <div class="novaland-demo__citizen">{{ activeStep.scene[1] }}</div>
            <div class="novaland-demo__signal">{{ activeStep.scene[2] }}</div>
          </div>
        </div>

        <div class="novaland-demo__content">
          <h3>{{ activeStep.title }}</h3>
          <p>{{ activeStep.body }}</p>
        </div>

        <div v-if="activeStep.choices.length" class="novaland-demo__choice-panel" aria-label="Solidarity response choices">
          <button
            v-for="choice in activeStep.choices"
            :key="choice.id"
            class="novaland-demo__choice"
            :class="{ 'is-selected': selectedChoice === choice.id }"
            type="button"
            @click="selectChoice(choice.id)"
          >
            <span>
              <strong>{{ choice.title }}</strong>
              <small>{{ choice.detail }}</small>
            </span>
            <i class="fa-solid fa-check" v-if="selectedChoice === choice.id" aria-hidden="true"></i>
          </button>
        </div>

        <div v-if="selectedResult" class="novaland-demo__result" role="status">
          <strong>Interpretation</strong>
          <p>{{ selectedResult }}</p>
        </div>

        <div class="novaland-demo__controls">
          <button class="novaland-demo__control" type="button" :disabled="!canGoBack" @click="previousStep">
            Previous
          </button>
          <button class="novaland-demo__control" type="button" :disabled="!canGoForward" @click="nextStep">
            Next
          </button>
        </div>
      </div>
    `,
  }).mount(mount);
})();
