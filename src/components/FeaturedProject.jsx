import { FiExternalLink, FiGithub } from 'react-icons/fi'

function ProjectLink({ href, label, primary = false }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        primary
          ? 'inline-flex items-center gap-1.5 rounded-full border border-sky-300/35 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200 transition hover:border-sky-200/70 hover:bg-sky-300/20 hover:text-white'
          : 'inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300 transition hover:border-sky-300/50 hover:text-sky-200'
      }
    >
      <FiExternalLink className="h-3 w-3" />
      {label}
    </a>
  )
}

function FeaturedProject({ project, index }) {
  const highlights = project.highlights ?? (project.description ? [project.description] : [])

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sky-300/25 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-[#101a44]/65 p-5 shadow-[0_20px_45px_rgba(8,47,73,0.38)] transition hover:-translate-y-0.5 hover:border-sky-300/55 md:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-xs text-sky-300">{String(index + 1).padStart(2, '0')}.</span>
          <h3 className="text-base font-semibold leading-snug text-white transition group-hover:text-sky-100 md:text-lg">
            {project.title}
          </h3>
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-slate-400 transition hover:text-sky-200"
          aria-label={`${project.title} on GitHub`}
        >
          <FiGithub className="h-4 w-4" />
        </a>
      </div>

      <ul className="mt-3 flex-1 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-slate-300">
        {highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <p className="mt-3 text-xs leading-relaxed text-slate-400">{project.technologies.join(' · ')}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-4">
        <ProjectLink href={project.demoUrl} label={project.demoLabel ?? 'Live demo'} primary />
        <ProjectLink href={project.apiUrl} label={project.apiLabel ?? 'Live API'} />
        <ProjectLink href={project.videoUrl} label={project.videoLabel ?? 'Video'} />
      </div>
    </article>
  )
}

export default FeaturedProject
