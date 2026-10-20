import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSyncExternalStore } from "react"
import { getConsentChoice, subscribeConsent } from "../consent"

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-JZWYFKE2BZ"
let scriptLoadedFor: string | null = null

function isLocalhost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname === "[::1]" ||
    hostname.endsWith(".localhost")
  )
}

function useConsentChoice() {
  return useSyncExternalStore(subscribeConsent, getConsentChoice, () => null)
}

export function Analytics() {
  const { pathname } = useLocation()
  const consent = useConsentChoice()
  const enabled =
    Boolean(measurementId) &&
    consent === "accepted" &&
    typeof window !== "undefined" &&
    !isLocalhost(window.location.hostname)

  useEffect(() => {
    if (!enabled) return

    if (scriptLoadedFor !== measurementId) {
      const existing = document.querySelector<HTMLScriptElement>("script[data-ipipe-gtag]")
      if (!existing) {
        const script = document.createElement("script")
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
        script.dataset.ipipeGtag = "true"
        document.head.appendChild(script)
      }
      window.gtag?.("js", new Date())
      scriptLoadedFor = measurementId
    }

    window.gtag?.("consent", "update", { analytics_storage: "granted" })
    window.gtag?.("config", measurementId, {
      page_path: pathname,
      anonymize_ip: true,
    })
  }, [enabled, pathname])

  return null
}
