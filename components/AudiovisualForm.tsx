'use client'

import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const VIDEO_TYPES = [
  'Brand Intro and Corporate Identity Videos',
  'Explainer Videos for Complex Solutions',
  'On-Site Industrial and Manufacturing Videos',
  'Case Study and Testimonial Videos',
  'Training and Compliance Videos',
  'Executive Leadership Communication Videos',
  'Event Recap and Conference Aftermovies',
  'Other',
]

export function AudiovisualForm() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    videoType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Audiovisual campaign inquiry:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div
      ref={ref}
      className={`max-w-2xl mx-auto border border-gray-200 p-8 md:p-12 bg-gray-50 ${
        isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'
      }`}
    >
      <h3 className="text-2xl font-bold text-text-primary mb-2">Tell Us About Your Video Project</h3>
      <p className="text-text-secondary mb-8">
        Share a few details and we'll map out the right audiovisual approach for your goals.
      </p>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">✓</div>
          <h4 className="font-bold text-text-primary mb-2 text-lg">Request Received</h4>
          <p className="text-text-secondary">
            Thanks! We'll get back to you with next steps for your video project. Check your email.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary placeholder-gray-400 focus:outline-none focus:border-text-primary"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Company *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary placeholder-gray-400 focus:outline-none focus:border-text-primary"
                placeholder="Your company"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary placeholder-gray-400 focus:outline-none focus:border-text-primary"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary placeholder-gray-400 focus:outline-none focus:border-text-primary"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              What type of video are you interested in? *
            </label>
            <select
              name="videoType"
              value={formData.videoType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary focus:outline-none focus:border-text-primary"
            >
              <option value="">Select a video type</option>
              {VIDEO_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary placeholder-gray-400 focus:outline-none focus:border-text-primary"
              placeholder="Anything else you want to tell us?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-text-primary text-background py-5 font-bold hover:shadow-xl hover:scale-105 transition-all rounded-lg"
          >
            Schedule My AV Strategy Session
          </button>

          <p className="text-xs text-text-tertiary text-center">
            We respect your privacy. Your information will only be used to plan your video project.
          </p>
        </form>
      )}
    </div>
  )
}
