'use client';

import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { colors } from '@/lib/colors';

export default function CareersPage() {
  const [windowWidth, setWindowWidth] = useState(0);
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
            Start Your Career in Wound Management
          </h1>
          <p style={{
            fontSize: isMobile ? '1.25rem' : isTablet ? '1.5rem' : '1.75rem',
            color: '#ffffff',
            fontWeight: '600',
            marginBottom: '0.75rem'
          }}>
            Empowerment • Partnership • Results
          </p>
          <p style={{
            fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.5rem',
            color: '#d1d5db',
            maxWidth: '900px'
          }}>
            Physicians and Advanced Practitioners have built successful practices with Stratum
          </p>
        </div>
      </section>

      {/* Why Join Stratum - Features Grid */}
      <section style={{
        backgroundColor: '#ffffff',
        paddingTop: isMobile ? '3rem' : '5rem',
        paddingBottom: isMobile ? '3rem' : '5rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem',
          paddingRight: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Why Join Stratum Wound Care
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: isMobile ? '2.5rem' : '3.5rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Build a rewarding career with flexibility, impact, and professional growth
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '2rem' : '2.5rem'
          }}>
            {/* Choose Your Own Schedule */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}><Icon type="calendar" size={48} color="#6b7280" /></div>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Choose Your Own Schedule
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>
                Flexibility & Autonomy
              </p>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                Join our team and establish an individualized practice with complete flexibility, autonomy, and support. We provide the structure; you set the schedule.
              </p>
            </div>

            {/* Improve Patient Outcomes */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}><Icon type="heart" size={48} color="#6b7280" /></div>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Improve Patient Outcomes
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>
                Meaningful Impact
              </p>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                Partnering with post-acute care facilities to help heal patients, prevent unnecessary hospitalizations, and improve the quality of life for seniors.
              </p>
            </div>

            {/* Become an Expert Clinician */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}><Icon type="graduationCap" size={48} color="#6b7280" /></div>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Become an Expert Clinician
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>
                Advanced Training
              </p>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                We provide comprehensive wound care training and opportunities for professional development, including Stratum's specialized training programs, to continue enhancing your clinical knowledge.
              </p>
            </div>

            {/* Focus on Post-Acute Care */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}><Icon type="hospital" size={48} color="#6b7280" /></div>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Focus on Post-Acute Care
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>
                Specialized Practice
              </p>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                Our clinicians treat complex and challenging chronic wounds at skilled nursing facilities, long-term acute care hospitals, and assisted living facilities.
              </p>
            </div>

            {/* Earn a Competitive Salary */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}><Icon type="dollarSign" size={48} color="#6b7280" /></div>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Earn a Competitive Salary
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>
                Financial Stability
              </p>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                W2 or independent contractor physicians earn competitive salaries plus benefits for flexible work weeks. Part-time opportunities are also available. No call, nights, or weekends.
              </p>
            </div>

            {/* Reduced Administrative Burden */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}><Icon type="clipboard" size={48} color="#6b7280" /></div>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Reduced Administrative Burden
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>
                Support System
              </p>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                Our proprietary EMR and dedicated administrative support staff handle the logistics, allowing you to focus exclusively on quality patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section style={{
        backgroundColor: '#ffffff',
        paddingTop: isMobile ? '3rem' : '5rem',
        paddingBottom: isMobile ? '3rem' : '5rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem',
          paddingRight: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Apply Now
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: isMobile ? '2.5rem' : '3.5rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Submit your application with resume upload and join our team
          </p>

          <div style={{
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            padding: isMobile ? '2rem' : '3rem',
            border: '1px solid #e5e7eb'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
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
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Position Interested In *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a position</option>
                  <option value="physician">Physician</option>
                  <option value="nurse-practitioner">Nurse Practitioner (NP)</option>
                  <option value="registered-nurse">Registered Nurse (RN)</option>
                  <option value="licensed-practical-nurse">Licensed Practical Nurse (LPN)</option>
                  <option value="billing-specialist">Billing Specialist</option>
                  <option value="clinical-director">Clinical Director</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Years of Experience *
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 5 years"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us why you'd like to join Stratum Wound Care..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Upload Resume *
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    backgroundColor: '#ffffff'
                  }}
                />
                <p style={{
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  marginTop: '0.5rem'
                }}>
                  Accepted formats: PDF, DOC, DOCX (Max 10MB)
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  backgroundColor: colors.primary.navy,
                  color: '#ffffff',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.6 : 1
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>

              {submitStatus === 'success' && (
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#d1fae5',
                  border: '1px solid #6ee7b7',
                  borderRadius: '8px'
                }}>
                  <p style={{ color: '#065f46', fontWeight: '600' }}>
                    ✓ Application submitted successfully! We'll review your application and contact you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#fee2e2',
                  border: '1px solid #fca5a5',
                  borderRadius: '8px'
                }}>
                  <p style={{ color: '#991b1b', fontWeight: '600' }}>
                    ✗ There was an error submitting your application. Please try again or email us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          paddingRight: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : isTablet ? '2.25rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Questions About Joining Our Team?
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
            color: '#d1d5db',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Contact us to learn more about career opportunities at Stratum Wound Care
          </p>
          <Link
            href="/contact"
            style={{
              background: colors.gradients.blueGreen,
              color: '#ffffff',
              padding: isMobile ? '0.875rem 2rem' : '1rem 2.5rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: isMobile ? '1rem' : '1.125rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s',
              border: `2px solid ${colors.primary.blue}`,
              boxShadow: `0 4px 12px rgba(8, 145, 220, 0.3)`
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
