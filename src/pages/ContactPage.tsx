import { Contact } from '../components/sections/Contact'
import { FinalCta } from '../components/sections/FinalCta'
import { usePageTitle } from '../hooks/usePageTitle'

export function ContactPage() {
  usePageTitle('Contact')

  return (
    <div className="pt-20 sm:pt-24">
      <Contact />
      <FinalCta />
    </div>
  )
}
