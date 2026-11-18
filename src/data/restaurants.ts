import { RESTAURANT_RESEARCH } from '@/data/restaurant-research'
import type {
  PersonalRanking,
  RestaurantResearchEntry,
} from '@/data/restaurant-research'

export const SITE = {
  wordmark: 'Flavor',
  wordmarkSub: 'Barranquilla',
  projectTitle: 'Restaurants in Barranquilla',
  tagline: 'Two food scenes, one Caribbean city.',
  intro:
    'Explore the researched restaurants in Barranquilla, from quick local favorites to special-occasion dining. Each profile links to the sources used to prepare it.',
  methodology:
    'Restaurant profiles are read directly from the local research file. Ranking positions and four personal scores are the group’s editorial opinion; unrated entries are marked as pending. No third-party ratings or reviews are used.',
  disclaimer:
    'Source links and review dates are shown on each restaurant profile. A citation records provenance but does not grant permission to reuse content. Confirm details with the restaurant before visiting.',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Fast Food', to: '/fast-food' },
  { label: 'Gourmet', to: '/gourmet' },
  { label: 'Compare', to: '/compare' },
  { label: 'About', to: '/about' },
]

export const CATEGORIES = {
  'fast-food': {
    slug: 'fast-food',
    label: 'Fast Food',
    kicker: 'The Pulse',
    accent: 'pulse',
    tagline: 'Smoke, spice and standing room',
    blurb: 'Quick bites and casual places from Barranquilla.',
    route: '/fast-food',
  },
  gourmet: {
    slug: 'gourmet',
    label: 'Gourmet',
    kicker: 'The Ritual',
    accent: 'ritual',
    tagline: 'Long dinners, low light',
    blurb: 'Restaurants for a slower meal and a special occasion.',
    route: '/gourmet',
  },
} as const

export type CategoryKey = keyof typeof CATEGORIES

export const PERSONAL_RANKING_CRITERIA = [
  { key: 'food', label: 'Food quality' },
  { key: 'service', label: 'Service' },
  { key: 'atmosphere', label: 'Atmosphere' },
  { key: 'value', label: 'Value for money' },
] as const satisfies readonly { key: keyof PersonalRanking; label: string }[]

export type Restaurant = RestaurantResearchEntry & {
  slug: string
  shortDescription: string
  mapsUrl: string
  websiteUrl: string | null
}

export const personalRankingScore = (ranking: PersonalRanking | null) => {
  if (!ranking) return null
  const values = PERSONAL_RANKING_CRITERIA.map(
    (criterion) => ranking[criterion.key],
  )
  return (
    Math.round(
      (values.reduce((sum, value) => sum + value, 0) / values.length) * 10,
    ) / 10
  )
}

const mapsUrl = (restaurant: RestaurantResearchEntry) => {
  const query = [restaurant.name, restaurant.address, 'Barranquilla, Colombia']
    .filter(Boolean)
    .join(', ')
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export const RESTAURANTS: Restaurant[] = RESTAURANT_RESEARCH.filter(
  (restaurant) => restaurant.name.trim().length > 0,
).map((restaurant) => ({
  ...restaurant,
  slug: restaurant.id,
  shortDescription: restaurant.description,
  photoUrls: restaurant.photoUrls.map((url) => url.trim()).filter(Boolean),
  mapsUrl: mapsUrl(restaurant),
  websiteUrl: restaurant.officialWebsite || null,
}))

export const FEATURED_SLUGS = [
  'varadero',
  'porthos-steakhouse-pub-53',
  'storia-damore',
  'delixpress',
] as const

export const getRestaurant = (slug: string): Restaurant | null =>
  RESTAURANTS.find((restaurant) => restaurant.slug === slug) ?? null

export const getRanking = (category: CategoryKey) =>
  RESTAURANTS.filter((restaurant) => restaurant.category === category).sort(
    (a, b) => a.rank - b.rank,
  )

export const getFeaturedRestaurants = () =>
  FEATURED_SLUGS.map((slug) => getRestaurant(slug)).filter(
    (restaurant): restaurant is Restaurant => restaurant !== null,
  )

export type RankingNeighbours = {
  previous: Restaurant | null
  next: Restaurant | null
  category: (typeof CATEGORIES)[CategoryKey]
}

export const getRankingNeighbours = (
  slug: string,
): RankingNeighbours | null => {
  const restaurant = getRestaurant(slug)
  if (!restaurant) return null
  const ranking = getRanking(restaurant.category)
  const index = ranking.findIndex((entry) => entry.slug === slug)
  return {
    category: CATEGORIES[restaurant.category],
    previous: index > 0 ? ranking[index - 1] : null,
    next: index >= 0 && index < ranking.length - 1 ? ranking[index + 1] : null,
  }
}
