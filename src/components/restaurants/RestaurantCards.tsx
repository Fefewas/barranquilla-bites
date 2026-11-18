import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import RankBadge from '@/components/Shared/RankBadges'
import { CATEGORIES, personalRankingScore } from '@/data/restaurants'
import { cn } from '@/lib/utils'
import type { Restaurant } from '@/data/restaurants'

export default function RestaurantCard({
  restaurant,
  accent = 'pulse',
}: {
  restaurant: Restaurant
  accent?: 'pulse' | 'ritual'
}) {
  const category = CATEGORIES[restaurant.category]
  const fill = accent === 'ritual' ? 'bg-ritual' : 'bg-pulse'
  const personalScore = personalRankingScore(restaurant.personalRanking)

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100',
          fill,
        )}
      />

      <Link
        to="/restaurants/$slug"
        params={{ slug: restaurant.slug }}
        className={cn(
          'shine relative flex aspect-[4/3] items-end overflow-hidden bg-gradient-to-br p-5',
          accent === 'ritual'
            ? 'from-ritual/80 via-ritual/30 to-card'
            : 'from-pulse/80 via-pulse/30 to-card',
        )}
      >
        {restaurant.photoUrls[0] && (
          <>
            <img
              src={restaurant.photoUrls[0]}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </>
        )}
        <span className="relative z-10 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground">
          #{restaurant.rank} · {category.label}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl leading-tight">
              <Link to="/restaurants/$slug" params={{ slug: restaurant.slug }}>
                {restaurant.name}
              </Link>
            </h3>
            {restaurant.cuisine && (
              <p className="mt-1 text-sm text-muted-foreground">
                {restaurant.cuisine}
              </p>
            )}
          </div>
          <RankBadge rank={restaurant.rank} accent={accent} size="sm" />
        </div>

        <p className="mt-4 text-sm">
          {personalScore === null ? (
            <span className="text-muted-foreground">
              Group rating pending · provisional position
            </span>
          ) : (
            <>
              Personal ranking:{' '}
              <span className="font-medium tabular-nums">
                {personalScore.toFixed(1)} / 5
              </span>
              <span className="text-muted-foreground"> · group opinion</span>
            </>
          )}
        </p>

        {(restaurant.pricePerPerson ||
          restaurant.priceRange ||
          restaurant.neighborhood) && (
          <p className="mt-4 text-sm text-muted-foreground">
            {[
              restaurant.pricePerPerson &&
                `Price per person: ${restaurant.pricePerPerson}`,
              restaurant.priceRange,
              restaurant.neighborhood,
            ]
              .filter(Boolean)
              .join(' · ')}
          </p>
        )}

        {restaurant.shortDescription && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {restaurant.shortDescription}
          </p>
        )}

        <Link
          to="/restaurants/$slug"
          params={{ slug: restaurant.slug }}
          className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
        >
          Discover more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  )
}
