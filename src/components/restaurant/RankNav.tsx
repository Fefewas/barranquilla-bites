import { Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import { CATEGORIES, getRanking } from '@/data/restaurants'
import { cn } from '@/lib/utils'
import type { RankingNeighbours, Restaurant } from '@/data/restaurants'

function NavCard({
  restaurant,
  label,
  align = 'left',
}: {
  restaurant: Restaurant
  label: string
  align?: 'left' | 'right'
}) {
  return (
    <Link
      to="/restaurants/$slug"
      params={{ slug: restaurant.slug }}
      className={cn(
        'group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md',
        align === 'right' && 'md:flex-row-reverse md:text-right',
      )}
    >
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-muted font-display text-xl">
        #{restaurant.rank}
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1.5 font-display text-lg leading-tight">
          #{restaurant.rank} {restaurant.name}
        </p>
      </div>
    </Link>
  )
}

export default function RankNav({
  restaurant,
  neighbours,
}: {
  restaurant: Restaurant
  neighbours: RankingNeighbours
}) {
  const { previous, next, category } = neighbours
  const otherCategory =
    restaurant.category === 'fast-food'
      ? CATEGORIES.gourmet
      : CATEGORIES['fast-food']
  const otherLeader = getRanking(otherCategory.slug)[0]

  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to={category.route}
            className="group inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to the {category.label} ranking
          </Link>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {category.label} · position #{restaurant.rank} of 5
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {previous ? (
            <Reveal x={-20} y={14}>
              <NavCard restaurant={previous} label="Previous in the ranking" />
            </Reveal>
          ) : (
            <span className="hidden md:block" />
          )}
          {next ? (
            <Reveal x={20} y={14} delay={0.08}>
              <NavCard
                restaurant={next}
                label="Next in the ranking"
                align="right"
              />
            </Reveal>
          ) : null}
        </div>

        {restaurant.rank === 1 && (
          <Reveal y={22} delay={0.05}>
            <Link
              to="/restaurants/$slug"
              params={{ slug: otherLeader.slug }}
              className="group mt-6 flex items-center gap-5 rounded-2xl border border-border bg-card p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-muted font-display text-2xl">
                #{otherLeader.rank}
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {restaurant.category === 'fast-food'
                    ? 'Seeking something more refined?'
                    : 'Want something louder?'}
                </p>
                <p className="mt-2 font-display text-xl leading-tight">
                  Meet {otherLeader.name}, ranked #1 in the{' '}
                  {otherCategory.label} ranking
                </p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-muted-foreground transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
