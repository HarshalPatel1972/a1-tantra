"use client";

import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div>
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-4xl font-bold text-deep-brown mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-deep-brown/80 space-y-6">
            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials (information or software) on A1 Tantra&apos;s website for
                personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or &quot;mirror&quot; the
                  materials on any other server
                </li>
              </ul>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                3. Disclaimer
              </h2>
              <p>
                The materials on A1 Tantra&apos;s website are provided on an &apos;as is&apos;
                basis. A1 Tantra makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                4. Limitations
              </h2>
              <p>
                In no event shall A1 Tantra or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on A1 Tantra&apos;s website.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on A1 Tantra&apos;s website could include
                technical, typographical, or photographic errors. A1 Tantra does
                not warrant that any of the materials on its website are
                accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                6. Links
              </h2>
              <p>
                A1 Tantra has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by A1 Tantra of the site. Use of any such linked
                website is at the user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                7. Modifications
              </h2>
              <p>
                A1 Tantra may revise these terms of service for its website at
                any time without notice. By using this website, you are agreeing
                to be bound by the then current version of these terms of
                service.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Jurisdiction], and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that location.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
