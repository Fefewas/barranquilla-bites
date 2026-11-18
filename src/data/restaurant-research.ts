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
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdx1-9RESdZA66RNRlqxKyXfwKV3uUoeITH4sVcU1RMqUXfYcg_30hD9M7_nHy08koNSe5CBtO4k0vaQ1GViXmcHgm4d0Wzn6MjwWmQdqRgHCpIPaDr_9an8UoX0Qcn_Z2UwUDzkA=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SpI4t4s0oaLHNRrCOmfmjUNouJ4M3nTzNmR07H8y05D0A96RETWTwMqTMDWKG7pNnsD7BAS2r6Zv_Ll2eCnSyP4GUyrRaTI-8vRlbkYK1_VJGfq4f6dx9osqHF9thUE76SkNgfa3CwQmm0=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RnKIn2LEnbwORoQwU9J9eDkm4LID92aY-8G65dvkx0ESRQ-U9RYp1amziWub0BWQRbIfxpxjmqbfTt4uf-AxU-pycmOMgTKccrSvJrJtll-Fr91gokjuHTnPOysR9qJSGkHGZo=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sa8kPGxIPqbFn-j07KZuZn7zMeTdGfzAAGFMdb2mvASPFkrhnlPE6fVvbuMGw6BHt0aDHU-4q7WxvipR6pFB5lMWU42fCYAp4Dc8N-WxUGAPOraxsLNwzdoc5uI7_TWrBjT_oh=s680-w680-h510',
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
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RYye6QzWK9cSEn-fKX7OOyIEflrHiaYMXLq4ZcK-NjvK4V4fQbi9CSCDFqJfVYn59uC3Wm-TfXXoM5qL4vCa38LaVve7Ya27YvuL0J4rLibn_kRRlhCEnSa2iorWbW2xt0TUDK=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9-eLjRyGhTS_21I1qvWrEPtJ5jpxFhreC2GnWxDEudENpB4pse17M_CPwk3NuqHDi2nUbGRl7pmmCRn9C9fEbHuDHJjCY6OJCSyhY4pAJlqF7J3mOgiSnXioMLBX1mNu17UOvyA=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SXpr23tlo7yeAE_AsIPaCbpleGKH0-MybC1MOE1lSXZEVl4imkzmQoiRK8aV_Cbdve2IByx_v3VISic639i-_2VTXCAepsYTUinp3MDLu5omsbOgAVb9hXccihg3z-_f_2fKsV7WAe4ETX=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QrqJFGQKN4VmFhmoxV6lb7MeUVIstm7W4weToRnS8WvMheUWjnP3ow2B5GKEg5JaB4CnHIbxvl5DIvli-irGqU1CE3Sft0u79EYI1mafupGAZzdwCEnfAYUvdw2VQpjkD13ghWdg=s680-w680-h510',
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
      'https://img0.didiglobal.com/static/soda_public/img_bea955faad62038577ea324e24020ea5.jpeg',
      'https://assets.olaclick.app/companies/products/images/800/5b6d39e0-d0ab-439d-aa06-ca9d6c49c16c.jpeg',
      'https://img0.didiglobal.com/static/soda_public/img_83b40d3aa80854346060512203028fb1.jpeg',
      'https://img0.didiglobal.com/static/soda_public/img_fe0c0b9b737c8b895a4c2f263ed03c91.jpeg',
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
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q-5ND8qiTfHUMd4k5KaEo4f0zOXF1zJnKhSrJW7SyW0MZwfdpRRIkBWLYAuvHqic1Gz54kmJeW4M4AzCYnFcESu2QESpHZgABOeflqjHNOcNdF1CmP86Oxn_c7mEvXqQd65COsj7jNCI-C=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rh9cv-wiM8LJmmqaKxzhx2p1j5fgggAGMkWIEnvN5_nqZBxcWpInff_KAOojAw9DqFVOiC85J-YKCqF6iS6u0qUCqbnT31V_tuRPFvvRZxOjzc08IQD-zw03qNG3rUQOKXuYCgmu1CDS4w=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9Jj4yOBtXhAKn1Os1wwv3F1qZRYtDFNNBx1u0U7kCwha11U9LFMcbsL9fTmOjYnUsj7BlI_a1z8yWr3IVDnc1bfzWlrA4nXM6U1C4kbcLXEfWTImZgPWcG5Hk9OJmPSpE7gX5pw=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q2flTFih9lkKyknxtaKem9Zsf80Ztvf1_3qGzjjxGclaR0z7KEjwfhwbyvblNaLDzWxnaMbdy2Xy_YgTGZI0BMUxaaDZYWuxg6st4gz9NfG1XgtBCa9VI0ak6XlHxnJsQ1zS8Y=s680-w680-h510',
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
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QhD0XP7GXZxnpIR4tpQiM_YdjT9PPdPdVdlFW5F0RFNIzc2BAW7yAgfgfV-mFn_ydqYJ7zRZo1EZpuRNv0XmcXetVBnTekA8AlYs8X301mvRszGLG49mQXc9l3b5gETm0898bBeQ=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RanT6IumlJTeT9t7zUfdByH4g7-lW1KlJAEGQMmOqg-j_m73XjrphwDyueL9h9jqv9CQWOqSq0vDcOWZtbbjViENFx6ZNxwQ_g3J8NufH4_TqGh5aQKLBpxqUqK2HyFUxVN64p=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QddcoJleItIGWnWlKGmkkv13sTV_f2ezzXtT7F0qiY99Rd9H74dzORrpw2NYKppnPp4VXWro-hYvH42d7E2QhvRpQpSZC_p8v5dPciIstNdz_hkoITdmNmn1mnzbR-ULMfZK3v=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R49xZ3m1ZIjyne__mjzKqaiF25Ezkbl-yovgbjvQywJ6DOa7ENBAJFCYbKbMefd_RaN9bPZIPEIMGlOntk3vVg-kRSAGRbAH2wTAerABJsG0d78pKG7Ip9-RwAmOCHEpE1iBPt=s680-w680-h510',
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
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tbd40U1piSMW1mC7Jv-A54Te6eMSZJYxquzH-ZM8C1lIz6Guv_EHoiPHJjomDk3JfFSu5Dg5l7MfI76NLi5-o20C1gt8kuc8_CmO1-QsmRvDhN4yvINXh5L5QURxbwT7tXJ7TFNhHWEVh5=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q2qF646K78K2ePnk0XseYeYVt3Q67EadMBpQQiAQcVvhtUYr329Y0Fg2K4UQy0x4e0R9rpkPzGMiI1M6qNfIVhC6pEsbwzDY7JSH824AEeGfIqnRMBP7X08j75FnLPoU8ATJp9jX354qeq=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TyAiGQaSc-jCfwRSjKDnQkZBdarI4Pnl9aDZ94jtiOyi2H5S00QdMZpWXZzEmmgzeQu4iQWurOHDoNyLW0h2vCTRk-eOP7l14WiYTcKWTxObnGKkItNn9QxcpQRZ9k-tChZIwsPpSbfVqk=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9StjdvJWLQ3izt3zhCpJ3Cqo0A46j89Nekco10pZNuET3dqHyHhukXDb4HaqLz9OMIpgXbWCGgonqLFY-xq_xuZXfR1dVR80Ud3ydh1R7n4r48gwXL5_HANenEizAfEmKdvelYOwEwnh_Qs=s680-w680-h510',
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
      'https://lh3.googleusercontent.com/proxy/22_luwyVz8EKXLkIdjsCMiAenMKVXpZtKf91qOnm--icWKIzCUSpR2m02mF5-RHkUZ7SjAZz_TSvA11zchOn1XXclo-kfZ-BI3dX2X5BYsV9l0ofvAEAyXnRyavJKJxVF6OKjpWfXn5twf1NAGFRfT9vNeQgqw=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tmt2wyNnMFbAxIv7ZAN6KVPeqaaU824lHzrLEjqwDBGhghETDlnNSVS8eCc5oNG9ZuVBRQEGJB2jmnkHqqTCMdqKJb1W9wkLeVw1u-Goiy0hm2LFcA2Dnh97dT_BbqToUC3so=s680-w680-h510',
      'https://lh3.googleusercontent.com/proxy/XRYUWKi9GLeTkdSawd9yUTipzeuT_32QdRGDJgS9SZDCqlDl7dMNxWCnxRVo71J_HBN5NPSFaJnMVsOTnmyzO_idEda-H0oweJoW9UYVUrmOW42Y5M5k6p-6vdXsNuavUG9_Ody_O0GguT7Brrl_R4aWDqAcBw=s680-w680-h510',
      'https://lh3.googleusercontent.com/proxy/E33sbwr4B3tsZvsBBkenTcqvygTZPLidlvnvu8v39imEyVpfPfbFIQdgEuXKDQaJUQ5FeHONVa-wUvXBnhISe6oCtjJJUeB2szxu56PivhalqN_rV1z5kenJUxuynWf8VhUtpG15NVdF4Pm9FkeGnGmfdH8hSg=s680-w680-h510',
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
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T27Zlg5lIUyHOHDv0ueLkgnVYKv1OZH2bhYIHiyehtWt5Yj6X-d1HgxY5i1noa694nGwMC82izDZJWAphgWRa1boH752e5i5XwEiECUI1QO1SdNYZ9iJIAQYracL5Omrulza2tV21VSk8=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QnpqtuH01rrXtOy3gkzlg18UeRU6h9B6vMHfWg4xjAAbfh7bK5LSf41Zx463LOkexF0T1_TAEJyLv7OyjS9Nyfn-fMNeehHDlBM4PL3MHIO4OVfM-3wOTaublKsjUOWsa3hnFUBfGUnFI=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R93RbvbvB_dsVitlI6F74P0fJI4YF2T6mjei0kN2GSpBM3gW5ubxEDuilBpcZBhKapOpNS9SOh-nczZ0kctcdNZ9bgfgXjFDOnhDzTVDjvVmsN09PcvSHVIo528lInqWAg0Xyg5vQlWneN=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QENY5MZQWF3Y4qzfQ5Pr9WCoPPSPpo_C8K_qAZ5cZmV6q3vuDm4khCMwP8qFM2XJzZVZ0Xj01RyIotDCrTjtKTEbT2DbOSQYE4OgMTO54VJFuEsCqq0RGn8GH4rJ-BQUpd8GCfSMtuCIfV=s680-w680-h510',
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
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TcdeGEjAY0T0djUSEDjehOiDDoIuvIdLawFeF4RJpE1Rqekcb125SY5IbvxSBFWN15g23N8rUDP7ztGJEY6SGo_dp994MsbibOHnBLSGXPYgNnTqLtjlXTOUlnxY4OKQ3ocDQ=w244-h175-n-k-no-nu',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RF1BszZEh195B6GFTLvAZWSKb5-HvNrMcADk2akBDDZudmw_G0P-hz0xR926qtXnL7jNXBHPiwD7C6cJCwTU8mh0Rf-Bnta9HWyoYzUDk1AQf8yMVPYOv23eUmXiqjrl9OrCOXHW1biGZU=w244-h204-n-k-no-nu',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QBiyhCJzTEQZ4jkuY17Cc_cgycReLcKueWqeCoCSXYaChwJ54Phg8cwVfx6jN7tdpVmvCIY-ZiV3k6gt92hE-dJJ7cpzMXDE-VxVgJ45fT2DktG9L2gf5ZgYF-rvZfK9JX-LAus4-rDc-0=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Td2enMMy69NWm-nWb6HN00GatFI-eii62E3n0gPffel7K8dXLeJBe7ZmF_4bVhr3HTeO1Er0tE7UZI4o0ct-dzpwXoCEwWtDXz-ZOlMyzcVd_ADq7z5qDz25SdUKU6Btivs6L_tA=s680-w680-h510',
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
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QF5lsvLuxE8PvJVZ9K-Z07LMd_OYngNEJ7yQS00WBhelkExc6HvGDSIQLfGJ1mH3WvHyyZ5kCrQI52lOMOBn85gixHIjAeXwDfz8luxL3Gaa7I1KX4KwxQX02qGYc8N0xZc8LivA=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q6coxYvQKA2rm0ryF3XC72hjXKMnuDUvgjq04UL1U64lPqLSyr9SY4cVCkT_Kwy__wm21M_0mlLMWz789lDCJgRHpCtK4V4TImibkRi5Su4d-1CvmfPKirikgHZayBlvwPsGXLTw=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SkD2HL1PCDdEm-5r8tz_TlysL6FWZ0TfDOZvCcHyQtH7VTPl5H4jLhHYbBCyg_KPubL_rrqV01DabVwLgC21ZqJkx7VhDYJIErLPvmVJeNXr7OUaViT9uUWQ7qXwjXTDgaH94j=s680-w680-h510',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QEH48dqd6vldGQeIbi7MvvknvlFYAVWsFr0mhVERmDrIaoqldm5io_OWSopPTkdj5OhCoSfEOxAj1PJHeZ1LtflMLfhvqoeIu8QzBdKLmYxH8lUOOyixt3QurJKbxizF8566Rz=s680-w680-h510',
    ],
    personalRanking: { food: 4.5, service: 4.4, atmosphere: 4.9, value: 4.2 },
    signatureDishes: [],
    sources: [],
  },
] as const satisfies readonly RestaurantResearchEntry[]
