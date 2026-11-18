import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import {
  CATEGORIES,
  PERSONAL_RANKING_CRITERIA,
  RESTAURANTS,
  SITE,
  getRanking,
} from '@/data/restaurants'

const EXCLUSIONS = [
  'No visitor accounts or reviews submitted through the site.',
  'No online ordering, carts or payment processing.',
  'No internal reservation system; bookings are handled by each restaurant.',
  'No live ranking or automatic collection of restaurant information.',
]

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About the guide — Barranquilla' },
      {
        name: 'description',
        content:
          'How the restaurant profiles and ranking positions are maintained, with source references for each entry.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          About
        </p>
        <h1 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
          {SITE.projectTitle}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {SITE.intro}
        </p>
      </Reveal>

      <section className="mt-16">
        <Reveal>
          <h2 className="font-display text-2xl font-light md:text-3xl">
            How this guide works
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {SITE.methodology}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The project has five intended ranking positions in each category.
            Only entries with a restaurant name are shown; empty research slots
            are omitted from the site until they are completed.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[CATEGORIES['fast-food'], CATEGORIES.gourmet].map(
            (category, index) => (
              <Reveal
                key={category.slug}
                delay={index * 0.06}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {category.label}
                </p>
                <p className="mt-3 font-display text-3xl">
                  {getRanking(category.slug).length} profiles
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  of 5 planned ranking positions
                </p>
              </Reveal>
            ),
          )}
        </div>
      </section>

      <section className="mt-14">
        <Reveal>
          <h2 className="font-display text-2xl font-light md:text-3xl">
            Personal ranking
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The ranking positions and scores are the group’s own opinions, not
            ratings collected from Google or another review platform. Each
            restaurant is rated from 1 to 5 on four criteria; the displayed
            personal ranking score is their equal-weight average, rounded to one
            decimal.
          </p>
        </Reveal>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {PERSONAL_RANKING_CRITERIA.map((criterion, index) => (
            <Reveal
              as="li"
              key={criterion.key}
              delay={index * 0.05}
              className="rounded-xl border border-border bg-card p-4 text-sm"
            >
              {criterion.label}
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <Reveal>
          <h2 className="font-display text-2xl font-light md:text-3xl">
            Sources &amp; attribution
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {SITE.disclaimer}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Each profile displays its source URLs, checked dates and the fields
            those sources support. Restaurant details are entered manually in{' '}
            <code>src/data/restaurant-research.ts</code>; no third-party rating
            or review data is displayed.
          </p>
        </Reveal>
      </section>

      <section className="mt-14">
        <Reveal>
          <h2 className="font-display text-2xl font-light md:text-3xl">
            What this site does not do
          </h2>
        </Reveal>
        <ul className="mt-5 space-y-3">
          {EXCLUSIONS.map((item, index) => (
            <Reveal
              as="li"
              key={item}
              delay={index * 0.05}
              y={14}
              className="flex gap-3 leading-relaxed text-muted-foreground"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse"
              />
              <span>{item}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Showing {RESTAURANTS.length} profiles from the local research file.
      </p>

      <Reveal className="mt-10 flex flex-wrap gap-3" delay={0.06}>
        <Link
          to="/fast-food"
          className="group inline-flex items-center gap-2 rounded-full bg-pulse px-6 py-3 text-sm font-medium text-pulse-foreground transition hover:-translate-y-0.5"
        >
          Explore Fast Food
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          to="/gourmet"
          className="group inline-flex items-center gap-2 rounded-full bg-ritual px-6 py-3 text-sm font-medium text-ritual-foreground transition hover:-translate-y-0.5"
        >
          Explore Gourmet
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </div>
  )
}
