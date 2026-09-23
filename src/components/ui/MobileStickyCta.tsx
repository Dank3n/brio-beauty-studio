import { useLocation } from 'react-router-dom'
import { BookCta } from './BookCta'

export function MobileStickyCta() {
  const { pathname } = useLocation()
  if (pathname === '/programari') return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-4 lg:hidden">
      <div className="pointer-events-auto mx-auto max-w-md">
        <BookCta
          className="w-full shadow-[var(--shadow-soft)]"
          size="lg"
          label="Programează-te"
        />
      </div>
    </div>
  )
}
