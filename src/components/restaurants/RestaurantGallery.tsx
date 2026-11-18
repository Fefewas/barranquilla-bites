import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Restaurant } from '@/data/restaurants'

export default function RestaurantGallery({
  photos,
  name,
}: {
  photos: Restaurant['photoUrls']
  name: Restaurant['name']
}) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const total = photos.length

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % total)
      }
      if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + total) % total)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, total])

  if (total === 0) return null

  const step = (delta: number) => {
    setIndex((current) => (current + delta + total) % total)
  }

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-2xl font-light md:text-3xl">
          Photo gallery
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {index + 1} / {total}
        </p>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-muted">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block aspect-[16/10] w-full"
          aria-label={`Enlarge photo ${index + 1} of ${total}`}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={index}
              src={photos[index]}
              alt={`${name} · photo ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </button>
        <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium">
          <Expand className="h-3.5 w-3.5" /> View larger
        </span>
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground transition hover:scale-110 hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground transition hover:scale-110 hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {photos.map((photo, photoIndex) => (
            <button
              key={`${photo}-${photoIndex}`}
              type="button"
              onClick={() => setIndex(photoIndex)}
              aria-label={`Show photo ${photoIndex + 1}`}
              aria-current={photoIndex === index}
              className={cn(
                'relative overflow-hidden rounded-xl transition duration-300',
                photoIndex === index
                  ? ''
                  : 'opacity-60 hover:-translate-y-0.5 hover:opacity-100',
              )}
            >
              <img
                src={photo}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              {photoIndex === index && (
                <motion.span
                  layoutId="restaurant-gallery-active-thumb"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 rounded-xl ring-2 ring-pulse"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            key="photo-lightbox"
            className="veil fixed inset-0 z-50 flex flex-col p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between text-white/80">
              <span className="text-xs uppercase tracking-[0.3em]">
                {name} · {index + 1} / {total}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close enlarged photo"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:rotate-90 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-4 flex flex-1 items-center justify-center">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={index}
                  src={photos[index]}
                  alt={`${name} · enlarged photo ${index + 1}`}
                  decoding="async"
                  className="aspect-[16/10] max-h-[70vh] w-full rounded-xl object-contain"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="absolute left-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground transition hover:scale-110 hover:bg-background"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="absolute right-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground transition hover:scale-110 hover:bg-background"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
