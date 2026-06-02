'use client'

import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface ProposalFormProps {
  service: string
}

export function ProposalForm({ service }: ProposalFormProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    challenge: '',
    budget: '',
    timeline: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Proposal request:', { service, ...formData })
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
      <h3 className="text-2xl font-bold text-text-primary mb-2">Get a Custom Proposal</h3>
      <p className="text-text-secondary mb-8">
        We'll create a tailored proposal in 48 hours. No commitment required.
      </p>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">✓</div>
          <h4 className="font-bold text-text-primary mb-2 text-lg">Proposal Request Received</h4>
          <p className="text-text-secondary">
            We'll send you a custom proposal within 48 hours. Check your email for next steps.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Company Name *
              </label>
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
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Your Role *
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary placeholder-gray-400 focus:outline-none focus:border-text-primary"
                placeholder="e.g., Marketing Director"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              What's Your Main Challenge? *
            </label>
            <textarea
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary placeholder-gray-400 focus:outline-none focus:border-text-primary"
              placeholder="Describe what you're trying to achieve..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Monthly Budget Range *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-text-primary focus:outline-none focus:border-text-primary"
              >
                <option value="">Select range</option>
                <option value="5k-10k">$5K - $10K</option>
                <option value="10k-25k">$10K - $25K</option>
                <option value="25k-50k">$25K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k+">$100K+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Timeline *
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-text-secondary">
                  <input
                    type="radio"
                    name="timeline"
                    value="asap"
                    checked={formData.timeline === 'asap'}
                    onChange={handleChange}
                    required
                  />
                  ASAP (Next 30 days)
                </label>
                <label className="flex items-center gap-2 text-text-secondary">
                  <input
                    type="radio"
                    name="timeline"
                    value="3months"
                    checked={formData.timeline === '3months'}
                    onChange={handleChange}
                  />
                  3 Months
                </label>
                <label className="flex items-center gap-2 text-text-secondary">
                  <input
                    type="radio"
                    name="timeline"
                    value="6months"
                    checked={formData.timeline === '6months'}
                    onChange={handleChange}
                  />
                  6 Months
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-text-primary text-background py-4 font-semibold hover:opacity-80 transition-opacity"
          >
            Get Proposal
          </button>

          <p className="text-xs text-text-tertiary text-center">
            We respect your privacy. Your information will only be used to prepare your proposal.
          </p>
        </form>
      )}
    </div>
  )
}
