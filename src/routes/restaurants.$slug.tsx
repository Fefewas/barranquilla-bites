import { createFileRoute, notFound } from '@tanstack/react-router'
import {
  CATEGORIES,
  getRankingNeighbours,
  getRestaurant,
} from '@/data/restaurants'
import DetailHeader from '@/components/restaurant/DetailHeader'
import PersonalRanking from '@/components/restaurant/PersonalRanking'
import MenuSection from '@/components/restaurant/MenuSection'
import RestaurantGallery from '@/components/restaurants/RestaurantGallery'
import InfoPanel from '@/components/restaurant/InfoPanel'
import ExternalLinks from '@/components/restaurant/ExternalLinks'
import RankNav from '@/components/restaurant/RankNav'
import ActionBar from '@/components/restaurant/ActionBar'
import Reveal from '@/components/motion/Reveal'

export const Route = createFileRoute('/restaurants/$slug')({
  loader: ({ params }) => {
    const restaurant = getRestaurant(params.slug)
    if (!restaurant) throw notFound()
    const neighbours = getRankingNeighbours(params.slug)
    if (!neighbours) throw notFound()
    return { restaurant, neighbours }
  },
  head: ({ loaderData }) => {
    const restaurant = loaderData?.restaurant
    return {
      meta: [
        {
          title: restaurant
            ? `${restaurant.name} — Barranquilla`
            : 'Restaurant — Barranquilla',
        },
        {
          name: 'description',
          content:
            restaurant?.shortDescription ??
            'Restaurant details for Barranquilla, Colombia.',
        },
      ],
    }
  },
  component: RestaurantDetail,
})

function RestaurantDetail() {
  const { slug } = Route.useParams()
  const restaurant = getRestaurant(slug)
  if (!restaurant) throw notFound()
  const neighbours = getRankingNeighbours(slug)
  if (!neighbours) throw notFound()
  const category = CATEGORIES[restaurant.category]

  return (
    <div className="pb-24 md:pb-0">
      <DetailHeader restaurant={restaurant} category={category} />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-10">
          <RestaurantGallery
            photos={restaurant.photoUrls}
            name={restaurant.name}
          />
          {restaurant.description && (
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
              {restaurant.description}
            </p>
          )}
          <MenuSection restaurant={restaurant} />
          {restaurant.sources.length > 0 && (
            <section>
              <Reveal>
                <h2 className="font-display text-2xl font-light md:text-3xl">
                  Sources
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  References and the date each source was checked.
                </p>
              </Reveal>
              <ul className="mt-5 space-y-3">
                {restaurant.sources.map((source) => (
                  <li
                    key={source.url}
                    className="rounded-xl border border-border bg-card p-4 text-sm"
                  >
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-medium underline underline-offset-4"
                    >
                      {source.url}
                    </a>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Checked {source.checkedAt} · Supports{' '}
                      {source.supports.join(', ')}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <PersonalRanking restaurant={restaurant} />
          <InfoPanel restaurant={restaurant} />
          <ExternalLinks restaurant={restaurant} accent={category.accent} />
        </aside>
      </div>

      <RankNav restaurant={restaurant} neighbours={neighbours} />
      <ActionBar restaurant={restaurant} accent={category.accent} />
    </div>
  )
}
