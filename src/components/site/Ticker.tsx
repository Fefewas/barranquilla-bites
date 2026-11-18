import { Link } from '@tanstack/react-router'
import { CATEGORIES, RESTAURANTS } from '@/data/restaurants'
import { cn } from '@/lib/utils'

const ORDERED = [...RESTAURANTS].sort(
  (a, b) => a.category.localeCompare(b.category) || a.rank - b.rank,
)

export default function Ticker() {
  const track = [...ORDERED, ...ORDERED]

  return (
    <section
      aria-label="All ten ranked restaurants"
      className="border-y border-border bg-card"
    >
      <div className="marquee-mask overflow-hidden py-5">
        <div className="animate-marquee flex w-max items-center gap-10">
          {track.map((restaurant, index) => (
            <Link
              key={`${restaurant.slug}-${index}`}
              to="/restaurants/$slug"
              params={{ slug: restaurant.slug }}
              aria-hidden={index >= ORDERED.length}
              tabIndex={index >= ORDERED.length ? -1 : undefined}
              className="group flex shrink-0 items-baseline gap-3 whitespace-nowrap"
            >
              <span
                className={cn(
                  'font-display text-sm tabular-nums',
                  restaurant.category === 'fast-food'
                    ? 'text-pulse'
                    : 'text-ritual',
                )}
              >
                #{restaurant.rank}
              </span>
              <span className="font-display text-xl transition-colors group-hover:text-pulse">
                {restaurant.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {CATEGORIES[restaurant.category].label}
              </span>
              <span aria-hidden="true" className="text-border">
                /
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
