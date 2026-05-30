# ekrenz.com Product Spec

## Concept

ekrenz.com is a personal atlas: a map-centered personal website about geography, culture, travel, food, wine, and exploration.

The site should feel like a curated geographic notebook rather than a portfolio template or travel blog.

## Goals

- Present personal identity through places and interests.
- Build a distinctive map-first homepage.
- Support place-based narratives over time.
- Use OpenStreetMap/OpenLayers with custom styling.
- Make geography the primary navigation pattern.

## Non-Goals

- Do not build a generic marketing homepage.
- Do not make the site feel like a photo-heavy travel influencer blog.
- Do not overbuild CMS/editor workflows initially.
- Do not depend on the current Astro implementation as the long-term architecture.
- Do not include separate About or Writing sections in the initial information architecture.

## Information Architecture

### `/`

Map-first homepage.

The homepage shows one curated featured map scene, selected randomly or pseudo-randomly on each page load.

It includes:

- Name
- Short personal description
- Featured place title
- Short note about the place

## Homepage Direction

The homepage should use a randomly selected curated map scene. Each scene is intentionally authored rather than pulled from arbitrary data.

Example featured scenes:

```ts
const featuredScenes = [
  {
    slug: "cologne",
    title: "Cologne",
    subtitle: "My home away from home",
    center: [6.9603, 50.9375],
    zoom: 12,
  },
  {
    slug: "mosel",
    title: "Mosel Valley",
    subtitle: "Sleepy riverside getaway with good wine",
    center: [7.0384, 49.9160],
    zoom: 10,
  },
];
```

## Visual Style

The site should avoid generic travel-blog styling. It should feel like a personal geographic archive.

Direction:

- Off-white or pale gray background
- Black or charcoal text
- Muted terrain/map colors
- Fine linework
- Restrained labels
- Sparse UI
- Map controls that feel like tools, not decoration
- One accent color, such as wine red, river blue, or moss green

Map styling ideas:

- Pale land
- Subtle water
- Thin roads
- Emphasized rivers
- Toned-down neighborhood and city labels
- Optional highlighted geometry for featured areas

## Technical Direction

- Framework: TanStack Start
- Mapping: OpenLayers
- Data: local structured JSON or TypeScript files initially
- Map data source: OSM-compatible tiles or vector tiles
- Styling: custom map style, likely using vector tiles if feasible
- Deployment: Cloudflare Pages, with auto-build and deploy on pushes to GitHub

## MVP

The first version should include:

- TanStack Start app shell
- Map-first homepage
- Five curated featured scenes
- Cloudflare Pages deployment compatibility

