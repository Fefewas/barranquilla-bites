import CountUp from '@/components/motion/CountUp'
import Reveal from '@/components/motion/Reveal'
import { CATEGORIES, RESTAURANTS, getRanking } from '@/data/restaurants'
import { cn } from '@/lib/utils'

const STATS = [
  {
    value: RESTAURANTS.length,
    label: 'researched profiles',
    tone: 'text-pulse',
  },
  {
    value: getRanking(CATEGORIES['fast-food'].slug).length,
    label: 'fast food profiles',
    tone: 'text-ritual',
  },
  {
    value: getRanking(CATEGORIES.gourmet.slug).length,
    label: 'gourmet profiles',
    tone: 'text-pulse',
  },
  { value: 2, label: 'categories', tone: 'text-ritual' },
]

export default function StatStrip() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 py-12 md:grid-cols-4 md:px-8 md:py-16">
        {STATS.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.08}
            y={18}
            className="md:border-l md:border-background/15 md:pl-6 md:first:border-0 md:first:pl-0"
          >
            <p
              className={cn(
                'font-display text-4xl font-light leading-none tabular-nums md:text-5xl',
                stat.tone,
              )}
            >
              <CountUp value={stat.value} decimals={0} />
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-background/60">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
