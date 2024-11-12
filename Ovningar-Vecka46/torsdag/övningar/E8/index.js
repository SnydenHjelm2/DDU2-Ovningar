// Arrayen nedan innehåller info om några städer
const cities = [
  { id: 0, name: "Strasbourg", country: "France", latitude: 48.583, longitude: 7.745, inhabitants: 291313, elevation: 132 },
  { id: 1, name: "Bordeaux", country: "France", latitude: 44.837, longitude: -0.579, inhabitants: 261804, elevation: 6 },
  { id: 2, name: "Lille", country: "France", latitude: 50.629, longitude: 3.057, inhabitants: 236710, elevation: 18 },
  { id: 3, name: "Nantes", country: "France", latitude: 47.218, longitude: -1.553, inhabitants: 323204, elevation: 8 },
  { id: 4, name: "Grenoble", country: "France", latitude: 45.171, longitude: 5.722, inhabitants: 157477, elevation: 212 },
  { id: 5, name: "Bremen", country: "Germany", latitude: 53.075, longitude: 8.807, inhabitants: 569396, elevation: 12 },
  { id: 6, name: "Nuremberg", country: "Germany", latitude: 49.454, longitude: 11.078, inhabitants: 526091, elevation: 302 },
  { id: 7, name: "Leipzig", country: "Germany", latitude: 51.340, longitude: 12.375, inhabitants: 616093, elevation: 113 },
  { id: 8, name: "Dresden", country: "Germany", latitude: 51.050, longitude: 13.740, inhabitants: 563311, elevation: 113 },
  { id: 9, name: "Heidelberg", country: "Germany", latitude: 49.417, longitude: 8.717, inhabitants: 162273, elevation: 114 },
  { id: 10, name: "Venice", country: "Italy", latitude: 45.440, longitude: 12.315, inhabitants: 258685, elevation: 1 },
  { id: 11, name: "Florence", country: "Italy", latitude: 43.769, longitude: 11.255, inhabitants: 382258, elevation: 50 },
  { id: 12, name: "Genoa", country: "Italy", latitude: 44.405, longitude: 8.932, inhabitants: 580097, elevation: 20 },
  { id: 13, name: "Verona", country: "Italy", latitude: 45.438, longitude: 10.992, inhabitants: 257275, elevation: 59 },
  { id: 14, name: "Innsbruck", country: "Austria", latitude: 47.269, longitude: 11.404, inhabitants: 132493, elevation: 574 },
  { id: 15, name: "Salzburg", country: "Austria", latitude: 47.809, longitude: 13.055, inhabitants: 156872, elevation: 424 },
  { id: 16, name: "Graz", country: "Austria", latitude: 47.070, longitude: 15.439, inhabitants: 295000, elevation: 353 },
  { id: 17, name: "Linz", country: "Austria", latitude: 48.306, longitude: 14.286, inhabitants: 204846, elevation: 266 },
  { id: 18, name: "Zurich", country: "Switzerland", latitude: 47.376, longitude: 8.541, inhabitants: 434008, elevation: 408 },
  { id: 19, name: "Geneva", country: "Switzerland", latitude: 46.204, longitude: 6.143, inhabitants: 203856, elevation: 375 },
  { id: 20, name: "Basel", country: "Switzerland", latitude: 47.559, longitude: 7.588, inhabitants: 178000, elevation: 244 },
  { id: 21, name: "Lucerne", country: "Switzerland", latitude: 47.050, longitude: 8.308, inhabitants: 82000, elevation: 436 },
  { id: 22, name: "Kraków", country: "Poland", latitude: 50.064, longitude: 19.945, inhabitants: 779115, elevation: 219 },
  { id: 23, name: "Gdańsk", country: "Poland", latitude: 54.352, longitude: 18.646, inhabitants: 470907, elevation: 7 },
  { id: 24, name: "Poznań", country: "Poland", latitude: 52.406, longitude: 16.925, inhabitants: 532048, elevation: 60 },
  { id: 25, name: "Wrocław", country: "Poland", latitude: 51.107, longitude: 17.038, inhabitants: 641928, elevation: 120 },
  { id: 26, name: "Bruges", country: "Belgium", latitude: 51.209, longitude: 3.224, inhabitants: 118284, elevation: 2 },
  { id: 27, name: "Antwerp", country: "Belgium", latitude: 51.221, longitude: 4.399, inhabitants: 529247, elevation: 7 },
  { id: 28, name: "Ghent", country: "Belgium", latitude: 51.054, longitude: 3.721, inhabitants: 262219, elevation: 9 },
  { id: 29, name: "Rotterdam", country: "Netherlands", latitude: 51.922, longitude: 4.479, inhabitants: 651446, elevation: -1 },
  { id: 30, name: "Utrecht", country: "Netherlands", latitude: 52.090, longitude: 5.122, inhabitants: 357179, elevation: 1 },
  { id: 31, name: "Maastricht", country: "Netherlands", latitude: 50.851, longitude: 5.691, inhabitants: 122378, elevation: 49 },
  { id: 32, name: "Luxembourg City", country: "Luxembourg", latitude: 49.611, longitude: 6.131, inhabitants: 128512, elevation: 376 },
  { id: 33, name: "Brno", country: "Czech Republic", latitude: 49.195, longitude: 16.607, inhabitants: 380681, elevation: 190 },
  { id: 34, name: "Ostrava", country: "Czech Republic", latitude: 49.834, longitude: 18.292, inhabitants: 287968, elevation: 208 },
  { id: 35, name: "Košice", country: "Slovakia", latitude: 48.716, longitude: 21.261, inhabitants: 238593, elevation: 206 },
  { id: 36, name: "Debrecen", country: "Hungary", latitude: 47.531, longitude: 21.627, inhabitants: 202214, elevation: 121 },
  { id: 37, name: "Pécs", country: "Hungary", latitude: 46.072, longitude: 18.233, inhabitants: 144675, elevation: 157 },
  { id: 38, name: "Maribor", country: "Slovenia", latitude: 46.554, longitude: 15.646, inhabitants: 112325, elevation: 275 }
];


/*

Koda ett program som frågar efter en stads namn (med prompt) och sedan:
  a) Om namnet finns i arrayen så ska du logga på konsolen: "Graz is in Austria and has 295 thousand inhabitants"
     (Alltså inte alltid Graz, utan staden som användaren skrev, såklart)
     Notera att du inte ska logga "295000" utan "295 thousand"
  b) om namnet inte finns i arrayen så ska du logga "X is not in the database", där X är namnet som användaren skrev
*/
