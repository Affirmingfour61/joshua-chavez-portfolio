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
          ? 'inline-flex items-center gap-1.5 text-xs font-medium text-sky-300 transition hover:text-sky-200'
          : 'inline-flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-slate-200'
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
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-md shadow-black/15 backdrop-blur-sm transition hover:border-sky-300/30">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-xs text-sky-400/90">{String(index + 1).padStart(2, '0')}.</span>
          <h3 className="text-base font-semibold leading-snug text-slate-100 transition group-hover:text-sky-200">
            {project.title}
          </h3>
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-slate-500 transition hover:text-sky-300"
          aria-label={`${project.title} on GitHub`}
        >
          <FiGithub className="h-4 w-4" />
        </a>
      </div>

      <ul className="mt-3 flex-1 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-400">
        {highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <p className="mt-3 font-mono text-[10px] leading-relaxed text-slate-500">
        {project.technologies.join(' · ')}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-3">
        <ProjectLink href={project.demoUrl} label={project.demoLabel ?? 'Live demo'} primary />
        <ProjectLink href={project.apiUrl} label={project.apiLabel ?? 'Live API'} />
        <ProjectLink href={project.videoUrl} label={project.videoLabel ?? 'Video'} />
      </div>
    </article>
  )
}

export default FeaturedProject
