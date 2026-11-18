import type { CategoryKey, Restaurant } from '@/data/restaurants'

type GooglePlace = {
  id?: string
  displayName?: { text?: string }
  formattedAddress?: string
  googleMapsUri?: string
  rating?: number
  userRatingCount?: number
  nationalPhoneNumber?: string
  websiteUri?: string
  regularOpeningHours?: { weekdayDescriptions?: string[] }
  businessStatus?: string
}

type GooglePlacesResponse = {
  places?: GooglePlace[]
  error?: { message?: string }
}

export type GoogleRestaurant = {
  slug: string
  category: CategoryKey
  rank: number
  editorial: Pick<
    Restaurant,
    | 'name'
    | 'cuisine'
    | 'specialty'
    | 'priceRange'
    | 'neighborhood'
    | 'shortDescription'
    | 'description'
    | 'address'
    | 'signatureDishes'
  >
  google:
    | {
        status: 'matched'
        placeId: string | null
        name: string | null
        address: string | null
        rating: number | null
        reviewCount: number | null
        phone: string | null
        website: string | null
        mapsUrl: string | null
        openingHours: string[] | null
        businessStatus: string | null
      }
    | { status: 'not_found' }
}

export class GooglePlacesApiError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message)
    this.name = 'GooglePlacesApiError'
  }
}

export async function fetchGoogleRestaurant(
  restaurant: Restaurant,
  apiKey: string,
): Promise<GoogleRestaurant> {
  const response = await fetch(
    'https://places.googleapis.com/v1/places:searchText',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': [
          'places.id',
          'places.displayName',
          'places.formattedAddress',
          'places.googleMapsUri',
          'places.rating',
          'places.userRatingCount',
          'places.nationalPhoneNumber',
          'places.websiteUri',
          'places.regularOpeningHours',
          'places.businessStatus',
        ].join(','),
      },
      body: JSON.stringify({
        textQuery: `${restaurant.name}, ${restaurant.address}, Barranquilla, Colombia`,
        languageCode: 'es',
        regionCode: 'CO',
        includedType: 'restaurant',
        maxResultCount: 1,
      }),
      signal: AbortSignal.timeout(15_000),
    },
  )

  const result = (await response.json()) as GooglePlacesResponse
  if (!response.ok) {
    throw new GooglePlacesApiError(
      response.status,
      result.error?.message ??
        'Google Places returned an unsuccessful response',
    )
  }

  const place = result.places?.[0]
  const {
    slug,
    category,
    rank,
    name,
    cuisine,
    specialty,
    priceRange,
    neighborhood,
    shortDescription,
    description,
    address,
    signatureDishes,
  } = restaurant

  return {
    slug,
    category,
    rank,
    editorial: {
      name,
      cuisine,
      specialty,
      priceRange,
      neighborhood,
      shortDescription,
      description,
      address,
      signatureDishes,
    },
    google: place
      ? {
          status: 'matched',
          placeId: place.id ?? null,
          name: place.displayName?.text ?? null,
          address: place.formattedAddress ?? null,
          rating: place.rating ?? null,
          reviewCount: place.userRatingCount ?? null,
          phone: place.nationalPhoneNumber ?? null,
          website: place.websiteUri ?? null,
          mapsUrl: place.googleMapsUri ?? null,
          openingHours: place.regularOpeningHours?.weekdayDescriptions ?? null,
          businessStatus: place.businessStatus ?? null,
        }
      : { status: 'not_found' },
  }
}
