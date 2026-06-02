'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/our-services', label: 'Our Services' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/toolbox', label: 'Toolbox' },
    { href: '/contact-us', label: 'Contact Us' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-text-primary">
            TIF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-primary hover:text-text-secondary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
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
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-text-primary hover:text-text-secondary transition-colors text-sm py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
