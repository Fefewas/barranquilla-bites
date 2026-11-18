import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/home/Hero'
import StatStrip from '@/components/home/StatStrip'
import FeaturedRestaurants from '@/components/home/FeaturedRestaurants'
import CategoryPreview from '@/components/home/CategoryPreview'
import Ticker from '@/components/site/Ticker'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Top Restaurants You Must Visit in Barranquilla' },
      {
        name: 'description',
        content:
          'Explore restaurant profiles in Barranquilla, grouped into fast food and gourmet rankings, with research sources and practical details.',
      },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <Hero />
      <StatStrip />
      <FeaturedRestaurants />
      <Ticker />
      <CategoryPreview />
    </div>
  )
}
