import { type FormEvent, useState } from "react"
import { Mail, MapPin } from "lucide-react"
import { Faq } from "../components/Faq"
import { PageHero } from "../components/PageHero"
import { company } from "../data"
import { Reveal } from "../motion"

const contactFaqs = [
  {
    q: "What services does iPIPE offer?",
    a: "iPIPE provides inspection and diagnostics for potable water distribution networks using autonomous in-pipe devices. See Neptune, Koi, and Dolphin on the Products page.",
  },
  {
    q: "Where is iPIPE located?",
    a: "iPIPE is headquartered in Israel, where we develop inspection technology for water management and infrastructure.",
  },
  {
    q: "What partnerships has iPIPE established?",
    a: "Strategic partnerships with major water corporations, including pilots with Hagihon in Jerusalem, plus multiple Israeli government grants.",
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const message = String(data.get("message") ?? "")
    const subject = encodeURIComponent(`iPIPE inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n- ${name}\n${email}`)
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach out for a survey, a pilot, or a partnership."
        body="If you run a water network or want to collaborate on research, get in touch."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <h2 className="text-3xl font-semibold tracking-tight">Contact iPIPE</h2>
          <p className="mt-4 text-muted">
            Expert support and solutions in water management. We typically reply by email.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-water-deep" />
              <a href={`mailto:${company.email}`} className="hover:text-water-deep">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-water-deep" />
              {company.location}
            </li>
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-3">
          {sent ? (
            <div className="rounded-3xl border border-line bg-foam px-8 py-16 text-center">
              <p className="text-3xl font-semibold tracking-tight">Thank you for your message.</p>
              <p className="mt-3 text-muted">Your email client should open so you can send it.</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-3xl border border-line bg-cream p-8"
            >
              <label className="block text-sm">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none focus:border-water"
                />
              </label>
              <label className="block text-sm">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none focus:border-water"
                />
              </label>
              <label className="block text-sm">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-3 outline-none focus:border-water"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-abyss px-5 py-3 text-sm font-medium text-white transition hover:bg-navy"
              >
                Send message
              </button>
            </form>
          )}
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
        <div className="mt-8">
          <Faq items={contactFaqs} />
        </div>
      </section>
    </>
  )
}
