import { useEffect } from 'react'
import { businessInfo } from '../config/business'

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} — ${businessInfo.name}`
    return () => {
      document.title = businessInfo.seo.title
    }
  }, [title])
}
