---
layout: page
title: Political Alignment in Recommendations
description: Experimental study of recommender alignment as a public-good dilemma.
img: assets/img/projects/recommender-thumbnail.png
importance: 4
category: work
featured: true
github: https://github.com/chapkovski/main_recommender
---

This project studies political alignment in recommender systems as a public-good problem. The core idea is that steering recommendations toward a preferred content balance requires costly user input and platform effort, while many of the benefits are shared across users. That creates the central dilemma of the project: aligned recommendations may be collectively desirable but individually underprovided because users can free-ride on others' contributions.

The project is joint work with [Dietmar Jannach](https://www.aau.at/en/aics/research-groups/infsys/team/dietmar-jannach/), [Silvia Milano](https://sites.google.com/view/silvia-milano/home), [Caterina Giannetti](https://sites.google.com/site/caterinagiannetti/), [Cecilia Vergari](https://www.unipi.it/en/about-us/organisation/people/cecilia-vergari-136013-en/), [Nicola Meccheri](https://people.unipi.it/nicola_meccheri/), and [Marco Catola](https://mcatola.github.io/). The collaboration brings together recommender-systems research, AI ethics, behavioural and experimental economics, and applied microeconomics.

The empirical component is an incentivized online experiment implemented in oTree and SurveyJS. Participants first report political and non-political preferences, rank fictional movies to establish a ground truth, and then interact with a shared recommender through repeated movie-rating decisions. Ratings are privately costly but improve recommendation quality for both members of a matched pair, allowing the design to measure willingness to contribute, free-riding, and how contribution changes when partners are politically similar or opposed.

The treatment design crosses domain and match type: political versus non-political disagreement, and homogeneous versus heterogeneous matches. A pilot on Prolific generated usable variation in contribution behaviour and highlights the main identification challenge: separating strategic response from beliefs, framing, and instruction-induced priming.

On the implementation side, the platform combines structured preference elicitation, treatment-based matching, repeated contribution decisions, and transparent payoff rules tied to recommendation accuracy. It is built as reusable infrastructure for research on recommender governance, multi-user AI systems, and the behavioural conditions under which people support politically constrained algorithmic decisions.

### Experiment interface

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/recommender/movie-ranking.png" title="Movie ranking interface" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Participants first build a private top-five movie ranking, which later serves as the accuracy benchmark for the recommender.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/recommender/matching-message.png" title="Matching information screen" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The matching screen communicates whether the paired participant is politically or non-politically similar or opposed.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/recommender/rating-neutral.png" title="Neutral movie rating decision" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/recommender/rating-political.png" title="Political movie rating decision" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  In each round, participants decide whether to pay to rate a movie. Ratings are privately costly but improve the shared recommender for both matched participants.
</div>

### Presentation

- [Presentation slides](/assets/pdf/projects/political-alignment-recommendations-slides.pdf)
