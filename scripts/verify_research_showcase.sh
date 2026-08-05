#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$project_root"

if [[ "${SKIP_BUILD:-0}" != "1" ]]; then
  PATH="/Users/chapkovski/.rbenv/shims:/Users/chapkovski/.rbenv/bin:$PATH" bundle exec jekyll build >/tmp/chapkovski-jekyll-build.log
fi

fail() {
  printf 'FAIL: %s\n' "$1" >&2
  exit 1
}

require_file() {
  [[ -f "$1" ]] || fail "missing generated file $1"
}

require_text() {
  rg -q --fixed-strings "$2" "$1" || fail "$1 does not contain: $2"
}

forbid_text() {
  if rg -q --fixed-strings "$2" "$1"; then
    fail "$1 unexpectedly contains: $2"
  fi
}

require_file _site/index.html
require_file _site/projects/index.html
require_file _site/projects/recommender_systems/index.html
require_file _site/projects/algotraders/index.html
require_file _site/projects/wedr/index.html
require_file _site/shared/pepsy/index.html
require_file _site/shared/novaland/index.html
require_file _site/shared/kita-kindergarten-financing/index.html
require_file _site/methods-support/index.html

require_text _site/index.html "I study how information and institutional environments shape cooperation, trust, and decision-making."
require_text _site/index.html "mailto:chapkovski@gmail.com?subject=Research%20collaboration%20enquiry"
require_text _site/index.html "Who contributes to improve a shared recommender?"

require_text _site/projects/index.html "Political Alignment in Recommendations"
require_text _site/projects/index.html "Algotraders"
require_text _site/projects/index.html "Polarization at Workplace"
forbid_text _site/projects/index.html "Novaland"
forbid_text _site/projects/index.html ">work<"

require_text _site/projects/recommender_systems/index.html "Designed and implemented the platform; contributed to study design and piloting."
require_text _site/projects/algotraders/index.html "Built the core market infrastructure; co-developed the studies."
require_text _site/projects/wedr/index.html "Designed and built the interactive platform and workflow."

# Grid children with large intrinsic SVG dimensions must be allowed to shrink;
# otherwise the lead card copy overlays its illustration at desktop widths.
require_text _sass/_project-showcase.scss ".research-project-card__visual,"
require_text _sass/_project-showcase.scss ".research-project-card__copy {"
require_text _sass/_project-showcase.scss "min-width: 0;"
require_text _sass/_project-showcase.scss "aspect-ratio: auto;"
require_text _sass/_project-showcase.scss "overflow-wrap: break-word;"
require_text _sass/_project-showcase.scss "font-size: clamp(2.2rem, 4vw, 2.8rem);"

robots_meta='<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">'
for quiet_page in \
  _site/shared/pepsy/index.html \
  _site/shared/novaland/index.html \
  _site/shared/kita-kindergarten-financing/index.html; do
  require_text "$quiet_page" "$robots_meta"
  require_text "$quiet_page" "Working project · shared for discussion · updated August 2026"
done
require_text _site/methods-support/index.html "$robots_meta"

for public_file in _site/index.html _site/projects/index.html _site/sitemap.xml _site/assets/js/search-data.json; do
  [[ -f "$public_file" ]] || continue
  forbid_text "$public_file" "/shared/pepsy/"
  forbid_text "$public_file" "/shared/novaland/"
  forbid_text "$public_file" "/shared/kita-kindergarten-financing/"
  forbid_text "$public_file" "/methods-support/"
done

[[ ! -e _site/projects/novaland/index.html ]] || fail "retired Novaland route still exists"
[[ ! -e _site/repositories/index.html ]] || fail "retired repositories route still exists"
[[ ! -e _site/blog/index.html ]] || fail "retired blog route still exists"
[[ ! -d _site/blog/tag ]] || fail "sample tag archives still exist"
[[ ! -d _site/blog/category ]] || fail "sample category archives still exist"
[[ ! -d _site/scripts ]] || fail "internal verification scripts were copied into the generated site"

require_text _site/index.html '<meta property="og:image" content="https://chapkovski.com/assets/img/social/chapkovski-default.png">'
require_text _site/index.html '<meta property="og:title" content="Philipp Chapkovski">'
require_text _site/index.html '<meta name="description" content="Philipp Chapkovski is a postdoctoral researcher in behavioural economics and finance, building computational experiments for public policy, financial technology, and AI systems.">'
require_text _site/projects/recommender_systems/index.html '<meta name="twitter:card" content="summary_large_image">'

for image in \
  assets/img/social/chapkovski-default.png \
  assets/img/social/political-alignment.png \
  assets/img/social/algotraders.png \
  assets/img/social/polarization-workplace.png; do
  require_file "$image"
  dimensions="$(identify -format '%wx%h' "$image")"
  [[ "$dimensions" == "1200x630" ]] || fail "$image is $dimensions, expected 1200x630"
done

printf 'Research showcase contract: PASS\n'
