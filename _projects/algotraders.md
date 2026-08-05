---
layout: project_case_study
title: Algotraders
description: Experimental research on trading-platform design, retail investors, and order-flow information.
img: assets/img/projects/algotraders-cover.svg
hero_image: /assets/img/projects/algotraders-cover.svg
hero_alt: Editorial diagram of market information, an order book, and trading decisions
og_image: /assets/img/social/algotraders.png
importance: 2
category: work
featured: true
question: How do trading interfaces shape investor behaviour?
overview: This research stream studies how market information, interface design, and feedback change attention, risk-taking, and trading decisions. Custom market infrastructure connects behavioural questions to observable order placement and execution.
status: Published and ongoing research stream
methods: Randomised online and laboratory experiments with custom market infrastructure
role: Built the core market infrastructure; co-developed the studies.
evidence: Peer-reviewed articles, working paper, and research code
evidence_tags:
  - Behavioural finance
  - Market experiments
  - Platform design
---

<section class="project-showcase__split-section" aria-labelledby="algotraders-design">
  <div>
    <p class="project-showcase__eyebrow">Design</p>
    <h2 id="algotraders-design">Interfaces become experimental treatments</h2>
    <p>The programme combines online and laboratory experiments with purpose-built trading environments. Interface features, market-data access, and feedback can be varied while the platform records orders, executions, balances, and timing.</p>
  </div>
  <div class="project-showcase__flow" aria-label="Market experiment flow">
    <div><span>01</span><strong>Information environment</strong><p>Participants receive experimentally controlled prices, order-flow signals, or interface features.</p></div>
    <div><span>02</span><strong>Trading decision</strong><p>Human and algorithmic traders submit, cancel, and execute orders.</p></div>
    <div><span>03</span><strong>Order book</strong><p>The market engine updates liquidity, spreads, positions, and transaction history.</p></div>
    <div><span>04</span><strong>Behavioural outcomes</strong><p>The studies measure risk-taking, attention, information use, and performance.</p></div>
  </div>
</section>

<section class="project-showcase__diagram" aria-labelledby="algotraders-system">
  <div class="project-showcase__section-heading">
    <p class="project-showcase__eyebrow">System evidence</p>
    <h2 id="algotraders-system">A controlled market behind the interface</h2>
    <p>The diagram represents a synthetic session: no participant records or live market data are shown.</p>
  </div>
  <img src="{{ '/assets/img/projects/algotraders-system.svg' | relative_url }}" alt="Synthetic order-book diagram connecting trader decisions, the market engine, and behavioural records" loading="lazy" width="1200" height="620">
</section>

<section class="project-showcase__insight-band" aria-labelledby="algotraders-contribution">
  <div><p class="project-showcase__eyebrow">Contribution</p><h2 id="algotraders-contribution">From research question to market infrastructure</h2></div>
  <p>I built the core market infrastructure and co-developed the studies. The platform coordinates human and algorithmic actors, maintains the order book, exposes controlled information, and produces structured behavioural records for analysis.</p>
</section>

<section class="project-showcase__outputs" aria-labelledby="algotraders-outputs">
  <p class="project-showcase__eyebrow">Outputs</p>
  <h2 id="algotraders-outputs">Published and ongoing work</h2>
  <ul>
    <li><a href="https://doi.org/10.1287/mnsc.2022.02650"><em>Trading Gamification and Investor Behavior</em>, Management Science</a></li>
    <li><a href="https://doi.org/10.1016/j.jbef.2025.101049"><em>Gamified Risk-Taking</em>, Journal of Behavioral and Experimental Finance</a></li>
    <li><a href="https://doi.org/10.2139/ssrn.5160381"><em>How do retail investors use order flow data?</em>, working paper</a></li>
    <li><a href="https://github.com/chapkovski/trader_london">Research code</a></li>
  </ul>
</section>
