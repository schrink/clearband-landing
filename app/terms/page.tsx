import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service - ClearBand AI",
  description: "Terms governing use of the ClearBand AI website, waitlist, and software.",
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 20, 2026">
      <section className="space-y-3">
        <h2>1. Agreement</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the ClearBand AI website at{" "}
          <a href="https://clearbandai.app">clearbandai.app</a>, our waitlist, and any ClearBand AI software or
          related services (together, the &quot;Services&quot;). By using the Services, you agree to these Terms. If
          you do not agree, do not use the Services.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Who we are</h2>
        <p>
          ClearBand AI provides desktop software for amateur radio audio processing. Contact:{" "}
          <a href="mailto:contact@clearbandai.app">contact@clearbandai.app</a>.
        </p>
      </section>

      <section className="space-y-3">
        <h2>3. Eligibility</h2>
        <p>
          You must be at least 16 years old (or the age of digital consent in your country) to use the Services. By
          using the Services you represent that you meet this requirement and can form a binding contract.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. Waitlist and founding offers</h2>
        <p>
          Joining the waitlist lets you request early access and, where offered, a founding price. Waitlist signup does
          not guarantee availability, launch timing, or that any promotional price will remain available. We may
          modify or end offers at any time. Providing your email means you agree we may contact you about ClearBand
          AI launch, trial, and related product news. You can ask to be removed by emailing us.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. Software license</h2>
        <p>
          When you purchase or obtain a license to ClearBand AI software, we grant you a limited, non-exclusive,
          non-transferable, revocable license to install and use the software for your personal or internal use on
          devices you control, subject to these Terms and any license shown at purchase. You may not:
        </p>
        <ul>
          <li>Copy, modify, or create derivative works except as allowed by law</li>
          <li>Reverse engineer, decompile, or attempt to extract source code except where mandatory law permits</li>
          <li>Rent, lease, sell, sublicense, or redistribute the software without our written permission</li>
          <li>Remove proprietary notices or use the software to build a competing product</li>
          <li>Circumvent license, trial, or security controls</li>
        </ul>
        <p>
          Title and intellectual property in the software remain with ClearBand AI and its licensors. Open-source
          components are licensed under their own terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Trials and refunds</h2>
        <p>
          Free trials, if offered, are for evaluation only and may be limited in time or features. Unless required by
          law or stated at purchase (for example a money-back guarantee period), fees are non-refundable after
          purchase. Lifetime licenses, if offered, mean a perpetual license to use the then-current product version
          under these Terms, not a guarantee of free major upgrades forever unless we expressly say so at purchase.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Acceptable use</h2>
        <p>You agree not to use the Services to:</p>
        <ul>
          <li>Violate any law or third-party rights</li>
          <li>Interfere with or disrupt the website, APIs, or other users</li>
          <li>Attempt unauthorized access to systems or data</li>
          <li>Submit malware, spam, or abusive content</li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>
        <p>
          You are responsible for complying with amateur radio regulations and any laws that apply to your
          transmissions and recordings. ClearBand AI is a tool; you remain responsible for how you use it.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Third-party services</h2>
        <p>
          The Services may rely on third-party hosting, email, analytics, or payment providers. Their terms and
          privacy policies apply to their processing. We are not responsible for third-party services we do not
          control.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Disclaimer</h2>
        <p>
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do
          not warrant that the software will be uninterrupted, error-free, or that it will improve every signal or
          contest result. Local AI and DSP results depend on your hardware, radio setup, and band conditions.
        </p>
      </section>

      <section className="space-y-3">
        <h2>10. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLEARBAND AI AND ITS OPERATORS WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING
          FROM YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICES WILL NOT EXCEED
          THE AMOUNT YOU PAID US FOR THE SOFTWARE IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR TEN US DOLLARS
          (US$10) IF YOU HAVE NOT PAID US.
        </p>
        <p>Some jurisdictions do not allow certain limitations; in those places, our liability is limited as far as the law allows.</p>
      </section>

      <section className="space-y-3">
        <h2>11. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless ClearBand AI from claims, damages, and expenses (including
          reasonable legal fees) arising from your misuse of the Services, your violation of these Terms, or your
          violation of any law or third-party right.
        </p>
      </section>

      <section className="space-y-3">
        <h2>12. Termination</h2>
        <p>
          We may suspend or terminate access to the website or waitlist at any time. Your license to the software may
          end if you breach these Terms. Sections that by nature should survive (including license restrictions,
          disclaimer, liability limits, and indemnity) will survive termination.
        </p>
      </section>

      <section className="space-y-3">
        <h2>13. Changes</h2>
        <p>
          We may update these Terms from time to time. The &quot;Last updated&quot; date will change when we do.
          Material changes may be noted on the site or by email if you are on the waitlist. Continued use after
          changes means you accept the updated Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2>14. Governing law</h2>
        <p>
          These Terms are governed by the laws of Serbia, without regard to conflict-of-law rules, unless mandatory
          consumer protection law in your country requires otherwise. Courts in Serbia will have jurisdiction, subject
          to any non-waivable rights you have as a consumer.
        </p>
      </section>

      <section className="space-y-3">
        <h2>15. Contact</h2>
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
