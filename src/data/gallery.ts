export type GalleryImage = {
  id: string
  src: string
  alt: string
  span?: 'tall' | 'wide' | 'default'
}

export type GalleryVideo = {
  id: string
  src: string
  poster: string
  alt: string
}

/**
 * Media din Google Maps — Brizo Beauty Studio.
 * Înlocuiește fișierele din `/public/gallery/` și `/public/videos/` după nevoie.
 */
export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/gallery/01.jpg', alt: 'Brizo Beauty Studio — atmosferă salon', span: 'wide' },
  { id: 'g2', src: '/gallery/02.jpg', alt: 'Detaliu din studio Brizo', span: 'tall' },
  { id: 'g3', src: '/gallery/03.jpg', alt: 'Interior Brizo Beauty Studio', span: 'default' },
  { id: 'g4', src: '/gallery/04.jpg', alt: 'Spațiu de lucru Brizo', span: 'default' },
  { id: 'g5', src: '/gallery/05.jpg', alt: 'Experiență beauty Brizo', span: 'default' },
  { id: 'g6', src: '/gallery/06.jpg', alt: 'Detaliu îngrijire Brizo', span: 'tall' },
  { id: 'g7', src: '/gallery/07.jpg', alt: 'Look final Brizo', span: 'default' },
  { id: 'g8', src: '/gallery/08.jpg', alt: 'Atmosferă premium Brizo', span: 'wide' },
  { id: 'g9', src: '/gallery/09.jpg', alt: 'Moment din salon Brizo', span: 'default' },
  { id: 'g11', src: '/gallery/11.jpg', alt: 'Brizo Beauty Studio', span: 'default' },
  { id: 'g12', src: '/gallery/12.jpg', alt: 'Universul Brizo', span: 'default' },
]

/** Videoclipuri din Google Maps (export local pentru autoplay în chenarul de telefon). */
export const galleryVideos: GalleryVideo[] = [
  {
    id: 'v1',
    src: '/videos/reel-01.mp4',
    poster: '/videos/reel-01-poster.jpg',
    alt: 'Videoclip Brizo Beauty Studio — Google Maps',
  },
  {
    id: 'v2',
    src: '/videos/reel-02.mp4',
    poster: '/videos/reel-02-poster.jpg',
    alt: 'Videoclip Brizo Beauty Studio — Google Maps',
  },
  {
    id: 'v3',
    src: '/videos/reel-03.mp4',
    poster: '/videos/reel-03-poster.jpg',
    alt: 'Videoclip Brizo Beauty Studio — Google Maps',
  },
]

export const heroImage = {
  src: '/hero-poster.jpg',
  alt: 'Experiență premium la Brizo Beauty Studio',
}

export const heroVideo = {
  src: '/hero.mp4',
  poster: '/hero-poster.jpg',
  sourceUrl: 'https://pin.it/6lagrozpg',
}

export const aboutImage = {
  src: '/about.jpg',
  alt: 'Spațiul Brizo Beauty Studio',
}

export const mapsUrl =
  'https://www.google.com/maps/place/Brizo+Beauty+Studio/@44.4195043,26.120383,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1ff81bfdd6103:0x59a89de93f33a2e9!8m2!3d44.4195043!4d26.120383!16s%2Fg%2F11jznwj6pp'
