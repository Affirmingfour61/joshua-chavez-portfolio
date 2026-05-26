import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import FeaturedProject from './components/FeaturedProject'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import SectionHeading from './components/SectionHeading'
import {
  aboutText,
  contactData,
  courseworkData,
  educationData,
  experienceData,
  heroData,
  projects,
  skillGroups,
} from './data/portfolioData'

const SECTION_META = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const PANEL =
  'relative overflow-hidden rounded-2xl border border-sky-300/25 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-[#101a44]/65 shadow-[0_22px_48px_rgba(8,47,73,0.38)] backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition before:duration-300 before:bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_80%_18%,rgba(99,102,241,0.16),transparent_42%)] hover:before:opacity-100'
const PANEL_PAD = `${PANEL} p-6 md:p-7`

const SECTION_MOTION = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

const experienceCardActive = 'border-sky-400/40 bg-sky-500/10'
const experienceCardIdle = 'border-white/10 bg-slate-900/60 hover:border-sky-400/25'

function App() {
  const mainRef = useRef(null)
  const experienceScrollRef = useRef(null)
  const experienceColumnRefs = useRef([])
  const defaultExperienceIndex = experienceData.timeline.findIndex((item) => item.period.includes('Present'))
  const [activeSection, setActiveSection] = useState('home')
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(
    defaultExperienceIndex >= 0 ? defaultExperienceIndex : 0,
  )

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollExperienceToIndex = (index) => {
    const scroller = experienceScrollRef.current
    const column = experienceColumnRefs.current[index]
    if (!scroller || !column) return

    const targetLeft = column.offsetLeft - (scroller.clientWidth - column.offsetWidth) / 2
    scroller.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' })
  }

  const selectExperience = (index) => {
    setSelectedExperienceIndex(index)
  }

  useEffect(() => {
    const frame = requestAnimationFrame(() => scrollExperienceToIndex(selectedExperienceIndex))
    return () => cancelAnimationFrame(frame)
  }, [selectedExperienceIndex])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id)
      },
      { root: mainRef.current, threshold: [0.4, 0.6, 0.8], rootMargin: '0px' },
    )

    SECTION_META.forEach((section) => {
      const node = document.getElementById(section.id)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [])

  const activeIndex = SECTION_META.findIndex((section) => section.id === activeSection)
  const indicatorProgress = `${(Math.max(activeIndex, 0) / (SECTION_META.length - 1)) * 100}%`
  const skillsHighlights = [
    'CSUMB Graduate',
    'B.S. Computer Science',
    'React & Spring Boot',
    'Android (Kotlin)',
    'Deployed on Render',
    'IT Specialist',
    'Trilingual',
  ]
  const selectedExperience = experienceData.timeline[selectedExperienceIndex] ?? experienceData.timeline[0]

  return (
    <div className="min-h-screen bg-[#140f37] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(56,189,248,0.32),transparent_34%),radial-gradient(circle_at_92%_8%,rgba(168,85,247,0.35),transparent_33%),radial-gradient(circle_at_52%_86%,rgba(34,211,238,0.24),transparent_34%),radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.3),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(160deg,rgba(31,22,84,0.7),rgba(17,21,66,0.88)_35%,rgba(5,10,32,0.9))]" />
      <motion.div
        className="pointer-events-none fixed -left-28 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/35 blur-3xl"
        animate={{ x: [0, 70, -20, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none fixed right-8 top-24 -z-10 h-[24rem] w-[24rem] rounded-full bg-fuchsia-400/25 blur-3xl"
        animate={{ x: [0, -80, 20, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <NavBar onNavigate={scrollToSection} />

      <aside className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 2xl:block">
        <div className="relative flex flex-col gap-3 rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-5 shadow-xl shadow-sky-900/20 backdrop-blur-md">
          <div className="absolute left-[0.95rem] top-8 h-[76%] w-[2px] bg-white/12">
            <motion.span
              className="absolute left-1/2 top-0 block h-4 w-4 -translate-x-1/2 rounded-full border border-cyan-100/90 bg-gradient-to-r from-sky-300 to-indigo-300 shadow-[0_0_16px_rgba(56,189,248,0.5)]"
              animate={{ top: indicatorProgress }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            />
          </div>
          {SECTION_META.map((section) => {
            const isActive = section.id === activeSection
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="group relative z-10 flex items-center gap-3"
              >
                <span
                  className={`h-3.5 w-3.5 rounded-full border transition ${
                    isActive
                      ? 'border-cyan-100 bg-gradient-to-r from-sky-300 to-indigo-300 shadow-[0_0_14px_rgba(56,189,248,0.45)]'
                      : 'border-white/30 bg-slate-700/40 group-hover:border-sky-300/60'
                  }`}
                />
                <span
                  className={`text-sm font-medium tracking-wide transition ${
                    isActive ? 'text-sky-100' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {section.label}
                </span>
              </button>
            )
          })}
        </div>
      </aside>

      <main
        ref={mainRef}
        className="min-h-[calc(100vh-73px)] overflow-y-auto overflow-x-hidden xl:h-[calc(100vh-73px)] xl:snap-y xl:snap-mandatory xl:overscroll-none"
      >
        <HeroSection onContact={() => scrollToSection('contact')} />

        <motion.section
          id="about"
          className="section-decor section-decor--about relative min-h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always] xl:h-[calc(100vh-73px)]"
          initial={SECTION_MOTION.initial}
          whileInView={SECTION_MOTION.animate}
          viewport={{ root: mainRef, amount: 0.35 }}
          transition={{ type: 'spring', stiffness: 106, damping: 16, mass: 0.92 }}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4 py-8 md:px-8 md:py-10">
            <SectionHeading eyebrow="About" title="Who I am" />

            <div className="flex flex-1 flex-col gap-5">
              <div className={`flex flex-col overflow-hidden ${PANEL_PAD}`}>
                <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-sky-300">College graduate</h3>
                <div className="mt-4 shrink-0 rounded-xl border border-sky-400/25 bg-gradient-to-r from-sky-500/15 to-cyan-500/10 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                    {educationData.status}
                  </p>
                  <p className="mt-2 text-xl font-bold text-white md:text-2xl">{educationData.degree}</p>
                  <p className="mt-1 text-sm font-medium text-sky-100/90 md:text-base">{educationData.school}</p>
                  <p className="mt-3 text-base font-semibold text-white">{educationData.roles}</p>
                </div>
              </div>

              <div className={`flex flex-col overflow-hidden ${PANEL_PAD}`}>
                <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-sky-300">About me</h3>
                <div className="mt-4 grid gap-6 md:grid-cols-[1fr_min(17.5rem,42%)] md:gap-8 md:items-start">
                  <div className="order-2 space-y-4 md:order-1">
                    {aboutText.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={`leading-relaxed text-slate-200 ${
                          index === 0 ? 'text-lg md:text-xl' : 'text-base md:text-[1.05rem]'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="order-1 shrink-0 md:order-2">
                    <div className="overflow-hidden rounded-xl border border-sky-400/25 bg-slate-900/60 shadow-inner shadow-black/20">
                      <img
                        src="/joshua-about.png"
                        alt={heroData.name}
                        className="aspect-[4/5] w-full object-cover object-[center_18%] sm:aspect-[5/6] md:aspect-[3/5] md:min-h-[16rem]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex shrink-0 flex-wrap gap-2 border-t border-white/10 pt-5">
                  {skillsHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-xs text-sky-100 shadow-[0_0_16px_rgba(56,189,248,0.12)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="section-decor section-decor--skills relative min-h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always] xl:h-[calc(100vh-73px)]"
          initial={SECTION_MOTION.initial}
          whileInView={SECTION_MOTION.animate}
          viewport={{ root: mainRef, amount: 0.35 }}
          transition={{ type: 'spring', stiffness: 106, damping: 16, mass: 0.92 }}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4 py-8 md:px-8 md:py-10">
            <SectionHeading
              eyebrow="Skills"
              title="Tools I use"
              description="A quick overview of the languages, frameworks, and systems I work with."
            />

            <div className={`flex flex-1 flex-col ${PANEL_PAD}`}>
              <ul className="space-y-4">
                {skillGroups.map((group) => (
                  <li key={group.category} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <p className="text-base font-medium text-slate-200">{group.category}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{group.skills.join(' · ')}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-sky-400/90">Coursework</p>
                <ul className="mt-3 space-y-2">
                  {courseworkData.map((course) => (
                    <li key={course.title} className="text-xs leading-snug text-slate-400 md:text-sm">
                      <span className="text-slate-300">{course.title}</span>
                      <span className="text-slate-600"> — </span>
                      {course.focus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="section-decor section-decor--projects relative min-h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always]"
          initial={SECTION_MOTION.initial}
          whileInView={SECTION_MOTION.animate}
          viewport={{ root: mainRef, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 106, damping: 16, mass: 0.92 }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-10">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work"
              description="Coursework and team builds with links to code and live demos."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
              {projects.map((project, index) => (
                <FeaturedProject key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="section-decor section-decor--experience relative min-h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always] xl:h-[calc(100vh-73px)]"
          initial={SECTION_MOTION.initial}
          whileInView={SECTION_MOTION.animate}
          viewport={{ root: mainRef, amount: 0.35 }}
          transition={{ type: 'spring', stiffness: 106, damping: 16, mass: 0.92 }}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 py-8 md:px-8 md:py-10">
            <SectionHeading eyebrow="Experience" title={experienceData.role} description={experienceData.summary} />
            <div className="grid flex-1 gap-5 xl:grid-cols-[1.05fr_1.95fr]">
              <aside className={PANEL_PAD}>
                  {selectedExperience.period.includes('Present') ? (
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-300">Present</p>
                  ) : null}
                  <p
                    className={`text-xs uppercase tracking-[0.16em] text-sky-300/90 ${
                      selectedExperience.period.includes('Present') ? 'mt-3' : ''
                    }`}
                  >
                    Selected Role
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                    {selectedExperience.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-300 md:text-lg">
                    {selectedExperience.company}{' '}
                    <span className="text-slate-400">| {selectedExperience.location}</span>
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.14em] text-slate-400 md:text-base">
                    {selectedExperience.period}
                  </p>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-200 md:text-lg">
                    {selectedExperience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </aside>

                <div className="grid gap-3 xl:hidden">
                  {experienceData.timeline.map((item, index) => (
                    <button
                      key={`${item.company}-${item.period}-mobile`}
                      type="button"
                      onClick={() => selectExperience(index)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        selectedExperienceIndex === index ? experienceCardActive : experienceCardIdle
                      }`}
                    >
                      {item.period.includes('Present') ? (
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">Present</p>
                      ) : null}
                      <p
                        className={`text-[10px] uppercase tracking-[0.12em] text-slate-400 ${
                          item.period.includes('Present') ? 'mt-1' : ''
                        }`}
                      >
                        {item.period}
                      </p>
                      <h3 className="mt-1 text-base font-semibold leading-tight text-white">{item.title}</h3>
                      <p className="text-sm leading-tight text-slate-300">
                        {item.company}
                        <span className="text-slate-400"> | {item.location}</span>
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-snug text-slate-200">
                        {item.bullets.slice(0, 2).map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </button>
                  ))}
                </div>

                <div
                  ref={experienceScrollRef}
                  className={`relative hidden overflow-x-auto overflow-y-hidden scroll-smooth pb-4 xl:block ${PANEL_PAD}`}
                >
                  <div className="min-w-[74rem]">
                    <div
                      className="grid overflow-hidden rounded-2xl border border-white/10"
                      style={{ gridTemplateColumns: `repeat(${experienceData.timeline.length}, minmax(0, 1fr))` }}
                    >
                      {experienceData.timeline.map((item, index) => {
                        const startYear = item.period.match(/\d{4}/)?.[0] ?? 'Now'
                      const isCurrentRole = item.period.includes('Present')
                        return (
                        <div
                          key={`${item.company}-${item.period}-year`}
                          ref={(node) => {
                            experienceColumnRefs.current[index] = node
                          }}
                          className="relative scroll-mt-4"
                        >
                          <button
                            type="button"
                            onClick={() => selectExperience(index)}
                            className={`flex w-full flex-col items-center justify-center px-4 py-3 text-center font-bold tracking-wide text-white transition ${
                              selectedExperienceIndex === index
                                ? 'bg-sky-500/30 ring-1 ring-sky-300/60'
                                : 'bg-slate-800/80 hover:bg-slate-700/80'
                            }`}
                          >
                            {isCurrentRole ? (
                              <>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Present</span>
                                <span className="mt-1 text-2xl">{startYear}</span>
                              </>
                            ) : (
                              <span className="text-2xl">{startYear}</span>
                            )}
                          </button>
                        </div>
                        )
                      })}
                    </div>

                    <div className="mt-6">
                      <ol
                        className="grid min-h-[12.5rem] items-end gap-4"
                        style={{ gridTemplateColumns: `repeat(${experienceData.timeline.length}, minmax(0, 1fr))` }}
                      >
                        {experienceData.timeline.map((item, index) => {
                          const isTopCard = index % 2 === 1
                          const isCurrentRole = item.period.includes('Present')
                          return (
                            <li key={`${item.company}-${item.period}-top`} className="h-full">
                              {isTopCard ? (
                                <button
                                  type="button"
                                  onClick={() => selectExperience(index)}
                                  className={`h-full w-full rounded-2xl border p-3 text-left transition ${
                                    selectedExperienceIndex === index ? experienceCardActive : experienceCardIdle
                                  }`}
                                >
                                  {isCurrentRole ? (
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                                      Present
                                    </p>
                                  ) : null}
                                  <p
                                    className={`text-[10px] uppercase tracking-[0.12em] text-slate-400 ${
                                      isCurrentRole ? 'mt-1' : ''
                                    }`}
                                  >
                                    {item.period}
                                  </p>
                                  <h3 className="mt-1 text-sm font-semibold leading-tight text-white">{item.title}</h3>
                                  <p className="text-xs leading-tight text-slate-300">
                                    {item.company}
                                    <span className="text-slate-400"> | {item.location}</span>
                                  </p>
                                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-snug text-slate-200">
                                    {item.bullets.slice(0, 2).map((bullet) => (
                                      <li key={bullet}>{bullet}</li>
                                    ))}
                                  </ul>
                                </button>
                              ) : (
                                <div />
                              )}
                            </li>
                          )
                        })}
                      </ol>

                      <div className="relative mt-3 h-16">
                        <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-white/20" />
                        <ol
                          className="absolute inset-0 grid items-center gap-4"
                          style={{ gridTemplateColumns: `repeat(${experienceData.timeline.length}, minmax(0, 1fr))` }}
                        >
                          {experienceData.timeline.map((item, index) => (
                            <li key={`${item.company}-${item.period}-node`} className="relative flex h-full items-center justify-center">
                              <div className={`absolute h-8 w-[2px] bg-white/30 ${index % 2 === 1 ? 'top-0' : 'bottom-0'}`} />
                              <button
                                type="button"
                                onClick={() => selectExperience(index)}
                                aria-label={`Select ${item.title}`}
                              className={`h-4 w-4 rounded-full border shadow-[0_0_12px_rgba(103,232,249,0.6)] transition ${
                                  selectedExperienceIndex === index
                                    ? 'border-white bg-cyan-200 scale-110'
                                    : 'border-cyan-100/80 bg-sky-400/80 hover:scale-105'
                                }`}
                              />
                            </li>
                          ))}
                        </ol>
                      </div>

                      <ol
                        className="mt-3 grid min-h-[13rem] items-start gap-4"
                        style={{ gridTemplateColumns: `repeat(${experienceData.timeline.length}, minmax(0, 1fr))` }}
                      >
                        {experienceData.timeline.map((item, index) => {
                          const isBottomCard = index % 2 === 0
                          const isCurrentRole = item.period.includes('Present')
                          return (
                            <li key={`${item.company}-${item.period}-bottom`} className="h-full">
                              {isBottomCard ? (
                                <button
                                  type="button"
                                  onClick={() => selectExperience(index)}
                                  className={`h-full w-full rounded-2xl border p-3 text-left transition ${
                                    selectedExperienceIndex === index ? experienceCardActive : experienceCardIdle
                                  }`}
                                >
                                  {isCurrentRole ? (
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                                      Present
                                    </p>
                                  ) : null}
                                  <p
                                    className={`text-[10px] uppercase tracking-[0.12em] text-slate-400 ${
                                      isCurrentRole ? 'mt-1' : ''
                                    }`}
                                  >
                                    {item.period}
                                  </p>
                                  <h3 className="mt-1 text-sm font-semibold leading-tight text-white">{item.title}</h3>
                                  <p className="text-xs leading-tight text-slate-300">
                                    {item.company}
                                    <span className="text-slate-400"> | {item.location}</span>
                                  </p>
                                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-snug text-slate-200">
                                    {item.bullets.slice(0, 2).map((bullet) => (
                                      <li key={bullet}>{bullet}</li>
                                    ))}
                                  </ul>
                                </button>
                              ) : (
                                <div />
                              )}
                            </li>
                          )
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </motion.section>

        <motion.section
          id="resume"
          className="section-decor section-decor--resume relative min-h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always] xl:h-[calc(100vh-73px)]"
          initial={SECTION_MOTION.initial}
          whileInView={SECTION_MOTION.animate}
          viewport={{ root: mainRef, amount: 0.35 }}
          transition={{ type: 'spring', stiffness: 106, damping: 16, mass: 0.92 }}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4 py-8 md:px-8 md:py-10">
            <SectionHeading
              eyebrow="Resume"
              title="Resume preview and download"
              description="Quickly scan my resume here, then download the full PDF."
            />
            <div className="grid flex-1 items-stretch gap-5 xl:grid-cols-2">
              <div className={`flex h-full flex-col ${PANEL_PAD}`}>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-300">Quick Preview</p>
                <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80">
                  <iframe
                    src="/Joshua_Chavez_Resume_5-21.pdf#view=FitH"
                    title="Joshua Chavez Resume Preview"
                    className="h-[20rem] w-full sm:h-[24rem] md:h-[28rem] xl:h-[34rem]"
                  />
                </div>
              </div>
              <div className={`flex h-full flex-col justify-center ${PANEL_PAD}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Resume PDF</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Download the full file</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Use the button below to download the complete resume. The preview is for quick review, and
                  the downloaded version keeps full detail and formatting.
                </p>
                <a
                  href="/Joshua_Chavez_Resume_5-21.pdf"
                  download
                  className="mt-6 inline-flex w-fit rounded-full bg-gradient-to-r from-sky-300 to-indigo-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:from-sky-200 hover:to-indigo-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section-decor section-decor--contact relative min-h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always] xl:h-[calc(100vh-73px)]"
          initial={SECTION_MOTION.initial}
          whileInView={SECTION_MOTION.animate}
          viewport={{ root: mainRef, amount: 0.35 }}
          transition={{ type: 'spring', stiffness: 106, damping: 16, mass: 0.92 }}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4 py-8 md:px-8 md:py-10">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s connect"
              description="I am open to IT, systems, and software development opportunities."
            />
            <div className="grid flex-1 min-h-0 gap-4 md:grid-cols-2">
              <div className={PANEL_PAD}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/90">Email</p>
                  <a
                    className="mt-2 block text-xl font-semibold text-white underline-offset-4 transition hover:text-sky-200 hover:underline md:text-2xl"
                    href={`mailto:${contactData.email}`}
                  >
                    {contactData.email}
                  </a>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/90">Phone</p>
                  <a
                    className="mt-2 block text-xl font-semibold text-white underline-offset-4 transition hover:text-sky-200 hover:underline md:text-2xl"
                    href={`tel:${contactData.phone.replace(/[^+\d]/g, '')}`}
                  >
                    {contactData.phone}
                  </a>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/90">LinkedIn</p>
                      <a
                        className="mt-2 block break-all text-base font-medium text-white underline-offset-4 transition hover:text-sky-200 hover:underline md:text-lg"
                        href={contactData.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {contactData.linkedin}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/90">GitHub</p>
                      <a
                        className="mt-2 block break-all text-base font-medium text-white underline-offset-4 transition hover:text-sky-200 hover:underline md:text-lg"
                        href={contactData.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {contactData.github}
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`relative min-h-[16rem] overflow-hidden ${PANEL} md:min-h-0`}>
                  <img
                    src="/joshua-chavez.png"
                    alt="Joshua Chavez"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            <p className="mt-6 text-center text-xs text-slate-500">
              Built by Joshua Chavez with React, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
