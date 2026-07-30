'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
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
              We don't just treat the wound; we restore the integrity of the strata, ensuring a strong, resilient foundation for a full and complete recovery. Stratum Wound Care is a premier wound care clinic dedicated to serving our patients.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
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
