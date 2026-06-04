'use client'

import { MediaCarousel } from './MediaCarousel'

export interface WorkCategory {
  id: string
  title: string
  description: string
  icon?: string
  items: Array<{
    id: string
    type: 'image' | 'video' | 'placeholder'
    src?: string
    title: string
    description?: string
  }>
}

interface WorkShowcaseProps {
  categories: WorkCategory[]
}

export function WorkShowcase({ categories }: WorkShowcaseProps) {
  if (!categories || categories.length === 0) return null

  return (
    <div className="space-y-16">
      {categories.map((category) => (
        <div key={category.id} className="space-y-4">
          {/* Category Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-3">
              {category.icon && <span className="text-3xl">{category.icon}</span>}
              {category.title}
            </h3>
            <p className="text-text-secondary">{category.description}</p>
          </div>

          {/* Media Carousel for this category */}
          <MediaCarousel items={category.items} />
        </div>
      ))}
    </div>
  )
}
