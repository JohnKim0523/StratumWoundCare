'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { colors } from '@/lib/colors';

export default function AboutPage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

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
            About Stratum Wound Care
          </h1>
          <p style={{
            fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.5rem',
            color: '#d1d5db',
            maxWidth: '800px'
          }}>
            Transforming wound care through clinical excellence, compassionate service, and unwavering commitment to patient outcomes
          </p>
        </div>
      </section>

      {/* Overview & Mission Section */}
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
            gap: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
            alignItems: 'start'
          }}>
            {/* Left: Overview */}
            <div>
              <h2 style={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1.5rem'
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#374151',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                Stratum Wound Care is a premier wound care clinic serving patients throughout Pennsylvania. Our clinic operates under an MSO-PC (Management Services Organization - Professional Corporation) model, ensuring the highest standards of both clinical care and operational excellence.
              </p>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#374151',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                Providing advanced wound healing and limb preservation to help patients stay safe, healthy, and home. We are committed to delivering evidence-based, compassionate care that improves outcomes and enhances quality of life for every patient we serve.
              </p>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#374151',
                lineHeight: '1.8'
              }}>
                With deep roots in home health and community-based wound care, our team brings decades of combined experience in treating complex wounds. We understand that every patient's healing journey is unique, and we tailor our approach to meet individual needs.
              </p>
            </div>

            {/* Right: Image Placeholder */}
            <div>
              <ImagePlaceholder
                height={isMobile ? '300px' : '450px'}
                text="Our Team of Healthcare Professionals"
                subtext="Dedicated wound care specialists committed to your healing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
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
          <ImagePlaceholder
            height={isMobile ? '300px' : isTablet ? '400px' : '500px'}
            text="Our State-of-the-Art Facility"
            subtext="Modern equipment and comfortable patient environment"
          />
        </div>
      </section>

      {/* Leadership - Mark Hoffner Section */}
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
            fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: isMobile ? '2rem' : '3rem',
            textAlign: 'center'
          }}>
            Leadership
          </h2>

          {/* Mark Hoffner Bio */}
          <div style={{
            backgroundColor: '#f9fafb',
            borderRadius: '16px',
            padding: isMobile ? '2rem' : '3rem',
            marginBottom: isMobile ? '3rem' : '4rem',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile || isTablet ? '1fr' : '300px 1fr',
              gap: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
              alignItems: 'start'
            }}>
              {/* Photo Placeholder */}
              <div style={{
                backgroundColor: '#e5e7eb',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px',
                border: '2px dashed #9ca3af'
              }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <p style={{
                  color: '#6b7280',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: '600'
                }}>
                  [Mark Hoffner Photo]
                </p>
                <p style={{
                  color: '#9ca3af',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}>
                  Professional headshot
                </p>
              </div>

              {/* Bio Content */}
              <div>
                <h3 style={{
                  fontSize: isMobile ? '1.75rem' : '2rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  Mark Hoffner
                </h3>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#6b7280',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}>
                  Founder & Chief Executive Officer
                </p>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#374151',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem'
                }}>
                  Mark Hoffner leads Stratum Wound Care with a commitment to turning clinical excellence into tangible patient benefits. Drawing on extensive hands-on experience in wound management, infection prevention, and coordinated care, he guides a multisite network focused on delivering compassionate, high-quality outcomes.
                </p>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#374151',
                  lineHeight: '1.8'
                }}>
                  As an executive, Mark builds and mentors cross-functional teams, standardizes best practices, and shapes policies that support sustainable growth and resilient operations. He champions patient-centered care, clinician development, and strategic collaboration to elevate the standard of wound care.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div style={{
            backgroundColor: colors.primary.navy,
            borderRadius: '16px',
            padding: isMobile ? '2rem' : '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '1.5rem'
            }}>
              Our Vision
            </h3>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#d1d5db',
              lineHeight: '1.8',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              To transform wound care into a consistently restorative experience where every patient achieves optimal healing and quality of life. By integrating innovative clinical concepts with data-driven operations, we will expand access to exceptional wound care across multiple sites, empower care teams with the tools and training they need, and forge lasting partnerships with patients, families, and providers. Our aim is to set new benchmarks for outcomes, compassion, and value in wound care, today and for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Team Section */}
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
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Our Clinical Team
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: isMobile ? '2rem' : '3rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Meet the experienced professionals dedicated to your care
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {[
              {
                title: "Medical Director",
                role: "Board-Certified Physician",
                description: "Specialized in wound care and limb preservation with over 15 years of experience"
              },
              {
                title: "Clinical Director",
                role: "Nurse Practitioner",
                description: "Expert in advanced wound management and patient education"
              },
              {
                title: "Nursing Team Lead",
                role: "Registered Nurse",
                description: "Coordinates patient care and clinical protocols"
              },
              {
                title: "Podiatry Partner",
                role: "DPM Specialist",
                description: "Focuses on diabetic foot care and limb preservation"
              },
              {
                title: "Endocrinology Partner",
                role: "MD, FACE",
                description: "Manages metabolic factors affecting wound healing"
              },
              {
                title: "Support Team",
                role: "Clinical & Administrative",
                description: "Dedicated staff ensuring seamless patient experience"
              }
            ].map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: isMobile ? '1.5rem' : '2rem',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: '1rem',
                  border: '2px dashed #9ca3af'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: isMobile ? '1.125rem' : '1.25rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  {member.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {member.role}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#374151',
                  lineHeight: '1.6'
                }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications Section */}
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
          <h2 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: isMobile ? '2rem' : '3rem',
            textAlign: 'center'
          }}>
            Compliance & Certifications
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '1fr 1fr',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {/* Regulatory Compliance */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1.5rem'
              }}>
                Regulatory Compliance
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "CMS (Centers for Medicare & Medicaid Services) certified",
                  "Pennsylvania Department of Health licensed",
                  "HIPAA compliant with secure data practices",
                  "Corporate practice of medicine compliant (MSO-PC structure)",
                  "EIN and NPI registered",
                  "Comprehensive malpractice insurance coverage"
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'start' }}>
                    <span style={{
                      color: '#374151',
                      fontSize: '1.25rem',
                      marginRight: '0.75rem',
                      flexShrink: 0
                    }}>✓</span>
                    <span style={{
                      color: '#374151',
                      fontSize: isMobile ? '0.875rem' : '1rem',
                      lineHeight: '1.6'
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <p style={{
                  color: '#6b7280',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6'
                }}>
                  Our MSO (Management Services Organization) and PC (Professional Corporation) structure operates under a Management Services Agreement (MSA), ensuring physician ownership of clinical operations while maintaining operational excellence and compliance with Pennsylvania corporate practice of medicine laws.
                </p>
              </div>
            </div>

            {/* Business Structure */}
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1.5rem'
              }}>
                Business Structure
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "MSO (Management Services Organization) for operational excellence",
                  "PC (Professional Corporation) with physician ownership",
                  "Management Services Agreement (MSA) framework",
                  "Business liability coverage and risk management"
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'start' }}>
                    <span style={{
                      color: '#374151',
                      fontSize: '1.25rem',
                      marginRight: '0.75rem',
                      flexShrink: 0
                    }}>✓</span>
                    <span style={{
                      color: '#374151',
                      fontSize: isMobile ? '0.875rem' : '1rem',
                      lineHeight: '1.6'
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <p style={{
                  color: '#6b7280',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6'
                }}>
                  Majority control via MSO ensures operational efficiency while physician ownership of the PC maintains clinical autonomy and compliance with Pennsylvania corporate practice of medicine regulations.
                </p>
              </div>
            </div>
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
            Join Our Community of Healing
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
            color: '#d1d5db',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Experience the difference that compassionate, expert wound care can make
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
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
