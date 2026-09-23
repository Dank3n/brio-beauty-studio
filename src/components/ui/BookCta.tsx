import { businessInfo, meroBookingUrl } from '../../config/business'
import { Button } from './Button'

type BookCtaProps = {
  label?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse'
  size?: 'md' | 'lg'
  className?: string
  external?: boolean
  /** ID local al serviciului (ex. tuns-premium) — face deep-link pe MERO. */
  serviceId?: string
  /** ID MERO (_id) — dacă e deja cunoscut. */
  meroServiceId?: string
}

export function BookCta({
  label = 'Programează-te',
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  serviceId,
  meroServiceId,
}: BookCtaProps) {
  const resolvedMeroId = meroServiceId
  const bookingPath = resolvedMeroId
    ? `/programari?service=${encodeURIComponent(resolvedMeroId)}`
    : '/programari'
  const externalUrl = resolvedMeroId
    ? meroBookingUrl(resolvedMeroId)
    : businessInfo.meroUrl

  if (external) {
    return (
      <Button
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        size={size}
        className={className}
      >
        {label}
      </Button>
    )
  }

  // Preferăm pagina locală de programări (iframe MERO cu serviciul preselectat).
  // serviceId local e păstrat pentru eventuale analytics / mapări viitoare.
  void serviceId

  return (
    <Button to={bookingPath} variant={variant} size={size} className={className}>
      {label}
    </Button>
  )
}
