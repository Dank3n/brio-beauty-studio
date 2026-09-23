import { X } from 'lucide-react'
import { useEffect } from 'react'
import type { GalleryImage } from '../../data/gallery'

type LightboxProps = {
  image: GalleryImage | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ image, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!image) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [image, onClose, onPrev, onNext])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Previzualizare imagine galerie"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-text"
        aria-label="Închide"
        onClick={onClose}
      >
        <X size={20} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-surface px-4 py-3 text-sm text-text sm:inline-flex"
        aria-label="Imaginea anterioară"
        onClick={(event) => {
          event.stopPropagation()
          onPrev()
        }}
      >
        ←
      </button>

      <button
        type="button"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-surface px-4 py-3 text-sm text-text sm:inline-flex"
        aria-label="Imaginea următoare"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
      >
        →
      </button>

      <figure
        className="max-h-[85vh] max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-auto rounded-sm object-contain shadow-[var(--shadow-soft)]"
        />
        <figcaption className="mt-4 text-center text-sm text-text/80">
          {image.alt}
        </figcaption>
      </figure>
    </div>
  )
}
