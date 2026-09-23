import { Atmosfera } from '../components/sections/Atmosfera'
import { BookingSection } from '../components/sections/BookingSection'
import { BrandStatement } from '../components/sections/BrandStatement'
import { FinalCta } from '../components/sections/FinalCta'
import { GoogleRating } from '../components/sections/GoogleRating'
import { Hero } from '../components/sections/Hero'
import { PhoneReels } from '../components/sections/PhoneReels'

export function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <Atmosfera />
      <PhoneReels />
      <BookingSection />
      <GoogleRating />
      <FinalCta />
    </>
  )
}
