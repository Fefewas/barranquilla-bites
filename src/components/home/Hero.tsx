import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { CATEGORIES, SITE } from '@/data/restaurants'
import { cn } from '@/lib/utils'

const BUTTONS = {
  pulse: 'bg-pulse text-pulse-foreground hover:brightness-105',
  ritual: 'bg-ritual text-ritual-foreground hover:brightness-110',
}

const CATEGORY_LINKS = [
  { category: CATEGORIES['fast-food'], label: 'Explore Fast Food' },
  { category: CATEGORIES.gourmet, label: 'Explore Gourmet' },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[78vh] items-end overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-stone-950 via-amber-950 to-orange-900"
      />
      <img
        src="https://media.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/es/cms/SEO/recipes/gourmet/entrecot-de-ternera.jpeg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(245,158,11,0.28),transparent_45%)]"
      />
      <div className="scrim-hero absolute inset-0" />

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 md:px-8 md:pb-32"
      >
        <p className="animate-fade-up text-[11px] uppercase tracking-[0.45em] text-white/70">
          {SITE.wordmark} · {SITE.wordmarkSub}
        </p>
        <h1
          className="animate-fade-up mt-6 max-w-3xl font-display text-4xl font-light leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.08s' }}
        >
          Top Restaurants You Must Visit in Barranquilla
        </h1>
        <p
          className="animate-fade-up mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
          style={{ animationDelay: '0.16s' }}
        >
          {SITE.intro}
        </p>
        <div
          className="animate-fade-up mt-9 flex flex-wrap gap-3"
          style={{ animationDelay: '0.24s' }}
        >
          {CATEGORY_LINKS.map(({ category, label }) => (
            <Link
              key={category.slug}
              to={category.route}
              className={cn(
                'group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition',
                BUTTONS[category.accent],
              )}
            >
              {label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-7 hidden justify-center md:flex">
        <span
          className="animate-fade-up flex flex-col items-center gap-2 text-white/60"
          style={{ animationDelay: '0.5s' }}
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </span>
      </div>
    </section>
  )
}
