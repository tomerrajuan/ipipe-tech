import { Link } from "react-router-dom"
import { useSyncExternalStore } from "react"
import { X } from "lucide-react"
import {
  getConsentChoice,
  subscribeConsent,
  writeConsentChoice,
} from "../consent"

function useConsentChoice() {
  return useSyncExternalStore(subscribeConsent, getConsentChoice, () => null)
}

export function CookieBanner() {
  const choice = useConsentChoice()

  if (choice) return null

  return (
    <aside
      className="cookie-banner pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center p-3 sm:p-4"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-copy"
    >
      <div className="pointer-events-auto relative grid w-full max-w-4xl items-center gap-3 rounded-2xl border border-line bg-cream p-4 pr-11 shadow-[0_18px_48px_rgba(16,32,39,0.16)] sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6 sm:p-5 sm:pr-12">
        <button
          type="button"
          className="absolute top-3 right-3 rounded-full p-1 text-muted transition hover:text-ink"
          aria-label="Close privacy notice"
          onClick={() => writeConsentChoice("rejected")}
        >
          <X size={18} />
        </button>
        <div>
          <h2 id="cookie-banner-title" className="text-base font-semibold text-ink">
            We value your privacy
          </h2>
          <p id="cookie-banner-copy" className="mt-1 text-sm leading-relaxed text-muted">
            Analytics runs only if you accept.{" "}
            <Link to="/privacy" className="font-medium text-water-deep underline underline-offset-2">
              Privacy policy
            </Link>
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="rounded-full bg-water px-4 py-2 text-sm font-medium text-white transition hover:bg-water-deep"
            onClick={() => writeConsentChoice("accepted")}
          >
            Accept
          </button>
          <button
            type="button"
            className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:bg-foam"
            onClick={() => writeConsentChoice("rejected")}
          >
            Reject
          </button>
        </div>
      </div>
    </aside>
  )
}
