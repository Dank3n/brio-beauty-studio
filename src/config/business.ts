export type ScheduleItem = {
  days: string
  hours: string
}

export type BusinessInfo = {
  name: string
  shortName: string
  tagline: string
  phone: string
  email: string
  address: string
  city: string
  instagram: string
  instagramUrl: string
  meroUrl: string
  schedule: ScheduleItem[]
  seo: {
    title: string
    description: string
  }
}

export const businessInfo: BusinessInfo = {
  name: 'Brizo Beauty Studio',
  shortName: 'BRIZO',
  tagline: 'Beauty. Care. Confidence.',
  phone: '0753 708 703',
  email: '',
  address: 'Str. Lt.-col. Dumitru Papazoglu 96',
  city: 'București 031205',
  instagram: '',
  instagramUrl: '',
  meroUrl:
    'https://mero.ro/p/brizo-beauty-studio?utm_source=brizo_website',
  schedule: [
    { days: 'Luni – Vineri', hours: '10:00 – 20:00' },
    { days: 'Sâmbătă', hours: '10:00 – 18:00' },
    { days: 'Duminică', hours: 'Închis' },
  ],
  seo: {
    title: 'Brizo Beauty Studio — Beauty, Care & Confidence',
    description:
      'Brizo Beauty Studio — un spațiu dedicat frumuseții, îngrijirii și stării tale de bine. Programează-te online pe MERO.',
  },
}

/**
 * Deep-link MERO: deschide fluxul de programare cu serviciul deja selectat
 * (pasul următor = alegere specialist / dată).
 */
export function meroBookingUrl(serviceId?: string) {
  const url = new URL('https://mero.ro/p/brizo-beauty-studio')
  url.searchParams.set('utm_source', 'brizo_website')

  if (serviceId) {
    url.searchParams.set('page', 'select_worker')
    url.searchParams.set('serviceIds', serviceId)
    url.searchParams.set('css', 'services_list')
    url.searchParams.set('absp', 'company_details_deeplink')
  }

  return url.toString()
}
