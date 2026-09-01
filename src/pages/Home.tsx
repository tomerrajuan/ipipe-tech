import { ArrowRight, Play } from "lucide-react"
import { Link } from "react-router-dom"
import { CtaBand } from "../components/PageHero"
import { Faq } from "../components/Faq"
import { asset, company, pillars, products, stats, team } from "../data"
import { Reveal } from "../motion"

export function Home() {
  return (
    <>
      <section className="relative grid h-svh max-h-svh grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-abyss text-white">
        <div className="pointer-events-none absolute inset-0 water-glow" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 sm:pt-28">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-water uppercase">
              Innovative water solutions
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight leading-[1.08] sm:text-6xl">
              Water pipe inspection from the inside.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Play smart. Don't waste budget blindly renewing old pipes. Detect leaks early,
              keep the network in service, and know exactly what to repair.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-water px-5 py-3 text-sm font-medium text-white transition hover:bg-water-deep"
              >
                See the fleet <ArrowRight size={16} />
              </Link>
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/40"
              >
                How it works
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="relative flex min-h-0 items-center justify-center px-6">
          <img
            src={asset("images/submarine.webp")}
            alt="iPIPE inspection sub"
            className="h-auto w-auto max-h-[min(46svh,420px)] max-w-4xl object-contain drop-shadow-[0_30px_80px_rgba(26,140,255,0.18)]"
          />
        </div>
        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="px-6 py-5">
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-water uppercase">
            Why inspect first
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight leading-[1.15] text-ink sm:text-5xl">
            iPIPE's technology gives you an updated diagnosis of the network, and can save a fortune.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((item) => (
            <Reveal key={item.n}>
              <article className="h-full rounded-3xl border border-line bg-cream p-8">
                <p className="text-xs tracking-[0.2em] text-muted">{item.n}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-water uppercase">In the lab</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight leading-[1.15] sm:text-5xl">
              Dolphin traveling inside a pipe.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              iPIPE's solution is a mini wireless device (a submarine) that maneuvers inside
              active, pressurized water distribution networks while they are in use. It inspects
              and reports pipe condition, system integrity, and location.
            </p>
            <a
              href={company.youtube}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-water"
            >
              <Play size={16} /> Watch on YouTube
            </a>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-abyss shadow-2xl">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={company.youtubeEmbed}
                  title="Dolphin traveling inside a pipe in the iPIPE laboratory"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-abyss py-24 text-white">
        <div className="pointer-events-none absolute inset-0 water-glow" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.22em] text-water uppercase">The fleet</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight leading-[1.15] sm:text-5xl">
                Three subs. Every diameter.
              </h2>
              <p className="mt-4 max-w-xl text-white/65">
                From tight urban bends to 10 km mains. Same job: inspect live pipes, then decide what to replace.
              </p>
            </Reveal>
            <Link
              to="/products"
              className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:border-white/50 sm:inline-flex"
            >
              All models <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.08}>
                <Link
                  to="/products"
                  className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1.5 hover:border-water/50 hover:shadow-[0_28px_90px_rgba(26,140,255,0.22)]"
                >
                  <div className="relative aspect-[5/4] bg-white">
                    <span className="absolute top-4 left-4 z-10 rounded-full bg-abyss/80 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-white uppercase backdrop-blur-sm">
                      0{index + 1}
                    </span>
                    <img
                      src={asset(product.image)}
                      alt={product.name}
                      className="h-full w-full object-contain p-8 transition duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-[0.18em] text-water uppercase">{product.role}</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight">{product.name}</h3>
                    <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                      <div>
                        <dt className="text-[11px] tracking-wide text-white/45 uppercase">Diameter</dt>
                        <dd className="mt-1 text-sm font-medium">{product.diameter}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] tracking-wide text-white/45 uppercase">Pressure</dt>
                        <dd className="mt-1 text-sm font-medium">50 bar</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] tracking-wide text-white/45 uppercase">Range</dt>
                        <dd className="mt-1 text-sm font-medium">{product.distance.replace("Up to ", "")}</dd>
                      </div>
                    </dl>
                    <div className="mt-4">
                      <div className="h-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-water transition-all duration-700 group-hover:bg-white"
                          style={{ width: `${(product.rangeKm / 10) * 100}%` }}
                        />
                      </div>
                      <p className="mt-2 text-[11px] text-white/40">Range vs 10 km</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-foam py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-water uppercase">The minds behind iPIPE</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight leading-[1.15] sm:text-5xl">A team of science, robotics, and operations.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <Reveal key={person.name}>
                <article className="overflow-hidden rounded-3xl border border-line bg-cream">
                  <div className="aspect-[4/5] bg-abyss">
                    <img
                      src={asset(person.photo)}
                      alt={person.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold">{person.name}</h3>
                    <p className="mt-1 text-sm text-water-deep">{person.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-water uppercase">FAQ</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight leading-[1.15]">Questions utilities usually ask.</h2>
        </Reveal>
        <div className="mt-10">
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
