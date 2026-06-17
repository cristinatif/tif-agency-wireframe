'use client'

import { useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

interface LogoCarouselProps {
  logos: string[]
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8
    track.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => scroll('left')}
        className="flex-shrink-0 z-10 bg-white border border-gray-300 text-text-primary p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Previous logos"
      >
        <HiChevronLeft size={24} />
      </button>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-4 py-2 flex-grow [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex-shrink-0 w-40 h-24 border border-gray-200 bg-white flex items-center justify-center text-text-tertiary text-sm font-semibold"
          >
            [{logo}]
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="flex-shrink-0 z-10 bg-white border border-gray-300 text-text-primary p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Next logos"
      >
        <HiChevronRight size={24} />
      </button>
    </div>
  )
}
