'use client';

import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Icon from '@/components/Icon';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { colors } from '@/lib/colors';

export default function ContactPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    appointmentType: '',
    insurance: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredContact: 'email',
          appointmentType: '',
          insurance: '',
          message: '',
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
    <PageTransition>
    <div style={{ paddingTop: '130px' }}>
      {/* Hero Header Section */}
      <section style={{
        backgroundColor: colors.primary.navy,
        paddingTop: isMobile ? '3rem' : '4rem',
        paddingBottom: isMobile ? '3rem' : '4rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem',
          paddingRight: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem'
        }}>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.5rem',
            color: '#d1d5db',
            maxWidth: '800px'
          }}>
            Get in touch with our team for appointments, questions, or information about our wound care services
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section style={{
        backgroundColor: '#ffffff',
        paddingTop: isMobile ? '3rem' : '4rem',
        paddingBottom: isMobile ? '3rem' : '4rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem',
          paddingRight: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {/* Phone */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="phone" size={40} color="#6b7280" />
              </div>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Phone
              </h3>
              <p style={{
                color: '#374151',
                fontSize: isMobile ? '0.875rem' : '1rem',
                lineHeight: '1.6'
              }}>
                <a href="tel:862-306-6367" style={{ color: '#111827', fontWeight: '600' }}>(862) 306-6367</a>
              </p>
            </div>

            {/* Email */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="mail" size={40} color="#6b7280" />
              </div>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Email
              </h3>
              <p style={{
                color: '#374151',
                fontSize: isMobile ? '0.875rem' : '1rem',
                lineHeight: '1.6',
                marginBottom: '0.5rem'
              }}>
                <a href="mailto:info@stratumwoundcare.com" style={{ color: '#111827', fontWeight: '600', textDecoration: 'underline' }}>
                  info@stratumwoundcare.com
                </a>
              </p>
              <p style={{
                color: '#374151',
                fontSize: isMobile ? '0.875rem' : '1rem',
                lineHeight: '1.6'
              }}>
                <a href="mailto:referrals@stratumwoundcare.com" style={{ color: '#111827', fontWeight: '600', textDecoration: 'underline' }}>
                  referrals@stratumwoundcare.com
                </a>
              </p>
            </div>

            {/* Location */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="mapPin" size={40} color="#6b7280" />
              </div>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Location
              </h3>
              <p style={{
                color: '#374151',
                fontSize: isMobile ? '0.875rem' : '1rem',
                lineHeight: '1.6',
                marginBottom: '0.5rem'
              }}>
                55R Broadway<br />
                Bangor, PA 18013
              </p>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=55R+Broadway+Bangor+PA+18013"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                Get Directions →
              </Link>
            </div>

            {/* Office Hours */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="clock" size={40} color="#6b7280" />
              </div>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Office Hours
              </h3>
              <p style={{
                color: '#374151',
                fontSize: isMobile ? '0.875rem' : '1rem',
                lineHeight: '1.6'
              }}>
                Mon - Fri: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Contact Form Section */}
      <section style={{
        backgroundColor: '#f9fafb',
        paddingTop: isMobile ? '3rem' : '4rem',
        paddingBottom: isMobile ? '3rem' : '4rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem',
          paddingRight: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
            gap: isMobile ? '3rem' : '4rem',
            alignItems: 'start'
          }}>
            {/* Left: Contact Form */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: isMobile ? '2rem' : '3rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
            }}>
              <h2 style={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Schedule an Appointment
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#6b7280',
                marginBottom: '2rem'
              }}>
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Name */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#111827'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                  />
                </div>

                {/* Email & Phone Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#111827'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#111827'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                    />
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#111827'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>

                {/* Appointment Type & Insurance Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Appointment Type
                    </label>
                    <select
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#111827'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                    >
                      <option value="">Select Type</option>
                      <option value="new-patient">New Patient</option>
                      <option value="follow-up">Follow-Up</option>
                      <option value="consultation">Consultation</option>
                      <option value="telehealth">Telehealth</option>
                    </select>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleChange}
                      placeholder="e.g., Medicare, Blue Cross"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#111827'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your wound care needs or questions..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#111827'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: colors.gradients.blueGreen,
                    color: '#ffffff',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    border: `2px solid ${colors.primary.blue}`,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    opacity: isSubmitting ? 0.7 : 1,
                    boxShadow: `0 4px 12px rgba(8, 145, 220, 0.3)`
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = colors.secondary.lightBlue;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(8, 145, 220, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.gradients.blueGreen;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(8, 145, 220, 0.3)';
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: '#d1fae5',
                    border: '1px solid #6ee7b7',
                    borderRadius: '8px',
                    color: '#065f46',
                    fontSize: '0.875rem'
                  }}>
                    Thank you! We've received your request and will contact you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: '#fee2e2',
                    border: '1px solid #fca5a5',
                    borderRadius: '8px',
                    color: '#991b1b',
                    fontSize: '0.875rem'
                  }}>
                    Sorry, there was an error submitting your request. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Right: Additional Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '2rem' : '3rem' }}>
              {/* Interactive Map */}
              <div>
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1.5rem'
                }}>
                  Visit Our Clinic
                </h3>
                <div style={{
                  width: '100%',
                  height: isMobile ? '250px' : '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5!2d-75.2063!3d40.8653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c43e5d5c5d5d5d%3A0x5d5d5d5d5d5d5d5d!2s55R%20Broadway%2C%20Bangor%2C%20PA%2018013!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Stratum Wound Care Location"
                  />
                </div>
                <p style={{
                  marginTop: '1rem',
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  textAlign: 'center'
                }}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=55R+Broadway+Bangor+PA+18013"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: colors.primary.blue,
                      textDecoration: 'underline',
                      fontWeight: '600'
                    }}
                  >
                    Open in Google Maps →
                  </a>
                </p>
              </div>

              {/* Telehealth Section */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '2rem' : '2.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
              }} id="telehealth">
                <div style={{ marginBottom: '1rem' }}>
                  <Icon type="monitor" size={48} color="#6b7280" />
                </div>
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}>
                  Telehealth Visits
                </h3>
                <p style={{
                  color: '#374151',
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  Schedule a virtual consultation with our wound care specialists from the comfort of your home. Available Monday through Friday.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-block',
                    backgroundColor: colors.primary.navy,
                    color: '#ffffff',
                    padding: '0.875rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#374151';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#111827';
                  }}
                >
                  Schedule Telehealth Visit →
                </Link>
              </div>

              {/* Parking & Accessibility */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '2rem' : '2.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
              }}>
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1.5rem'
                }}>
                  Facility Information
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                    <Icon type="car" size={32} color="#6b7280" />
                    <div>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                        Parking
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#6b7280' }}>
                        Free on-site parking available
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                    <Icon type="accessibility" size={32} color="#6b7280" />
                    <div>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                        Accessibility
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#6b7280' }}>
                        Wheelchair accessible facility
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                    <Icon type="bus" size={32} color="#6b7280" />
                    <div>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                        Public Transit
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#6b7280' }}>
                        Bus stop on Main Street
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </PageTransition>
  );
}
