import { CtaBand, PageHero } from "../components/PageHero"
import { news } from "../data"
import { Reveal } from "../motion"

export function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Pilots, programs, and grants."
        body="Stay current on iPIPE’s work with utilities, government funding, and international innovation programs."
      />

      <section className="mx-auto max-w-3xl px-6 py-24">
        <ol className="relative border-l border-line pl-8">
          {news.map((item) => (
            <li key={`${item.year}-${item.title}`} className="relative pb-12 last:pb-0">
              <span className="absolute top-1.5 -left-[37px] h-3 w-3 rounded-full bg-water" />
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.18em] text-water uppercase">
                  {item.year}
                </p>
                <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  )
}
