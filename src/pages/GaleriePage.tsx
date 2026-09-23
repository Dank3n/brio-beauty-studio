import { FinalCta } from '../components/sections/FinalCta'
import { Gallery } from '../components/sections/Gallery'
import { usePageTitle } from '../hooks/usePageTitle'

export function GaleriePage() {
  usePageTitle('Galerie')

  return (
    <div className="pt-20 sm:pt-24">
      <Gallery />
      <FinalCta />
    </div>
  )
}
