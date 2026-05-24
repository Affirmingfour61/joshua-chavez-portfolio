import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
        {eyebrow}
      </p>
      <h2 className="bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-3xl font-semibold leading-tight text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.28)] md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base text-slate-300">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeading
