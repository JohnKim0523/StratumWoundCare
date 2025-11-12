import Link from 'next/link';

export default function PatientsPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Patient Information</h1>
          <p className="text-xl text-primary-100">
            Everything you need to know about your care at Stratum Wound Care
          </p>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Accepted Insurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Medicare</h3>
              <p className="text-gray-700">
                We accept all Medicare plans including Medicare Advantage
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Medicaid</h3>
              <p className="text-gray-700">
                PA Medicaid and Medical Assistance programs accepted
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Private Insurance</h3>
              <p className="text-gray-700">
                Most major private insurance plans accepted
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Insurance Providers We Accept</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• Aetna</li>
                <li>• Blue Cross Blue Shield</li>
                <li>• Cigna</li>
              </ul>
              <ul className="space-y-2">
                <li>• Highmark</li>
                <li>• Humana</li>
                <li>• Independence Blue Cross</li>
              </ul>
              <ul className="space-y-2">
                <li>• UnitedHealthcare</li>
                <li>• WellSpan</li>
                <li>• UPMC</li>
              </ul>
              <ul className="space-y-2">
                <li>• And many others</li>
                <li className="text-primary-600 font-semibold">
                  <Link href="/contact">Contact us to verify</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New Patient Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">New Patient Information</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Bring to Your First Appointment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Photo ID and insurance card(s)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">List of current medications and dosages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Recent medical records and test results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Referral documentation (if required by insurance)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Completed new patient forms (download below)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">List of allergies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Medical history including previous surgeries</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Downloadable Forms</h3>
              <p className="text-gray-700 mb-6">
                Complete these HIPAA-compliant forms before your visit to expedite check-in:
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded-lg hover:border-primary-600 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 New Patient Registration Form</h4>
                  <p className="text-sm text-gray-600 mb-3">Basic demographic and insurance information</p>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Download PDF →
                  </button>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-primary-600 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Medical History Form</h4>
                  <p className="text-sm text-gray-600 mb-3">Comprehensive health history questionnaire</p>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Download PDF →
                  </button>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-primary-600 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 HIPAA Authorization Form</h4>
                  <p className="text-sm text-gray-600 mb-3">Privacy practices and authorization</p>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Download PDF →
                  </button>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg hover:border-primary-600 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Consent for Treatment Form</h4>
                  <p className="text-sm text-gray-600 mb-3">Treatment consent and acknowledgment</p>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Download PDF →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Portal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Patient Portal</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Access your test results, visit summaries, and medical records securely online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Login to Portal
              </button>
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors border-2 border-white">
                Register for Portal
              </button>
            </div>
            <p className="text-sm text-primary-100 mt-6">
              Secure, HIPAA-compliant 24/7 access to your health information
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long do wound healing treatments typically take?",
                answer: "Healing time varies based on wound type, size, location, and individual health factors. Most patients see significant improvement within 4-8 weeks, though complex wounds may require longer treatment. We provide regular progress assessments and adjust treatment plans as needed."
              },
              {
                question: "Do I need a referral from my primary care physician?",
                answer: "While some insurance plans require a referral, many do not. We recommend checking with your insurance provider. Medicare and Medicaid typically do not require referrals for wound care services."
              },
              {
                question: "What should I expect during my first visit?",
                answer: "Your first visit includes a comprehensive wound assessment, medical history review, and development of a personalized treatment plan. The appointment typically lasts 45-60 minutes. We'll explain your diagnosis, treatment options, and answer all your questions."
              },
              {
                question: "How often will I need follow-up appointments?",
                answer: "Follow-up frequency depends on wound severity and treatment type. Many patients are seen weekly initially, then every 2-4 weeks as healing progresses. We create a schedule that balances optimal care with your convenience."
              },
              {
                question: "What are the costs and billing procedures?",
                answer: "Costs vary based on treatment type and insurance coverage. We bill your insurance directly and provide cost estimates before treatment. Our billing team can help you understand your coverage and out-of-pocket expenses. We offer payment plans when needed."
              },
              {
                question: "Can I continue wound care at home?",
                answer: "Yes! We provide comprehensive education on at-home wound care, including proper cleaning, dressing changes, and when to seek emergency care. Many treatments can be done at home between office visits."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Guidance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Billing & Financial Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Bill</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>We file claims directly with your insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>You are responsible for copays, deductibles, and coinsurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Statements are mailed monthly for any patient balance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Multiple payment options available (check, card, online)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Assistance</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Payment plans available for qualifying patients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Financial counseling services offered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>We accept CareCredit and medical financing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>
                    <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                      Contact our billing team
                    </Link>
                    {" "}for assistance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have More Questions?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Our team is here to help you understand your care and answer any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors border-2 border-white"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
