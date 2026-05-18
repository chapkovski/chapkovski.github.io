---
layout: page
title: Ethical AI in Recommendations
description: Experimental study of ethical alignment, free-riding, and polarization in recommender systems.
img: assets/img/projects/recommender-ethics.svg
importance: 4
category: work
featured: true
github: https://github.com/chapkovski/main_recommender
---

This project studies ethical alignment in recommender systems as a public-good problem. The core idea is that making recommendations more fair, diverse, or politically balanced requires costly user input and platform effort, while many of the benefits are shared across users. That creates the central dilemma of the project: ethically aligned recommendations may be collectively desirable but individually underprovided because users can free-ride on others' contributions.

The empirical component is an incentivized online experiment implemented in oTree and SurveyJS. Participants first report political and non-political preferences, then interact with a shared recommender through repeated movie-rating decisions. Ratings are privately costly but improve recommendation quality for both members of a matched pair, allowing the design to measure willingness to pay for alignment, free-riding, and how contribution changes when partners are politically similar or opposed.

On the implementation side, the platform combines structured preference elicitation, treatment-based matching, repeated contribution decisions, and transparent payoff rules tied to recommendation accuracy. It is built as reusable infrastructure for research on recommender governance, multi-user AI systems, and the behavioural conditions under which people support ethically constrained algorithmic decisions.
