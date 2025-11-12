import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-100">
            Learn about our mission, team, and commitment to excellence in wound care
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Providing advanced wound healing and limb preservation to help patients stay safe, healthy, and home.
              We are committed to delivering evidence-based, compassionate care that improves outcomes and enhances
              quality of life for every patient we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-4">
                Stratum Wound Care is a premier wound care clinic serving patients throughout Pennsylvania.
                Our clinic operates under an MSO-PC (Management Services Organization - Professional Corporation)
                model, ensuring the highest standards of both clinical care and operational excellence.
              </p>
              <p className="text-gray-700 mb-4">
                With deep roots in home health and community-based wound care, our team brings decades of
                combined experience in treating complex wounds. We understand that every patient's healing
                journey is unique, and we tailor our approach to meet individual needs.
              </p>
              <p className="text-gray-700">
                Our affiliation with leading healthcare organizations and compliance with all regulatory
                standards ensures that patients receive the most advanced and safest care available.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold text-xl mr-3">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Patient-Centered Care</h4>
                    <p className="text-gray-600">Your health and comfort are our top priorities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold text-xl mr-3">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clinical Excellence</h4>
                    <p className="text-gray-600">Evidence-based treatments and continuous learning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold text-xl mr-3">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassion</h4>
                    <p className="text-gray-600">Treating every patient with dignity and respect</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold text-xl mr-3">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Focus</h4>
                    <p className="text-gray-600">Dedicated to serving our local communities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Meet the experienced professionals dedicated to your care
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Medical Director",
                role: "Board-Certified Physician",
                description: "Specialized in wound care and limb preservation with over 15 years of experience"
              },
              {
                name: "Clinical Director",
                role: "Nurse Practitioner",
                description: "Expert in advanced wound management and patient education"
              },
              {
                name: "Nursing Team Lead",
                role: "Registered Nurse",
                description: "Coordinates patient care and clinical protocols"
              },
              {
                name: "Podiatry Partner",
                role: "DPM Specialist",
                description: "Focuses on diabetic foot care and limb preservation"
              },
              {
                name: "Endocrinology Partner",
                role: "MD, FACE",
                description: "Manages metabolic factors affecting wound healing"
              },
              {
                name: "Support Team",
                role: "Clinical & Administrative",
                description: "Dedicated staff ensuring seamless patient experience"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-primary-600">👤</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-center text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Compliance & Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">CMS (Centers for Medicare & Medicaid Services) certified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Pennsylvania Department of Health licensed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">HIPAA compliant with secure data practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Corporate practice of medicine compliant (MSO-PC structure)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Structure</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">MSO (Management Services Organization) for operational excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">PC (Professional Corporation) with physician ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Comprehensive malpractice insurance coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">EIN and NPI registered</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our History</h3>
            <p className="text-gray-700 text-center max-w-4xl mx-auto">
              Founded with a vision to bring specialized wound care to the Pennsylvania community, Stratum Wound Care
              emerged from years of experience in home health and community-based medicine. Our founders recognized
              the critical need for accessible, high-quality wound care services that combine advanced medical treatments
              with compassionate patient support. Today, we serve communities across Pennsylvania, maintaining our
              commitment to excellence while expanding our reach to help more patients achieve optimal healing outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community of Healing</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Experience the difference that compassionate, expert wound care can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/careers"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors border-2 border-white"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
