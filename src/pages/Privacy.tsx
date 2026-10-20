import { PageHero } from "../components/PageHero"
import { clearConsentChoice } from "../consent"
import { company } from "../data"

export function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        body="How iPIPE Ltd handles personal data on this website, and how analytics stays off until you accept."
      />

      <article className="mx-auto max-w-3xl px-4 py-16 text-base leading-relaxed text-muted sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold text-ink">1. Who is responsible</h2>
        <p className="mt-4">
          The controller for this website is {company.name}, {company.location}. Email:{" "}
          <a className="text-water-deep underline underline-offset-2" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-ink">2. What we collect</h2>
        <p className="mt-4">
          Some data is collected only when you share it, for example a name, email, and
          message you type in the contact form. That form opens your email client and sends
          the message to {company.email}. We do not store contact-form submissions in a
          website database.
        </p>
        <p className="mt-4">
          Other data can be collected automatically when you visit the site: technical
          details such as browser type, device, and pages viewed. Analytics of that kind
          runs only after you select Accept in the cookie notice.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-ink">3. Hosting (Vercel)</h2>
        <p className="mt-4">
          This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
          91723, USA. When you visit the site, Vercel may process log data including IP
          addresses, in order to deliver the pages securely and quickly. See the{" "}
          <a
            className="text-water-deep underline underline-offset-2"
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Vercel Privacy Policy
          </a>
          .
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-ink">4. Cookies and analytics</h2>
        <p className="mt-4">
          Google Analytics is loaded only after you select <strong>Accept</strong> in the
          privacy notice. Before that, the browser does not request the Google Analytics
          script and does not send an analytics page view. If you select{" "}
          <strong>Reject</strong> or close the notice, analytics stays off.
        </p>
        <p className="mt-4">
          When enabled, Google Analytics may process page views, browser and device
          details, and an analytics identifier. IP addresses are anonymized where
          supported. Google may process this information in the United States. See the{" "}
          <a
            className="text-water-deep underline underline-offset-2"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google Privacy Policy
          </a>
          .
        </p>
        <p className="mt-4">
          Your choice is stored in this browser under <code>ipipe.consent.v1</code>. You
          can change it at any time.
        </p>
        <button
          type="button"
          className="mt-5 rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink transition hover:bg-foam"
          onClick={() => clearConsentChoice()}
        >
          Cookie settings
        </button>

        <h2 className="mt-10 text-2xl font-semibold text-ink">5. YouTube embeds</h2>
        <p className="mt-4">
          The homepage can show a YouTube video. YouTube is provided by Google
          and may set its own cookies or collect usage data when that embed
          loads. See the{" "}
          <a
            className="text-water-deep underline underline-offset-2"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google Privacy Policy
          </a>
          .
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-ink">6. Your rights</h2>
        <p className="mt-4">
          Depending on applicable law, you may have the right to access, correct, delete,
          or restrict personal data we hold, and to object to processing or withdraw
          consent. Withdrawal does not affect processing that already happened. Contact us
          at {company.email}.
        </p>
        <p className="mt-4">
          This site uses HTTPS. You can recognize an encrypted connection by https in the
          address bar.
        </p>

        <p className="mt-10 text-sm">Last updated: 20 October 2026</p>
      </article>
    </>
  )
}
