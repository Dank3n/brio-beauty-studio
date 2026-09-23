import { BookCta } from '../ui/BookCta'
import { FadeIn } from '../ui/Motion'

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-elevated py-24 sm:py-28"
      aria-labelledby="final-cta-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,126,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(243,238,231,0.05),transparent_40%)]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeIn>
          <h2
            id="final-cta-title"
            className="font-display text-4xl font-medium leading-[1.15] text-text text-balance sm:text-5xl"
          >
            Următorul tău moment de răsfăț începe aici.
          </h2>
          <p className="mt-5 text-lg text-muted">Fă-ți timp pentru tine.</p>
          <div className="mt-10">
            <BookCta label="Programează-te acum" size="lg" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
