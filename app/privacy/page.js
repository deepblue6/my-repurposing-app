"use client";

import Link from "next/link";

export default function Privacy() {
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
            Privacy Policy
          </h1>

          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">Last updated: March 2024</p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us when
                using ContentRepurpose.ai:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Account information (email, name)</li>
                <li>Content you upload for repurposing</li>
                <li>Platform preferences and settings</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide and improve our services</li>
                <li>Process your content transformations</li>
                <li>Send important updates and communications</li>
                <li>Analyze and optimize our platform</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Data Security
              </h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your
                information. Your content is processed securely and we do not
                share it with third parties without your consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Your Rights
              </h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Access your personal information</li>
                <li>Request data deletion</li>
                <li>Opt-out of communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
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
