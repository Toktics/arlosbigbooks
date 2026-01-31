export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold font-[var(--font-fredoka)] mb-4">
            Cookie Policy
          </h1>
          <p className="text-2xl">All about those yummy... wait, DIGITAL cookies! 🍪</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> January 31, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-orange-500 mb-4 font-[var(--font-fredoka)]">
              What Are Cookies?
            </h2>
            <div className="bg-yellow-50 rounded-2xl p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better experience by remembering your preferences and actions.
              </p>
              <p className="text-sm text-gray-600 mt-4 italic">
                (Sorry kids, you can't eat these cookies! 😄)
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-blue-500 mb-4 font-[var(--font-fredoka)]">
              How We Use Cookies
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">Essential Cookies 🍪</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              These cookies are necessary for the website to function properly:
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span><strong>Activity Sheet Downloads:</strong> Remember that you've already provided your email address so we don't ask you again when downloading other activity sheets</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span><strong>Session Management:</strong> Maintain your browsing session across different pages</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">Functionality Cookies 🎨</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              These cookies enhance your experience:
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">✓</span>
                <span><strong>User Preferences:</strong> Remember your settings and choices</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">✓</span>
                <span><strong>Form Data:</strong> Temporarily store information you've entered in forms (like the contact form)</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-red-500 mb-4 font-[var(--font-fredoka)]">
              What We DON'T Do
            </h2>
            <div className="bg-red-50 rounded-2xl p-6">
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 text-2xl mr-3">❌</span>
                  <span>We do not use advertising cookies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-2xl mr-3">❌</span>
                  <span>We do not track you across other websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-2xl mr-3">❌</span>
                  <span>We do not sell your data to third parties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-2xl mr-3">❌</span>
                  <span>We do not use cookies for targeted advertising</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-purple-500 mb-4 font-[var(--font-fredoka)]">
              Cookie Duration ⏰
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-2">Session Cookies</h3>
                <p className="text-gray-700">Deleted when you close your browser</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-2">Persistent Cookies</h3>
                <p className="text-gray-700">Stored for up to 12 months (mainly for remembering activity sheet downloads)</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-500 mb-4 font-[var(--font-fredoka)]">
              Managing Cookies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You can control and manage cookies in several ways:
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">Browser Settings</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Most browsers allow you to:
            </p>
            <ul className="space-y-2 text-lg text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">•</span>
                <span>See what cookies are stored</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">•</span>
                <span>Delete some or all cookies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">•</span>
                <span>Block cookies from being set</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-2xl mr-3">•</span>
                <span>Block third-party cookies</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
              <p className="text-gray-700">
                <strong>Please note:</strong> If you disable cookies, you may need to enter your email address each time you download an activity sheet.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">How to Disable Cookies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-bold text-gray-800 mb-1">Chrome</p>
                <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-bold text-gray-800 mb-1">Firefox</p>
                <p className="text-sm text-gray-600">Settings → Privacy & Security → Cookies</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-bold text-gray-800 mb-1">Safari</p>
                <p className="text-sm text-gray-600">Preferences → Privacy → Cookies</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-bold text-gray-800 mb-1">Edge</p>
                <p className="text-sm text-gray-600">Settings → Cookies and Site Permissions</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-orange-500 mb-4 font-[var(--font-fredoka)]">
              Cookie List 📋
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-100 to-yellow-100">
                    <th className="border border-orange-200 p-3 text-left font-bold text-gray-800">Cookie Name</th>
                    <th className="border border-orange-200 p-3 text-left font-bold text-gray-800">Purpose</th>
                    <th className="border border-orange-200 p-3 text-left font-bold text-gray-800">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-orange-50">
                    <td className="border border-orange-200 p-3 font-mono text-sm">activity_sheet_email</td>
                    <td className="border border-orange-200 p-3 text-gray-700">Remembers you've downloaded activity sheets</td>
                    <td className="border border-orange-200 p-3 text-gray-700">12 months</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="border border-orange-200 p-3 font-mono text-sm">session_id</td>
                    <td className="border border-orange-200 p-3 text-gray-700">Maintains your session on the website</td>
                    <td className="border border-orange-200 p-3 text-gray-700">Session</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="border border-orange-200 p-3 font-mono text-sm">cookie_consent</td>
                    <td className="border border-orange-200 p-3 text-gray-700">Remembers your cookie consent choice</td>
                    <td className="border border-orange-200 p-3 text-gray-700">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-blue-500 mb-4 font-[var(--font-fredoka)]">
              Updates to This Policy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with a new "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-red-500 mb-4 font-[var(--font-fredoka)]">
              Questions? 🤔
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> <a href="mailto:hello@arlosbigbooks.com" className="text-blue-500 hover:text-blue-700 underline">hello@arlosbigbooks.com</a>
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mb-12">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
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
