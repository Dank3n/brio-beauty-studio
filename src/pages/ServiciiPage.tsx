import { FinalCta } from '../components/sections/FinalCta'
import { Services } from '../components/sections/Services'
import { usePageTitle } from '../hooks/usePageTitle'

export function ServiciiPage() {
  usePageTitle('Servicii')

  return (
    <div className="pt-20 sm:pt-24">
      <Services />
      <FinalCta />
    </div>
  )
}
