import { motion, useReducedMotion } from 'framer-motion'
import { heroImage, heroVideo } from '../../data/gallery'
import { BookCta } from '../ui/BookCta'
import { Button } from '../ui/Button'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="acasa"
      className="relative min-h-[100svh] overflow-hidden bg-bg"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0">
        {reduce ? (
          <img
            src={heroVideo.poster || heroImage.src}
            alt={heroImage.alt}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <motion.video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroVideo.poster}
            aria-label={heroImage.alt}
            initial={{ scale: 1.06, opacity: 0.65 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <source src={heroVideo.src} type="video/mp4" />
          </motion.video>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-5 pb-28 pt-32 sm:px-8 sm:pb-28 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="max-w-xl text-text">
          <motion.p
            className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-champagne-soft"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Brizo Beauty Studio
          </motion.p>

          <motion.h1
            id="hero-title"
            className="font-display text-5xl font-medium leading-[1.05] text-balance sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Frumusețea ta, în ritmul tău.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-text/80 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
          >
            Descoperă experiența Brizo Beauty Studio — un spațiu dedicat
            frumuseții, îngrijirii și stării tale de bine.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <BookCta size="lg" />
            <Button to="/servicii" variant="outlineLight" size="lg">
              Descoperă serviciile
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
