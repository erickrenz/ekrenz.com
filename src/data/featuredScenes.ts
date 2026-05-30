export type FeaturedScene = {
  slug: string
  title: string
  subtitle: string
  center: [number, number]
  zoom: number
}

export const featuredScenes: Array<FeaturedScene> = [
  {
    slug: 'cologne',
    title: 'Cologne',
    subtitle: 'My home away from home',
    center: [6.9603, 50.9375],
    zoom: 12,
  },
  {
    slug: 'mosel',
    title: 'Mosel Valley',
    subtitle: 'Sleepy riverside getaway with good wine',
    center: [7.0384, 49.916],
    zoom: 10,
  },
  {
    slug: 'madrid',
    title: 'Madrid',
    subtitle: 'Late dinners, dry air, and long walks between plazas',
    center: [-3.7038, 40.4168],
    zoom: 12,
  },
  {
    slug: 'lisbon',
    title: 'Lisbon',
    subtitle: 'A city folded into hills above the Tagus',
    center: [-9.1393, 38.7223],
    zoom: 12,
  },
  {
    slug: 'chicago',
    title: 'Chicago',
    subtitle: 'A lakefront grid with neighborhood gravity',
    center: [-87.6298, 41.8781],
    zoom: 11,
  },
]
