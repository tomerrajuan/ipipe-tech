import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { asset, company, nav } from "../data"

export function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={asset("images/logo.jpg")}
        alt={company.name}
        className="h-10 w-auto"
      />
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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-cream transition-shadow duration-300 ${
        scrolled ? "border-line shadow-[0_8px_30px_rgba(16,32,39,0.06)]" : "border-line/70"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `transition-colors hover:text-ink ${isActive ? "font-medium text-ink" : ""}`
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-cream px-5 py-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base ${isActive ? "bg-foam text-ink" : "text-muted"}`
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
