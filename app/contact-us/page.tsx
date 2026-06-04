'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section } from '@/components/SectionComponents'
import { useState } from 'react'
import { HiChevronDown, HiPhone, HiEnvelope, HiArrowTopRightOnSquare } from 'react-icons/hi2'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: (e.target as HTMLInputElement).checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', services: [], message: '' })
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

        {/* Contact Form & Locations */}
        <Section title="Get In Touch" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Locations (2 cols width) */}
            <div className="md:col-span-2 space-y-3">
              {/* Australia */}
              <LocationCard
                name="Australia"
                company="The Ideas Factory Australia Pty Ltd"
                cities="Adelaide • Sydney"
                details={{ label: 'ABN', value: '73 663 094 920' }}
                phone="+61400352645"
                email="sales@theidesfactory.com.au"
                whatsapp="+61400352645"
                mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.3547382370456!2d138.6007!3d-34.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b9e8d8f5f5%3A0x500eef6ae50afe0!2sThe%20Ideas%20Factory%20Australia!5e0!3m2!1sen!2sau!4v1234567890"
                isExpanded={expandedLocation === 'australia'}
                onToggle={() => setExpandedLocation(expandedLocation === 'australia' ? null : 'australia')}
              />

              {/* Colombia */}
              <LocationCard
                name="Colombia"
                company="The Ideas Factory S.A.S"
                cities="Medellín • Bogotá"
                details={{ label: 'NIT', value: '901029547' }}
                phone="+573177346527"
                email="sales@theidesfactory.comco"
                whatsapp="+573177346527"
                mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.519337897155!2d-75.5136!3d6.2442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682c00000000%3A0x500eef6ae50afe0!2sThe%20Ideas%20Factory%20Colombia!5e0!3m2!1sen!2sco!4v1234567890"
                isExpanded={expandedLocation === 'colombia'}
                onToggle={() => setExpandedLocation(expandedLocation === 'colombia' ? null : 'colombia')}
              />

              {/* USA */}
              <LocationCard
                name="United States"
                company="TIF Agency"
                cities="Atlanta"
                details={{ label: 'PHONE', value: '+1 404 678 8032' }}
                phone="+14046788032"
                email="hello@tifagency.com"
                whatsapp="+14046788032"
                mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2543625829633!2d-84.3880!3d33.7490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503f82e4e4e4e%3A0x500eef6ae50afe0!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1234567890"
                isExpanded={expandedLocation === 'usa'}
                onToggle={() => setExpandedLocation(expandedLocation === 'usa' ? null : 'usa')}
              />
            </div>

            {/* Right Column - Contact Form (1 col width) */}
            <div className="border border-border-light p-5 bg-surface-1 h-fit sticky top-32">
            <h2 className="font-bold text-text-primary mb-4 text-lg">Send us a Message</h2>

            {submitted && (
              <div className="mb-4 p-3 bg-surface-3 border border-border-medium rounded">
                <p className="text-text-primary font-semibold text-sm">Thank you for your message</p>
                <p className="text-text-secondary text-xs">We'll get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-text-primary text-xs font-semibold mb-1 uppercase">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-border-medium p-2 text-sm text-text-primary bg-background focus:outline-none focus:border-text-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary text-xs font-semibold mb-1 uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-border-medium p-2 text-sm text-text-primary bg-background focus:outline-none focus:border-text-primary"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-text-primary text-xs font-semibold mb-1 uppercase">
                  Phone *
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-border-medium p-2 text-sm text-text-primary bg-background focus:outline-none focus:border-text-primary"
                  placeholder="Phone"
                />
              </div>

              <div>
                <label className="block text-text-primary text-xs font-semibold mb-2 uppercase">
                  What are you looking for? *
                </label>
                <div className="space-y-2">
                  {['Strategic Branding', 'Research & Businesses Analytics', 'Creative Projects', 'Digital Positioning & Growth'].map((service) => (
                    <label key={service} className="flex items-center cursor-pointer group text-xs">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleChange}
                        className="w-3 h-3 border border-border-medium focus:outline-none focus:border-text-primary accent-text-primary"
                      />
                      <span className="ml-2 text-text-secondary group-hover:text-text-primary transition-colors">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary text-xs font-semibold mb-1 uppercase">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border border-border-medium p-2 text-sm text-text-primary bg-background focus:outline-none focus:border-text-primary"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-text-primary text-background py-3 font-bold hover:shadow-lg hover:scale-105 transition-all mt-4 rounded"
              >
                Send Message
              </button>
            </form>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

interface LocationCardProps {
  name: string
  company: string
  cities: string
  details: { label: string; value: string }
  phone: string
  email: string
  whatsapp: string
  mapEmbed: string
  isExpanded: boolean
  onToggle: () => void
}

function LocationCard({
  name,
  company,
  cities,
  details,
  phone,
  email,
  whatsapp,
  mapEmbed,
  isExpanded,
  onToggle,
}: LocationCardProps) {
  return (
    <div className="border border-border-light overflow-hidden transition-all duration-300">
      {/* Header - Always Visible */}
      <button
        onClick={onToggle}
        className="w-full p-6 bg-surface-1 hover:bg-surface-2 transition-colors flex items-center justify-between text-left"
      >
        <div>
          <h3 className="font-bold text-text-primary mb-1">{name}</h3>
          <p className="text-text-secondary text-sm">{company}</p>
          <p className="text-text-tertiary text-xs mt-1">{cities}</p>
        </div>
        <HiChevronDown
          className={`text-text-tertiary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border-light bg-background p-6 space-y-6">
          {/* Map */}
          <div className="w-full rounded overflow-hidden h-80">
            <iframe
              src={mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Info */}
            <div className="space-y-4">
              <div>
                <p className="text-text-tertiary text-xs font-bold mb-1">{details.label}</p>
                <p className="text-text-secondary text-sm">{details.value}</p>
              </div>
              <div>
                <p className="text-text-tertiary text-xs font-bold mb-2">PHONE</p>
                <p className="text-text-secondary text-sm">
                  <a href={`tel:${phone}`} className="hover:text-text-primary transition-colors">
                    {phone}
                  </a>
                </p>
              </div>
              <div>
                <p className="text-text-tertiary text-xs font-bold mb-2">EMAIL</p>
                <p className="text-text-secondary text-sm">
                  <a href={`mailto:${email}`} className="hover:text-text-primary transition-colors">
                    {email}
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column - Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 p-4 border border-border-light hover:bg-surface-1 transition-colors rounded group"
              >
                <HiPhone className="text-text-tertiary group-hover:text-text-primary transition-colors" size={20} />
                <div>
                  <p className="font-semibold text-text-primary text-sm">Call us</p>
                  <p className="text-text-secondary text-xs">{phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border-light hover:bg-surface-1 transition-colors rounded group"
              >
                <HiPhone className="text-text-tertiary group-hover:text-text-primary transition-colors" size={20} />
                <div>
                  <p className="font-semibold text-text-primary text-sm">WhatsApp</p>
                  <p className="text-text-secondary text-xs">Message us directly</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 p-4 border border-border-light hover:bg-surface-1 transition-colors rounded group"
              >
                <HiEnvelope className="text-text-tertiary group-hover:text-text-primary transition-colors" size={20} />
                <div>
                  <p className="font-semibold text-text-primary text-sm">Email</p>
                  <p className="text-text-secondary text-xs">{email}</p>
                </div>
              </a>

              <a
                href={`https://maps.google.com/maps/search/${name.replace(' ', '+')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-text-primary text-background hover:opacity-80 transition-opacity rounded font-semibold group"
              >
                <HiArrowTopRightOnSquare size={20} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
