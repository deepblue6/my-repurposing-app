"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold text-gray-900">
                ContentRepurpose.ai
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">Last updated: March 2024</p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-4">
                By accessing and using ContentRepurpose.ai, you agree to be
                bound by these Terms of Service and all applicable laws and
                regulations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Use of Service
              </h2>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide accurate account information</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not violate any intellectual property rights</li>
                <li>Not attempt to reverse engineer the service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Content Rights
              </h2>
              <p className="text-gray-600 mb-4">
                You retain all rights to your content. By using our service, you
                grant us a license to process and transform your content as
                necessary to provide our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Service Modifications
              </h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify or discontinue the service at any
                time. We will provide notice of significant changes when
                possible.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                ContentRepurpose.ai is provided &quot;as is&quot; without
                warranties. We are not liable for any damages arising from the
                use of our service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Subscription and Payments
              </h2>
              <p className="text-gray-600 mb-4">
                Subscription fees are billed monthly. You may cancel at any
                time. Refunds are provided according to our 14-day money-back
                guarantee policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Contact
              </h2>
              <p className="text-gray-600">
                For any questions about these Terms, please contact us at{" "}
                <a
                  href="https://x.com/julesmundur"
                  className="text-blue-600 hover:text-blue-800"
                >
                  @julesmundur
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
