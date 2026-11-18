import { Link } from '@tanstack/react-router'
import { ArrowLeft, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CATEGORIES, CategoryKey, Restaurant } from '@/data/restaurants'

export default function DetailHeader({
  restaurant,
  category,
}: {
  restaurant: Restaurant
  category: (typeof CATEGORIES)[CategoryKey]
}) {
  return (
    <header
      className={cn(
        'relative isolate flex min-h-[50vh] items-end overflow-hidden bg-gradient-to-br',
        category.accent === 'ritual'
          ? 'from-stone-950 via-rose-950 to-ritual/60'
          : 'from-stone-950 via-orange-950 to-pulse/60',
      )}
    >
      {restaurant.photoUrls[0] && (
        <img
          src={restaurant.photoUrls[0]}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="scrim-hero absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-24 md:px-8 md:pb-14">
        <Link
          to={category.route}
          className="animate-fade-up inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to the {category.label}{' '}
          ranking
        </Link>

        <p className="animate-fade-up mt-6 text-[11px] uppercase tracking-[0.4em] text-white/70">
          {category.kicker} · Position #{restaurant.rank}
        </p>
        <h1 className="animate-fade-up mt-4 font-display text-4xl font-light leading-tight text-white md:text-6xl">
          {restaurant.name}
        </h1>

        {(restaurant.cuisine ||
          restaurant.specialty ||
          restaurant.priceRange ||
          restaurant.pricePerPerson) && (
          <div className="animate-fade-up mt-5 flex flex-wrap items-center gap-3 text-sm text-white/85">
            {[
              restaurant.cuisine,
              restaurant.specialty,
              restaurant.priceRange,
              restaurant.pricePerPerson &&
                `Price per person: ${restaurant.pricePerPerson}`,
            ]
              .filter(Boolean)
              .join(' · ')}
          </div>
        )}

        {restaurant.shortDescription && (
          <p className="animate-fade-up mt-5 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            {restaurant.shortDescription}
          </p>
        )}

        {restaurant.address && (
          <p className="animate-fade-up mt-5 inline-flex items-center gap-2 text-xs text-white/70">
            <MapPin className="h-3.5 w-3.5" /> {restaurant.address}
          </p>
        )}
      </div>
    </header>
  )
}
