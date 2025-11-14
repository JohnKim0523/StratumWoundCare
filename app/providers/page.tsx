'use client';

import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Icon from '@/components/Icon';

export default function ProvidersPage() {
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
              Patient Portal
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#d1d5db',
              maxWidth: '800px'
            }}>
              Secure access to your medical records, test results, and visit summaries
            </p>
          </div>
        </section>

        {/* Under Maintenance Section */}
        <section style={{
          backgroundColor: '#ffffff',
          paddingTop: isMobile ? '4rem' : '6rem',
          paddingBottom: isMobile ? '4rem' : '6rem',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            paddingLeft: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            paddingRight: isMobile ? '1.5rem' : (isTablet ? '2.5rem' : '4rem'),
            textAlign: 'center'
          }}>
            {/* Maintenance Icon */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: isMobile ? '80px' : '100px',
                height: isMobile ? '80px' : '100px',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Icon type="settings" size={isMobile ? 40 : 50} color="#6b7280" />
              </div>
            </div>

            <h2 style={{
              fontSize: isMobile ? '1.875rem' : '2.5rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1.5rem'
            }}>
              Under Maintenance
            </h2>

            <p style={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.7'
            }}>
              Our Patient Portal is currently being updated to serve you better. We're working on integrating
              a secure, HIPAA-compliant system that will allow you to access your medical records, test results,
              and visit summaries 24/7.
            </p>

            <div style={{
              backgroundColor: '#f9fafb',
              padding: isMobile ? '1.5rem' : '2rem',
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.125rem' : '1.25rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Coming Soon - Portal Features:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'View test results and lab reports',
                  'Access visit summaries and treatment plans',
                  'Download medical records and forms',
                  'Secure messaging with your care team',
                  'Schedule and manage appointments',
                  'Update personal and insurance information'
                ].map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem',
                    color: '#4b5563'
                  }}>
                    <span style={{ color: '#2563eb', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              padding: isMobile ? '1.5rem' : '2rem',
              backgroundColor: '#eff6ff',
              border: '1px solid #dbeafe',
              borderRadius: '0.5rem',
              marginBottom: '2rem'
            }}>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                color: '#1e40af',
                margin: 0,
                lineHeight: '1.6'
              }}>
                <strong>Need access to your medical records?</strong><br />
                Please contact our office at <strong>(555) 123-4567</strong> and our staff will be happy to assist you.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <a
                href="tel:5551234567"
                style={{
                  backgroundColor: '#111827',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 0.3s'
                }}
              >
                Call Our Office
              </a>
              <a
                href="/contact"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: '2px solid #111827',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 0.3s'
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
