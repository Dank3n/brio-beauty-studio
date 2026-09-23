import { ArrowUpRight } from 'lucide-react'
import { businessInfo } from '../../config/business'
import { Button } from '../ui/Button'
import { FadeIn } from '../ui/Motion'
import { SectionHeading } from '../ui/SectionHeading'

type BookingSectionProps = {
  compact?: boolean
}

export function BookingSection({ compact = false }: BookingSectionProps) {
  return (
    <section
      id="programari"
      className={compact ? 'py-16' : 'bg-bg py-24 sm:py-28 lg:py-32'}
      aria-labelledby="programari-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Programări"
            title="Rezervă-ți momentul pentru tine."
            subtitle="Programează-te prin MERO — cu servicii, specialiști și disponibilitate live."
            className="mb-12"
          />
        </FadeIn>

        <div className="overflow-hidden border border-line bg-surface">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <FadeIn>
                <p className="text-sm uppercase tracking-[0.2em] text-champagne">
                  Integrare MERO
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  Pe pagina de programări găsești profilul Brizo Beauty Studio pe
                  MERO, încorporat direct pe site. Alegi serviciul, specialistul
                  și ora — confirmarea rămâne pe platforma oficială.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-8 flex flex-wrap gap-3">
                <Button to="/programari" size="lg">
                  Deschide programările
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
                </Button>
                <Button
                  href={businessInfo.meroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                >
                  MERO ↗
                </Button>
              </FadeIn>
            </div>

            <div className="relative flex min-h-[16rem] items-end bg-elevated p-8 sm:p-10 lg:min-h-full lg:p-12">
              <div className="editorial-grid absolute inset-0 opacity-20" aria-hidden />
              <div className="relative">
                <p className="font-display text-3xl leading-snug text-text text-balance sm:text-4xl">
                  Programare live, direct din experiența Brizo.
                </p>
                <p className="mt-4 text-sm text-muted">
                  Disponibilitate și confirmare sincronizate pe MERO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
