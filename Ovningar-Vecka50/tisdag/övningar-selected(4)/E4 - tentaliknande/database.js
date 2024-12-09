// ids är alltid unika inom varje array

const COUNTRIES = [
  { id: 1, name: "Spain" },
  { id: 2, name: "Mexico" },
  { id: 3, name: "Argentina" },
  { id: 4, name: "Ireland" },
  { id: 5, name: "USA" },
  { id: 6, name: "UK" },
  { id: 7, name: "France" },
];

const LANGUAGES = [
  { id: 1, name: "Spanish", spoken_in_countries_ids: [1, 2, 3] },
  { id: 2, name: "Catalan", spoken_in_countries_ids: [1, 7] },
  { id: 3, name: "English", spoken_in_countries_ids: [4, 5, 6] },
];

const AUTHORS = [
  { id: 1, name: "Cervantes", country_of_origin_id: 1 },
  { id: 2, name: "Shakespeare", country_of_origin_id: 6 },
  { id: 3, name: "Cortazar", country_of_origin_id: 3 },
  { id: 4, name: "Franzen", country_of_origin_id: 5 },
  { id: 5, name: "Cabre", country_of_origin_id: 1 },
];

const BOOKS = [
  { id: 1,
    title: "Don Quijote de la Mancha",
    language_id: 1,
    author_id: 1,
    publication_year: 1616,
    units_sold: 1000
  },
  { id: 2,
    title: "Macbeth",
    language_id: 3,
    author_id: 2,
    publication_year: 1689,
    units_sold: 800
  },
  { id: 3,
    title: "Henry VIII",
    language_id: 3,
    author_id: 2,
    publication_year: 1692,
    units_sold: 400
  },
  { id: 4,
    title: "Rayuela",
    language_id: 1,
    author_id: 3,
    publication_year: 1980,
    units_sold: 200
  },
  { id: 5,
    title: "Crossroads",
    language_id: 3,
    author_id: 4,
    publication_year: 2013,
    units_sold: 876
  },
  { id: 6,
    title: "Confesso",
    language_id: 2,
    author_id: 5,
    publication_year: 2011,
    units_sold: 145
  },
];

