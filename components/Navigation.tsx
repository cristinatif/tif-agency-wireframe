'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'es'>('en')

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/our-services', label: 'Our Services' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/toolbox', label: 'Resources' },
    { href: '/contact-us', label: 'Contact Us' },
  ]

  const services = [
    { href: '/our-services/research-lab', label: 'Research Lab', subtitle: 'Data-Driven Insights' },
    { href: '/our-services/brand-strategy', label: 'Brand Strategy', subtitle: 'Strategic Positioning' },
    { href: '/our-services/creative-studio', label: 'Creative Services', subtitle: 'Design & Content' },
    { href: '/our-services/digital-marketing', label: 'Digital Marketing', subtitle: 'Growth & Performance' },
    { href: '/our-services/experiential', label: 'Experiential Marketing', subtitle: 'Events & Activations' },
    { href: '/our-services/audiovisual-campaign', label: 'Audiovisual Campaign', subtitle: 'B2B Video Production' },
    { href: '/our-services/integrated-solutions', label: 'Integrated Solutions', subtitle: 'Full-Service Growth' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-text-primary">
            TIF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {mainLinks.map((link) => {
              if (link.label === 'Our Services') {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-text-primary hover:text-text-secondary transition-colors text-sm group-hover:text-text-secondary">
                      {link.label}
                      <HiChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    <div className={`absolute left-0 mt-0 w-80 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
                      <div className="p-6 space-y-1">
                        {services.map((service, idx) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block p-3 hover:bg-gray-50 rounded transition-colors group/service`}
                            style={{ transitionDelay: `${idx * 25}ms` }}
                          >
                            <div className="text-sm font-semibold text-text-primary group-hover/service:text-gray-700">
                              {service.label}
                            </div>
                            <div className="text-xs text-text-secondary group-hover/service:text-text-tertiary">
                              {service.subtitle}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              if (link.label === 'Contact Us') {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 bg-text-primary text-background font-semibold rounded hover:opacity-80 transition-opacity text-sm"
                  >
                    {link.label}
                  </Link>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-primary hover:text-text-secondary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Language Switch */}
            <div className="flex items-center gap-1 border-l border-gray-300 pl-6 ml-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-semibold transition-colors ${
                  language === 'en'
                    ? 'text-text-primary bg-gray-100 rounded'
                    : 'text-text-tertiary hover:text-text-secondary'
                }`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm font-semibold transition-colors ${
                  language === 'es'
                    ? 'text-text-primary bg-gray-100 rounded'
                    : 'text-text-tertiary hover:text-text-secondary'
                }`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-text-primary"></span>
            <span className="w-6 h-0.5 bg-text-primary"></span>
            <span className="w-6 h-0.5 bg-text-primary"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border-light pt-4 space-y-3">
            {mainLinks.map((link) => {
              if (link.label === 'Our Services') {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center gap-2 w-full text-text-primary hover:text-text-secondary transition-colors text-sm py-2"
                    >
                      {link.label}
                      <HiChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-2 mt-2 border-l border-gray-200">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-text-secondary hover:text-text-primary transition-colors text-xs py-2"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-semibold">{service.label}</div>
                            <div className="text-text-tertiary">{service.subtitle}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              if (link.label === 'Contact Us') {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 bg-text-primary text-background font-semibold rounded hover:opacity-80 transition-opacity text-sm text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-text-primary hover:text-text-secondary transition-colors text-sm py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Mobile Language Switch */}
            <div className="flex items-center justify-center gap-1 border-t border-gray-300 pt-4 mt-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-semibold transition-colors ${
                  language === 'en'
                    ? 'text-text-primary bg-gray-100 rounded'
                    : 'text-text-tertiary'
                }`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm font-semibold transition-colors ${
                  language === 'es'
                    ? 'text-text-primary bg-gray-100 rounded'
                    : 'text-text-tertiary'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
