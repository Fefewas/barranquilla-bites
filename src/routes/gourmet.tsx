import { createFileRoute } from '@tanstack/react-router'
import RankingPage from '@/components/ranking/RankingPage'

export const Route = createFileRoute('/gourmet')({
  head: () => ({
    meta: [
      { title: 'Gourmet Ranking — Barranquilla' },
      {
        name: 'description',
        content:
          'Research-based profiles of gourmet restaurants in Barranquilla, ordered by their ranking positions.',
      },
    ],
  }),
  component: GourmetRanking,
})

function GourmetRanking() {
  return <RankingPage categoryKey="gourmet" />
}
