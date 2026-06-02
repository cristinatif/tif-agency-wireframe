import { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
}

export function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <div className="bg-surface-1 border-b border-border-medium pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-secondary text-sm mb-4">[Hero Section]</p>
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">{title}</h1>
        {subtitle && <h2 className="text-xl md:text-2xl text-text-secondary mb-6">{subtitle}</h2>}
        {description && <p className="text-text-secondary max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  )
}

interface SectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  darkBg?: boolean
  sectionNumber?: number
}

export function Section({ title, subtitle, children, darkBg = false, sectionNumber }: SectionProps) {
  return (
    <section className={`${darkBg ? 'bg-gray-100' : 'bg-white'} py-16 md:py-24 border-b border-gray-300 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          {sectionNumber && <p className="text-text-secondary text-sm mb-2">[Section {String(sectionNumber).padStart(2, '0')}]</p>}
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{title}</h2>
          {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

interface CardProps {
  title: string
  description: string
  details?: string[]
}

export function Card({ title, description, details }: CardProps) {
  return (
    <div className="bg-gray-50 border border-gray-300 p-6 hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
      <h3 className="font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm mb-4">{description}</p>
      {details && (
        <ul className="space-y-1 text-xs text-text-tertiary">
          {details.map((detail, idx) => (
            <li key={idx}>• {detail}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface PlaceholderProps {
  width?: string
  height?: string
  label?: string
}

export function MediaPlaceholder({ width = 'w-full', height = 'h-64', label = 'Media Asset' }: PlaceholderProps) {
  return (
    <div className={`${width} ${height} bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-gray-400 flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)'}}></div>
      <span className="text-gray-600 text-base relative z-10 font-semibold">[{label}]</span>
    </div>
  )
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="flex gap-4 pb-8">
      <div className="w-24 font-bold text-text-primary flex-shrink-0">{year}</div>
      <div className="flex-grow border-l border-border-medium pl-4">
        <h4 className="font-bold text-text-primary mb-2">{title}</h4>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}

interface ServiceBoxProps {
  number: string
  title: string
  description: string
}

export function ServiceBox({ number, title, description }: ServiceBoxProps) {
  return (
    <div className="border border-gray-300 p-6 bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-3xl font-bold text-gray-500 mb-2">{number}</div>
      <h3 className="font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  )
}
