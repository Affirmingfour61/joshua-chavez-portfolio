import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import NavBar from './components/NavBar'
import ProjectCard from './components/ProjectCard'
import SectionHeading from './components/SectionHeading'
import SkillCategory from './components/SkillCategory'
import {
  aboutText,
  contactData,
  courseworkData,
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

const SECTION_TRANSITIONS = {
  about: {
    initial: { opacity: 0, x: -140, y: 72, rotate: -2, scale: 0.9, filter: 'blur(16px)' },
    animate: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' },
  },
  skills: {
    initial: { opacity: 0, x: 150, y: 64, rotate: 2, scale: 0.9, filter: 'blur(16px)' },
    animate: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' },
  },
  projects: {
    initial: {
      opacity: 0,
      y: 140,
      scale: 0.78,
      rotateX: 18,
      transformPerspective: 1200,
      filter: 'blur(18px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transformPerspective: 1200,
      filter: 'blur(0px)',
    },
  },
  experience: {
    initial: { opacity: 0, clipPath: 'inset(0 100% 0 0 round 28px)', y: 54, filter: 'blur(12px)' },
    animate: { opacity: 1, clipPath: 'inset(0 0% 0 0 round 28px)', y: 0, filter: 'blur(0px)' },
  },
  resume: {
    initial: { opacity: 0, clipPath: 'inset(0 0 0 100% round 28px)', y: 54, filter: 'blur(12px)' },
    animate: { opacity: 1, clipPath: 'inset(0 0 0 0% round 28px)', y: 0, filter: 'blur(0px)' },
  },
  contact: {
    initial: { opacity: 0, y: 150, scale: 0.76, rotate: -1.5, filter: 'blur(20px)' },
    animate: { opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' },
  },
}

const SECTION_THEME = {
  about: {
    frame: 'border-cyan-200/20 bg-gradient-to-br from-cyan-400/18 via-slate-900/55 to-blue-500/12',
    glow: 'bg-cyan-300/30',
  },
  skills: {
    frame: 'border-violet-200/20 bg-gradient-to-br from-violet-400/18 via-slate-900/55 to-indigo-500/12',
    glow: 'bg-violet-300/30',
  },
  projects: {
    frame: 'border-fuchsia-200/20 bg-gradient-to-br from-fuchsia-400/16 via-slate-900/55 to-sky-500/12',
    glow: 'bg-fuchsia-300/30',
  },
  experience: {
    frame: 'border-emerald-200/20 bg-gradient-to-br from-emerald-400/16 via-slate-900/55 to-cyan-500/12',
    glow: 'bg-emerald-300/30',
  },
  resume: {
    frame: 'border-amber-200/20 bg-gradient-to-br from-amber-300/18 via-slate-900/55 to-orange-500/12',
    glow: 'bg-amber-200/30',
  },
  contact: {
    frame: 'border-indigo-200/20 bg-gradient-to-br from-indigo-400/16 via-slate-900/55 to-sky-500/12',
    glow: 'bg-indigo-200/30',
  },
}

const TIMELINE_COLORS = [
  'from-orange-400 to-amber-400',
  'from-yellow-400 to-lime-400',
  'from-emerald-400 to-cyan-400',
  'from-cyan-400 to-sky-400',
  'from-fuchsia-400 to-pink-400',
  'from-indigo-400 to-blue-400',
]

function App() {
  const mainRef = useRef(null)
  const defaultExperienceIndex = experienceData.timeline.findIndex((item) => item.period.includes('Present'))
  const [activeSection, setActiveSection] = useState('home')
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(
    defaultExperienceIndex >= 0 ? defaultExperienceIndex : 0,
  )

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
  const heroStats = [
    ['500+', 'Users Supported'],
    ['Tier 1/2', 'IT Support'],
    ['Python + Bash', 'Automation'],
    ['Bilingual', 'English + Spanish'],
  ]
  const skillsHighlights = [
    'Systems Troubleshooting',
    'Automation Workflows',
    'User Support',
    'Full Stack Development',
    'Network Fundamentals',
    'Authentication',
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
        className="h-[calc(100vh-73px)] snap-y snap-mandatory overscroll-none overflow-y-auto overflow-x-hidden"
      >
        <section id="home" className="h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always]">
          <div className="mx-auto flex h-full w-full max-w-[96vw] flex-col justify-center px-4 py-5 md:px-8">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              Open to IT and Developer Roles
            </motion.div>
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-sky-300"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Welcome
            </motion.p>
            <motion.h1
              className="mt-4 max-w-4xl bg-gradient-to-r from-white via-sky-100 to-indigo-200 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            >
              {heroData.name}
            </motion.h1>
            <motion.p
              className="mt-4 max-w-4xl text-lg text-slate-300 md:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
            >
              {heroData.title}
            </motion.p>
            <motion.p
              className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            >
              {heroData.intro}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.25 }}
            >
              {heroData.ctas.map((button, index) => (
                <a
                  key={button.label}
                  href={button.href}
                  onClick={(event) => {
                    if (button.href.startsWith('#')) {
                      event.preventDefault()
                      scrollToSection(button.href.replace('#', ''))
                    }
                  }}
                  target={button.href.startsWith('http') ? '_blank' : undefined}
                  rel={button.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={
                    index === 0
                      ? 'rounded-xl bg-gradient-to-r from-sky-300 to-indigo-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:from-sky-200 hover:to-indigo-200'
                      : 'rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/70 hover:text-white'
                  }
                >
                  {button.label}
                </a>
              ))}
            </motion.div>
            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
            >
              {heroStats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md"
                >
                  <p className="text-xl font-semibold text-white">{value}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-300">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {[
          ['about', <SectionHeading key="h" eyebrow="About Me" title="Technical depth with people-first support experience" description="I enjoy solving real problems with practical systems and software." />, (
            <div key="c" className="grid gap-4 md:grid-cols-2">
              {aboutText.map((paragraph) => (
                <p key={paragraph} className="rounded-2xl border border-cyan-100/15 bg-gradient-to-b from-cyan-300/12 to-cyan-100/[0.02] p-6 text-slate-200 backdrop-blur-md">
                  {paragraph}
                </p>
              ))}
            </div>
          )],
          ['skills', <SectionHeading key="h" eyebrow="Skills" title="Technical toolkit and practical strengths" description="Core technologies I use to solve support, systems, and software problems end-to-end." />, (
            <div key="c" className="space-y-5">
              <div className="rounded-3xl border border-sky-100/20 bg-gradient-to-r from-sky-400/20 via-indigo-400/14 to-fuchsia-400/14 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">Core Strengths</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillsHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-sky-100/30 bg-slate-900/65 px-4 py-1.5 text-sm font-medium tracking-wide text-sky-50"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group) => (
                  <SkillCategory key={group.category} category={group.category} skills={group.skills} />
                ))}
              </div>
              <div className="rounded-3xl border border-sky-100/20 bg-gradient-to-r from-cyan-400/14 via-sky-500/10 to-indigo-500/12 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Relevant Coursework</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {courseworkData.map((course) => (
                    <article
                      key={course.title}
                      className="group rounded-3xl border border-sky-100/20 bg-gradient-to-br from-sky-300/14 to-cyan-100/[0.04] p-6 transition hover:-translate-y-1 hover:border-sky-100/40"
                    >
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200/90">Coursework</p>
                      <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">{course.focus}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )],
          ['projects', <SectionHeading key="h" eyebrow="Projects" title="GitHub project showcase" description="Selected coursework and personal builds from my GitHub, including this live portfolio on Render." />, (
            <div key="c" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )],
        ].map(([id, heading, content]) => (
          <motion.section
            key={id}
            id={id}
            className="relative h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always]"
            initial={SECTION_TRANSITIONS[id].initial}
            whileInView={SECTION_TRANSITIONS[id].animate}
            viewport={{ root: mainRef, amount: 0.55 }}
            transition={{ type: 'spring', stiffness: 106, damping: 16, mass: 0.92 }}
          >
            <div className={`pointer-events-none absolute -right-12 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full blur-3xl lg:block ${SECTION_THEME[id].glow}`} />
            <div className="mx-auto flex h-full w-full max-w-[96vw] items-stretch px-4 py-5 md:px-8">
              <div className={`flex h-full w-full flex-col overflow-y-auto rounded-[2rem] border p-6 backdrop-blur-xl md:p-8 ${SECTION_THEME[id].frame}`}>
                {heading}
                {content}
              </div>
            </div>
          </motion.section>
        ))}

        <motion.section
          id="experience"
          className="relative h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always]"
          initial={SECTION_TRANSITIONS.experience.initial}
          whileInView={SECTION_TRANSITIONS.experience.animate}
          viewport={{ root: mainRef, amount: 0.55 }}
          transition={{ type: 'spring', stiffness: 108, damping: 15, mass: 0.9 }}
        >
          <div className="pointer-events-none absolute -left-10 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full bg-emerald-300/30 blur-3xl lg:block" />
          <div className="mx-auto flex h-full w-full max-w-[96vw] flex-col px-4 py-5 md:px-8">
            <div className={`flex h-full w-full flex-col rounded-[2rem] border p-6 backdrop-blur-xl md:p-8 ${SECTION_THEME.experience.frame}`}>
              <SectionHeading eyebrow="Experience" title={experienceData.role} description={experienceData.summary} />
              <div className="grid flex-1 gap-5 lg:grid-cols-[1.05fr_1.95fr]">
                <aside className="rounded-2xl border border-white/15 bg-slate-900/70 p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-emerald-200">Selected Role</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{selectedExperience.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {selectedExperience.company} <span className="text-slate-400">| {selectedExperience.location}</span>
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-emerald-100/90">
                      {selectedExperience.period}
                    </p>
                    {selectedExperience.period.includes('Present') ? (
                      <span className="rounded-full border border-emerald-200/40 bg-emerald-300/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-100">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
                    {selectedExperience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </aside>

                <div className="relative overflow-x-auto overflow-y-hidden pb-4">
                  <div className="min-w-[74rem]">
                    <div
                      className="grid overflow-hidden rounded-2xl border border-white/10"
                      style={{ gridTemplateColumns: `repeat(${experienceData.timeline.length}, minmax(0, 1fr))` }}
                    >
                      {experienceData.timeline.map((item, index) => {
                        const startYear = item.period.match(/\d{4}/)?.[0] ?? 'Now'
                      const isCurrentRole = item.period.includes('Present')
                        return (
                        <div key={`${item.company}-${item.period}-year`} className="relative">
                          <button
                            type="button"
                            onClick={() => setSelectedExperienceIndex(index)}
                            className={`w-full bg-gradient-to-r px-4 py-3 text-center text-2xl font-bold tracking-wide text-white transition hover:brightness-110 ${TIMELINE_COLORS[index % TIMELINE_COLORS.length]} ${
                              selectedExperienceIndex === index ? 'ring-2 ring-white/70 ring-inset' : ''
                            }`}
                          >
                            {startYear}
                          </button>
                          {isCurrentRole ? (
                            <span className="absolute right-2 top-2 rounded-full border border-emerald-100/70 bg-emerald-300/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                              Current
                            </span>
                          ) : null}
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
                                  onClick={() => setSelectedExperienceIndex(index)}
                                  className={`h-full w-full rounded-2xl border p-3 text-left backdrop-blur-md transition ${
                                    selectedExperienceIndex === index
                                      ? 'border-emerald-200/60 bg-emerald-300/10'
                                      : 'border-white/10 bg-slate-900/85 hover:border-emerald-100/35'
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <p className="text-[10px] uppercase tracking-[0.12em] text-emerald-100/90">{item.period}</p>
                                    {isCurrentRole ? (
                                      <span className="rounded-full border border-emerald-100/60 bg-emerald-300/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-100">
                                        Current
                                      </span>
                                    ) : null}
                                  </div>
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
                                onClick={() => setSelectedExperienceIndex(index)}
                                aria-label={`Select ${item.title}`}
                              className={`h-4 w-4 rounded-full border shadow-[0_0_12px_rgba(103,232,249,0.6)] transition ${
                                  selectedExperienceIndex === index
                                    ? 'border-white bg-cyan-200 scale-110'
                                  : item.period.includes('Present')
                                  ? 'border-emerald-100 bg-emerald-300 hover:scale-105'
                                  : 'border-cyan-100/80 bg-cyan-300 hover:scale-105'
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
                                  onClick={() => setSelectedExperienceIndex(index)}
                                  className={`h-full w-full rounded-2xl border p-3 text-left backdrop-blur-md transition ${
                                    selectedExperienceIndex === index
                                      ? 'border-emerald-200/60 bg-emerald-300/10'
                                      : 'border-white/10 bg-slate-900/85 hover:border-emerald-100/35'
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <p className="text-[10px] uppercase tracking-[0.12em] text-emerald-100/90">{item.period}</p>
                                    {isCurrentRole ? (
                                      <span className="rounded-full border border-emerald-100/60 bg-emerald-300/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-100">
                                        Current
                                      </span>
                                    ) : null}
                                  </div>
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
          </div>
        </motion.section>

        <motion.section
          id="resume"
          className="relative h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always]"
          initial={SECTION_TRANSITIONS.resume.initial}
          whileInView={SECTION_TRANSITIONS.resume.animate}
          viewport={{ root: mainRef, amount: 0.55 }}
          transition={{ type: 'spring', stiffness: 108, damping: 15, mass: 0.9 }}
        >
          <div className="pointer-events-none absolute right-0 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl lg:block" />
          <div className="mx-auto flex h-full w-full max-w-[96vw] items-stretch px-4 py-5 md:px-8">
            <div className={`flex h-full w-full flex-col rounded-[2rem] border p-6 backdrop-blur-xl md:p-8 ${SECTION_THEME.resume.frame}`}>
              <SectionHeading
                eyebrow="Resume"
                title="Resume preview and download"
                description="Quickly scan my resume here, then download the full PDF."
              />
              <div className="grid flex-1 items-stretch gap-5 lg:grid-cols-2">
                <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-slate-950/45 p-4">
                  <p className="mb-3 text-sm font-medium text-slate-200">Quick Preview</p>
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/80">
                    <iframe
                      src="/Joshua_Chavez_Resume_5-21.pdf#view=FitH"
                      title="Joshua Chavez Resume Preview"
                      className="h-[22rem] w-full md:h-[28rem] lg:h-[34rem]"
                    />
                  </div>
                </div>
                <div className="flex h-full flex-col justify-center rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-amber-200">Resume PDF</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Download the full file</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Use the button below to download the complete resume. The preview is for quick review, and
                    the downloaded version keeps full detail and formatting.
                  </p>
                  <a
                    href="/Joshua_Chavez_Resume_5-21.pdf"
                    download
                    className="mt-6 inline-flex w-fit rounded-xl bg-gradient-to-r from-sky-300 to-indigo-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:from-sky-200 hover:to-indigo-200"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="relative h-[calc(100vh-73px)] snap-start [scroll-snap-stop:always]"
          initial={SECTION_TRANSITIONS.contact.initial}
          whileInView={SECTION_TRANSITIONS.contact.animate}
          viewport={{ root: mainRef, amount: 0.55 }}
          transition={{ type: 'spring', stiffness: 104, damping: 14, mass: 0.9 }}
        >
          <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full bg-indigo-200/30 blur-3xl lg:block" />
          <div className="mx-auto flex h-full w-full max-w-[96vw] items-stretch px-4 py-5 md:px-8">
            <div className={`flex h-full w-full flex-col rounded-[2rem] border p-6 backdrop-blur-xl md:p-8 ${SECTION_THEME.contact.frame}`}>
              <SectionHeading eyebrow="Contact" title="Let’s connect" description="I am open to IT, systems, and software development opportunities." />
              <div className="grid flex-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-slate-300">Email</p>
                  <a className="mt-1 block text-white hover:text-sky-300" href={`mailto:${contactData.email}`}>{contactData.email}</a>
                  <p className="mt-4 text-sm text-slate-300">Phone</p>
                  <a className="mt-1 block text-white hover:text-sky-300" href={`tel:${contactData.phone.replace(/[^+\d]/g, '')}`}>{contactData.phone}</a>
                  <p className="mt-4 text-sm text-slate-300">LinkedIn</p>
                  <a className="mt-1 block text-white hover:text-sky-300" href={contactData.linkedin} target="_blank" rel="noreferrer">{contactData.linkedin}</a>
                  <p className="mt-4 text-sm text-slate-300">GitHub</p>
                  <a className="mt-1 block text-white hover:text-sky-300" href={contactData.github} target="_blank" rel="noreferrer">{contactData.github}</a>
                </div>
                <form className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6" onSubmit={(event) => event.preventDefault()}>
                  <label className="mb-2 block text-sm text-slate-200" htmlFor="name">Name</label>
                  <input id="name" className="mb-4 w-full rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none transition focus:border-sky-300" placeholder="Your name" type="text" />
                  <label className="mb-2 block text-sm text-slate-200" htmlFor="email">Email</label>
                  <input id="email" className="mb-4 w-full rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none transition focus:border-sky-300" placeholder="your@email.com" type="email" />
                  <label className="mb-2 block text-sm text-slate-200" htmlFor="message">Message</label>
                  <textarea id="message" rows={5} className="mb-4 w-full flex-1 rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none transition focus:border-sky-300" placeholder="How can I help?" />
                  <button type="submit" className="rounded-xl bg-gradient-to-r from-sky-300 to-indigo-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:from-sky-200 hover:to-indigo-200">Send Message</button>
                </form>
              </div>
              <p className="mt-6 text-center text-xs text-slate-400">
                Built by Joshua Chavez with React, Tailwind CSS, and Framer Motion.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
