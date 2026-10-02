export type Event = {
  slug: string;
  year: string;
  title: string;
  description: string;
  date: string;
  image: string;
};

export const events: Event[] = [

  {
    //slug musi byc taki jak nazwa fodleru w cloudflare !!!
    slug: "dogmagedon",
    year: "2026-2027",
    title: "Dogmagedon",
    description: "Dogmagedon K9.",
    date: "15 września 2026",
    image: "https://www.pzs1.pl/gallery/galleries/2024-2025/63dogmagedon/IMG_5861.jpg",
  },

  {
    slug: "oboz-klasa-policyjna",
    year: "2026-2027",
    title: "Oboz szkoleniowy klasy policyjnej",
    description: "Oboz szkoleniowy klasy policyjnej",
    date: "30 września 2026",
    image: "https://www.pzs1.pl/gallery/galleries/2024-2025/64Pol/IMG-20260923-WA0025%20(Copy).jpg",
  },

];