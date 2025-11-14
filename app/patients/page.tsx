'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Icon from '@/components/Icon';

export default function PatientsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const insuranceCards = [
    {
      icon: 'hospital',
      title: 'Medicare',
      description: 'We accept all Medicare plans including Medicare Advantage'
    },
    {
      icon: 'shield',
      title: 'Medicaid',
      description: 'PA Medicaid and Medical Assistance programs accepted'
    },
    {
      icon: 'briefcase',
      title: 'Private Insurance',
      description: 'Most major private insurance plans accepted'
    }
  ];

  const checklist = [
    'Photo ID and insurance card(s)',
    'List of current medications and dosages',
    'Recent medical records and test results',
    'Referral documentation (if required by insurance)',
    'Completed new patient forms (download below)',
    'List of allergies',
    'Medical history including previous surgeries'
  ];

  const downloadableForms = [
    {
      title: 'New Patient Registration Form',
      description: 'Basic demographic and insurance information'
    },
    {
      title: 'Medical History Form',
      description: 'Comprehensive health history questionnaire'
    },
    {
      title: 'HIPAA Authorization Form',
      description: 'Privacy practices and authorization'
    },
    {
      title: 'Consent for Treatment Form',
      description: 'Treatment consent and acknowledgment'
    }
  ];

  const faqs = [
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
  ];

  return (
    <PageTransition>
      <div style={{ paddingTop: '130px' }}>
        {/* Header Section */}
        <section style={{
          backgroundColor: '#111827',
          color: '#ffffff',
          paddingTop: isMobile ? '3rem' : '4rem',
          paddingBottom: isMobile ? '3rem' : '4rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            paddingRight: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem')
          }}>
            <h1 style={{
              fontSize: isMobile ? '2.25rem' : '3rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Patient Information
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#d1d5db',
              maxWidth: '800px'
            }}>
              Everything you need to know about your care at Stratum Wound Care
            </p>
          </div>
        </section>

        {/* Insurance Section */}
        <section style={{
          backgroundColor: '#ffffff',
          paddingTop: isMobile ? '3rem' : '4rem',
          paddingBottom: isMobile ? '3rem' : '4rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            paddingRight: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem')
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.875rem' : '2.25rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Accepted Insurance
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {insuranceCards.map((card, index) => (
                <div key={index} style={{
                  backgroundColor: '#f9fafb',
                  padding: '2rem',
                  borderRadius: '0.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Icon type={card.icon as any} size={64} color="#6b7280" />
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '0.75rem'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ color: '#4b5563' }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              backgroundColor: '#f9fafb',
              padding: '2rem',
              borderRadius: '0.5rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1.5rem'
              }}>
                Major Insurance Providers We Accept
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '1rem',
                color: '#4b5563'
              }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Aetna</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Blue Cross Blue Shield</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Cigna</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Highmark</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Humana</li>
                </ul>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Independence Blue Cross</li>
                  <li style={{ marginBottom: '0.5rem' }}>• UnitedHealthcare</li>
                  <li style={{ marginBottom: '0.5rem' }}>• WellSpan</li>
                  <li style={{ marginBottom: '0.5rem' }}>• UPMC</li>
                  <li style={{ marginBottom: '0.5rem' }}>• And many others</li>
                </ul>
              </div>
              <p style={{ marginTop: '1.5rem', color: '#4b5563' }}>
                Don't see your insurance listed?{' '}
                <Link href="/contact" style={{ color: '#2563eb', fontWeight: '600' }}>
                  Contact us to verify
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* New Patient Information */}
        <section style={{
          backgroundColor: '#f9fafb',
          paddingTop: isMobile ? '3rem' : '4rem',
          paddingBottom: isMobile ? '3rem' : '4rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            paddingRight: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem')
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.875rem' : '2.25rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              New Patient Information
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '2rem'
            }}>
              <div style={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1.5rem'
                }}>
                  What to Bring to Your First Appointment
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {checklist.map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '0.75rem'
                    }}>
                      <span style={{ color: '#2563eb', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                      <span style={{ color: '#4b5563' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1.5rem'
                }}>
                  Downloadable Forms
                </h3>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                  Complete these HIPAA-compliant forms before your visit to expedite check-in:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {downloadableForms.map((form, index) => (
                    <div key={index} style={{
                      border: '1px solid #e5e7eb',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      transition: 'border-color 0.3s'
                    }}>
                      <h4 style={{
                        fontWeight: '600',
                        color: '#111827',
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Icon type="fileText" size={20} color="#6b7280" />
                        {form.title}
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        marginBottom: '0.75rem'
                      }}>
                        {form.description}
                      </p>
                      <button style={{
                        color: '#2563eb',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}>
                        Download PDF →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Portal */}
        <section style={{
          backgroundColor: '#ffffff',
          paddingTop: isMobile ? '3rem' : '4rem',
          paddingBottom: isMobile ? '3rem' : '4rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            paddingRight: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem')
          }}>
            <div style={{
              backgroundColor: '#111827',
              borderRadius: '1rem',
              padding: isMobile ? '2rem' : '3rem',
              color: '#ffffff',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: isMobile ? '1.875rem' : '2.25rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Patient Portal
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                color: '#d1d5db',
                marginBottom: '2rem',
                maxWidth: '700px',
                margin: '0 auto 2rem'
              }}>
                Access your test results, visit summaries, and medical records securely online
              </p>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <button style={{
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}>
                  Login to Portal
                </button>
                <button style={{
                  backgroundColor: '#374151',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: '2px solid #ffffff',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}>
                  Register for Portal
                </button>
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#d1d5db',
                marginTop: '1.5rem'
              }}>
                Secure, HIPAA-compliant 24/7 access to your health information
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{
          backgroundColor: '#f9fafb',
          paddingTop: isMobile ? '3rem' : '4rem',
          paddingBottom: isMobile ? '3rem' : '4rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            paddingRight: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem')
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.875rem' : '2.25rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Frequently Asked Questions
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '0.75rem'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Billing Guidance */}
        <section style={{
          backgroundColor: '#ffffff',
          paddingTop: isMobile ? '3rem' : '4rem',
          paddingBottom: isMobile ? '3rem' : '4rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            paddingRight: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem')
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.875rem' : '2.25rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Billing & Financial Information
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '2rem'
            }}>
              <div style={{
                backgroundColor: '#f9fafb',
                padding: '2rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1rem'
                }}>
                  Understanding Your Bill
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem' }}>•</span>
                    <span style={{ color: '#4b5563' }}>We file claims directly with your insurance</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem' }}>•</span>
                    <span style={{ color: '#4b5563' }}>You are responsible for copays, deductibles, and coinsurance</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem' }}>•</span>
                    <span style={{ color: '#4b5563' }}>Statements are mailed monthly for any patient balance</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem' }}>•</span>
                    <span style={{ color: '#4b5563' }}>Multiple payment options available (check, card, online)</span>
                  </li>
                </ul>
              </div>

              <div style={{
                backgroundColor: '#f9fafb',
                padding: '2rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1rem'
                }}>
                  Financial Assistance
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem' }}>•</span>
                    <span style={{ color: '#4b5563' }}>Payment plans available for qualifying patients</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem' }}>•</span>
                    <span style={{ color: '#4b5563' }}>Financial counseling services offered</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem' }}>•</span>
                    <span style={{ color: '#4b5563' }}>We accept CareCredit and medical financing</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem' }}>•</span>
                    <span style={{ color: '#4b5563' }}>
                      <Link href="/contact" style={{ color: '#2563eb', fontWeight: '600' }}>
                        Contact our billing team
                      </Link>
                      {' '}for assistance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          backgroundColor: '#111827',
          color: '#ffffff',
          paddingTop: isMobile ? '3rem' : '4rem',
          paddingBottom: isMobile ? '3rem' : '4rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            paddingRight: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.875rem' : '2.25rem',
              fontWeight: '700',
              marginBottom: '1.5rem'
            }}>
              Have More Questions?
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#d1d5db',
              marginBottom: '2rem',
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}>
              Our team is here to help you understand your care and answer any questions
            </p>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <Link
                href="/contact"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 0.3s'
                }}
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                style={{
                  backgroundColor: '#374151',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: '2px solid #ffffff',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 0.3s'
                }}
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
