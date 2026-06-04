'use client'

import { useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiXMark } from 'react-icons/hi2'
import { MediaPlaceholder } from './SectionComponents'

interface MediaItem {
  id: string
  type: 'image' | 'video' | 'placeholder'
  src?: string
  title: string
  description?: string
}

interface MediaCarouselProps {
  items: MediaItem[]
  title?: string
}

export function MediaCarousel({ items, title }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  if (!items || items.length === 0) return null

  const current = items[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Main Carousel */}
      <div className="space-y-4">
        {title && <h3 className="font-bold text-text-primary text-lg">{title}</h3>}

        {/* Main Display */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden cursor-pointer group" onClick={() => setIsFullScreen(true)}>
          <div className="relative h-96 md:h-[600px] bg-gray-200 flex items-center justify-center">
            {current.type === 'placeholder' ? (
              <MediaPlaceholder height="h-full" label={current.title} />
            ) : current.type === 'image' ? (
              <img
                src={current.src || ''}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-4xl mb-2">▶</p>
                  <p className="text-sm">{current.title}</p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                aria-label="Previous image"
              >
                <HiChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                aria-label="Next image"
              >
                <HiChevronRight size={24} />
              </button>
            </>
          )}

          {/* Counter */}
          {items.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {currentIndex + 1} / {items.length}
            </div>
          )}
        </div>

        {/* Info */}
        {current.description && (
          <p className="text-text-secondary text-sm">{current.description}</p>
        )}

        {/* Thumbnails Grid */}
        {items.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-text-primary scale-105'
                    : 'border-gray-300 hover:border-text-primary'
                }`}
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  {item.type === 'video' && (
                    <span className="text-white text-lg">▶</span>
                  )}
                  <span className="text-xs text-gray-600 text-center p-1">
                    {idx + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
            aria-label="Close fullscreen"
          >
            <HiXMark size={28} />
          </button>

          <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
            {current.type === 'image' ? (
              <img
                src={current.src || ''}
                alt={current.title}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="text-white text-center">
                <p className="text-6xl mb-4">▶</p>
                <p className="text-2xl">{current.title}</p>
              </div>
            )}
          </div>

          {items.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all"
              >
                <HiChevronLeft size={32} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all"
              >
                <HiChevronRight size={32} />
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-full text-lg font-semibold">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  )
}
