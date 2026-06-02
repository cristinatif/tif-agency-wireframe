import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-border-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/about-us" className="hover:text-text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/our-services#research" className="hover:text-text-primary transition-colors">
                  Research Lab
                </Link>
              </li>
              <li>
                <Link href="/our-services#strategy" className="hover:text-text-primary transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link href="/our-services#creative" className="hover:text-text-primary transition-colors">
                  Creative Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">Locations</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/locations#australia" className="hover:text-text-primary transition-colors">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/locations#latam" className="hover:text-text-primary transition-colors">
                  LATAM
                </Link>
              </li>
              <li>
                <Link href="/locations#usa" className="hover:text-text-primary transition-colors">
                  USA
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/insights" className="hover:text-text-primary transition-colors">
                  Insights Hub
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-text-primary transition-colors">
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-medium pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
            <p>&copy; 2024 TIF Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-text-primary transition-colors">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
