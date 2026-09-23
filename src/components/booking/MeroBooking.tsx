import { ArrowUpRight, Loader2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { businessInfo, meroBookingUrl } from '../../config/business'
import { meroServiceIds, services } from '../../data/services'
import { Button } from '../ui/Button'

export function MeroBooking() {
  const [searchParams] = useSearchParams()
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null)
  const [timedOut, setTimedOut] = useState(false)

  const serviceParam = searchParams.get('service') ?? undefined
  const localServiceId = searchParams.get('sid') ?? undefined

  const meroServiceId = useMemo(() => {
    if (serviceParam && /^[a-f0-9]{24}$/i.test(serviceParam)) {
      return serviceParam
    }
    if (localServiceId && meroServiceIds[localServiceId]) {
      return meroServiceIds[localServiceId]
    }
    return undefined
  }, [serviceParam, localServiceId])

  const embedUrl = useMemo(
    () => meroBookingUrl(meroServiceId),
    [meroServiceId],
  )

  const selectedServiceName = useMemo(() => {
    if (!meroServiceId) return null
    const local = Object.entries(meroServiceIds).find(
      ([, id]) => id === meroServiceId,
    )
    if (!local) return null
    return services.find((service) => service.id === local[0])?.name ?? null
  }, [meroServiceId])

  const iframeReady = loadedUrl === embedUrl
  const iframeFailed = timedOut && !iframeReady

  useEffect(() => {
    setTimedOut(false)
    const timer = window.setTimeout(() => setTimedOut(true), 10000)
    return () => window.clearTimeout(timer)
  }, [embedUrl])

  return (
    <section className="overflow-hidden border border-line bg-surface">
      <div className="flex flex-col gap-4 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-champagne">
            Programare live MERO
          </p>
          <p className="mt-1 text-sm text-muted">
            {selectedServiceName
              ? `Serviciu selectat: ${selectedServiceName}. Alege specialistul, data și ora pe MERO.`
              : 'Alege serviciul, specialistul, data și ora — totul sincronizat pe MERO.'}
          </p>
        </div>
        <Button
          href={embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="md"
        >
          Deschide MERO ↗
        </Button>
      </div>

      <div className="relative min-h-[70vh] bg-bg">
        {!iframeReady && !iframeFailed ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-bg/80 text-muted">
            <Loader2 className="animate-spin text-champagne" size={28} />
            <p className="text-sm">Se încarcă programările MERO…</p>
          </div>
        ) : null}

        {iframeFailed ? (
          <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 text-center">
            <p className="max-w-md text-text-soft">
              Browserul nu a putut afișa MERO în pagină. Continuă programarea pe
              profilul oficial
              {selectedServiceName ? ` pentru „${selectedServiceName}”` : ''}.
            </p>
            <Button
              href={embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Continuă pe MERO
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
            </Button>
          </div>
        ) : (
          <iframe
            key={embedUrl}
            title="Programări Brizo Beauty Studio pe MERO"
            src={embedUrl}
            className="h-[80vh] w-full border-0 bg-white"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoadedUrl(embedUrl)}
          />
        )}
      </div>

      <p className="sr-only">
        Programări pe {businessInfo.name}: {embedUrl}
      </p>
    </section>
  )
}
