import { motion } from 'framer-motion'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'
import { MdOutlineComputer } from 'react-icons/md'
import { TbBulb } from 'react-icons/tb'

const iconMap = {
  Programming: FaCode,
  'Web Development': MdOutlineComputer,
  'IT & Systems': FaServer,
  Tools: FaTools,
  Concepts: TbBulb,
}

function SkillCategory({ category, skills }) {
  const Icon = iconMap[category] || FaCode

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/16 via-white/[0.07] to-transparent p-7 shadow-2xl shadow-black/25 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -7, scale: 1.02 }}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-300/20 blur-3xl transition duration-300 group-hover:bg-sky-300/40" />
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-200/40 bg-gradient-to-br from-sky-300/45 to-indigo-300/35 text-3xl text-sky-50 shadow-[0_0_24px_rgba(56,189,248,0.45)]">
        <Icon />
      </div>
      <h3 className="mb-5 text-xl font-semibold tracking-wide text-white">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-sky-100/25 bg-slate-900/75 px-3.5 py-1.5 text-sm font-medium text-slate-100"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default SkillCategory
