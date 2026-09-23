export type Service = {
  id: string
  name: string
  description: string
  duration: string
  price: string
  category: string
}

/** Ordinea categoriilor ca pe profilul MERO. */
export const serviceCategories = [
  'Frizerie și Barbershop',
  'Tuns Damă',
  'Manichiură',
  'Pedichiură',
  'Tuns și Vopsit Damă',
  'Vopsit',
  'Coafor și hairstyling',
  'Tratamente Păr',
  'Extensii de păr',
  'Alte servicii',
] as const

export type ServiceCategory = (typeof serviceCategories)[number]

/**
 * Catalog sincronizat cu serviciile publice de pe MERO.
 * Actualizează aici când se schimbă oferta pe profilul MERO.
 */
export const services: Service[] = [
  // Frizerie și Barbershop
  {
    id: 'tuns-premium',
    name: 'Tuns PREMIUM',
    description: 'Tuns, spălat, barbă, masaj capilar și styling.',
    duration: '55 min',
    price: '150 lei',
    category: 'Frizerie și Barbershop',
  },
  {
    id: 'tuns',
    name: 'Tuns',
    description: 'Tuns și styling.',
    duration: '30 min',
    price: '110 lei',
    category: 'Frizerie și Barbershop',
  },
  {
    id: 'tuns-spalat',
    name: 'Tuns + Spălat',
    description: 'Tuns, spălat și styling.',
    duration: '40 min',
    price: '120 lei',
    category: 'Frizerie și Barbershop',
  },
  {
    id: 'tuns-barba',
    name: 'Tuns + Barbă',
    description: 'Tuns, tuns barbă și styling.',
    duration: '45 min',
    price: '130 lei',
    category: 'Frizerie și Barbershop',
  },
  {
    id: 'tuns-barba-spalat',
    name: 'Tuns + Barbă + Spălat',
    description: 'Tuns, spălat, barbă și styling.',
    duration: '50 min',
    price: '140 lei',
    category: 'Frizerie și Barbershop',
  },
  {
    id: 'tuns-aranjat-barba',
    name: 'Tuns barbă și aranjat barbă',
    description: '',
    duration: '20 min',
    price: '60 lei',
    category: 'Frizerie și Barbershop',
  },
  {
    id: 'vopsit-barba',
    name: 'Vopsit barbă',
    description: '',
    duration: '20 min',
    price: '50 lei',
    category: 'Frizerie și Barbershop',
  },

  // Tuns Damă
  {
    id: 'pachet-tuns-foarte-lung',
    name: 'Pachet tuns păr foarte lung',
    description:
      'Tuns, spălat și coafat. Lungimea părului este de la jumătatea spatelui în jos.',
    duration: '1 h 20 min',
    price: '250 lei',
    category: 'Tuns Damă',
  },
  {
    id: 'pachet-tuns-lung',
    name: 'Pachet tuns păr lung',
    description:
      'Spălat, tuns și coafat la alegere perie/placă. De la umeri în jos.',
    duration: '1 h',
    price: '230 – 250 lei',
    category: 'Tuns Damă',
  },
  {
    id: 'pachet-tuns-mediu',
    name: 'Pachet tuns păr mediu',
    description:
      'Spălat, tuns și coafat la alegere perie/placă. Până la nivelul umerilor.',
    duration: '1 h',
    price: '190 – 230 lei',
    category: 'Tuns Damă',
  },
  {
    id: 'pachet-tuns-scurt',
    name: 'Pachet tuns păr scurt',
    description:
      'Spălat, tuns și coafat la alegere perie/placă. Până la nivelul bărbiei.',
    duration: '45 min',
    price: '150 – 170 lei',
    category: 'Tuns Damă',
  },
  {
    id: 'tuns-bob',
    name: 'Tuns Bob',
    description: 'Bob franțuzesc scurt, cu graduare.',
    duration: '1 h',
    price: '180 lei',
    category: 'Tuns Damă',
  },

  // Manichiură
  {
    id: 'mani-oja-clasica',
    name: 'Mani ojă clasică',
    description: '',
    duration: '30 min',
    price: '80 lei',
    category: 'Manichiură',
  },
  {
    id: 'manichiura-semi',
    name: 'Manichiură semipermanentă',
    description: '',
    duration: '1 h 20 min',
    price: '150 lei',
    category: 'Manichiură',
  },
  {
    id: 'mani-semi-apex',
    name: 'Mani ojă semi APEX',
    description: '',
    duration: '1 h 30 min',
    price: '180 lei',
    category: 'Manichiură',
  },
  {
    id: 'intretinere-gel',
    name: 'Întreținere cu gel',
    description: '',
    duration: '2 h',
    price: '200 lei',
    category: 'Manichiură',
  },
  {
    id: 'constructie-gel',
    name: 'Construcție unghii cu gel',
    description: '',
    duration: '2 h 30 min',
    price: '350 lei',
    category: 'Manichiură',
  },
  {
    id: 'indepartare-oja',
    name: 'Îndepărtare ojă',
    description: '',
    duration: '15 min',
    price: '30 lei',
    category: 'Manichiură',
  },
  {
    id: 'indepartare-semi-mani',
    name: 'Îndepărtare semi + mani clasic',
    description: '',
    duration: '45 min',
    price: '100 lei',
    category: 'Manichiură',
  },

  // Pedichiură
  {
    id: 'pedi-oja-clasica',
    name: 'Pedi ojă clasică',
    description: '',
    duration: '45 min',
    price: '100 lei',
    category: 'Pedichiură',
  },
  {
    id: 'pedi-semi',
    name: 'Pedi ojă semi',
    description: '',
    duration: '1 h 20 min',
    price: '150 lei',
    category: 'Pedichiură',
  },

  // Tuns și Vopsit Damă
  {
    id: 'pachet-tuns-vopsit-lung',
    name: 'Pachet tuns și vopsit — păr lung',
    description:
      '1 tub de vopsea, spălat, tuns și coafat. O singură nuanță. Nu include decolorat.',
    duration: '2 h 30 min',
    price: '450 – 500 lei',
    category: 'Tuns și Vopsit Damă',
  },
  {
    id: 'pachet-tuns-vopsit-mediu',
    name: 'Pachet tuns și vopsit — păr mediu',
    description:
      '1 tub de vopsea, spălat, tuns și coafat. O singură nuanță. Nu include decolorat.',
    duration: '2 h 30 min',
    price: '400 – 450 lei',
    category: 'Tuns și Vopsit Damă',
  },
  {
    id: 'pachet-tuns-vopsit-scurt',
    name: 'Pachet tuns și vopsit — păr scurt',
    description:
      '1 tub de vopsea, spălat, tuns și coafat. O singură nuanță. Nu include decolorat.',
    duration: '2 h',
    price: '320 – 350 lei',
    category: 'Tuns și Vopsit Damă',
  },

  // Vopsit
  {
    id: 'vopsit-radacina',
    name: 'Vopsit rădăcină',
    description: 'Vopsit, spălat și coafat.',
    duration: '2 h',
    price: '280 – 300 lei',
    category: 'Vopsit',
  },
  {
    id: 'vopsit-lung',
    name: 'Vopsit păr lung',
    description: '',
    duration: '2 h',
    price: '380 – 410 lei',
    category: 'Vopsit',
  },
  {
    id: 'vopsit-mediu',
    name: 'Vopsit păr mediu',
    description: '',
    duration: '2 h',
    price: '330 – 360 lei',
    category: 'Vopsit',
  },
  {
    id: 'vopsit-scurt',
    name: 'Vopsit păr scurt',
    description: '',
    duration: '1 h 30 min',
    price: '290 – 310 lei',
    category: 'Vopsit',
  },
  {
    id: 'vopsit-balayage',
    name: 'Pachet vopsit Balayage',
    description:
      'Prețul variază după densitate, lungime și material. Include spălat, coafat și styling. Doar cu consultație și avans 30%.',
    duration: '5 h',
    price: '800 – 1800 lei',
    category: 'Vopsit',
  },

  // Coafor și hairstyling
  {
    id: 'coafat-foarte-lung',
    name: 'Spălat + coafat de zi — păr foarte lung',
    description:
      'Spălat, mască tratament și coafat la alegere. De la jumătatea spatelui în jos.',
    duration: '1 h',
    price: '160 lei',
    category: 'Coafor și hairstyling',
  },
  {
    id: 'coafat-lung',
    name: 'Spălat + coafat de zi — păr lung',
    description:
      'Spălat, mască tratament și coafat la alegere. De la umeri în jos.',
    duration: '1 h',
    price: '140 lei',
    category: 'Coafor și hairstyling',
  },
  {
    id: 'coafat-mediu',
    name: 'Spălat + coafat de zi — păr mediu',
    description:
      'Spălat, mască tratament și coafat la alegere. Până la nivelul umerilor.',
    duration: '1 h',
    price: '120 lei',
    category: 'Coafor și hairstyling',
  },
  {
    id: 'coafat-scurt',
    name: 'Spălat + coafat de zi — păr scurt',
    description: 'Spălat și coafat la alegere. În dreptul bărbiei.',
    duration: '1 h',
    price: '100 lei',
    category: 'Coafor și hairstyling',
  },
  {
    id: 'coafat-extensii',
    name: 'Spălat + coafat — extensii păr',
    description: '',
    duration: '1 h 20 min',
    price: '180 lei',
    category: 'Coafor și hairstyling',
  },

  // Tratamente Păr
  {
    id: 'tratament-par',
    name: 'Tratament pentru păr',
    description:
      'Prețul variază după tratamentul dorit. Include spălat, tratament și coafat.',
    duration: '2 h',
    price: '350 – 450 lei',
    category: 'Tratamente Păr',
  },

  // Extensii de păr
  {
    id: 'intretinere-extensii',
    name: 'Întreținere extensii Tape On sau Nano Ring',
    description:
      'Prețul variază după lungime și densitate. Include spălat, montat extensii și coafat.',
    duration: '4 h',
    price: '850 lei',
    category: 'Extensii de păr',
  },
  {
    id: 'aplicare-nano-ring',
    name: 'Aplicare extensii cu Nano Ring',
    description: 'Doar montajul extensiilor. Prețul poate depinde de număr.',
    duration: '2 h',
    price: '450 – 550 lei',
    category: 'Extensii de păr',
  },
  {
    id: 'aplicare-tape-on',
    name: 'Aplicare extensii Tape-on',
    description: 'Doar montat extensii Tape-on, fără spălat și coafat.',
    duration: '1 h 30 min',
    price: '400 – 500 lei',
    category: 'Extensii de păr',
  },

  // Alte servicii
  {
    id: 'pensat',
    name: 'Pensat',
    description: '',
    duration: '30 min',
    price: '60 lei',
    category: 'Alte servicii',
  },
]

