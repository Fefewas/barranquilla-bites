import { ExternalLink } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import type { Restaurant } from '@/data/restaurants'

export default function MenuSection({
  restaurant,
}: {
  restaurant: Restaurant
}) {
  if (restaurant.signatureDishes.length === 0 && !restaurant.menuUrl)
    return null

  return (
    <section>
      <Reveal>
        <h2 className="font-display text-2xl font-light md:text-3xl">Menu</h2>
      </Reveal>

      {restaurant.signatureDishes.length > 0 && (
        <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {restaurant.signatureDishes.map((dish, index) => (
            <Reveal
              as="li"
              key={dish.name}
              delay={index * 0.07}
              y={16}
              amount={0.3}
              className="group flex flex-wrap items-baseline justify-between gap-3 p-5 transition-colors duration-300 hover:bg-muted/40"
            >
              <div className="max-w-md">
                <p className="font-medium">{dish.name}</p>
                {dish.notes && (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {dish.notes}
                  </p>
                )}
              </div>
              {dish.price && (
                <span className="font-display text-lg tabular-nums transition-transform duration-300 group-hover:-translate-y-0.5">
                  {dish.price}
                </span>
              )}
            </Reveal>
          ))}
        </ul>
      )}

      {restaurant.menuUrl && (
        <Reveal y={14}>
          <a
            href={restaurant.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5"
          >
            Open menu link
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      )}
    </section>
  )
}
