'use client';

import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import { useState, useEffect } from 'react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { colors } from '@/lib/colors';

export default function ServicesPage() {
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
            Our Services
          </h1>
          <p style={{
            fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.5rem',
            color: '#d1d5db',
            maxWidth: '800px'
          }}>
            Comprehensive wound care solutions using advanced treatments and evidence-based protocols
          </p>
        </div>
      </section>

      {/* Wound Types We Treat */}
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
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Wound Types We Treat
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
            Expert care for a wide range of acute and chronic wounds
          </p>

          {/* Wound Types Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr',
            gap: isMobile ? '2rem' : '2.5rem',
            marginBottom: isMobile ? '3rem' : '4rem'
          }}>
            {[
              {
                title: "Diabetic Foot Ulcers",
                description: "Comprehensive care for diabetic foot complications including neuropathic and ischemic ulcers. Our specialized approach focuses on preventing amputations and promoting healing.",
                hasImage: false
              },
              {
                title: "Pressure Injuries",
                description: "Expert treatment of pressure ulcers (bedsores) at all stages. We provide advanced wound care protocols to heal existing wounds and prevent recurrence.",
                hasImage: false
              },
              {
                title: "Wound Infections/Osteomyelitis(Bone Infection)/Cellulitis",
                description: "Aggressive management of infected wounds with targeted antibiotic therapy, debridement, and advanced wound care techniques.",
                hasImage: true,
                imageSrc: "/Osteomylitis.png"
              },
              {
                title: "Venous Leg Ulcers",
                description: "Specialized treatment for ulcers caused by venous insufficiency, including compression therapy and advanced wound care.",
                hasImage: true,
                imageSrc: "/Venous_Leg_Ulcers.png"
              },
              {
                title: "Arterial Ulcers",
                description: "Management of wounds caused by arterial insufficiency with focus on improving circulation and promoting healing.",
                hasImage: false
              },
              {
                title: "Surgical Wounds",
                description: "Post-operative wound care including management of dehiscence, infection, and delayed healing.",
                hasImage: false
              }
            ].map((wound, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s',
                  cursor: 'default',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  display: wound.hasImage ? 'grid' : 'block',
                  gridTemplateColumns: wound.hasImage && !isMobile ? '45% 1fr' : '1fr',
                  minHeight: wound.hasImage && !isMobile ? '320px' : 'auto'
                }}
              >
                {wound.hasImage ? (
                  <>
                    <div style={{
                      width: '100%',
                      height: isMobile ? '280px' : '100%',
                      position: 'relative',
                      backgroundColor: '#f8f9fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: isMobile ? '1.5rem' : '2rem'
                    }}>
                      <Image
                        src={wound.imageSrc || ''}
                        alt={wound.title}
                        fill
                        style={{ objectFit: 'contain', padding: isMobile ? '1.5rem' : '2rem' }}
                      />
                    </div>
                    <div style={{ padding: isMobile ? '1.5rem' : '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h3 style={{
                        fontSize: isMobile ? '1.25rem' : '1.75rem',
                        fontWeight: 'bold',
                        color: '#111827',
                        marginBottom: '1rem'
                      }}>
                        {wound.title}
                      </h3>
                      <p style={{
                        fontSize: isMobile ? '0.875rem' : '1.125rem',
                        color: '#4b5563',
                        lineHeight: '1.7'
                      }}>
                        {wound.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <div style={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                    <h3 style={{
                      fontSize: isMobile ? '1.25rem' : '1.5rem',
                      fontWeight: 'bold',
                      color: '#111827',
                      marginBottom: '1rem'
                    }}>
                      {wound.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? '0.875rem' : '1rem',
                      color: '#374151',
                      lineHeight: '1.6'
                    }}>
                      {wound.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Treatment Methods */}
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
            Advanced Treatment Methods
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
            Cutting-edge techniques and technologies for optimal wound healing
          </p>

          {/* Treatment Methods Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile || isTablet ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '2rem' : '3rem'
          }}>
            {[
              {
                title: "Negative Pressure Therapy (Wound VAC)",
                description: "Advanced vacuum-assisted closure technology that promotes wound healing through controlled negative pressure. Reduces healing time and enhances granulation tissue formation.",
                imageSrc: "/Wound_VAC.png"
              },
              {
                title: "Surgical Debridement",
                description: "Professional removal of non-viable tissue using surgical techniques to prepare the wound bed for optimal healing.",
                imageSrc: "/SX_Debridement.png"
              },
              {
                title: "Water Debridement",
                description: "Hydrotherapy-based wound cleaning that uses controlled water pressure to gently remove debris and promote healing.",
                imageSrc: "/Water_Debridement_TX.png"
              },
              {
                title: "Ultrasonic Debridement",
                description: "State-of-the-art ultrasonic technology for precise, gentle removal of biofilm and non-viable tissue while preserving healthy tissue.",
                imageSrc: "/Ultra_sonic_debridement.png"
              }
            ].map((treatment, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '300px 1fr',
                  gap: 0,
                  alignItems: 'start',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Image */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: isMobile ? '220px' : '100%',
                  minHeight: '280px',
                  backgroundColor: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isMobile ? '1.5rem' : '2rem'
                }}>
                  <Image
                    src={treatment.imageSrc}
                    alt={treatment.title}
                    fill
                    style={{ objectFit: 'contain', padding: isMobile ? '1.5rem' : '2rem' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: isMobile ? '1.5rem' : '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '1rem'
                  }}>
                    {treatment.title}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: '#374151',
                    lineHeight: '1.6'
                  }}>
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
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
            Our Treatment Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description: "Comprehensive wound evaluation, medical history review, and vascular assessment"
              },
              {
                step: "2",
                title: "Treatment Plan",
                description: "Customized care plan based on wound type, severity, and patient-specific needs"
              },
              {
                step: "3",
                title: "Active Treatment",
                description: "Regular treatments with ongoing monitoring, adjustments, and advanced therapies"
              },
              {
                step: "4",
                title: "Follow-up Care",
                description: "Post-healing monitoring, prevention education, and recurrence prevention strategies"
              }
            ].map((phase, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  padding: isMobile ? '1.5rem' : '2rem',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: colors.primary.navy,
                  color: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: '1rem'
                }}>
                  {phase.step}
                </div>
                <h3 style={{
                  fontSize: isMobile ? '1.125rem' : '1.25rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.75rem'
                }}>
                  {phase.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
            marginBottom: isMobile ? '2rem' : '3rem',
            textAlign: 'center'
          }}>
            Why Choose Stratum Wound Care
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Evidence-Based Care
              </h3>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                We utilize the latest research and proven protocols to deliver the most effective wound care treatments available.
              </p>
            </div>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Advanced Technology
              </h3>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                State-of-the-art equipment and treatment methods including NPWT, ultrasonic debridement, and advanced wound care products.
              </p>
            </div>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Experienced Team
              </h3>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                Our healthcare professionals have extensive experience in wound care management and limb preservation.
              </p>
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
            Ready to Begin Your Healing Journey?
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
            color: '#d1d5db',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Contact us today to schedule a comprehensive wound assessment and develop a personalized treatment plan
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
            Schedule Appointment
          </Link>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
