import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "../data"

export function Faq({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-cream">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-ink">{item.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-muted transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
