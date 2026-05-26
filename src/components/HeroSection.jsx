import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { contactData, educationData, heroData } from '../data/portfolioData'

function HeroSection({ onContact }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-4.75rem)] items-center overflow-hidden py-8 md:py-10 xl:min-h-[calc(100vh-73px)] xl:snap-start xl:[scroll-snap-stop:always]"
    >
      <div className="hero-mesh pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 py-10 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-lg text-slate-300 md:text-xl">Hi,</p>

          <h1 className="mt-2 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            I&apos;m{' '}
            <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-xl font-medium text-slate-200 md:text-2xl">{educationData.roles}</p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
            <span className="text-slate-300">{educationData.degree}</span>
            <span className="text-slate-600"> · </span>
            {educationData.school}
            <span className="text-slate-600"> · </span>
            <span className="text-sky-400/90">{educationData.status}</span>
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 md:text-base">{heroData.intro}</p>

          <button
            type="button"
            onClick={onContact}
            className="mt-8 rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#140f37]"
          >
            Contact
          </button>

          <div className="mt-10 flex items-center gap-5 text-slate-400">
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a
              href={contactData.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-300"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${contactData.email}`}
              className="transition hover:text-sky-300"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="hero-portrait h-[min(22rem,55vh)] w-[min(18rem,80vw)] md:h-[26rem] md:w-[22rem]">
            <div className="hero-portrait__glow" aria-hidden />
            <div className="hero-portrait__frame relative h-full w-full">
              {heroData.photoSrc ? (
                <>
                  <img
                    src={heroData.photoSrc}
                    alt={heroData.name}
                    className="hero-portrait__image"
                  />
                  <div className="hero-portrait__overlay" aria-hidden />
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-900/60 px-6 text-center">
                  <span className="text-5xl font-semibold text-slate-600">JC</span>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Photo coming soon</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
