import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Chronic Wound Management",
      description: "Comprehensive care for diabetic, venous, arterial, pressure, and surgical wounds",
      icon: "🩺",
      details: [
        "Diabetic foot ulcers and neuropathic wounds",
        "Venous stasis ulcers and arterial insufficiency wounds",
        "Pressure injuries (bedsores)",
        "Post-surgical wound complications",
        "Non-healing traumatic wounds"
      ]
    },
    {
      title: "Debridement & Advanced Dressings",
      description: "Professional wound cleaning and state-of-the-art dressing applications",
      icon: "🔬",
      details: [
        "Sharp surgical debridement",
        "Enzymatic and autolytic debridement",
        "Advanced moisture-retentive dressings",
        "Antimicrobial and silver dressings",
        "Foam, hydrocolloid, and alginate dressings"
      ]
    },
    {
      title: "Negative Pressure Wound Therapy (NPWT)",
      description: "Advanced vacuum-assisted closure for complex wounds",
      icon: "⚡",
      details: [
        "Portable and stationary NPWT systems",
        "Wound bed preparation for closure",
        "Enhanced granulation tissue formation",
        "Reduced healing time",
        "Home NPWT management and education"
      ]
    },
    {
      title: "Grafting Procedures",
      description: "Skin grafting and bioengineered tissue applications",
      icon: "🧬",
      details: [
        "Autografts and allografts",
        "Bioengineered skin substitutes",
        "Cellular tissue products",
        "Split-thickness skin grafts",
        "Post-graft wound care"
      ]
    },
    {
      title: "Hyperbaric Oxygen Therapy (HBOT)",
      description: "Referral coordination for hyperbaric treatment when indicated",
      icon: "💨",
      details: [
        "Assessment for HBOT candidacy",
        "Coordination with hyperbaric facilities",
        "Pre and post-HBOT wound management",
        "Insurance authorization assistance",
        "Comprehensive treatment planning"
      ]
    },
    {
      title: "Infection Control & Limb Preservation",
      description: "Aggressive infection management to prevent amputations",
      icon: "🛡️",
      details: [
        "Bacterial culture and sensitivity testing",
        "Targeted antibiotic therapy",
        "Biofilm management",
        "Osteomyelitis treatment coordination",
        "Multi-disciplinary limb salvage programs"
      ]
    },
    {
      title: "Patient Education",
      description: "Comprehensive training for at-home wound care success",
      icon: "📚",
      details: [
        "Proper wound cleaning techniques",
        "Dressing change instructions",
        "Nutrition for wound healing",
        "Offloading and pressure relief",
        "Prevention of recurrence"
      ]
    },
    {
      title: "Vascular Assessment",
      description: "Evaluation of blood flow and circulatory issues",
      icon: "❤️",
      details: [
        "Ankle-brachial index (ABI) testing",
        "Doppler ultrasound coordination",
        "Arterial and venous insufficiency assessment",
        "Referral to vascular surgery when needed",
        "Compression therapy management"
      ]
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100">
            Comprehensive wound care solutions using advanced treatments and evidence-based protocols
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Wound Care Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial assessment to complete healing, we provide comprehensive care tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="text-5xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Treatment Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description: "Comprehensive wound evaluation and medical history review"
              },
              {
                step: "2",
                title: "Treatment Plan",
                description: "Customized care plan based on wound type and patient needs"
              },
              {
                step: "3",
                title: "Active Treatment",
                description: "Regular treatments with ongoing monitoring and adjustments"
              },
              {
                step: "4",
                title: "Follow-up Care",
                description: "Post-healing monitoring and prevention education"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Wound Type Specializations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: "Diabetic Wounds",
                description: "Expert care for diabetic foot ulcers and complications",
                stats: "80% limb salvage rate"
              },
              {
                type: "Pressure Ulcers",
                description: "Stage I-IV pressure injury management",
                stats: "Advanced healing protocols"
              },
              {
                type: "Surgical Wounds",
                description: "Post-operative wound complications and dehiscence",
                stats: "Fast-track healing"
              },
              {
                type: "Venous Ulcers",
                description: "Compression therapy and advanced treatments",
                stats: "Recurrence prevention"
              }
            ].map((specialty, index) => (
              <div key={index} className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty.type}</h3>
                <p className="text-gray-700 mb-3 text-sm">{specialty.description}</p>
                <p className="text-primary-600 font-semibold text-sm">{specialty.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Advanced Technology & Equipment</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Diagnostic Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Doppler ultrasound</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Wound measurement systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Bacterial culture testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>ABI testing equipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Treatment Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>NPWT devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Surgical debridement tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Compression therapy systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Offloading devices</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Products</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Bioengineered tissues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Antimicrobial dressings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Growth factor products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Cellular matrices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contact us today to schedule a comprehensive wound assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/patients"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors border-2 border-white"
            >
              Patient Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
