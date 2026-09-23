import { About } from '../components/sections/About'
import { FinalCta } from '../components/sections/FinalCta'
import { usePageTitle } from '../hooks/usePageTitle'

export function DesprePage() {
  usePageTitle('Despre noi')

  return (
    <div className="pt-20 sm:pt-24">
      <About />
      <FinalCta />
    </div>
  )
}
