'use client';

import Link from 'next/link';
import Icon from './Icon';
import { colors } from '@/lib/colors';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: colors.primary.navy, color: '#ffffff' }}>
      <div style={{
        maxWidth: '1400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '3rem',
        paddingBottom: '3rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Stratum Wound Care
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: '#cbd5e1',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Providing advanced wound healing and limb preservation to help patients stay safe, healthy, and home.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                marginBottom: '0.5rem'
              }}>
                55R Broadway
              </p>
              <p style={{
                fontSize: '0.875rem',
                color: '#94a3b8'
              }}>
                Bangor, PA 18013
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Patient Information', href: '/patients' },
                { name: 'Provider Referrals', href: '/providers' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.blue}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Contact Information
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon type="phone" size={18} color="#cbd5e1" />
                <a
                  href="tel:555-123-4567"
                  style={{
                    fontSize: '0.875rem',
                    color: '#cbd5e1',
                    textDecoration: 'none'
                  }}
                >
                  (555) 123-4567
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon type="fax" size={18} color="#cbd5e1" />
                <span style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                  (555) 123-4568
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon type="mail" size={18} color="#cbd5e1" />
                <a
                  href="mailto:info@stratumwoundcare.com"
                  style={{
                    fontSize: '0.875rem',
                    color: '#cbd5e1',
                    textDecoration: 'none'
                  }}
                >
                  info@stratumwoundcare.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon type="emergency" size={18} color={colors.primary.green} />
                <a
                  href="tel:555-123-9999"
                  style={{
                    fontSize: '0.875rem',
                    color: colors.primary.green,
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  Emergency: (555) 123-9999
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Office Hours
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                <strong style={{ color: '#ffffff' }}>Mon - Fri:</strong> 8:00 AM - 5:00 PM
              </li>
              <li style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                <strong style={{ color: '#ffffff' }}>Saturday:</strong> 9:00 AM - 1:00 PM
              </li>
              <li style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                <strong style={{ color: '#ffffff' }}>Sunday:</strong> Closed
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  background: colors.gradients.blueGreen,
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  border: `2px solid ${colors.primary.blue}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.secondary.lightBlue;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.gradients.blueGreen;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#94a3b8',
            marginBottom: '0.75rem'
          }}>
            &copy; {new Date().getFullYear()} Stratum Wound Care. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            fontSize: '0.75rem',
            color: '#64748b'
          }}>
            <span>HIPAA Compliant</span>
            <span>•</span>
            <span>Medicare & Medicaid Certified</span>
            <span>•</span>
            <span>Licensed by PA Department of Health</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
