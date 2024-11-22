---
layout: page
permalink: /wp/
title: working papers
description: working papers
nav: true
nav_order: 3
---


<!-- {% include bib_search.liquid %} -->

<div class="publications">

{% bibliography --group_by year --query @*[wp=true]* %}

</div>
---
