---
layout: page
permalink: /wp/
title: work in progress
description: Some of  the publications which are currently under review or in a working paper format
years: [2024,2023,2022]
nav: false
published: false
nav_order: 1
---

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f wp -q @*[year={{y}}]* %}
{% endfor %}

</div>
