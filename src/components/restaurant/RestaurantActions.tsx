import { ExternalLink, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Restaurant } from '@/data/restaurants'

const SOLID = {
  pulse: 'bg-pulse text-pulse-foreground hover:brightness-105',
  ritual: 'bg-ritual text-ritual-foreground hover:brightness-110',
}

const OUTLINE =
  'border border-border bg-card text-foreground transition hover:-translate-y-0.5'

type RestaurantActionsProps = {
  restaurant: Restaurant
  accent?: 'pulse' | 'ritual'
  layout?: 'inline' | 'bar'
  className?: string
}

export default function RestaurantActions({
  restaurant,
  accent = 'pulse',
  layout = 'inline',
  className,
}: RestaurantActionsProps) {
  const primary = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition',
    SOLID[accent],
    layout === 'bar' && 'flex-1',
  )

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <a
        href={restaurant.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={primary}
      >
        <MapPin className="h-4 w-4" /> Search location
      </a>

      {restaurant.websiteUrl && (
        <a
          href={restaurant.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium',
            OUTLINE,
            layout === 'bar' && 'flex-1',
          )}
        >
          Official website
        </a>
      )}

      {restaurant.menuUrl && (
        <a
          href={restaurant.menuUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium',
            OUTLINE,
            layout === 'bar' && 'flex-1',
          )}
        >
          <ExternalLink className="mr-2 h-4 w-4" /> Menu
        </a>
      )}
    </div>
  )
}
