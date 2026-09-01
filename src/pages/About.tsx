import { CtaBand, PageHero } from "../components/PageHero"
import { aboutValues, asset, team } from "../data"
import { Reveal } from "../motion"

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built to keep potable water moving."
        body="iPIPE Ltd is dedicated to transforming water management through in-pipe inspection. Our mission is safer, more efficient potable water networks, so communities keep access to clean, reliable water."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {aboutValues.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-3xl border border-line bg-cream p-8">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <p className="text-lg leading-relaxed text-muted">
            Our flagship devices, Neptune, Koi, and Dolphin, are mini wireless subs designed
            to operate inside pressurized pipes. They detect leaks, corrosion, faulty welds,
            blockages, unauthorized connections, and unmapped network segments in real time.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            With support from multiple Israeli government grants, iPIPE has established
            partnerships with leading water corporations. We believe advanced inspection can
            significantly reduce water loss and improve the efficiency of distribution networks.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-foam py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight leading-[1.15]">The people building it</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {team.map((person) => (
              <Reveal key={person.name}>
                <article className="flex gap-5 rounded-3xl border border-line bg-cream p-5">
                  <img
                    src={asset(person.photo)}
                    alt={person.name}
                    className="h-28 w-24 shrink-0 rounded-2xl object-cover object-top"
                  />
                  <div>
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

      <CtaBand />
    </>
  )
}
