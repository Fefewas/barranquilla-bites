export type RestaurantResearchField =
  | 'name'
  | 'cuisine'
  | 'specialty'
  | 'neighborhood'
  | 'address'
  | 'phone'
  | 'officialWebsite'
  | 'menuUrl'
  | 'openingHours'
  | 'priceRange'
  | 'pricePerPerson'
  | 'description'
  | 'photoUrls'
  | 'signatureDishes'

export type RestaurantResearchSource = {
  url: string
  checkedAt: string
  supports: readonly RestaurantResearchField[]
}

export type PersonalRanking = {
  food: number
  service: number
  atmosphere: number
  value: number
}

export type RestaurantResearchEntry = {
  id: string
  category: 'fast-food' | 'gourmet'
  rank: 1 | 2 | 3 | 4 | 5
  name: string
  cuisine: string
  specialty: string
  neighborhood: string
  address: string
  phone: string
  officialWebsite: string
  menuUrl: string
  openingHours: string
  priceRange: string
  pricePerPerson: string
  description: string
  photoUrls: readonly string[]
  personalRanking: PersonalRanking | null
  signatureDishes: {
    name: string
    price: string
    notes: string
  }[]
  sources: RestaurantResearchSource[]
}

// The site reads this file directly; entries without a researched name stay hidden.
export const RESTAURANT_RESEARCH = [
  {
    id: 'porthos-steakhouse-pub-53',
    category: 'fast-food',
    rank: 1,
    name: 'Porthos Steakhouse & Pub (Porthos 53 location)',
    cuisine: 'Steakhouse and pub',
    specialty: 'Burgers, beer, and grilled meats',
    neighborhood: '',
    address: 'Cra. 53 #85-61, Barranquilla',
    phone: '',
    officialWebsite: 'https://www.porthos.com.co/',
    menuUrl: 'https://www.porthos.com.co/en/menu-general',
    openingHours: 'Friday to Saturday, 11 a.m. - 11 p.m.',
    priceRange: '',
    pricePerPerson: '$40.000 - $60.000',
    description:
      'Porthos 53 is located on Carrera 53. The official profile describes the brand as a steakhouse and pub serving burgers, beer, and grilled meats.',
    photoUrls: [
      '/images/restaurants/porthos-steakhouse-pub-53/photo-01.jpg',
      '/images/restaurants/porthos-steakhouse-pub-53/photo-02.jpg',
      '/images/restaurants/porthos-steakhouse-pub-53/photo-03.jpg',
      '/images/restaurants/porthos-steakhouse-pub-53/photo-04.jpg',
    ],
    personalRanking: { food: 4.7, service: 4.6, atmosphere: 4.8, value: 4.5 },
    signatureDishes: [],
    sources: [
      {
        url: 'https://www.porthos.com.co/',
        checkedAt: '2026-11-18',
        supports: ['name', 'address', 'officialWebsite'],
      },
      {
        url: 'https://www.instagram.com/porthospub/',
        checkedAt: '2026-11-18',
        supports: ['cuisine', 'specialty', 'description'],
      },
      {
        url: 'https://www.porthos.com.co/en/menu-general',
        checkedAt: '2026-11-18',
        supports: ['menuUrl'],
      },
    ],
  },
  {
    id: 'hamburguesas-big-bites',
    category: 'fast-food',
    rank: 2,
    name: 'Hamburguesas Big Bites',
    cuisine: 'Burgers and fast food',
    specialty: '',
    neighborhood: 'Riomar',
    address: 'Cl. 84 #54-21, Riomar, Barranquilla, Atlántico',
    phone: '+57 300 7200027',
    officialWebsite: 'https://l.redipass.com/bigbites',
    menuUrl: 'https://l.redipass.com/v/H3OlL8tuaO?src=r',
    openingHours: 'Generally open daily from 10 a.m. to 11 p.m.',
    priceRange: '',
    pricePerPerson: '$40.000 - $60.000',
    description:
      'Hamburguesas Big Bites is a restaurant chain serving burgers and high-quality fast food.',
    photoUrls: [
      '/images/restaurants/hamburguesas-big-bites/photo-01.jpg',
      '/images/restaurants/hamburguesas-big-bites/photo-02.jpg',
      '/images/restaurants/hamburguesas-big-bites/photo-03.jpg',
      '/images/restaurants/hamburguesas-big-bites/photo-04.jpg',
    ],
    personalRanking: { food: 4.5, service: 4.4, atmosphere: 4.2, value: 4.6 },
    signatureDishes: [],
    sources: [
      {
        url: 'https://l.redipass.com/bigbites',
        checkedAt: '2026-11-18',
        supports: [
          'name',
          'cuisine',
          'address',
          'phone',
          'officialWebsite',
          'menuUrl',
          'description',
        ],
      },
      {
        url: 'https://www.instagram.com/bigbitesco/?hl=es',
        checkedAt: '2026-11-18',
        supports: ['photoUrls'],
      },
    ],
  },
  {
    id: 'maxgordos',
    category: 'fast-food',
    rank: 3,
    name: 'Maxgordo`s',
    cuisine: 'Fast food',
    specialty: '',
    neighborhood: '',
    address: 'Multiple locations across Barranquilla',
    phone: '+57 319 572 3935',
    officialWebsite: 'https://maxgordos.ola.click/',
    menuUrl: 'https://maxgordos.ola.click/products',
    openingHours: '',
    priceRange: '',
    pricePerPerson: '$20.000 - $60.000',
    description:
      'Max Gordos is a well-known fast-food and local cuisine chain in Barranquilla and Soledad, Colombia. It has more than 22 years of history and the motto, "Where being chubby means being happy!"',
    photoUrls: [
      '/images/restaurants/maxgordos/photo-01.jpg',
      '/images/restaurants/maxgordos/photo-02.jpg',
      '/images/restaurants/maxgordos/photo-03.jpg',
      '/images/restaurants/maxgordos/photo-04.jpg',
    ],
    personalRanking: null,
    signatureDishes: [],
    sources: [
      {
        url: 'https://www.instagram.com/maxgordosoficial/?hl=es',
        checkedAt: '2026-11-18',
        supports: [
          'name',
          'cuisine',
          'specialty',
          'phone',
          'description',
          'photoUrls',
        ],
      },
    ],
  },
  {
    id: 'delixpress',
    category: 'fast-food',
    rank: 4,
    name: 'DeliXpress',
    cuisine: 'Charcoal-grilled fast food',
    specialty: 'Charcoal-grilled fast food',
    neighborhood: '',
    address:
      'Calle 76B #71, esquina, barrio La Concepción; Cra. 72 #88-61, Barranquilla',
    phone: '+57 304 2456595',
    officialWebsite: 'https://delixpress.sivipos.co/',
    menuUrl: 'https://www.instagram.com/stories/highlights/18147681028598101/',
    openingHours: '',
    priceRange: '',
    pricePerPerson: '$20.000 - $40.000',
    description:
      'The official account describes its menu as charcoal-grilled fast food and lists two Barranquilla locations.',
    photoUrls: [
      '/images/restaurants/delixpress/photo-01.jpg',
      '/images/restaurants/delixpress/photo-02.jpg',
      '/images/restaurants/delixpress/photo-03.jpg',
      '/images/restaurants/delixpress/photo-04.jpg',
    ],
    personalRanking: { food: 4.5, service: 4.0, atmosphere: 4.0, value: 4.6 },
    signatureDishes: [],
    sources: [
      {
        url: 'https://www.instagram.com/deli.xpress_/',
        checkedAt: '2026-11-18',
        supports: [
          'name',
          'cuisine',
          'specialty',
          'address',
          'menuUrl',
          'description',
        ],
      },
    ],
  },
  {
    id: 'karboneros-fast-food-grill',
    category: 'fast-food',
    rank: 5,
    name: 'Karboneros Fast Food & Grill',
    cuisine: 'Fast food and grilled dishes',
    specialty: '',
    neighborhood: '',
    address: 'Cl. 48 #21-125, Suroccidente, Barranquilla, Atlántico',
    phone: '+57 314 8776232',
    officialWebsite: 'https://www.instagram.com/karbonerosbaq',
    menuUrl: '',
    openingHours: '',
    priceRange: '',
    pricePerPerson: '$40.000 - $60.000',
    description:
      'Karboneros Fast Food & Grill is a popular restaurant and event venue in the El Carmen neighborhood of Barranquilla, Colombia.',
    photoUrls: [
      '/images/restaurants/karboneros-fast-food-grill/photo-01.jpg',
      '/images/restaurants/karboneros-fast-food-grill/photo-02.jpg',
      '/images/restaurants/karboneros-fast-food-grill/photo-03.jpg',
      '/images/restaurants/karboneros-fast-food-grill/photo-04.jpg',
    ],
    personalRanking: { food: 4.3, service: 4.4, atmosphere: 3.9, value: 4.8 },
    signatureDishes: [],
    sources: [
      {
        url: 'https://www.instagram.com/karbonerosbaq',
        checkedAt: '2026-11-18',
        supports: [
          'name',
          'cuisine',
          'specialty',
          'address',
          'menuUrl',
          'description',
        ],
      },
    ],
  },
  {
    id: 'varadero',
    category: 'gourmet',
    rank: 1,
    name: 'Varadero',
    cuisine: 'Fish and seafood; Caribbean fusion cuisine',
    specialty: 'Whole charcoal-grilled fish',
    neighborhood: '',
    address:
      'Cra. 51B #79 - 97, Nte. Centro Historico, Barranquilla, Atlántico',
    phone: '+57 317 8933016',
    officialWebsite: 'https://varaderoco.com/',
    menuUrl:
      'https://varaderoco.com/wp-content/uploads/2026/09/CARTA-VARADERO-AGOSTO-2026-1.pdf',
    openingHours: '',
    priceRange: '',
    pricePerPerson: '$80.000 - $180.000',
    description:
      'The official website describes a fish and seafood menu with Caribbean fusion cuisine, and lists locations in Barranquilla and Valledupar.',
    photoUrls: [
      '/images/restaurants/varadero/photo-01.jpg',
      '/images/restaurants/varadero/photo-02.jpg',
      '/images/restaurants/varadero/photo-03.jpg',
      '/images/restaurants/varadero/photo-04.jpg',
    ],
    personalRanking: { food: 4.9, service: 4.7, atmosphere: 4.8, value: 4.5 },
    signatureDishes: [
      {
        name: 'Whole Charcoal-Grilled Fish',
        price: '',
        notes: 'Highlighted as a house recommendation on the official website.',
      },
    ],
    sources: [
      {
        url: 'https://varaderoco.com/',
        checkedAt: '2026-11-18',
        supports: [
          'name',
          'cuisine',
          'specialty',
          'description',
          'signatureDishes',
          'officialWebsite',
        ],
      },
      {
        url: 'https://varaderoco.com/menu/',
        checkedAt: '2026-11-18',
        supports: ['menuUrl'],
      },
    ],
  },
  {
    id: 'la-empirica-cocina-de-autor',
    category: 'gourmet',
    rank: 5,
    name: 'La Empírica Cocina De Autor',
    cuisine: '',
    specialty: '',
    neighborhood: '',
    address: 'Cra. 48 #74-71, Nte. Centro Historico, Barranquilla, Atlántico',
    phone: '+57 316 2763780',
    officialWebsite: 'https://linktr.ee/laempiricabaq',
    menuUrl: 'https://la-empirica.cluvi.co/newmenu/10527/on_table/basic',
    openingHours: '',
    priceRange: '',
    pricePerPerson: '$40.000 - $160.000',
    description:
      'La Empírica Cocina de Autor is a Barranquilla restaurant with a dinner-party concept that blends creative cuisine, signature cocktails, and Colombian and international influences.',
    photoUrls: [
      '/images/restaurants/la-empirica-cocina-de-autor/photo-01.jpg',
      '/images/restaurants/la-empirica-cocina-de-autor/photo-02.jpg',
      '/images/restaurants/la-empirica-cocina-de-autor/photo-03.jpg',
      '/images/restaurants/la-empirica-cocina-de-autor/photo-04.jpg',
    ],
    personalRanking: { food: 4.8, service: 4.6, atmosphere: 4.9, value: 4.3 },
    signatureDishes: [],
    sources: [
      {
        url: 'https://www.instagram.com/laempiricabaq/?hl=es',
        checkedAt: '2026-11-18',
        supports: ['name', 'cuisine', 'description', 'officialWebsite'],
      },
      {
        url: 'https://la-empirica.cluvi.co/newmenu/10527/on_table/basic',
        checkedAt: '2026-11-18',
        supports: ['menuUrl'],
      },
    ],
  },
  {
    id: 'storia-damore',
    category: 'gourmet',
    rank: 2,
    name: 'Ristorante Storia D’Amore Barranquilla',
    cuisine: 'Italian cuisine',
    specialty: '',
    neighborhood: '',
    address: 'Cra. 52 #80 43, Nte. Centro Historico, Barranquilla, Atlántico',
    phone: '+57 300 9134441',
    officialWebsite:
      'https://restaurantestoriadamore.com/pages/ristorante-barranquilla',
    menuUrl:
      'https://menupp.co/storiadamore/menus/venue/9z1wh9NDY5P6yD3jxFxb?type=normal',
    openingHours: '',
    priceRange: '',
    pricePerPerson: '$60.000 - $160.000',
    description:
      'The official website identifies its Barranquilla location as a Ristorante and describes it as an Italian dining experience.',
    photoUrls: [
      '/images/restaurants/storia-damore/photo-01.jpg',
      '/images/restaurants/storia-damore/photo-02.jpg',
      '/images/restaurants/storia-damore/photo-03.jpg',
      '/images/restaurants/storia-damore/photo-04.jpg',
    ],
    personalRanking: { food: 4.8, service: 4.8, atmosphere: 4.9, value: 4.4 },
    signatureDishes: [],
    sources: [
      {
        url: 'https://restaurantestoriadamore.com/pages/ristorante-barranquilla',
        checkedAt: '2026-11-18',
        supports: ['name', 'cuisine', 'description', 'officialWebsite'],
      },
      {
        url: 'https://restaurantestoriadamore.com/pages/reservas',
        checkedAt: '2026-11-18',
        supports: ['menuUrl'],
      },
    ],
  },
  {
    id: 'pescaye',
    category: 'gourmet',
    rank: 3,
    name: 'Pescayé',
    cuisine: 'Seafood and Caribbean cuisine',
    specialty: '',
    neighborhood: '',
    address:
      'Cra. 59 #70-13 Loc 2, Nte. Centro Historico, Barranquilla, Atlántico',
    phone: '+57 317 6600552',
    officialWebsite: 'https://pescaye.com/',
    menuUrl: 'https://pescaye.com/menu/',
    openingHours: '',
    priceRange: '',
    pricePerPerson: '$40.000 - $120.000',
    description:
      'A casual Caribbean restaurant celebrating flavors from the sea and mangroves.',
    photoUrls: [
      '/images/restaurants/pescaye/photo-01.png',
      '/images/restaurants/pescaye/photo-02.jpg',
      '/images/restaurants/pescaye/photo-03.jpg',
      '/images/restaurants/pescaye/photo-04.jpg',
    ],
    personalRanking: { food: 4.7, service: 4.4, atmosphere: 4.6, value: 4.5 },
    signatureDishes: [],
    sources: [
      {
        url: 'https://www.instagram.com/pescaye/',
        checkedAt: '2026-11-18',
        supports: ['name'],
      },
    ],
  },
  {
    id: 'la-cueva',
    category: 'gourmet',
    rank: 4,
    name: 'La cueva',
    cuisine: '',
    specialty: '',
    neighborhood: '',
    address:
      'Av. 20 de Julio #59-03, Nte. Centro Historico, Barranquilla, Atlántico',
    phone: '+57 316 5281603',
    officialWebsite: '',
    menuUrl:
      'https://drive.google.com/file/d/1vg9lc1FYncvIpeqZ5ltkAZX3zFLMKTsQ/view',
    openingHours: '',
    priceRange: '',
    pricePerPerson: '$40.000 - $120.000',
    description: 'Gourmet bar and restaurant',
    photoUrls: [
      '/images/restaurants/la-cueva/photo-01.jpg',
      '/images/restaurants/la-cueva/photo-02.jpg',
      '/images/restaurants/la-cueva/photo-03.jpg',
      '/images/restaurants/la-cueva/photo-04.jpg',
    ],
    personalRanking: { food: 4.5, service: 4.4, atmosphere: 4.9, value: 4.2 },
    signatureDishes: [],
    sources: [],
  },
] as const satisfies readonly RestaurantResearchEntry[]
