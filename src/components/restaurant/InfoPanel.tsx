import { Clock, MapPin, Phone, Utensils, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Restaurant } from '@/data/restaurants'

const ROW = 'flex gap-3 border-b border-border/70 pb-4 last:border-0 last:pb-0'

export default function InfoPanel({ restaurant }: { restaurant: Restaurant }) {
  const details: { label: string; value: string; Icon: LucideIcon }[] = []
  if (restaurant.address)
    details.push({ label: 'Address', value: restaurant.address, Icon: MapPin })
  if (restaurant.neighborhood)
    details.push({
      label: 'Neighborhood',
      value: restaurant.neighborhood,
      Icon: MapPin,
    })
  if (restaurant.openingHours)
    details.push({
      label: 'Opening hours',
      value: restaurant.openingHours,
      Icon: Clock,
    })
  if (restaurant.phone)
    details.push({ label: 'Contact', value: restaurant.phone, Icon: Phone })
  if (restaurant.cuisine)
    details.push({
      label: 'Cuisine',
      value: restaurant.cuisine,
      Icon: Utensils,
    })
  if (restaurant.priceRange)
    details.push({
      label: 'Price range',
      value: restaurant.priceRange,
      Icon: Wallet,
    })
  if (restaurant.pricePerPerson)
    details.push({
      label: 'Price per person',
      value: restaurant.pricePerPerson,
      Icon: Wallet,
    })

  if (details.length === 0) return null

  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-display text-xl">The details</h2>

      <dl className="mt-5 space-y-4 text-sm">
        {details.map(({ label, value, Icon }) => (
          <div className={ROW} key={label}>
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-1 leading-relaxed">
                {label === 'Contact' ? (
                  <a
                    href={`tel:${value.replace(/[^\d+]/g, '')}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}
