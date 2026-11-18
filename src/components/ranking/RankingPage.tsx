import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import RankBadge from '@/components/Shared/RankBadges'
import Reveal from '@/components/motion/Reveal'
import TiltCard from '@/components/motion/TiltCard'
import {
  CATEGORIES,
  getRanking,
  personalRankingScore,
} from '@/data/restaurants'
import type { CategoryKey } from '@/data/restaurants'
import { cn } from '@/lib/utils'

const SOLID = {
  pulse: 'bg-pulse text-pulse-foreground hover:brightness-105',
  ritual: 'bg-ritual text-ritual-foreground hover:brightness-110',
}

export default function RankingPage({
  categoryKey,
}: {
  categoryKey: CategoryKey
}) {
  const category = CATEGORIES[categoryKey]
  const ranking = getRanking(categoryKey)
  const leader = ranking.at(0)
  const rest = ranking.slice(1)
  const otherCategory =
    categoryKey === 'fast-food' ? CATEGORIES.gourmet : CATEGORIES['fast-food']
  const otherLeader = getRanking(otherCategory.slug).at(0)

  if (!leader) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h1 className="font-display text-4xl font-light">
          {category.label} Ranking
        </h1>
        <p className="mt-4 text-muted-foreground">
          No researched restaurant profiles are available in this category.
        </p>
      </div>
    )
  }
  const leaderScore = personalRankingScore(leader.personalRanking)

  return (
    <div>
      <header className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            {category.kicker}
          </p>
          <h1 className="mt-4 font-display text-4xl font-light md:text-6xl">
            {category.label} Ranking
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {category.blurb}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {ranking.length} researched{' '}
            {ranking.length === 1 ? 'profile' : 'profiles'} · ranks follow the
            group’s personal ranking; positions for unrated entries are
            provisional
          </p>
        </Reveal>
      </header>

      <section className="mx-auto mt-10 max-w-6xl px-5 md:px-8">
        <Reveal y={44} amount={0.1}>
          <TiltCard max={3}>
            <article
              className={cn(
                'relative isolate flex min-h-[50vh] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-7 shadow-xl md:min-h-[60vh] md:p-12',
                category.accent === 'ritual'
                  ? 'from-stone-950 via-rose-950 to-ritual/60'
                  : 'from-stone-950 via-orange-950 to-pulse/60',
              )}
            >
              {leader.photoUrls[0] && (
                <img
                  src={leader.photoUrls[0]}
                  alt=""
                  aria-hidden="true"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="scrim-hero absolute inset-0" />
              <div className="relative">
                <p className="animate-fade-up">
                  <RankBadge rank={leader.rank} accent="light" size="lg" />
                </p>
                <p
                  className="animate-fade-up mt-5 text-[11px] uppercase tracking-[0.4em] text-white/70"
                  style={{ animationDelay: '0.08s' }}
                >
                  {category.label} · position #{leader.rank}
                </p>
                <h2
                  className="animate-fade-up mt-3 font-display text-3xl font-light text-white md:text-5xl"
                  style={{ animationDelay: '0.14s' }}
                >
                  {leader.name}
                </h2>
                <p
                  className="animate-fade-up mt-4 text-sm text-white/85"
                  style={{ animationDelay: '0.18s' }}
                >
                  {leaderScore === null
                    ? 'Group rating pending · provisional position'
                    : `Personal ranking: ${leaderScore.toFixed(1)} / 5`}
                </p>
                {(leader.cuisine || leader.specialty) && (
                  <p
                    className="animate-fade-up mt-4 text-sm text-white/80"
                    style={{ animationDelay: '0.2s' }}
                  >
                    {[leader.cuisine, leader.specialty]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                )}
                {leader.shortDescription && (
                  <p
                    className="animate-fade-up mt-5 max-w-xl text-sm leading-relaxed text-white/85 md:text-base"
                    style={{ animationDelay: '0.26s' }}
                  >
                    {leader.shortDescription}
                  </p>
                )}
                <Link
                  to="/restaurants/$slug"
                  params={{ slug: leader.slug }}
                  className={cn(
                    'animate-fade-up group mt-7 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition',
                    SOLID[category.accent],
                  )}
                  style={{ animationDelay: '0.32s' }}
                >
                  Discover more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </TiltCard>
        </Reveal>
      </section>

      {rest.length > 0 && (
        <section className="mx-auto mt-16 max-w-6xl space-y-8 px-5 pb-20 md:mt-24 md:space-y-10 md:px-8 md:pb-28">
          {rest.map((restaurant, index) => (
            <Reveal
              key={restaurant.slug}
              x={index % 2 === 0 ? -26 : 26}
              y={20}
              amount={0.12}
              className="grid items-stretch gap-7 md:grid-cols-2 md:gap-12"
              as="article"
            >
              <Link
                to="/restaurants/$slug"
                params={{ slug: restaurant.slug }}
                className={cn(
                  'relative flex min-h-48 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br p-8 shadow-sm',
                  category.accent === 'ritual'
                    ? 'from-stone-950 via-rose-950 to-ritual/60'
                    : 'from-stone-950 via-orange-950 to-pulse/60',
                  index % 2 === 1 && 'md:order-2',
                )}
              >
                {restaurant.photoUrls[0] ? (
                  <img
                    src={restaurant.photoUrls[0]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-display text-7xl font-light text-white/80">
                    #{restaurant.rank}
                  </span>
                )}
              </Link>

              <div
                className={cn(
                  'flex flex-col justify-center',
                  index % 2 === 1 && 'md:order-1',
                )}
              >
                <div className="flex items-baseline gap-5">
                  <RankBadge rank={restaurant.rank} accent={category.accent} />
                  <div>
                    <h2 className="font-display text-2xl font-light md:text-3xl">
                      <Link
                        to="/restaurants/$slug"
                        params={{ slug: restaurant.slug }}
                      >
                        {restaurant.name}
                      </Link>
                    </h2>
                    {restaurant.cuisine && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {restaurant.cuisine}
                      </p>
                    )}
                  </div>
                </div>

                {(restaurant.pricePerPerson ||
                  restaurant.priceRange ||
                  restaurant.neighborhood) && (
                  <p className="mt-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
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

                <p className="mt-4 text-sm text-muted-foreground">
                  {restaurant.personalRanking ? (
                    <>
                      Personal ranking:{' '}
                      <span className="font-medium tabular-nums">
                        {personalRankingScore(
                          restaurant.personalRanking,
                        )?.toFixed(1)}{' '}
                        / 5
                      </span>
                      {' · group opinion'}
                    </>
                  ) : (
                    'Group rating pending · provisional position'
                  )}
                </p>

                {restaurant.shortDescription && (
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                    {restaurant.shortDescription}
                  </p>
                )}

                <Link
                  to="/restaurants/$slug"
                  params={{ slug: restaurant.slug }}
                  className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                >
                  Discover more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </section>
      )}

      {otherLeader && (
        <section className="border-t border-border bg-muted/40">
          <Reveal className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="font-display text-2xl font-light md:text-3xl">
                Looking for the other half of the city?
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Explore the {otherCategory.label} profiles.
              </p>
            </div>
            <Link
              to={otherCategory.route}
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5"
            >
              See {otherCategory.label} · #1 {otherLeader.name}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </section>
      )}
    </div>
  )
}
