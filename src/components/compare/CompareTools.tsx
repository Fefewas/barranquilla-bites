import { useState } from 'react'
import { Shuffle } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  CATEGORIES,
  PERSONAL_RANKING_CRITERIA,
  RESTAURANTS,
  getRestaurant,
  personalRankingScore,
} from '@/data/restaurants'
import type { Restaurant } from '@/data/restaurants'
import { cn } from '@/lib/utils'

type ComparisonRow = {
  label: string
  left: string
  right: string
}
type ComparisonSide = 'left' | 'right'

const FILLS = {
  pulse: 'bg-pulse',
  ritual: 'bg-ritual',
}

const buildRows = (left: Restaurant, right: Restaurant): ComparisonRow[] => {
  const rows: ComparisonRow[] = [
    {
      label: 'Ranking position',
      left: `#${left.rank} · ${CATEGORIES[left.category].label}`,
      right: `#${right.rank} · ${CATEGORIES[right.category].label}`,
    },
    {
      label: 'Personal ranking · group opinion',
      left:
        personalRankingScore(left.personalRanking)?.toFixed(1).concat(' / 5') ??
        'Not rated by group',
      right:
        personalRankingScore(right.personalRanking)
          ?.toFixed(1)
          .concat(' / 5') ?? 'Not rated by group',
    },
  ]

  rows.push(
    ...PERSONAL_RANKING_CRITERIA.map((criterion) => ({
      label: criterion.label,
      left:
        left.personalRanking?.[criterion.key].toFixed(1).concat(' / 5') ??
        'Not rated by group',
      right:
        right.personalRanking?.[criterion.key].toFixed(1).concat(' / 5') ??
        'Not rated by group',
    })),
  )

  const facts = [
    ['Cuisine', left.cuisine, right.cuisine],
    ['Specialty', left.specialty, right.specialty],
    ['Price per person', left.pricePerPerson, right.pricePerPerson],
    ['Price range', left.priceRange, right.priceRange],
    ['Neighborhood', left.neighborhood, right.neighborhood],
    ['Address', left.address, right.address],
  ] as const

  for (const [label, leftValue, rightValue] of facts) {
    if (leftValue && rightValue)
      rows.push({ label, left: leftValue, right: rightValue })
  }

  return rows
}

export default function CompareTool() {
  const [leftSlug, setLeftSlug] = useState('varadero')
  const [rightSlug, setRightSlug] = useState('porthos-steakhouse-pub-53')

  const left = getRestaurant(leftSlug)
  const right = getRestaurant(rightSlug)
  if (!left || !right) {
    throw new Error('The selected restaurant could not be found.')
  }
  const rows = buildRows(left, right)

  const shuffle = () => {
    if (RESTAURANTS.length < 2) return
    const first = Math.floor(Math.random() * RESTAURANTS.length)
    let second = Math.floor(Math.random() * RESTAURANTS.length)
    while (second === first)
      second = Math.floor(Math.random() * RESTAURANTS.length)
    setLeftSlug(RESTAURANTS[first].slug)
    setRightSlug(RESTAURANTS[second].slug)
  }

  const renderSelect = (
    value: string,
    onChange: (value: string) => void,
    label: string,
  ) => (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="mt-2 h-12 w-full rounded-xl border-border bg-card">
          <SelectValue placeholder="Choose a restaurant" />
        </SelectTrigger>
        <SelectContent>
          {RESTAURANTS.map((restaurant) => (
            <SelectItem key={restaurant.slug} value={restaurant.slug}>
              {restaurant.name} — #{restaurant.rank}{' '}
              {CATEGORIES[restaurant.category].label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )

  const renderCell = (row: ComparisonRow, side: ComparisonSide) => {
    const value = side === 'left' ? row.left : row.right
    const restaurant = side === 'left' ? left : right
    const fill = FILLS[CATEGORIES[restaurant.category].accent]

    return (
      <div
        className={cn(
          'px-5 pb-4 pt-1.5',
          side === 'right' && 'border-l border-border',
        )}
      >
        <p className="flex items-start gap-2 text-sm text-foreground">
          <span
            aria-hidden="true"
            className={cn(
              'mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full',
              fill,
            )}
          />
          {value}
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        {renderSelect(leftSlug, setLeftSlug, 'First restaurant')}
        {renderSelect(rightSlug, setRightSlug, 'Second restaurant')}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Compare ranking positions and the details available in each profile.
        </p>
        <button
          type="button"
          onClick={shuffle}
          disabled={RESTAURANTS.length < 2}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Shuffle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          Surprise me
        </button>
      </div>

      <motion.div
        key={`${left.slug}-${right.slug}`}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 overflow-hidden rounded-2xl border border-border bg-card"
      >
        <div className="grid grid-cols-2 border-b border-border bg-muted/50">
          {[left, right].map((restaurant, index) => (
            <div
              key={restaurant.slug}
              className={cn('p-5', index === 1 && 'border-l border-border')}
            >
              <p className="font-display text-lg leading-tight">
                {restaurant.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {CATEGORIES[restaurant.category].label} · #{restaurant.rank}
              </p>
            </div>
          ))}
        </div>

        {rows.map((row) => (
          <div key={row.label} className="border-b border-border last:border-0">
            <p className="px-5 pt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {row.label}
            </p>
            <div className="grid grid-cols-2">
              {renderCell(row, 'left')}
              {renderCell(row, 'right')}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
