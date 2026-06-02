'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiXMark } from 'react-icons/hi2'

export function StickyServicesCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerPoint = 600

      if (scrollPosition > triggerPoint && !isDismissed) {
        setIsVisible(true)
      } else if (scrollPosition <= triggerPoint) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 animate-slide-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div>
          <p className="text-text-primary font-semibold text-sm">
            Which service is right for you?
          </p>
          <p className="text-text-secondary text-xs mt-1">
            Let's discuss which services align with your goals
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="inline-block bg-text-primary text-background px-6 py-2 hover:opacity-80 transition-opacity font-semibold text-sm"
          >
            Get Started
          </Link>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <HiXMark size={20} className="text-text-secondary" />
          </button>
        </div>
      </div>
    </div>
  )
}
