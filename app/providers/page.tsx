'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProvidersPage() {
  const [formData, setFormData] = useState({
    providerName: '',
    facility: '',
    npiNumber: '',
    phone: '',
    email: '',
    patientName: '',
    patientDOB: '',
    patientMRN: '',
    woundType: '',
    woundLocation: '',
    duration: '',
    currentTreatment: '',
    medicalHistory: '',
    urgency: 'routine',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          providerName: '',
          facility: '',
          npiNumber: '',
          phone: '',
          email: '',
          patientName: '',
          patientDOB: '',
          patientMRN: '',
          woundType: '',
          woundLocation: '',
          duration: '',
          currentTreatment: '',
          medicalHistory: '',
          urgency: 'routine',
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

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Provider Referrals</h1>
          <p className="text-xl text-primary-100">
            Secure HIPAA-compliant referral portal for healthcare providers
          </p>
        </div>
      </section>

      {/* Referral Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Referring Providers</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Thank you for trusting Stratum Wound Care with your patients. We are committed to providing
              comprehensive wound management and keeping you informed throughout the treatment process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-bold text-gray-900 mb-2">Easy Referral</h3>
                <p className="text-sm text-gray-700">Secure online submission</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-700">24-48 hour contact time</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-sm text-gray-700">Ongoing progress reports</p>
              </div>
            </div>
          </div>

          {/* Referral Form */}
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Referral Form</h3>
              <p className="text-gray-600">
                🔒 HIPAA-compliant encrypted submission
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Provider Information */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Provider Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Provider Name *
                    </label>
                    <input
                      type="text"
                      name="providerName"
                      value={formData.providerName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Facility/Practice Name *
                    </label>
                    <input
                      type="text"
                      name="facility"
                      value={formData.facility}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      NPI Number *
                    </label>
                    <input
                      type="text"
                      name="npiNumber"
                      value={formData.npiNumber}
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
                  <div className="md:col-span-2">
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
                </div>
              </div>

              {/* Patient Information */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Patient Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="patientDOB"
                      value={formData.patientDOB}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Medical Record Number
                    </label>
                    <input
                      type="text"
                      name="patientMRN"
                      value={formData.patientMRN}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Urgency Level *
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="routine">Routine</option>
                      <option value="urgent">Urgent (within 1 week)</option>
                      <option value="emergent">Emergent (within 24 hours)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Wound Information */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Wound Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Wound Type *
                    </label>
                    <select
                      name="woundType"
                      value={formData.woundType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Type</option>
                      <option value="diabetic">Diabetic Wound</option>
                      <option value="pressure">Pressure Ulcer</option>
                      <option value="venous">Venous Ulcer</option>
                      <option value="arterial">Arterial Ulcer</option>
                      <option value="surgical">Surgical Wound</option>
                      <option value="traumatic">Traumatic Wound</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Wound Location *
                    </label>
                    <input
                      type="text"
                      name="woundLocation"
                      value={formData.woundLocation}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Right heel, Left lower leg"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Duration of Wound *
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 3 weeks, 2 months"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Treatment
                    </label>
                    <textarea
                      name="currentTreatment"
                      value={formData.currentTreatment}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe current wound care treatments"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Relevant Medical History *
                    </label>
                    <textarea
                      name="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Include diabetes, vascular disease, immunosuppression, medications, etc."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-3"
                  />
                  <p className="text-sm text-gray-700">
                    I confirm that I have obtained appropriate patient authorization to share this information
                    and that this referral is being submitted in compliance with HIPAA regulations. *
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Secure Referral'}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      ✓ Referral submitted successfully! We will contact you within 24-48 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold">
                      ✗ There was an error submitting your referral. Please call us at (555) 123-4567.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Collaboration Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Provider Collaboration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Referring Providers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Timely communication of patient progress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Comprehensive treatment summaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Coordination with your care plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Direct provider-to-provider consultation available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialty Partnerships</h3>
              <p className="text-gray-700 mb-4">
                We maintain strong collaborative relationships with:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Endocrinology specialists</li>
                <li>• Podiatry practices</li>
                <li>• Vascular surgery centers</li>
                <li>• Infectious disease specialists</li>
                <li>• Home health agencies</li>
                <li>• Hospital wound care teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Referring a Patient?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Our provider relations team is here to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Call Provider Line: (555) 123-4567
            </a>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors border-2 border-white"
            >
              General Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
