import { Star } from 'lucide-react'
import { businessInfo } from '../../config/business'
import { googleReviews } from '../../data/reviews'
import { Button } from '../ui/Button'
import { FadeIn } from '../ui/Motion'

export function GoogleRating() {
  return (
    <section
      className="border-t border-line bg-elevated py-24 sm:py-28"
      aria-labelledby="rating-title"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-10">
        <FadeIn>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-champagne-soft">
            Google Reviews
          </p>
          <h2
            id="rating-title"
            className="mt-4 font-display text-4xl text-text sm:text-5xl"
          >
            Ce spun clientele pe Google
          </h2>

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="font-display text-6xl leading-none text-text sm:text-7xl">
              {googleReviews.rating.toFixed(1)}
            </p>
            <div
              className="flex items-center gap-1 text-champagne"
              aria-label={`${googleReviews.rating} din 5 stele`}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={22}
                  strokeWidth={1.5}
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-sm text-muted">
              pe baza a{' '}
              <span className="text-text-soft">
                {googleReviews.count.toLocaleString('ro-RO')} recenzii
              </span>{' '}
              pe Google Maps
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted">
            Experiența ta contează. Dacă ai fost la {businessInfo.name}, lasă o
            recenzie pe Google — ne ajută să creștem și pe alte cliente să ne
            descopere.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={googleReviews.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Lasă o recenzie pe Google
            </Button>
            <Button
              href={googleReviews.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              Vezi pe Google Maps
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
