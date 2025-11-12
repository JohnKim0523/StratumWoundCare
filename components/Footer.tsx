import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Stratum Wound Care</h3>
            <p className="text-gray-400 text-sm">
              Providing advanced wound healing and limb preservation to help patients stay safe, healthy, and home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/patients" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Patient Information
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Phone: (555) 123-4567</li>
              <li>Fax: (555) 123-4568</li>
              <li>Email: info@stratumwoundcare.com</li>
              <li>Emergency: (555) 123-9999</li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="pt-2">
                <Link href="/contact" className="text-primary-400 hover:text-primary-300">
                  Schedule an Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Stratum Wound Care. All rights reserved.</p>
          <p className="mt-2">
            HIPAA Compliant | Medicare & Medicaid Certified | Licensed by PA Department of Health
          </p>
        </div>
      </div>
    </footer>
  );
}
