'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { colors } from '@/lib/colors';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize(); // Check initial size
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/patients', label: 'Insurance Info' },
    { href: '/careers', label: 'Careers' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 w-full shadow-lg transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: (isScrolled || (isMobile && isMobileMenuOpen)) ? 'rgba(15, 23, 42, 1)' : 'rgba(15, 23, 42, 0.3)',
        padding: isMobile
          ? (isScrolled ? '0.75rem 0' : '1rem 0')
          : (isScrolled ? '0.875rem 0' : '1.75rem 0')
      }}
    >
      <div className="w-full" style={{
        paddingLeft: isMobile ? '1rem' : '4rem',
        paddingRight: isMobile ? '1rem' : '4rem'
      }}>
        <div className="flex items-center" style={{ position: 'relative' }}>
          {/* Left: Desktop Navigation Links */}
          {!isMobile && (
            <div className="flex items-center" style={{ gap: '2.5rem', flex: 1 }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-medium transition-all duration-300 whitespace-nowrap hover:-translate-y-1"
                    style={{
                      color: '#ffffff',
                      paddingBottom: '4px',
                      borderBottom: isActive ? `2px solid ${colors.primary.blue}` : '2px solid transparent',
                      fontSize: isScrolled ? '0.875rem' : '1rem'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderBottom = `2px solid ${colors.primary.blue}`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderBottom = '2px solid transparent';
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              style={{ fontSize: '1.5rem' }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          )}

          {/* Center: Logo */}
          <Link
            href="/"
            style={{
              position: isMobile ? 'relative' : 'absolute',
              left: isMobile ? 'auto' : '50%',
              transform: isMobile ? 'none' : 'translateX(-50%)',
              transition: 'all 0.5s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: isMobile ? '0 auto' : '0'
            }}
          >
            <Image
              src="/logo.png"
              alt="Stratum Wound Care"
              width={isScrolled ? (isMobile ? 110 : 160) : (isMobile ? 140 : 220)}
              height={isScrolled ? (isMobile ? 38 : 55) : (isMobile ? 48 : 76)}
              style={{
                transition: 'all 0.5s ease-in-out',
                objectFit: 'contain'
              }}
              priority
            />
          </Link>

          {/* Right: Request Appointment Button */}
          <div style={{ flex: isMobile ? 0 : 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              href="/contact"
              className="font-bold transition-all duration-300 whitespace-nowrap hover:scale-105"
              style={{
                background: colors.gradients.blueGreen,
                color: '#ffffff',
                borderRadius: '8px',
                border: `2px solid ${colors.primary.blue}`,
                boxShadow: `0 2px 8px rgba(8, 145, 220, 0.3)`,
                padding: isMobile
                  ? '0.6rem 1rem'
                  : (isScrolled ? '0.8rem 1.85rem' : '1.35rem 3.2rem'),
                fontSize: isMobile ? '0.75rem' : (isScrolled ? '0.875rem' : '1.05rem')
              }}
            >
              {isMobile ? 'Request' : 'Request Appointment'}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown with animation */}
        {isMobile && (
          <div style={{
            marginTop: isMobileMenuOpen ? '1rem' : '0',
            paddingTop: isMobileMenuOpen ? '1rem' : '0',
            borderTop: isMobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
            maxHeight: isMobileMenuOpen ? '300px' : '0',
            opacity: isMobileMenuOpen ? 1 : 0,
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '0.5rem 0',
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: 'all 0.3s ease-in-out'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
