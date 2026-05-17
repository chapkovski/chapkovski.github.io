---
layout: page
permalink: /wp/
title: working papers
description: Working papers, revise-and-resubmits, and manuscripts under review.
nav: true
nav_order: 3
---


<!-- {% include bib_search.liquid %} -->

<div class="publications">

{% bibliography --group_by year --query @*[wp=true]* %}

</div>
---
