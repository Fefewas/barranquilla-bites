import { env } from 'node:process'
import { createFileRoute } from '@tanstack/react-router'
import { RESTAURANTS, getRestaurant } from '@/data/restaurants'
import type { Restaurant } from '@/data/restaurants'
import {
  fetchGoogleRestaurant,
  GooglePlacesApiError,
} from '@/lib/google-places'

const noStore = { 'Cache-Control': 'no-store' }

export const Route = createFileRoute('/api/restaurants')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const searchParams = new URL(request.url).searchParams
        const slug = searchParams.get('slug')
        if (searchParams.has('slug') && !slug) {
          return Response.json(
            { error: 'The slug query parameter cannot be empty.' },
            { status: 400, headers: noStore },
          )
        }

        let entries: readonly Restaurant[] = RESTAURANTS
        if (slug) {
          const restaurant = getRestaurant(slug)
          if (!restaurant) {
            return Response.json(
              { error: `Unknown restaurant slug: ${slug}` },
              { status: 404, headers: noStore },
            )
          }
          entries = [restaurant]
        }

        const apiKey = env.GOOGLE_MAPS_API_KEY
        const accessToken = env.GOOGLE_PLACES_API_TOKEN
        if (!apiKey || !accessToken) {
          return Response.json(
            {
              error:
                'Google Places is not configured. Set GOOGLE_MAPS_API_KEY and GOOGLE_PLACES_API_TOKEN on the server.',
            },
            { status: 503, headers: noStore },
          )
        }

        if (request.headers.get('authorization') !== `Bearer ${accessToken}`) {
          return Response.json(
            { error: 'A valid bearer token is required.' },
            {
              status: 401,
              headers: { ...noStore, 'WWW-Authenticate': 'Bearer' },
            },
          )
        }

        try {
          const restaurants = await Promise.all(
            entries.map((entry) => fetchGoogleRestaurant(entry, apiKey)),
          )

          return Response.json(
            {
              attribution: 'Google Maps',
              retrievedAt: new Date().toISOString(),
              restaurants,
            },
            { headers: noStore },
          )
        } catch (error) {
          if (error instanceof GooglePlacesApiError) {
            console.error('Google Places request failed', {
              status: error.status,
              message: error.message,
            })
            return Response.json(
              {
                error:
                  'Google Places request failed. Check the server logs and API configuration.',
              },
              { status: 502, headers: noStore },
            )
          }
          throw error
        }
      },
    },
  },
})
