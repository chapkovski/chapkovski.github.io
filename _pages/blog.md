---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 7
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

  <script type="module" src="https://cdn.jsdelivr.net/npm/bsky-embed/dist/bsky-embed.es.js" async></script>

  <bsky-embed
    username="chapkovski.bsky.social"
    limit="5"
    load-more="true"
  >
  </bsky-embed>
