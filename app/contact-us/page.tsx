'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section } from '@/components/SectionComponents'
import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
  }

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Get In Touch"
          subtitle="Let's Discuss Your Needs"
          description="Tell us about your project, and we'll connect with you to explore partnership opportunities."
        />

        {/* Contact Form & Info */}
        <Section title="Contact Information" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Australia */}
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Australia</h3>
              <p className="text-text-secondary text-sm mb-4 font-semibold">
                The Ideas Factory Australia Pty Ltd
              </p>
              <p className="text-text-secondary text-sm mb-4">
                Adelaide • Sydney
              </p>
              <div>
                <p className="text-text-tertiary text-xs font-bold mb-2">ABN</p>
                <p className="text-text-secondary text-sm mb-3">73 663 094 920</p>
                <p className="text-text-tertiary text-xs font-bold mb-2">PHONE</p>
                <p className="text-text-secondary text-sm"><a href="tel:+61400352645" className="hover:underline text-text-primary">+61 400 352 645</a></p>
                <p className="text-text-secondary text-sm"><a href="mailto:sales@theidesfactory.com.au" className="hover:underline text-text-primary">sales@theidesfactory.com.au</a></p>
              </div>
            </div>

            {/* Colombia */}
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Colombia</h3>
              <p className="text-text-secondary text-sm mb-4 font-semibold">
                The Ideas Factory S.A.S
              </p>
              <p className="text-text-secondary text-sm mb-4">
                Medellín • Bogotá
              </p>
              <div>
                <p className="text-text-tertiary text-xs font-bold mb-2">NIT</p>
                <p className="text-text-secondary text-sm mb-3">901029547</p>
                <p className="text-text-tertiary text-xs font-bold mb-2">WHATSAPP</p>
                <p className="text-text-secondary text-sm"><a href="https://wa.me/573177346527" target="_blank" rel="noopener noreferrer" className="hover:underline text-text-primary">+57 317 734 6527</a></p>
                <p className="text-text-secondary text-sm"><a href="mailto:sales@theidesfactory.comco" className="hover:underline text-text-primary">sales@theidesfactory.comco</a></p>
              </div>
            </div>

            {/* USA */}
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">United States</h3>
              <p className="text-text-secondary text-sm mb-4 font-semibold">
                TIF Agency
              </p>
              <p className="text-text-secondary text-sm mb-4">
                Atlanta
              </p>
              <div>
                <p className="text-text-tertiary text-xs font-bold mb-2">PHONE</p>
                <p className="text-text-secondary text-sm"><a href="tel:+14046788032" className="hover:underline text-text-primary">+1 404 678 8032</a></p>
                <p className="text-text-secondary text-sm"><a href="https://tifagency.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-text-primary">tifagency.com</a></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto border border-border-light p-8 bg-surface-1">
            <h2 className="font-bold text-text-primary mb-6 text-2xl">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-surface-3 border border-border-medium">
                <p className="text-text-primary font-semibold">Thank you for your message</p>
                <p className="text-text-secondary text-sm">We'll get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-text-primary text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-border-medium p-3 text-text-primary bg-background focus:outline-none focus:border-text-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-border-medium p-3 text-text-primary bg-background focus:outline-none focus:border-text-primary"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-text-primary text-sm font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-border-medium p-3 text-text-primary bg-background focus:outline-none focus:border-text-primary"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-primary text-sm font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-border-medium p-3 text-text-primary bg-background focus:outline-none focus:border-text-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="strategy">Strategy & Consulting</option>
                  <option value="creative">Creative Services</option>
                  <option value="marketing">Marketing & Growth</option>
                  <option value="research">Research & Insights</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-border-medium p-3 text-text-primary bg-background focus:outline-none focus:border-text-primary"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-text-primary text-background py-3 font-semibold hover:opacity-80 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </Section>

        {/* Additional Info */}
        <Section title="Other Ways to Reach Us" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-text-primary mb-3">General Inquiries</h3>
              <p className="text-text-secondary text-sm mb-2">hello@tifagency.com</p>
              <p className="text-text-tertiary text-xs">Response within 24 hours</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-text-primary mb-3">Media & Press</h3>
              <p className="text-text-secondary text-sm mb-2">press@tifagency.com</p>
              <p className="text-text-tertiary text-xs">Media inquiries and press releases</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-text-primary mb-3">Careers</h3>
              <p className="text-text-secondary text-sm mb-2">careers@tifagency.com</p>
              <p className="text-text-tertiary text-xs">Join our team</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
