import { mapsUrl } from './gallery'

/**
 * Date publice din profilul Google Maps — Brizo Beauty Studio.
 * Actualizează rating/count când se schimbă pe Maps.
 */
export const googleReviews = {
  rating: 5.0,
  count: 324,
  mapsUrl,
  /** Deschide dialogul „Write a review” pe Google (necesită cont Google). */
  writeReviewUrl:
    'https://www.google.com/search?q=Brizo+Beauty+Studio+Papazoglu&ludocid=6460587290576265961#lrd=0x40b1ff81bfdd6103:0x59a89de93f33a2e9,3,,,',
} as const
