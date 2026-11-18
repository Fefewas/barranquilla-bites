import Reveal from '@/components/motion/Reveal'
import {
  PERSONAL_RANKING_CRITERIA,
  personalRankingScore,
} from '@/data/restaurants'
import type { Restaurant } from '@/data/restaurants'

export default function PersonalRanking({
  restaurant,
}: {
  restaurant: Restaurant
}) {
  const ranking = restaurant.personalRanking
  const overall = personalRankingScore(ranking)

  if (!ranking || overall === null) {
    return (
      <section className="rounded-2xl border border-border bg-card p-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Personal ranking
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The group has not rated this restaurant yet, so its ranking position
            is provisional.
          </p>
        </Reveal>
      </section>
    )
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Personal ranking
        </p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-5xl leading-none tabular-nums">
            {overall.toFixed(1)}
          </span>
          <span className="text-sm text-muted-foreground">/ 5</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Group opinion, based on the average of four criteria.
        </p>
      </Reveal>

      <dl className="mt-6 space-y-4">
        {PERSONAL_RANKING_CRITERIA.map((criterion, index) => {
          const value = ranking[criterion.key]
          return (
            <Reveal
              as="div"
              key={criterion.key}
              delay={index * 0.05}
              className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 text-sm"
            >
              <dt>{criterion.label}</dt>
              <dd className="tabular-nums text-muted-foreground">
                {value.toFixed(1)}
              </dd>
              <div
                aria-hidden="true"
                className="col-span-2 h-1.5 overflow-hidden rounded-full bg-muted"
              >
                <div
                  className="h-full rounded-full bg-pulse"
                  style={{ width: `${(value / 5) * 100}%` }}
                />
              </div>
            </Reveal>
          )
        })}
      </dl>
    </section>
  )
}