/**
 * ID-uri MERO (_id) pentru deep-link la programare.
 * Sincronizate cu profilul https://mero.ro/p/brizo-beauty-studio
 */
export const meroServiceIds: Record<string, string> = {
  'tuns-premium': '69edbf72ad27f87d6c83ceff',
  tuns: '6398b4a715baebeaf2e35813',
  'tuns-spalat': '6a2a8d0076df00a04c004a2a',
  'tuns-barba': '69edcff3ad27f87d6c8544e2',
  'tuns-barba-spalat': '6a2a8d6576df00a04c006391',
  'tuns-aranjat-barba': '6398b483ca2a7490c081c445',
  'vopsit-barba': '69edd72fad27f87d6c8605ba',
  'pachet-tuns-foarte-lung': '69fc944123037c4a72a96ab7',
  'pachet-tuns-lung': '6398b26f15baeb30f5e3558b',
  'pachet-tuns-mediu': '69edd0a0ad27f87d6c85563e',
  'pachet-tuns-scurt': '69edd0efad27f87d6c855eda',
  'tuns-bob': '69edd912ad27f87d6c86307b',
  'mani-oja-clasica': '69edc318ad27f87d6c8417d4',
  'manichiura-semi': '69edc38fad27f87d6c842014',
  'mani-semi-apex': '69edc3f1ad27f87d6c842726',
  'intretinere-gel': '69edc447ad27f87d6c842e99',
  'constructie-gel': '69edc4daad27f87d6c843c36',
  'indepartare-oja': '69ef3bd7d6df5798a3b74626',
  'indepartare-semi-mani': '69ef3c33d6df5798a3b75458',
  'pedi-oja-clasica': '69edc34fad27f87d6c841aca',
  'pedi-semi': '69edc517ad27f87d6c8441c9',
  'pachet-tuns-vopsit-lung': '69edd53bad27f87d6c85d73d',
  'pachet-tuns-vopsit-mediu': '6398b331990695db97a0402c',
  'pachet-tuns-vopsit-scurt': '6398b2d3990695cc9fa03faf',
  'vopsit-radacina': '6398b3a8990695e3cfa040d1',
  'vopsit-lung': '65708c3e7cd3626cc32edd7b',
  'vopsit-mediu': '65708c6d7cd3624d0d2ee22c',
  'vopsit-scurt': '65708c987cd362506d2eea9c',
  'vopsit-balayage': '6398b3feca2a74230081c3a0',
  'coafat-foarte-lung': '69edd5b0ad27f87d6c85e130',
  'coafat-lung': '6398b0645a54dd14e9a06174',
  'coafat-mediu': '6398b093f1debb61ff1126c2',
  'coafat-scurt': '6398b0d9f1debb2d141126f1',
  'coafat-extensii': '69edd6b2ad27f87d6c85faf0',
  'tratament-par': '6398b18315baebf3d3e354b7',
  'intretinere-extensii': '6398b10f5a54dde040a061ee',
  'aplicare-nano-ring': '69edbe61ad27f87d6c83b7e9',
  'aplicare-tape-on': '69edbec5ad27f87d6c83bfea',
  pensat: '69f30708a43bd249ebe1e1fd',
}

export function servicesByCategory() {
  return serviceCategories
    .map((category) => ({
      category,
      items: services.filter((service) => service.category === category),
    }))
    .filter((group) => group.items.length > 0)
}
