---
layout: page
permalink: /wp/
title: working papers
description: Some of  the publications which are currently under review or in a working paper form
years: [2022]
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f wp -q @*[year={{y}}]* %}
{% endfor %}

</div>
