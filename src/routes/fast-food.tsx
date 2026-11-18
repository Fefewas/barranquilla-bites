import { createFileRoute } from '@tanstack/react-router'
import RankingPage from '@/components/ranking/RankingPage'

export const Route = createFileRoute('/fast-food')({
  head: () => ({
    meta: [
      { title: 'Fast Food Ranking — Barranquilla' },
      {
        name: 'description',
        content:
          'Research-based profiles of fast food restaurants in Barranquilla, ordered by their ranking positions.',
      },
    ],
  }),
  component: FastFoodRanking,
})

function FastFoodRanking() {
  return <RankingPage categoryKey="fast-food" />
}
