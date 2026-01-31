export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold font-[var(--font-fredoka)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-2xl">We keep your info safe and sound! 🔒</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> January 31, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-red-500 mb-4 font-[var(--font-fredoka)]">
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Arlo's Big Books ("we," "our," or "us") operates arlosbigbooks.com. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-blue-500 mb-4 font-[var(--font-fredoka)]">
              Information We Collect
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">Information You Provide</h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">📧</span>
                <span><strong>Email Address:</strong> When you sign up for our newsletter or download activity sheets</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">👤</span>
                <span><strong>Name:</strong> Optional, when submitting the contact form</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">💬</span>
                <span><strong>Message Content:</strong> When you contact us through our contact form</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">🍪</span>
                <span><strong>Cookies:</strong> Small text files stored on your device to remember your preferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">📊</span>
                <span><strong>Usage Data:</strong> Pages visited, time spent on site, browser type (via standard web server logs)</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-500 mb-4 font-[var(--font-fredoka)]">
              How We Use Your Information
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">✓</span>
                <span>Send you updates about new books, activity sheets, and series news (only if you subscribe)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">✓</span>
                <span>Respond to your inquiries via our contact form</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">✓</span>
                <span>Improve our website experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">✓</span>
                <span>Remember that you've already provided your email for activity sheet downloads</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-orange-500 mb-4 font-[var(--font-fredoka)]">
              Cookies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our website uses cookies to:
            </p>
            <ul className="space-y-3 text-lg text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">🍪</span>
                <span>Remember that you've already downloaded activity sheets (so we don't ask for your email again)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">🍪</span>
                <span>Maintain basic website functionality</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">🍪</span>
                <span>Understand how visitors use our site</span>
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700">
                <strong>You can disable cookies in your browser settings</strong>, but this may affect website functionality (you'll be asked for your email every time you download).
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              We do not use tracking cookies for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-purple-500 mb-4 font-[var(--font-fredoka)]">
              How We Protect Your Information
            </h2>
            <div className="bg-purple-50 rounded-2xl p-6">
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 text-2xl mr-3">🛡️</span>
                  <span>We do not sell, rent, or share your email address with third parties for marketing purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 text-2xl mr-3">🛡️</span>
                  <span>Email addresses are stored securely and used only for the purposes stated above</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 text-2xl mr-3">🛡️</span>
                  <span>We use industry-standard security measures to protect your data</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-red-500 mb-4 font-[var(--font-fredoka)]">
              Email Communications
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 text-2xl mr-3">✉️</span>
                <span>You can unsubscribe from our newsletter at any time using the link in every email</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-2xl mr-3">✉️</span>
                <span>We will never send spam or share your email with others</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-2xl mr-3">✉️</span>
                <span>We only send updates about Arlo's Big Books series</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-blue-500 mb-4 font-[var(--font-fredoka)]">
              Children's Privacy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our website is designed for use by children with parental guidance. We do not knowingly collect personal information from children under 13 without parental consent. Parents who sign up for newsletters or download activity sheets are doing so on behalf of their children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-500 mb-4 font-[var(--font-fredoka)]">
              Third-Party Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We may use third-party services such as:
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">📧</span>
                <span><strong>Email service provider</strong> (to send newsletters)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">🌐</span>
                <span><strong>Web hosting service</strong> (to operate our website)</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              These services have their own privacy policies and only receive information necessary to perform their functions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-orange-500 mb-4 font-[var(--font-fredoka)]">
              Your Rights
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">👉</span>
                <span>Access the personal information we hold about you</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">👉</span>
                <span>Request correction of inaccurate information</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">👉</span>
                <span>Request deletion of your information</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 text-2xl mr-3">👉</span>
                <span>Withdraw consent for email communications at any time</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:hello@arlosbigbooks.com" className="text-blue-500 hover:text-blue-700 underline">hello@arlosbigbooks.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-purple-500 mb-4 font-[var(--font-fredoka)]">
              Changes to This Policy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-red-500 mb-4 font-[var(--font-fredoka)]">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact:
            </p>
            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:hello@arlosbigbooks.com" className="text-blue-500 hover:text-blue-700 underline">hello@arlosbigbooks.com</a>
              </p>
              <p className="text-lg text-gray-700">
                <strong>Address:</strong> Snappy Fox Ltd, 18 Harrogate Road, Rawdon, Leeds
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mb-12">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            ← Back to Arlo's Big World
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p className="text-sm">© 2026 Martin King. All rights reserved.</p>
      </div>
    </main>
  )
}
