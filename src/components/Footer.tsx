import { Link } from "react-router-dom"
import { company, nav } from "../data"
import { Logo } from "./Nav"

export function Footer() {
  return (
    <footer className="bg-abyss text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            Wireless inspection subs that travel inside live, pressurized potable water networks.
            Diagnose first. Then decide what to replace.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">Connect</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li>
              <a href={company.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={company.youtube} target="_blank" rel="noreferrer" className="hover:text-white">
                YouTube
              </a>
            </li>
            <li className="text-white/50">{company.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-white/40">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
