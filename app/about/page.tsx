'use client';

import Link from 'next/link';
import Image from 'next/image';
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
          <div>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1.5rem'
            }}>
              Mission Statement
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#374151',
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              At Stratum Wound Care Solutions, our name is our mission. It refers directly to the vital, multi-layered structure of the skin—from the outermost protective stratum corneum to the deepest regenerative layers.
            </p>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#374151',
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              We understand that true, lasting wound recovery requires more than just a surface fix. It demands a holistic, methodical process. Our expert clinicians apply this fundamental biological principle to your care, crafting a customized treatment plan that focuses on healing one layer at a time.
            </p>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#374151',
              lineHeight: '1.8'
            }}>
              We don't just treat the wound; we restore the integrity of the strata, ensuring a strong, resilient foundation for a full and complete recovery. Stratum Wound Care is a premier wound care clinic serving patients throughout Pennsylvania.
            </p>
          </div>
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
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1.5rem'
          }}>
            Our Leadership Team
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
              {/* Photo */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: '300px',
                backgroundColor: '#f3f4f6'
              }}>
                <Image
                  src="/ME_Headshot.png"
                  alt="Mark Hoffner - Founder & Chief Executive Officer"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />
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

          {/* Justin Kleppe Bio */}
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
              {/* Photo */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: '300px',
                backgroundColor: '#f3f4f6'
              }}>
                <Image
                  src="/justin_kleppe.jpg"
                  alt="Justin Kleppe FNP, MSN, RN - Co-founder/President"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Bio Content */}
              <div>
                <h3 style={{
                  fontSize: isMobile ? '1.75rem' : '2rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  Justin Kleppe FNP, MSN, RN
                </h3>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#6b7280',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}>
                  Co-founder/President
                </p>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#374151',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem'
                }}>
                  Justin is a technically trained expert in specialized Wound Care, bringing a robust background spanning over 14 years in the medical industry to every patient interaction.
                </p>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#374151',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem'
                }}>
                  His practice is defined by a unique combination of advanced technical mastery and a deeply humanistic philosophy. As a Family Nurse Practitioner, Justin's core values—unwavering compassion and profound empathy—are his greatest assets, leading him to deliver care that is not only sophisticated but deeply patient-centered.
                </p>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#374151',
                  lineHeight: '1.8'
                }}>
                  Justin is dedicated to providing advanced, evidence-based care for managing complex and chronic wounds, including diabetic ulcers, pressure injuries, and vascular wounds. He consistently advances his knowledge to the highest clinical grounds, ensuring he provides the most effective and cutting-edge treatment possible to promote optimal healing and significantly improve his patients' quality of life.
                </p>
              </div>
            </div>
          </div>

          {/* Joshua Walla Bio */}
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
                  [Joshua Walla Photo]
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
                  Joshua Walla
                </h3>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#6b7280',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}>
                  Chief Operating Officer
                </p>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#374151',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem'
                }}>
                  Joshua Walla serves as the Chief Operating Officer of Stratum Wound Care, bringing a strong foundation in surgical supply chain operations and clinical support management to the organization. With experience optimizing surgical workflows, managing procedural-area inventory, and streamlining operational systems across healthcare settings, Joshua ensures that Stratum delivers efficient, reliable, and patient-focused wound care services.
                </p>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#374151',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem'
                }}>
                  In his role as COO, Joshua oversees the coordination of our multidisciplinary clinical teams, ensuring that every partner facility receives consistent, high-quality wound-care rounds and evidence-based treatment protocols. His expertise in operational efficiency and resource management allows Stratum Wound Care to provide cost-effective services without compromising the clinical excellence that improves healing outcomes for residents and patients.
                </p>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#374151',
                  lineHeight: '1.8'
                }}>
                  Guided by a mission to improve quality of life for every patient served, he continues to build systems that uphold Stratum's commitment to delivering unparalleled wound-care support across a wide range of healthcare settings and patient populations.
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
