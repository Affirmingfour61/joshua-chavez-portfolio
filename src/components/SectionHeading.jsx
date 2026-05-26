function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-6 shrink-0 md:mb-7">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/90">{eyebrow}</p>
      <h2 className="mt-2 bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
