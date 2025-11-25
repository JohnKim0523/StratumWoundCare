'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Icon from '@/components/Icon';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { colors } from '@/lib/colors';

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = ['/banner.jpg', '/banner2.jpg', '/banner3.jpg'];
  const [activeTab, setActiveTab] = useState('about'); // 'about' or 'commitment'
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <PageTransition>
    <div>
      {/* Hero Banner Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          height: isMobile ? '500px' : '600px'
        }}
      >
        {/* Background Images with transition */}
        {banners.map((banner, index) => (
          <div
            key={banner}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{ opacity: currentBanner === index ? 1 : 0 }}
          >
            <Image
              src={banner}
              alt="Professional Wound Care Treatment"
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              quality={100}
              unoptimized={true}
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" style={{ zIndex: 1 }}></div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center" style={{ zIndex: 2 }}>
          <div
            className="w-full"
            style={{
              padding: isMobile ? '0 1.5rem' : isTablet ? '0 2rem' : '0 4rem'
            }}
          >
            <div
              className="flex items-start"
              style={{
                paddingLeft: isMobile ? '0' : '2rem',
                flexDirection: isMobile ? 'column' : 'row'
              }}
            >
              {/* White vertical line - hide on mobile */}
              {!isMobile && (
                <div style={{
                  width: '6px',
                  height: isTablet ? '200px' : '250px',
                  backgroundColor: '#ffffff',
                  marginRight: isTablet ? '1.5rem' : '2.5rem',
                  flexShrink: 0
                }}></div>
              )}

              {/* Text content */}
              <div>
                <h1
                  className="font-black leading-tight uppercase"
                  style={{
                    fontSize: isMobile ? 'clamp(2rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 4.5rem)',
                    letterSpacing: '0.02em',
                    color: '#ffffff',
                    marginBottom: isMobile ? '1rem' : isTablet ? '1.25rem' : '1.5rem'
                  }}
                >
                  Advanced Wound Care &<br />
                  Limb Preservation
                </h1>
                <p
                  className="font-light leading-relaxed"
                  style={{
                    fontSize: isMobile ? 'clamp(1rem, 4vw, 1.125rem)' : 'clamp(1.125rem, 2vw, 1.5rem)',
                    color: '#ffffff',
                    maxWidth: isMobile ? '100%' : '600px'
                  }}
                >
                  Providing advanced wound healing and limb preservation to help patients stay safe, healthy, and home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          backgroundColor: '#f9fafb',
          paddingTop: isMobile ? '2rem' : '3rem',
          paddingBottom: isMobile ? '0.5rem' : '1rem'
        }}
      >
        <div
          style={{
            paddingLeft: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            paddingRight: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            maxWidth: isMobile || isTablet ? 'none' : '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <div>
            {/* Content */}
            <div>
              {/* Tab Headers */}
              <div style={{
                marginBottom: isMobile ? '1.5rem' : '2rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: isMobile ? '1rem' : '2rem',
                flexWrap: isMobile ? 'wrap' : 'nowrap'
              }}>
                <h2
                  onClick={() => setActiveTab('about')}
                  className="font-bold cursor-pointer transition-all duration-300"
                  style={{
                    color: activeTab === 'about' ? colors.primary.navy : colors.neutral.lightGray,
                    borderBottom: activeTab === 'about' ? `4px solid ${colors.primary.blue}` : 'none',
                    paddingBottom: '0.5rem',
                    display: 'inline-block',
                    fontSize: isMobile
                      ? (activeTab === 'about' ? '1.25rem' : '1.125rem')
                      : (activeTab === 'about' ? '1.75rem' : '1.375rem'),
                    transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'about') {
                      e.currentTarget.style.color = colors.neutral.mediumGray;
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'about') {
                      e.currentTarget.style.color = colors.neutral.lightGray;
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  About Stratum Wound Care
                </h2>
                <h2
                  onClick={() => setActiveTab('commitment')}
                  className="font-bold cursor-pointer transition-all duration-300"
                  style={{
                    color: activeTab === 'commitment' ? colors.primary.navy : colors.neutral.lightGray,
                    borderBottom: activeTab === 'commitment' ? `4px solid ${colors.primary.blue}` : 'none',
                    paddingBottom: '0.5rem',
                    display: 'inline-block',
                    fontSize: isMobile
                      ? (activeTab === 'commitment' ? '1.25rem' : '1.125rem')
                      : (activeTab === 'commitment' ? '1.75rem' : '1.375rem'),
                    transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'commitment') {
                      e.currentTarget.style.color = colors.neutral.mediumGray;
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'commitment') {
                      e.currentTarget.style.color = colors.neutral.lightGray;
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  Our Commitment
                </h2>
              </div>
              {/* Content that changes based on tab */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: isMobile ? '200px' : '280px'
              }}>
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    transform: activeTab === 'about' ? 'translateX(0)' : 'translateX(-100%)',
                    opacity: activeTab === 'about' ? 1 : 0
                  }}
                >
                  <p style={{
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    color: '#374151',
                    lineHeight: '1.8',
                    marginBottom: isMobile ? '1rem' : '1.5rem'
                  }}>
                    At Stratum Wound Care, we specialize in providing comprehensive wound management services
                    to patients throughout Pennsylvania. Our team of experienced healthcare professionals is
                    dedicated to healing complex wounds and preventing amputations.
                  </p>
                  <p style={{
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    color: '#374151',
                    lineHeight: '1.8',
                    marginBottom: isMobile ? '1rem' : '1.5rem'
                  }}>
                    With years of experience in home health and community-based wound care, we understand
                    the unique challenges faced by patients with chronic wounds. Our patient-centered approach
                    combines cutting-edge treatments with compassionate care.
                  </p>
                  <Link
                    href="/about"
                    className="inline-block font-semibold transition-all duration-300"
                    style={{
                      color: colors.primary.blue,
                      fontSize: '1.125rem',
                      borderBottom: `2px solid ${colors.primary.blue}`,
                      paddingBottom: '4px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.secondary.darkBlue;
                      e.currentTarget.style.borderBottomColor = colors.secondary.darkBlue;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.primary.blue;
                      e.currentTarget.style.borderBottomColor = colors.primary.blue;
                    }}
                  >
                    Learn More About Us →
                  </Link>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    transform: activeTab === 'commitment' ? 'translateX(0)' : 'translateX(100%)',
                    opacity: activeTab === 'commitment' ? 1 : 0
                  }}
                >
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-lg">CMS and PA Department of Health compliant</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-lg">HIPAA certified and secure practices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-lg">Medicare and Medicaid certified</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-lg">Evidence-based treatment protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          paddingTop: isMobile ? '1.5rem' : '2rem',
          paddingBottom: isMobile ? '0.5rem' : '1rem',
          backgroundColor: '#ffffff'
        }}
      >
        <div
          style={{
            paddingLeft: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            paddingRight: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <div
            style={{
              background: colors.gradients.darkBlue,
              borderRadius: isMobile ? '16px' : '24px',
              padding: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
              boxShadow: `0 8px 30px rgba(8, 145, 220, 0.2)`,
              border: `1px solid ${colors.primary.blue}20`
            }}
          >
            {/* Main Heading */}
            <h2
              className="font-bold"
              style={{
                color: '#ffffff',
                marginBottom: '0.75rem',
                fontSize: isMobile ? '1.875rem' : isTablet ? '2.5rem' : '3rem'
              }}
            >
              Our Specialized Services
            </h2>
            <p
              style={{
                color: '#e5e5e5',
                marginBottom: isMobile ? '2.5rem' : '3rem',
                fontSize: isMobile ? '1rem' : '1.25rem',
                maxWidth: '48rem'
              }}
            >
              Comprehensive wound care solutions tailored to your specific needs
            </p>

            {/* Wound Types Section */}
            <div style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
              <h3
                className="font-bold"
                style={{
                  color: '#d1d5db',
                  marginBottom: '1.5rem',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  letterSpacing: '0.5px'
                }}
              >
                Types of Wounds We Treat
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile
                    ? '1fr'
                    : isTablet
                    ? '1fr'
                    : 'repeat(2, 1fr)',
                  gap: isMobile ? '1.5rem' : '2rem'
                }}
              >
                {[
                  { title: "Diabetic Foot Ulcers", description: "Specialized care for diabetic foot ulcers and complications", icon: "shield", color: '#374151', hasImage: false },
                  { title: "Pressure Injuries", description: "Treatment and prevention of bedsores and pressure wounds", icon: "hospital", color: '#374151', hasImage: false },
                  { title: "Wound Infections/ Osteomyelitis (Bone Infection) / Cellulitis", description: "Expert treatment of infected wounds and complications", icon: "alert", color: '#374151', hasImage: true, imageSrc: "/Osteomylitis.png" },
                  { title: "Venous Leg Ulcers", description: "Advanced treatment for venous insufficiency wounds", icon: "heart", color: '#374151', hasImage: true, imageSrc: "/Venous_Leg_Ulcers.png" },
                  { title: "Arterial Ulcers", description: "Care for wounds caused by arterial insufficiency", icon: "heart", color: '#374151', hasImage: false },
                  { title: "Surgical Wounds", description: "Post-operative wound management and healing", icon: "clipboard", color: '#374151', hasImage: false }
                ].map((service, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: colors.primary.navy,
                      borderRadius: '12px',
                      transition: 'all 0.3s',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      overflow: 'hidden',
                      border: `1px solid ${colors.primary.blue}40`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = `0 8px 20px rgba(8, 145, 220, 0.3)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {service.hasImage ? (
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '45% 1fr',
                        gap: 0,
                        height: '100%',
                        minHeight: isMobile ? 'auto' : '320px'
                      }}>
                        <div style={{
                          width: '100%',
                          height: isMobile ? '220px' : '100%',
                          position: 'relative',
                          backgroundColor: '#f8f9fa',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '1rem'
                        }}>
                          <Image
                            src={service.imageSrc || ''}
                            alt={service.title}
                            fill
                            style={{ objectFit: 'contain', padding: '1rem' }}
                          />
                        </div>
                        <div style={{ padding: isMobile ? '1.5rem' : '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <h3
                            className="font-bold"
                            style={{
                              color: '#ffffff',
                              marginBottom: '0.75rem',
                              fontSize: isMobile ? '1.125rem' : '1.375rem'
                            }}
                          >
                            {service.title}
                          </h3>
                          <p
                            style={{
                              color: '#d1d5db',
                              fontSize: isMobile ? '0.875rem' : '1rem',
                              lineHeight: '1.6'
                            }}
                          >
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '45% 1fr',
                        gap: 0,
                        height: '100%',
                        minHeight: isMobile ? 'auto' : '320px'
                      }}>
                        <div style={{
                          width: '100%',
                          height: isMobile ? '220px' : '100%',
                          backgroundColor: '#f8f9fa',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '2px dashed #d1d5db'
                        }}>
                          <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" style={{ margin: '0 auto 1rem' }}>
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <p style={{ color: '#9ca3af', fontSize: '0.875rem', fontWeight: '500' }}>Image Coming Soon</p>
                          </div>
                        </div>
                        <div style={{ padding: isMobile ? '1.5rem' : '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <h3
                            className="font-bold"
                            style={{
                              color: '#ffffff',
                              marginBottom: '0.75rem',
                              fontSize: isMobile ? '1.125rem' : '1.375rem'
                            }}
                          >
                            {service.title}
                          </h3>
                          <p
                            style={{
                              color: '#d1d5db',
                              fontSize: isMobile ? '0.875rem' : '1rem',
                              lineHeight: '1.6'
                            }}
                          >
                            {service.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Methods Section */}
            <div>
              <h3
                className="font-bold"
                style={{
                  color: '#d1d5db',
                  marginBottom: '1.5rem',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  letterSpacing: '0.5px'
                }}
              >
                Advanced Treatment Methods
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile
                    ? '1fr'
                    : isTablet
                    ? 'repeat(2, 1fr)'
                    : 'repeat(4, 1fr)',
                  gap: isMobile ? '1rem' : '1.5rem'
                }}
              >
                {[
                  { title: "Negative Pressure TX", description: "Wound VAC therapy for advanced healing", icon: "award", color: '#6b7280' },
                  { title: "Surgical Debridement", description: "Removal of damaged tissue to promote healing", icon: "clipboard", color: '#6b7280' },
                  { title: "Water Debridement", description: "Hydrotherapy-based wound cleaning", icon: "shield", color: '#6b7280' },
                  { title: "Ultrasonic Debridement", description: "Advanced ultrasonic wound care technology", icon: "checkCircle", color: '#6b7280' }
                ].map((service, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#1a1a1a',
                      padding: isMobile ? '1.25rem' : '1.75rem',
                      borderRadius: '12px',
                      transition: 'all 0.3s',
                      borderLeft: `4px solid ${service.color}`,
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2d2d2d';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1a1a';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ marginBottom: '1rem' }}>
                      <Icon type={service.icon} size={isMobile ? 40 : 48} color="#9ca3af" />
                    </div>
                    <h3
                      className="font-bold"
                      style={{
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                        fontSize: isMobile ? '1.125rem' : '1.25rem'
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        color: '#d1d1d1',
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Services Button */}
            <div className="text-center" style={{ marginTop: isMobile ? '2.5rem' : '3.5rem' }}>
              <Link
                href="/services"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: isMobile ? '0.875rem 1.75rem' : '1rem 2.5rem',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f0f0';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Information Section */}
      <section
        style={{
          paddingTop: isMobile ? '1rem' : '1.5rem',
          paddingBottom: isMobile ? '3rem' : '5rem',
          backgroundColor: '#f9fafb'
        }}
      >
        <div
          style={{
            paddingLeft: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            paddingRight: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem',
              textAlign: 'center'
            }}
          >
            Patient Information
          </h2>
          <p
            style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: isMobile ? '2.5rem' : '3.5rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Everything you need to know about getting started with Stratum Wound Care
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem',
              marginBottom: isMobile ? '2rem' : '3rem'
            }}
          >
            {/* Accepted Insurances */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="creditCard" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                Accepted Insurances
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Medicare', 'Medicaid', 'Major private insurers'].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#10b981', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
                    <span style={{ color: '#374151', fontSize: isMobile ? '0.875rem' : '1rem' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Referrals */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="clipboard" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                Referrals
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                Step-by-step guide for physicians and home health agencies
              </p>
              <Link
                href="/providers"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                Learn more →
              </Link>
            </div>

            {/* Patient Forms */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="fileText" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                Patient Forms
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                Downloadable new patient forms (HIPAA compliant PDFs)
              </p>
              <Link
                href="/patients"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                Download forms →
              </Link>
            </div>

            {/* Portal Access */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="lock" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                Portal Access
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                Access test results and visit summaries online
              </p>
              <a
                href="#"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                Patient portal →
              </a>
            </div>

            {/* FAQ */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="helpCircle" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                FAQ
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                Wound healing times, follow-up process, and billing guidance
              </p>
              <Link
                href="/patients#faq"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                View FAQs →
              </Link>
            </div>

            {/* Contact Information */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="phone" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                Have Questions?
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                Our team is here to help you every step of the way
              </p>
              <Link
                href="/contact"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Referrals Section */}
      <section
        style={{
          paddingTop: isMobile ? '3rem' : '5rem',
          paddingBottom: isMobile ? '3rem' : '5rem',
          backgroundColor: '#ffffff'
        }}
      >
        <div
          style={{
            paddingLeft: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            paddingRight: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem',
              textAlign: 'center'
            }}
          >
            Provider Referrals
          </h2>
          <p
            style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: isMobile ? '2.5rem' : '3.5rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Streamlined referral process for healthcare providers
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem'
            }}
          >
            {/* Referral Portal */}
            <div
              style={{
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="lock" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                Referral Portal
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                Secure HIPAA-compliant form submission for physicians
              </p>
              <Link
                href="/providers"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                Access portal →
              </Link>
            </div>

            {/* CMS Referral Data */}
            <div
              style={{
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="barChart" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                Referral Data
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                CMS referral density visualization by Orange County and PA towns
              </p>
              <a
                href="#"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                View data →
              </a>
            </div>

            {/* Specialist Collaboration */}
            <div
              style={{
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="handshake" size={40} color="#6b7280" />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem'
                }}
              >
                Specialist Collaboration
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                Endocrinology and podiatry partnership programs
              </p>
              <Link
                href="/providers#collaboration"
                style={{
                  color: '#111827',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section - Consolidated */}
      <section
        style={{
          paddingTop: isMobile ? '4rem' : '6rem',
          paddingBottom: isMobile ? '4rem' : '6rem',
          background: colors.gradients.darkBlue
        }}
      >
        <div
          style={{
            paddingLeft: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            paddingRight: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: isMobile ? '3rem' : '4rem',
              textAlign: 'center',
              letterSpacing: '0.5px'
            }}
          >
            CONTACT US
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
              gap: isMobile ? '3rem' : '4rem',
              alignItems: 'start'
            }}
          >
            {/* Left: Contact Form */}
            <div>
              <h3
                style={{
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '2rem'
                }}
              >
                Send a Message
              </h3>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #ffffff',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = `1px solid ${colors.primary.blue}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid #ffffff';
                  }}
                />

                <input
                  type="email"
                  placeholder="Email*"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #ffffff',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = `1px solid ${colors.primary.blue}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid #ffffff';
                  }}
                />

                <textarea
                  placeholder="Message"
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #ffffff',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = `1px solid ${colors.primary.blue}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid #ffffff';
                  }}
                />

                <button
                  type="submit"
                  style={{
                    background: colors.gradients.blueGreen,
                    color: '#ffffff',
                    padding: isMobile ? '0.875rem 2rem' : '1rem 2.5rem',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    border: `2px solid ${colors.primary.blue}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    alignSelf: 'center',
                    width: isMobile ? '100%' : 'auto'
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
                  Send
                </button>
              </form>
            </div>

            {/* Right: Contact Information */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
              }}
            >
              {/* Phone */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <Icon type="phone" size={24} color={colors.primary.green} />
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    margin: 0
                  }}>
                    Phone
                  </h4>
                </div>
                <p style={{
                  fontSize: '1rem',
                  color: '#d1d5db',
                  marginLeft: '2.5rem',
                  lineHeight: '1.6'
                }}>
                  Main: (555) 123-4567<br />
                  Provider Line: (555) 123-4568<br />
                  Emergency: (555) 123-9999
                </p>
              </div>

              {/* Email */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <Icon type="mail" size={24} color={colors.primary.green} />
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    margin: 0
                  }}>
                    Email
                  </h4>
                </div>
                <p style={{
                  fontSize: '1rem',
                  color: '#d1d5db',
                  marginLeft: '2.5rem',
                  lineHeight: '1.6'
                }}>
                  info@stratumwoundcare.com
                </p>
              </div>

              {/* Location */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <Icon type="mapPin" size={24} color={colors.primary.green} />
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    margin: 0
                  }}>
                    Location
                  </h4>
                </div>
                <p style={{
                  fontSize: '1rem',
                  color: '#d1d5db',
                  marginLeft: '2.5rem',
                  lineHeight: '1.6'
                }}>
                  55R Broadway<br />
                  Bangor, PA 18013
                </p>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=55R+Broadway+Bangor+PA+18013"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginLeft: '2.5rem',
                    marginTop: '0.5rem',
                    color: colors.primary.green,
                    fontSize: '0.875rem',
                    textDecoration: 'underline',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary.lightGreen}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.green}
                >
                  Get Directions →
                </Link>
              </div>

              {/* Office Hours */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <Icon type="clock" size={24} color={colors.primary.green} />
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    margin: 0
                  }}>
                    Office Hours
                  </h4>
                </div>
                <p style={{
                  fontSize: '1rem',
                  color: '#d1d5db',
                  marginLeft: '2.5rem',
                  lineHeight: '1.6'
                }}>
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        style={{
          paddingTop: isMobile ? '3rem' : '5rem',
          paddingBottom: isMobile ? '3rem' : '5rem',
          backgroundColor: '#f9fafb'
        }}
      >
        <div
          style={{
            paddingLeft: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            paddingRight: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {/* Left-aligned header */}
          <div style={{ marginBottom: isMobile ? '2.5rem' : '3.5rem' }}>
            <h2
              style={{
                fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem',
                textAlign: 'left'
              }}
            >
              Start Your Career in Wound Management
            </h2>
            <p
              style={{
                fontSize: isMobile ? '1.125rem' : '1.5rem',
                color: '#111827',
                fontWeight: '600',
                textAlign: 'left',
                marginBottom: '0.5rem'
              }}
            >
              Empowerment • Partnership • Results
            </p>
            <p
              style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#6b7280',
                textAlign: 'left',
                maxWidth: '800px'
              }}
            >
              Physicians and Advanced Practitioners have built successful practices with Stratum
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem',
              marginBottom: isMobile ? '2rem' : '3rem'
            }}
          >
            {/* Flexibility */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="calendar" size={40} color={colors.primary.blue} />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.75rem'
                }}
              >
                Choose Your Own Schedule
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6'
                }}
              >
                Complete flexibility and autonomy. We provide the structure; you set the schedule.
              </p>
            </div>

            {/* Patient Impact */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="heart" size={40} color={colors.primary.green} />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.75rem'
                }}
              >
                Improve Patient Outcomes
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6'
                }}
              >
                Partner with post-acute care facilities to heal patients and improve quality of life for seniors.
              </p>
            </div>

            {/* Advanced Training */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="graduationCap" size={40} color={colors.primary.blue} />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.75rem'
                }}
              >
                Become an Expert Clinician
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6'
                }}
              >
                Comprehensive wound care training and professional development opportunities.
              </p>
            </div>

            {/* Specialized Practice */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="hospital" size={40} color={colors.primary.green} />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.75rem'
                }}
              >
                Focus on Post-Acute Care
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6'
                }}
              >
                Treat complex chronic wounds at skilled nursing and long-term acute care facilities.
              </p>
            </div>

            {/* Competitive Salary */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="dollarSign" size={40} color={colors.primary.green} />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.75rem'
                }}
              >
                Earn Competitive Salary
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6'
                }}
              >
                W2 or independent contractor positions. No call, nights, or weekends.
              </p>
            </div>

            {/* Reduced Admin */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <Icon type="clipboard" size={40} color={colors.primary.blue} />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.75rem'
                }}
              >
                Reduced Administrative Burden
              </h3>
              <p
                style={{
                  color: '#374151',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  lineHeight: '1.6'
                }}
              >
                Proprietary EMR and dedicated support staff handle logistics so you focus on care.
              </p>
            </div>
          </div>

          {/* Application CTA */}
          <div
            style={{
              backgroundColor: '#111827',
              borderRadius: '12px',
              padding: isMobile ? '2rem' : '3rem',
              textAlign: 'center'
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              Join Physicians & Advanced Practitioners Who've Built Successful Practices
            </h3>
            <p
              style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#d1d5db',
                marginBottom: '2rem',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Explore opportunities for physicians, nurse practitioners, nurses, and support staff
            </p>
            <Link
              href="/careers"
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
              View Career Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          paddingTop: isMobile ? '3rem' : '5rem',
          paddingBottom: isMobile ? '3rem' : '5rem',
          backgroundColor: '#ffffff'
        }}
      >
        <div
          style={{
            paddingLeft: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            paddingRight: isMobile ? '1.5rem' : isTablet ? '3rem' : '4rem',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem',
              textAlign: 'center'
            }}
          >
            What Our Patients Say
          </h2>
          <p
            style={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: isMobile ? '2.5rem' : '3.5rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            HIPAA-compliant success stories
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem'
            }}
          >
            {[
              {
                quote: "The care I received was exceptional. The staff was knowledgeable and compassionate throughout my treatment.",
                author: "Patient - Diabetic Wound Care"
              },
              {
                quote: "Thanks to their advanced treatments, I was able to avoid amputation and return to my normal activities.",
                author: "Patient - Limb Preservation"
              },
              {
                quote: "The team made me feel comfortable and explained everything clearly. My wound healed faster than expected.",
                author: "Patient - Pressure Ulcer Treatment"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  padding: isMobile ? '1.5rem' : '2rem',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    color: '#111827',
                    marginBottom: '1rem',
                    lineHeight: '1'
                  }}
                >
                  "
                </div>
                <p
                  style={{
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: '#374151',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                    flex: '1'
                  }}
                >
                  {testimonial.quote}
                </p>
                <p
                  style={{
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: '#111827',
                    fontWeight: '600'
                  }}
                >
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    </PageTransition>
  );
}
