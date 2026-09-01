import { Link } from "react-router-dom"
import { Reveal } from "../motion"

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <section className="relative overflow-hidden bg-abyss pt-32 pb-20 text-white sm:pt-40">
      <div className="pointer-events-none absolute inset-0 water-glow" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-water uppercase">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight leading-[1.1] sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{body}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
        <div>
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Transform your water management</p>
          <p className="mt-3 max-w-xl text-white/65">
            Talk to iPIPE about a survey on a live network. Diagnose the pipe. Don't replace it by default.
          </p>
        </div>
        <Link
          to="/contact"
          className="rounded-full bg-water px-6 py-3 text-sm font-medium text-white transition hover:bg-water-deep"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
