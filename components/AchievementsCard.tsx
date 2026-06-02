'use client'

import { useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface Achievement {
  number: string
  label: string
  description: string
}

interface AchievementsCardProps {
  achievements: Achievement[]
}

export function AchievementsCard({ achievements }: AchievementsCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [achievements.length])

  const current = achievements[currentIndex]

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className={`bg-gray-50 border border-gray-200 p-8 md:p-12 text-center rounded-lg min-h-48 flex flex-col items-center justify-center transition-all duration-500 ${
        isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'
      }`}>
        <div className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
          {current.number}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
          {current.label}
        </h3>
        <p className="text-text-secondary text-sm md:text-base">
          {current.description}
        </p>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {achievements.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-text-primary w-6' : 'bg-gray-300'
            }`}
            aria-label={`Achievement ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
