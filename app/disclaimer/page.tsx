"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-4xl font-bold text-mystique-taupe mb-8">
            Disclaimer
          </h1>

          <div className="prose prose-lg max-w-none text-mystique-taupe/80 space-y-6">
            <section>
              <h2 className="serif-heading text-2xl font-bold text-mystique-taupe mb-3">
                Medical Disclaimer
              </h2>
              <p>
                The information provided on A1 Tantra is for educational and
                informational purposes only and is not intended to substitute
                for professional medical, psychological, or legal advice. The
                techniques, practices, and teachings described on this website
                are not medical treatments and should not be used to diagnose,
                treat, cure, or prevent any disease or medical condition.
              </p>
              <p>
                If you have any medical or mental health concerns, please
                consult with a qualified healthcare professional before
                beginning any practice described on this website.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-mystique-taupe mb-3">
                Individual Results Vary
              </h2>
              <p>
                Individual results from Tantric practices vary greatly and
                depend on many factors including dedication, prior experience,
                and personal circumstances. We do not guarantee any specific
                results or outcomes from any practice, session, or course
                offered through A1 Tantra.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-mystique-taupe mb-3">
                Content Accuracy
              </h2>
              <p>
                While we strive to ensure all content on A1 Tantra is accurate
                and reviewed by qualified practitioners, we cannot guarantee the
                absolute accuracy of all information. We recommend
                cross-referencing with other authoritative sources.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-mystique-taupe mb-3">
                Limitation of Liability
              </h2>
              <p>
                In no event shall A1 Tantra, its founders, advisors, or
                representatives be liable for any direct, indirect, incidental,
                special, consequential, or punitive damages arising out of your
                access to or use of this website or the practices described
                herein.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-mystique-taupe mb-3">
                Age Restriction
              </h2>
              <p>
                A1 Tantra is intended for adults only. If you are under 18 years
                of age, you should not access or use this website without
                parental consent and supervision.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-mystique-taupe mb-3">
                Cultural Respect
              </h2>
              <p>
                The teachings and practices shared on A1 Tantra come from
                ancient spiritual traditions. We ask that all users approach
                these teachings with respect, reverence, and a commitment to
                authentic practice rather than cultural appropriation.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

