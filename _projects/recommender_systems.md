---
layout: page
title: Political Alignment in Recommendations
description: Experimental study of recommender alignment as a public-good dilemma.
img: assets/img/projects/recommender-alignment-slides.png
importance: 4
category: work
featured: true
github: https://github.com/chapkovski/main_recommender
---

This project studies political alignment in recommender systems as a public-good problem. The core idea is that steering recommendations toward a preferred content balance requires costly user input and platform effort, while many of the benefits are shared across users. That creates the central dilemma of the project: aligned recommendations may be collectively desirable but individually underprovided because users can free-ride on others' contributions.

The empirical component is an incentivized online experiment implemented in oTree and SurveyJS. Participants first report political and non-political preferences, rank fictional movies to establish a ground truth, and then interact with a shared recommender through repeated movie-rating decisions. Ratings are privately costly but improve recommendation quality for both members of a matched pair, allowing the design to measure willingness to contribute, free-riding, and how contribution changes when partners are politically similar or opposed.

The treatment design crosses domain and match type: political versus non-political disagreement, and homogeneous versus heterogeneous matches. A pilot on Prolific generated usable variation in contribution behaviour and highlights the main identification challenge: separating strategic response from beliefs, framing, and instruction-induced priming.

On the implementation side, the platform combines structured preference elicitation, treatment-based matching, repeated contribution decisions, and transparent payoff rules tied to recommendation accuracy. It is built as reusable infrastructure for research on recommender governance, multi-user AI systems, and the behavioural conditions under which people support politically constrained algorithmic decisions.

### Presentation materials

- [Presentation slides](/assets/pdf/projects/political-alignment-recommendations-slides.pdf)
- [Speaker cards](/assets/pdf/projects/political-alignment-recommendations-speaker-cards.pdf)
