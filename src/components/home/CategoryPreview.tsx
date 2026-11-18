import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import TiltCard from '@/components/motion/TiltCard'
import { CATEGORIES, getRanking } from '@/data/restaurants'
import { cn } from '@/lib/utils'

const BUTTONS = {
  pulse: 'bg-pulse text-pulse-foreground',
  ritual: 'bg-ritual text-ritual-foreground',
}

const PANELS = [CATEGORIES['fast-food'], CATEGORIES.gourmet]

export default function CategoryPreview() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            The two rankings
          </p>
          <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">
            Choose your end of the city
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PANELS.map((panel, index) => {
            const leaderPhoto = getRanking(panel.slug)[0]?.photoUrls[0]

            return (
              <Reveal key={panel.slug} delay={index * 0.12} y={36}>
                <TiltCard className="h-full" max={4}>
                  <Link
                    to={panel.route}
                    className={cn(
                      'group relative isolate flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-7 shadow-sm md:min-h-[460px] md:p-9',
                      panel.accent === 'ritual'
                        ? 'from-stone-950 via-rose-950 to-ritual/60'
                        : 'from-stone-950 via-orange-950 to-pulse/60',
                    )}
                  >
                    {leaderPhoto && (
                      <img
                        src={leaderPhoto}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <div className="scrim-panel absolute inset-0" />
                    <div className="relative">
                      <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">
                        {panel.kicker}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-light text-white md:text-4xl">
                        {panel.label} Ranking
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                        {panel.blurb}
                      </p>
                      <span
                        className={cn(
                          'mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition group-hover:gap-3',
                          BUTTONS[panel.accent],
                        )}
                      >
                        See {getRanking(panel.slug).length} profiles{' '}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
