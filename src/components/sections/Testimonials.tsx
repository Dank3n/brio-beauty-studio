import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useEffect, useState } from 'react'
import { testimonials } from '../../data/testimonials'
import { FadeIn } from '../ui/Motion'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const current = testimonials[index]

  useEffect(() => {
    if (total <= 1) return
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % total)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [total])

  if (!current) return null

  return (
    <section
      id="recenzii"
      className="bg-nude/40 py-24 sm:py-28 lg:py-32"
      aria-labelledby="recenzii-title"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <FadeIn>
          <SectionHeading as="h1" title="Cuvintele clientelor noastre" className="mb-14" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="relative border border-line bg-surface/90 px-8 py-12 sm:px-12 sm:py-14"
            role="region"
            aria-roledescription="carousel"
            aria-label="Recenzii"
          >
            <Quote
              className="mb-6 text-champagne"
              size={28}
              strokeWidth={1.25}
              aria-hidden
            />

            <blockquote>
              <p className="font-display text-2xl leading-relaxed text-ink text-balance sm:text-3xl">
                „{current.text}”
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-taupe">
                    {current.name}
                  </span>
                </cite>
                <p className="mt-2 text-champagne" aria-label={`${current.rating} din 5 stele`}>
                  {'★'.repeat(current.rating)}
                </p>
              </footer>
            </blockquote>

            <div className="mt-10 flex items-center justify-between gap-4">
              <p className="text-sm text-taupe">
                {index + 1} / {total}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line 15 text-ink transition-colors hover:border-champagne"
                  aria-label="Recenzia anterioară"
                  onClick={() => setIndex((value) => (value - 1 + total) % total)}
                >
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line 15 text-ink transition-colors hover:border-champagne"
                  aria-label="Recenzia următoare"
                  onClick={() => setIndex((value) => (value + 1) % total)}
                >
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
