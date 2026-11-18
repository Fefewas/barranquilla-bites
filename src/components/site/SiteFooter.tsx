import { Link } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/data/restaurants'

const CITY_MAP =
  'https://www.google.com/maps/search/?api=1&query=Barranquilla%2C%20Atlantico%2C%20Colombia'

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-medium leading-none">
              {SITE.wordmark}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              {SITE.wordmarkSub}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {SITE.projectTitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Methodology
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {SITE.methodology}
            </p>
            <Link
              to="/about"
              className="mt-4 inline-flex text-sm font-medium underline underline-offset-4"
            >
              Read the full methodology
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Sources & attribution
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {SITE.disclaimer}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={CITY_MAP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium underline underline-offset-4"
            >
              Barranquilla on Google Maps{' '}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-medium underline underline-offset-4"
            >
              Sources and editorial order
            </Link>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          {SITE.projectTitle} · Barranquilla, Colombia · Not affiliated with the
          restaurants listed.
        </p>
      </div>
    </footer>
  )
}
