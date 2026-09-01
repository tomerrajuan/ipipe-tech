import { Brain, Compass, Radio, ScanSearch, ShieldCheck } from "lucide-react"
import { CtaBand, PageHero } from "../components/PageHero"
import { capabilities, detects } from "../data"
import { Reveal } from "../motion"

const icons = [Compass, ScanSearch, Radio]

export function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Our technology"
        title="Autonomous platforms that work inside live pipes."
        body="iPIPE devices travel substantial distances, navigate independently, and stay in contact with an operator, while the water network stays pressurized and in service."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight leading-[1.15]">Core capabilities</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {capabilities.map((item, i) => {
            const Icon = icons[i] ?? Compass
            return (
              <Reveal key={item.title}>
                <article className="h-full rounded-3xl border border-line bg-cream p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-water-deep">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="bg-foam py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight leading-[1.15]">What a survey can find</h2>
            <p className="mt-4 text-muted">
              The subs are sensor-carrying platforms. They inspect pipe and network condition,
              system integrity, and location, in real time, without a shutdown.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {detects.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-line bg-cream px-4 py-3 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="space-y-6">
            <Reveal>
              <article className="rounded-3xl border border-line bg-cream p-8">
                <ShieldCheck className="text-teal" size={22} />
                <h3 className="mt-4 text-xl font-semibold">Enhanced safety</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Early detection of leaks and corrosion reduces the risk of contamination and
                  infrastructure failure.
                </p>
              </article>
            </Reveal>
            <Reveal>
              <article className="rounded-3xl border border-line bg-cream p-8">
                <Brain className="text-water-deep" size={22} />
                <h3 className="mt-4 text-xl font-semibold">New AI capabilities</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  With AI, iPIPE can flag abnormalities in the pipe during inspection analysis,
                  turning raw sensor runs into decisions utilities can act on.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
