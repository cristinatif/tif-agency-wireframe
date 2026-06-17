'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiChevronDown, HiPlay } from 'react-icons/hi2'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface ServiceVideoCardProps {
  title: string
  valueStatement: string
  price: string
  examples: string[]
}

export function ServiceVideoCard({ title, valueStatement, price, examples }: ServiceVideoCardProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  const [open, setOpen] = useState(false)

  return (
    <div
      ref={ref}
      className={`flex flex-col overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow ${
        isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'
      }`}
    >
      {/* Thumbnail / video still */}
      <div className="relative h-44 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)' }}
        />
        <div className="relative z-10 w-14 h-14 bg-text-primary text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <HiPlay size={26} className="ml-0.5" />
        </div>
        <span className="absolute bottom-3 right-3 text-gray-600 text-xs font-semibold z-10">[Video Still]</span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 flex-grow">{valueStatement}</p>
        <p className="text-text-primary font-semibold text-sm mb-4">
          Starting from <span className="text-lg">{price}</span>
        </p>

        {/* Expandable: See Examples */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-sm font-semibold text-text-primary border-t border-gray-200 pt-4 hover:text-text-secondary transition-colors"
          aria-expanded={open}
        >
          See Examples
          <HiChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="mt-4 space-y-3">
            <ul className="space-y-2">
              {examples.map((example) => (
                <li key={example}>
                  <a href="#" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                    <HiPlay size={14} className="flex-shrink-0 text-text-primary" />
                    {example}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="#proposal-form"
              className="block text-center bg-text-primary text-background px-4 py-3 rounded-lg font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Request a Custom Quote
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
