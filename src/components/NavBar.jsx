import { navLinks } from '../data/portfolioData'

function NavBar({ onNavigate }) {
  const handleNavigate = (event, href) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    onNavigate?.(href.replace('#', ''))
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090f2dcc]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="bg-gradient-to-r from-sky-200 to-indigo-200 bg-clip-text text-sm font-semibold tracking-[0.2em] text-transparent"
        >
          JC
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavigate(event, link.href)}
                className="text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
