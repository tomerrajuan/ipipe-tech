import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { asset, company, nav } from "../data"

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={asset("images/logo.jpg")}
        alt={company.name}
        className="h-10 w-auto"
      />
      <span className={`hidden text-sm font-semibold tracking-tight sm:block ${onDark ? "text-white" : "text-ink"}`}>
        iPIPE
      </span>
    </Link>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 py-3 transition-all duration-300 sm:px-6 ${
          scrolled || open
            ? "mt-3 rounded-2xl border border-white/10 bg-abyss/80 shadow-[0_12px_40px_rgba(4,20,28,0.28)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Logo onDark />
        <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `transition-colors hover:text-white ${isActive ? "text-white" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-water px-4 py-2 text-sm font-medium text-white transition hover:bg-water-deep"
          >
            Contact us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-5 mt-2 rounded-2xl border border-white/10 bg-abyss/95 p-4 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base ${isActive ? "bg-white/10 text-white" : "text-white/75"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
