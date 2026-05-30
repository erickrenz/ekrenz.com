export type FeaturedScene = {
  slug: string;
  title: string;
  subtitle: string;
  center: [number, number];
  zoom: number;
};

export const featuredScenes: Array<FeaturedScene> = [
  {
    slug: "cologne",
    title: "Cologne",
    subtitle: "Kölle Alaaf!",
    center: [6.9603, 50.9375],
    zoom: 14,
  },
  {
    slug: "cincinnati",
    title: "University of Cincinnati",
    subtitle: "Great experience and opportunities",
    center: [-84.5155, 39.1329],
    zoom: 13,
  },
  {
    slug: "florence",
    title: "Florence",
    subtitle: "La dolce vita toscana",
    center: [11.2531, 43.768],
    zoom: 15,
  },
  {
    slug: "cuyahoga-valley",
    title: "Cuyahoga Valley National Park",
    subtitle: "My childhood backyard",
    center: [-81.5835, 41.199],
    zoom: 12,
  },
];
