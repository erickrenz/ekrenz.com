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
    subtitle: "My home away from home",
    center: [6.9603, 50.9375],
    zoom: 13,
  },
  {
    slug: "florence",
    title: "Florence",
    subtitle: "Our favorite vacation spot with great food and wine",
    center: [11.2558, 43.7696],
    zoom: 15,
  },
  {
    slug: "cincinnati",
    title: "Cincinnati",
    subtitle: "A great engineering school with an international co-op program",
    center: [-84.5155, 39.1329],
    zoom: 13,
  },
];
