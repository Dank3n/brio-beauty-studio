export type Specialist = {
  id: string
  name: string
  role: string
  rating?: string
  reviews?: string
}

/**
 * Specialiști afișați pe MERO.
 * Actualizează aici când se schimbă echipa pe profilul MERO.
 */
export const specialists: Specialist[] = [
  {
    id: 'sorin-radu',
    name: 'Sorin Radu',
    role: 'Master hair-stylist',
    rating: '4.97',
    reviews: '67 evaluări',
  },
  {
    id: 'larisa-radu',
    name: 'Larisa Radu',
    role: 'Tehnician unghii',
    rating: '5.00',
    reviews: '43 evaluări',
  },
  {
    id: 'paula-toader',
    name: 'Paula Toader',
    role: 'Tehnician unghii',
    rating: '5.00',
    reviews: '22 evaluări',
  },
]
