import { useState } from 'react'
import { galleryImages } from '../../data/gallery'
import { FadeIn, Stagger, StaggerItem } from '../ui/Motion'
import { Lightbox } from '../ui/Lightbox'
import { SectionHeading } from '../ui/SectionHeading'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section
      id="galerie"
      className="bg-bg py-24 sm:py-28 lg:py-32"
      aria-labelledby="galerie-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <FadeIn>
          <SectionHeading
            as="h1"
            eyebrow="Galerie"
            title="Un strop din universul Brizo"
            subtitle="Imagini reale din studio — preluate din profilul Google Maps."
            className="mb-14"
          />
        </FadeIn>

        <Stagger className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <StaggerItem
              key={image.id}
              className={
                image.span === 'wide'
                  ? 'col-span-2 aspect-[16/10]'
                  : image.span === 'tall'
                    ? 'aspect-[3/4] sm:row-span-2 sm:aspect-auto sm:min-h-[28rem]'
                    : 'aspect-[4/5]'
              }
            >
              <button
                type="button"
                className="group relative h-full w-full overflow-hidden bg-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                onClick={() => setActiveIndex(index)}
                aria-label={`Deschide imaginea: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                />
                <span className="absolute inset-0 bg-black/20 opacity-60 transition-opacity duration-500 group-hover:opacity-0" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-4 text-left text-xs text-text opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
                  {image.alt}
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Lightbox
        image={activeIndex === null ? null : galleryImages[activeIndex]}
        onClose={() => setActiveIndex(null)}
        onPrev={() =>
          setActiveIndex((current) =>
            current === null
              ? current
              : (current - 1 + galleryImages.length) % galleryImages.length,
          )
        }
        onNext={() =>
          setActiveIndex((current) =>
            current === null ? current : (current + 1) % galleryImages.length,
          )
        }
      />
    </section>
  )
}
