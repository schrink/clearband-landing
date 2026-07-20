import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy - ClearBand AI",
  description: "How ClearBand AI collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 20, 2026">
      <section className="space-y-3">
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy explains how ClearBand AI (&quot;ClearBand,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) handles information when you visit{" "}
          <a href="https://clearbandai.app">clearbandai.app</a>, join our waitlist, or use our software.
          ClearBand is designed for local, offline audio processing. We do not collect your radio audio or QSO
          content through the product.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Information we collect</h2>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>
            <strong>Waitlist information:</strong> email address you submit when you join the waitlist or request
            early access / founding pricing.
          </li>
          <li>
            <strong>Contact information:</strong> email address and message content if you email us.
          </li>
          <li>
            <strong>Usage and device data:</strong> standard web logs and analytics such as pages viewed, approximate
            location derived from IP, browser type, and referring site (for example via Vercel Analytics).
          </li>
          <li>
            <strong>Purchase information:</strong> if you later buy a license, payment processors may collect billing
            details. We receive confirmation of purchase, not your full payment card number.
          </li>
        </ul>
        <p>
          <strong>We do not collect audio</strong> processed by ClearBand AI on your computer. Processing runs locally
          on your device.
        </p>
      </section>

      <section className="space-y-3">
        <h2>3. How we use information</h2>
        <ul>
          <li>To manage the waitlist and notify you about trials, launch, and founding offers</li>
          <li>To respond to support and contact requests</li>
          <li>To operate, secure, and improve the website</li>
          <li>To send product-related notices you request (you can unsubscribe from marketing emails)</li>
          <li>To comply with law and enforce our Terms of Service</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>4. Legal bases (EEA/UK where applicable)</h2>
        <p>Where GDPR or similar laws apply, we process personal data based on:</p>
        <ul>
          <li>Your consent (for example, joining the waitlist)</li>
          <li>Performance of a contract or steps prior to a contract</li>
          <li>Our legitimate interests in running and improving the site, balanced against your rights</li>
          <li>Legal obligations when required</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>5. Sharing</h2>
        <p>We do not sell your personal information. We may share data with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> that help us host the site, store waitlist data, send email, and run
            analytics (for example Vercel, Upstash/Redis, Resend)
          </li>
          <li>
            <strong>Professional advisors</strong> or authorities when required by law or to protect our rights
          </li>
        </ul>
        <p>These providers may process data in the EU, US, or other countries with appropriate safeguards.</p>
      </section>

      <section className="space-y-3">
        <h2>6. Cookies and analytics</h2>
        <p>
          We may use cookies or similar technologies for essential site operation and privacy-friendly analytics. You
          can control cookies through your browser settings. Blocking some cookies may affect site features.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Retention</h2>
        <p>
          We keep waitlist emails until launch communications are complete or you ask us to delete them, unless we
          need to retain data longer for legal or security reasons. Analytics data is retained according to our
          providers&apos; defaults and our operational needs.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect personal data. No method of transmission
          or storage is 100% secure.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Your rights</h2>
        <p>Depending on your location, you may have rights to:</p>
        <ul>
          <li>Access, correct, or delete your personal data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent (for example, leave the waitlist)</li>
          <li>Data portability, where applicable</li>
        </ul>
        <p>
          To exercise these rights, email{" "}
          <a href="mailto:contact@clearbandai.app">contact@clearbandai.app</a>. You may also lodge a complaint with
          your local data protection authority.
        </p>
      </section>

      <section className="space-y-3">
        <h2>10. Children</h2>
        <p>
          The site and product are not directed to children under 16. We do not knowingly collect personal information
          from children under 16.
        </p>
      </section>

      <section className="space-y-3">
        <h2>11. Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will
          change when we do. Continued use of the site after changes means you accept the updated policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2>12. Contact</h2>
        <p>
          ClearBand AI
          <br />
          Email: <a href="mailto:contact@clearbandai.app">contact@clearbandai.app</a>
          <br />
          Website: <a href="https://clearbandai.app">https://clearbandai.app</a>
        </p>
      </section>
    </LegalPage>
  )
}
