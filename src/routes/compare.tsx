import { createFileRoute } from '@tanstack/react-router'
import CompareTool from '@/components/compare/CompareTools'

export const Route = createFileRoute('/compare')({
  head: () => ({
    meta: [
      { title: 'Compare two restaurants — Barranquilla' },
      {
        name: 'description',
        content:
          'Compare the group’s personal restaurant rankings, cuisine, specialties, locations and other researched details.',
      },
    ],
  }),
  component: ComparePage,
})

function ComparePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
        Side by side
      </p>
      <h1 className="mt-4 font-display text-4xl font-light md:text-5xl">
        Compare two restaurants
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        Compare the group’s personal rankings and available restaurant details
        side by side. Only information entered in the local research file is
        shown.
      </p>

      <div className="mt-10">
        <CompareTool />
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Both categories can be compared. Fields without information for both
        selected restaurants are omitted.
      </p>
    </div>
  )
}
