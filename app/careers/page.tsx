'use client';

import { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // In production, use FormData to handle file upload
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: '',
          resume: null,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openPositions = [
    {
      title: "Registered Nurse (RN)",
      type: "Full-Time",
      location: "Orange County, PA",
      description: "Experienced RN with wound care certification to provide direct patient care and treatment",
      requirements: [
        "Active PA RN license",
        "2+ years wound care experience preferred",
        "CWCN certification a plus",
        "Excellent communication skills"
      ]
    },
    {
      title: "Licensed Practical Nurse (LPN)",
      type: "Full-Time",
      location: "Orange County, PA",
      description: "LPN to assist with wound care treatments and patient education under RN supervision",
      requirements: [
        "Active PA LPN license",
        "1+ year clinical experience",
        "Wound care interest",
        "Team player attitude"
      ]
    },
    {
      title: "Nurse Practitioner (NP)",
      type: "Full-Time",
      location: "Orange County, PA",
      description: "Board-certified NP to provide comprehensive wound care and collaborate with physicians",
      requirements: [
        "Active PA NP license",
        "Board certification",
        "Prescriptive authority",
        "Wound care experience preferred"
      ]
    },
    {
      title: "Clinical Director",
      type: "Full-Time",
      location: "Orange County, PA",
      description: "Leadership role overseeing clinical operations and ensuring quality patient care",
      requirements: [
        "Advanced practice license (NP or PA)",
        "5+ years clinical leadership",
        "Wound care expertise",
        "Strong organizational skills"
      ]
    },
    {
      title: "Medical Billing Specialist",
      type: "Full-Time",
      location: "Orange County, PA",
      description: "Billing specialist with healthcare experience to manage insurance claims and payments",
      requirements: [
        "Medical billing certification",
        "2+ years healthcare billing",
        "Knowledge of Medicare/Medicaid",
        "Attention to detail"
      ]
    },
    {
      title: "Patient Care Coordinator",
      type: "Full-Time",
      location: "Orange County, PA",
      description: "Coordinate patient appointments, insurance verification, and administrative support",
      requirements: [
        "Healthcare office experience",
        "Excellent customer service",
        "Scheduling software proficiency",
        "Multitasking ability"
      ]
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-primary-100">
            Build a rewarding career in wound care and make a difference in patients' lives
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team dedicated to excellence in patient care and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Mission-Driven",
                description: "Work in a purpose-driven environment focused on healing and limb preservation"
              },
              {
                icon: "📚",
                title: "Continuous Education",
                description: "Access to training, certifications, and professional development opportunities"
              },
              {
                icon: "👥",
                title: "Collaborative Culture",
                description: "Work alongside experienced professionals in a supportive team environment"
              },
              {
                icon: "💰",
                title: "Competitive Benefits",
                description: "Comprehensive benefits package including health insurance and retirement"
              },
              {
                icon: "⚖️",
                title: "Work-Life Balance",
                description: "Reasonable hours and flexible scheduling to support your personal life"
              },
              {
                icon: "🚀",
                title: "Growth Opportunities",
                description: "Career advancement paths and leadership development programs"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-primary-50 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
                        {position.type}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        📍 {position.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                      setFormData({ ...formData, position: position.title });
                    }}
                    className="mt-4 lg:mt-0 bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-700 mb-4">{position.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits & Perks</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health & Wellness</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Comprehensive health insurance (medical, dental, vision)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Life and disability insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Employee assistance program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Wellness programs and gym discounts</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Competitive salary commensurate with experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">401(k) retirement plan with employer match</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Performance bonuses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Mileage reimbursement for eligible positions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Time Off</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Generous paid time off (PTO)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Paid holidays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Sick leave</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Flexible scheduling options</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Continuing education reimbursement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Certification support and bonuses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Conference and training attendance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Mentorship programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply Now</h2>
            <p className="text-gray-600 mb-8">
              Submit your application and resume to join our team. We review all applications carefully
              and will contact qualified candidates for interviews.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Position of Interest *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((pos, index) => (
                      <option key={index} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Relevant Experience *
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 5 years in wound care nursing"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Resume * (PDF or Word document)
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {formData.resume && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected: {formData.resume.name}
                  </p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 mr-3"
                />
                <p className="text-sm text-gray-700">
                  I authorize Stratum Wound Care to review my application and contact me regarding
                  employment opportunities. *
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ Application submitted successfully! We'll review your materials and contact you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold">
                    ✗ There was an error submitting your application. Please email your resume to careers@stratumwoundcare.com.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Equal Opportunity */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600">
              Stratum Wound Care is an Equal Opportunity Employer. We celebrate diversity and are committed
              to creating an inclusive environment for all employees. All qualified applicants will receive
              consideration for employment without regard to race, color, religion, sex, sexual orientation,
              gender identity, national origin, disability, or veteran status.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
