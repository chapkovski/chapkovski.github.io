---
layout: project_case_study
title: Political Alignment in Recommendations
description: An incentivised experiment on recommender alignment as a public-good dilemma.
img: assets/img/projects/political-alignment-cover.svg
hero_image: /assets/img/projects/political-alignment-cover.svg
hero_alt: Editorial diagram of two users contributing ratings to a shared recommender system
og_image: /assets/img/social/political-alignment.png
importance: 1
category: work
featured: true
question: Who contributes to improve a shared recommender?
overview: Steering a recommender towards a preferred balance requires user effort, but the resulting improvement is shared. The project asks when people contribute costly information and when they instead rely on a partner to improve the system.
status: Ongoing research project; pilot completed
methods: Incentivised online experiment with a 2 × 2 treatment design
role: Designed and implemented the platform; contributed to study design and piloting.
evidence: Interface, presentation slides, and research code
evidence_tags:
  - Online experiment
  - Recommender systems
  - Collective action
---

<section class="project-showcase__split-section" aria-labelledby="alignment-design">
  <div>
    <p class="project-showcase__eyebrow">Design</p>
    <h2 id="alignment-design">From private preferences to a shared system</h2>
    <p>Participants establish a private movie ranking, are matched with another participant, and repeatedly decide whether to pay to provide a rating. A rating is privately costly but can improve recommendation quality for both people. The design crosses political versus non-political disagreement with homogeneous versus heterogeneous matches.</p>
  </div>
  <div class="project-showcase__flow" aria-label="Experimental flow">
    <div><span>01</span><strong>Preference elicitation</strong><p>Participants create a private ranking that provides an accuracy benchmark.</p></div>
    <div><span>02</span><strong>Matching</strong><p>The platform communicates whether a partner is similar or opposed in the relevant domain.</p></div>
    <div><span>03</span><strong>Costly rating</strong><p>Each participant chooses whether to incur a private cost to add information.</p></div>
    <div><span>04</span><strong>Shared recommendation quality</strong><p>Both matched participants can benefit from contributions to the recommender.</p></div>
  </div>
</section>

<section class="project-showcase__media" aria-labelledby="alignment-interface">
  <div class="project-showcase__section-heading">
    <p class="project-showcase__eyebrow">Interface evidence</p>
    <h2 id="alignment-interface">The participant journey</h2>
    <p>The images document the implemented workflow without exposing a live participant-facing study.</p>
  </div>
  <div class="project-showcase__media-grid project-showcase__media-grid--lead">
    <figure>
      <img src="{{ '/assets/img/projects/recommender/movie-ranking.png' | relative_url }}" alt="Interface for creating a private top-five movie ranking" loading="lazy">
      <figcaption>A private top-five ranking establishes the accuracy benchmark.</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/projects/recommender/matching-message.png' | relative_url }}" alt="Matching screen describing whether the paired participant is similar or opposed" loading="lazy">
      <figcaption>The matching screen communicates the relationship between partners.</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/projects/recommender/rating-neutral.png' | relative_url }}" alt="Neutral movie-rating contribution decision" loading="lazy">
      <figcaption>A contribution decision in the non-political condition.</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/projects/recommender/rating-political.png' | relative_url }}" alt="Political movie-rating contribution decision" loading="lazy">
      <figcaption>A contribution decision in the political condition.</figcaption>
    </figure>
  </div>
</section>

<section class="project-showcase__insight-band" aria-labelledby="alignment-contribution">
  <div><p class="project-showcase__eyebrow">Contribution</p><h2 id="alignment-contribution">Research design made operational</h2></div>
  <p>I designed and implemented the platform and contributed to study design and piloting. The system combines preference elicitation, treatment-based matching, repeated incentivised decisions, and transparent payoff logic in a reusable experimental workflow.</p>
</section>

<section aria-labelledby="alignment-status">
  <p class="project-showcase__eyebrow">Preliminary signal</p>
  <h2 id="alignment-status">Pilot evidence, not a final result</h2>
  <p>The pilot produced usable variation in contribution decisions. Interpretation remains preliminary while the team refines framing, beliefs, and the separation of strategic response from instruction-induced effects.</p>
</section>

<section class="project-showcase__outputs" aria-labelledby="alignment-outputs">
  <p class="project-showcase__eyebrow">Outputs</p>
  <h2 id="alignment-outputs">Materials</h2>
  <ul>
    <li><a href="{{ '/assets/pdf/projects/political-alignment-recommendations-slides.pdf' | relative_url }}">Presentation slides</a></li>
    <li><a href="https://github.com/chapkovski/main_recommender">Research code</a></li>
  </ul>
  <p class="project-showcase__collaborators">Joint work with <a href="https://www.aau.at/team/jannach-dietmar/">Dietmar Jannach</a>, <a href="https://silvia-milano.com/">Silvia Milano</a>, <a href="https://sites.google.com/site/caterinagiannetti/">Caterina Giannetti</a>, <a href="https://www.unipi.it/en/about-us/organisation/people/cecilia-vergari-136013-en/">Cecilia Vergari</a>, <a href="https://people.unipi.it/nicola_meccheri/">Nicola Meccheri</a>, and <a href="https://mcatola.github.io/">Marco Catola</a>.</p>
</section>
