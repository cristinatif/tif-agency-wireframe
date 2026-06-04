'use client'

import { ReactNode } from 'react'
import { HiArrowRight, HiCheckCircle, HiLightBulb } from 'react-icons/hi2'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
}

export function Hero({ title, subtitle, description }: HeroProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div ref={ref} className="relative border-b border-gray-200 pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-300">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)'}}></div>
        <span className="absolute bottom-4 right-4 text-gray-600 text-xs font-semibold z-10">[Hero Section Background]</span>
      </div>

      {/* Content Overlay with Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`text-text-secondary text-sm mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>[Hero Section]</p>
        <h1 className={`text-4xl md:text-6xl font-bold text-text-primary mb-4 ${
          isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-4'
        }`}>{title}</h1>
        {subtitle && <h2 className={`text-xl md:text-2xl text-text-secondary mb-6 ${
          isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-4'
        }`} style={{ animationDelay: '0.1s' }}>{subtitle}</h2>}
        {description && <p className={`text-text-secondary max-w-2xl mx-auto ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.2s' }}>{description}</p>}
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
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`${darkBg ? 'bg-gray-100' : 'bg-white'} py-16 md:py-24 border-b border-gray-200 transition-colors ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          {sectionNumber && <p className="text-text-secondary text-sm mb-2">[Section {String(sectionNumber).padStart(2, '0')}]</p>}
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{title}</h2>
          {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
        </div>
        <div className={isVisible ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.1s' }}>
          {children}
        </div>
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
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`bg-gray-50 border border-gray-200 p-6 hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg ${
        isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'
      }`}
    >
      <div className="flex items-start gap-3 mb-2">
        <HiCheckCircle className="text-text-primary flex-shrink-0 mt-1" size={20} />
        <h3 className="font-bold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary text-sm mb-4">{description}</p>
      {details && (
        <ul className="space-y-2 text-xs text-text-tertiary ml-7">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-text-primary">→</span>
              <span>{detail}</span>
            </li>
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
    <div className={`${width} ${height} bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-300 flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)'}}></div>
      <span className="text-gray-600 text-base relative z-10 font-semibold">[{label}]</span>
    </div>
  )
}

interface VideoPlaceholderProps {
  width?: string
  height?: string
  label?: string
}

export function VideoPlaceholder({ width = 'w-full', height = 'h-64', label = 'Video Asset' }: VideoPlaceholderProps) {
  return (
    <div className={`${width} ${height} bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-400 flex items-center justify-center relative overflow-hidden group cursor-pointer`}>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)'}}></div>

      {/* Play Button */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-text-primary text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-gray-700 text-sm font-semibold">[{label}]</span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
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
    <div className="flex gap-4 pb-8 relative">
      <div className="w-24 font-bold text-text-primary flex-shrink-0">{year}</div>
      <div className="flex-grow border-l border-gray-200 pl-4 relative">
        <div className="absolute -left-2.5 top-1 w-4 h-4 bg-text-primary rounded-full border-2 border-white"></div>
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
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`border border-gray-200 p-6 bg-gray-50 shadow-md hover:shadow-lg transition-shadow ${
        isVisible ? 'animate-scale-up' : 'opacity-0 scale-95'
      }`}
    >
      <div className="flex items-center justify-center w-10 h-10 bg-text-primary text-white rounded-full mb-4 font-bold text-lg">{number}</div>
      <h3 className="font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  )
}

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <Link href={href}>
      <div
        ref={ref}
        className={`h-full border border-gray-200 p-8 bg-white hover:bg-gray-50 transition-all hover:shadow-lg cursor-pointer group ${
          isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'
        }`}
      >
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="font-bold text-text-primary mb-3 text-lg group-hover:text-gray-700 transition-colors">{title}</h3>
        <p className="text-text-secondary text-sm mb-4">{description}</p>
        <span className="text-text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
          Explore →
        </span>
      </div>
    </Link>
  )
}

interface ProcessStepProps {
  number: string
  title: string
  description: string
  delay: string
}

export function ProcessStep({ number, title, description, delay }: ProcessStepProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`flex gap-6 ${
        isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-4'
      }`}
      style={{ animationDelay: delay }}
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 bg-text-primary text-white rounded-full font-bold text-lg">
          {number}
        </div>
      </div>
      <div className="flex-grow">
        <h4 className="font-bold text-text-primary mb-2">{title}</h4>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}

export function BrochureCtaBanner({ serviceName }: { serviceName: string }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-8 md:p-12 my-12 ${
        isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="font-bold text-text-primary mb-2 text-lg">Want to learn more?</h3>
          <p className="text-text-secondary text-sm">
            Download our comprehensive guide to understand our {serviceName} approach, methodology, and case studies.
          </p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row justify-end">
          <a href="#" className="inline-block border-2 border-text-primary text-text-primary px-8 py-4 hover:bg-text-primary hover:text-background transition-all font-bold text-center rounded-lg">Download Brochure</a>
          <a href="#proposal-form" className="inline-block bg-text-primary text-background px-8 py-4 hover:shadow-xl hover:scale-105 transition-all font-bold rounded-lg">Quick Call</a>
        </div>
      </div>
    </div>
  )
}

export function ResourcesSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`bg-white border border-gray-200 p-8 md:p-12 my-12 ${
        isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="font-bold text-text-primary mb-2 text-center text-lg">What's Next?</h3>
        <p className="text-text-secondary text-center text-sm mb-8">Choose how you'd like to move forward</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#" className="border border-gray-200 p-6 hover:shadow-lg transition-shadow group cursor-pointer">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">📊</div>
            <h4 className="font-bold text-text-primary mb-2 group-hover:text-gray-700 transition-colors">Case Studies</h4>
            <p className="text-text-secondary text-sm mb-4">See how we've helped similar companies achieve growth</p>
            <span className="text-text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Read →</span>
          </a>

          <a href="#" className="border border-gray-200 p-6 hover:shadow-lg transition-shadow group cursor-pointer">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">📄</div>
            <h4 className="font-bold text-text-primary mb-2 group-hover:text-gray-700 transition-colors">Strategy Guide</h4>
            <p className="text-text-secondary text-sm mb-4">Download our detailed playbook and best practices</p>
            <span className="text-text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Download →</span>
          </a>

          <a href="#proposal-form" className="border border-gray-200 p-6 hover:shadow-lg transition-shadow group cursor-pointer bg-gray-50">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">💬</div>
            <h4 className="font-bold text-text-primary mb-2 group-hover:text-gray-700 transition-colors">Get a Proposal</h4>
            <p className="text-text-secondary text-sm mb-4">Let's discuss your specific needs and create a custom plan</p>
            <span className="text-text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Start →</span>
          </a>
        </div>
      </div>
    </div>
  )
}
