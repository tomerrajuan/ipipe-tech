export const CONSENT_STORAGE_KEY = "ipipe.consent.v1"

export type ConsentChoice = "accepted" | "rejected"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const listeners = new Set<() => void>()
let cached: ConsentChoice | null | undefined

function isConsentChoice(value: string | null): value is ConsentChoice {
  return value === "accepted" || value === "rejected"
}

function emit() {
  for (const listener of listeners) listener()
}

function isLocalhost() {
  if (typeof window === "undefined") return false
  const host = window.location.hostname
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host === "[::1]" ||
    host.endsWith(".localhost")
  )
}

export function readConsentChoice(): ConsentChoice | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return isConsentChoice(raw) ? raw : null
  } catch {
    return null
  }
}

export function getConsentChoice(): ConsentChoice | null {
  if (cached === undefined) cached = readConsentChoice()
  return cached
}

export function subscribeConsent(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function writeConsentChoice(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // Private mode should not break the banner.
  }
  cached = choice
  document.documentElement.classList.add("consent-decided")

  if (!isLocalhost() && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: choice === "accepted" ? "granted" : "denied",
    })
  }

  emit()
}

export function clearConsentChoice() {
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY)
  } catch {
    // Ignore storage errors.
  }
  cached = null
  document.documentElement.classList.remove("consent-decided")

  if (!isLocalhost() && typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "denied" })
  }

  emit()
}
