'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import Link from 'next/link'
import { useState } from 'react'

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('all')

  const services = [
    { id: 'all', label: 'All Work' },
    { id: 'research-lab', label: 'Research Lab' },
    { id: 'brand-strategy', label: 'Brand Strategy' },
    { id: 'creative-studio', label: 'Creative Services' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'experiential', label: 'Experiential' },
    { id: 'integrated-solutions', label: 'Integrated Solutions' },
  ]

  const caseStudies = [
    // Research Lab - 3 cases
    {
      id: 1,
      slug: 'apac-market-research',
      title: 'Asia-Pacific Market Expansion',
      service: 'research-lab',
      serviceName: 'Research Lab',
      client: 'Global Consumer Brand',
      year: '2023',
      primaryMetric: '$50M',
      primaryLabel: 'Market Opportunity',
      description: 'Regional market entry strategy and competitive analysis',
      metrics: ['6-month launch readiness', 'Buyer persona mapping'],
    },
    {
      id: 2,
      slug: 'market-sizing-study',
      title: 'Market Sizing & Opportunity Study',
      service: 'research-lab',
      serviceName: 'Research Lab',
      client: 'Enterprise SaaS Company',
      year: '2023',
      primaryMetric: '$2.3B',
      primaryLabel: 'TAM Identified',
      description: 'Comprehensive market research across 5 regions',
      metrics: ['87% confidence level', 'Segmentation analysis'],
    },
    {
      id: 3,
      slug: 'competitive-intelligence-program',
      title: 'Competitive Intelligence Program',
      service: 'research-lab',
      serviceName: 'Research Lab',
      client: 'Financial Services Leader',
      year: '2023',
      primaryMetric: '15+',
      primaryLabel: 'Competitors Analyzed',
      description: 'Ongoing competitive monitoring and strategic insights',
      metrics: ['Quarterly reports', 'Predictive analysis'],
    },

    // Brand Strategy - 3 cases
    {
      id: 4,
      slug: 'fortune-500-brand-transformation',
      title: 'Fortune 500 Brand Transformation',
      service: 'brand-strategy',
      serviceName: 'Brand Strategy',
      client: 'Global Consumer Brand',
      year: '2023',
      primaryMetric: '23%',
      primaryLabel: 'Market Share Increase',
      description: 'Complete brand repositioning and market re-entry strategy',
      metrics: ['45% brand perception lift', '3-year growth established'],
    },
    {
      id: 5,
      slug: 'brand-refresh-tech-company',
      title: 'Tech Company Brand Refresh',
      service: 'brand-strategy',
      serviceName: 'Brand Strategy',
      client: 'B2B SaaS Unicorn',
      year: '2023',
      primaryMetric: '34%',
      primaryLabel: 'Brand Lift',
      description: 'Strategic repositioning for scaling enterprise',
      metrics: ['New messaging framework', 'Visual identity system'],
    },
    {
      id: 6,
      slug: 'positioning-for-acquisition',
      title: 'Positioning Strategy for Acquisition',
      service: 'brand-strategy',
      serviceName: 'Brand Strategy',
      client: 'Healthcare Technology',
      year: '2023',
      primaryMetric: '18%',
      primaryLabel: 'Value Premium',
      description: 'Strategic positioning to maximize acquisition price',
      metrics: ['Enterprise buyer insights', 'Competitive differentiation'],
    },

    // Creative Studio - 3 cases
    {
      id: 7,
      slug: 'creative-campaign-excellence',
      title: 'Creative Studio Campaign',
      service: 'creative-studio',
      serviceName: 'Creative Services',
      client: 'Lifestyle Brand',
      year: '2023',
      primaryMetric: '15M',
      primaryLabel: 'Social Reach',
      description: 'Integrated audiovisual campaign with brand storytelling',
      metrics: ['8% engagement rate', 'Award-winning creative'],
    },
    {
      id: 8,
      slug: 'video-content-series',
      title: 'Video Content Series Production',
      service: 'creative-studio',
      serviceName: 'Creative Services',
      client: 'Premium Apparel Brand',
      year: '2023',
      primaryMetric: '12',
      primaryLabel: 'Videos Produced',
      description: 'Cinematic content series for brand storytelling',
      metrics: ['42M total views', 'Multi-award winner'],
    },
    {
      id: 9,
      slug: 'packaging-design-system',
      title: 'Packaging Design System',
      service: 'creative-studio',
      serviceName: 'Creative Services',
      client: 'Beverage Company',
      year: '2023',
      primaryMetric: '28%',
      primaryLabel: 'Shelf Impact Lift',
      description: 'Full packaging redesign across product line',
      metrics: ['36 SKU designs', 'Retail sales +28%'],
    },

    // Digital Marketing - 3 cases
    {
      id: 10,
      slug: 'digital-marketing-saas-growth',
      title: 'Digital Marketing Campaign',
      service: 'digital-marketing',
      serviceName: 'Digital Marketing',
      client: 'Technology Services Company',
      year: '2023',
      primaryMetric: '300%',
      primaryLabel: 'ROI Achieved',
      description: 'Multi-channel performance marketing driving lead generation',
      metrics: ['45K qualified leads', '40% CPA reduction'],
    },
    {
      id: 11,
      slug: 'seo-organic-growth',
      title: 'SEO & Organic Growth Program',
      service: 'digital-marketing',
      serviceName: 'Digital Marketing',
      client: 'E-commerce Platform',
      year: '2023',
      primaryMetric: '287%',
      primaryLabel: 'Traffic Growth',
      description: 'Comprehensive SEO strategy and content marketing',
      metrics: ['$4.2M incremental revenue', '156% organic growth'],
    },
    {
      id: 12,
      slug: 'performance-marketing-automation',
      title: 'Performance Marketing Automation',
      service: 'digital-marketing',
      serviceName: 'Digital Marketing',
      client: 'EdTech Startup',
      year: '2023',
      primaryMetric: '185%',
      primaryLabel: 'ROAS',
      description: 'Marketing automation and campaign optimization',
      metrics: ['52% CAC reduction', '3.2K enrollments/month'],
    },

    // Experiential - 3 cases
    {
      id: 13,
      slug: 'event-activation-series',
      title: 'Event Activation Series',
      service: 'experiential',
      serviceName: 'Experiential Marketing',
      client: 'Premium Consumer Brand',
      year: '2023',
      primaryMetric: '50K+',
      primaryLabel: 'Attendees',
      description: 'Multi-city brand activation and customer engagement',
      metrics: ['85% satisfaction', '$2M brand value lift'],
    },
    {
      id: 14,
      slug: 'product-launch-experience',
      title: 'Product Launch Experience Design',
      service: 'experiential',
      serviceName: 'Experiential Marketing',
      client: 'Technology Company',
      year: '2023',
      primaryMetric: '8',
      primaryLabel: 'Global Cities',
      description: 'Immersive product launch event series',
      metrics: ['2K influencers engaged', '89% media coverage'],
    },
    {
      id: 15,
      slug: 'customer-summit-experience',
      title: 'Customer Summit & Conference',
      service: 'experiential',
      serviceName: 'Experiential Marketing',
      client: 'Enterprise Software Leader',
      year: '2023',
      primaryMetric: '1.2K',
      primaryLabel: 'Attendees',
      description: 'Annual customer conference and networking experience',
      metrics: ['92% satisfaction', '$3.1M renewal impact'],
    },

    // Integrated Solutions - 3 cases
    {
      id: 16,
      slug: 'latam-integrated-solution',
      title: 'LATAM Full Integration',
      service: 'integrated-solutions',
      serviceName: 'Integrated Solutions',
      client: 'International Tech Company',
      year: '2023',
      primaryMetric: '12',
      primaryLabel: 'Markets Activated',
      description: 'End-to-end strategy, creative, and digital execution',
      metrics: ['95% cultural relevance', '4-month deployment'],
    },
    {
      id: 17,
      slug: 'enterprise-growth-transformation',
      title: 'Enterprise Growth Transformation',
      service: 'integrated-solutions',
      serviceName: 'Integrated Solutions',
      client: 'Fortune 500 Services Company',
      year: '2023',
      primaryMetric: '2.8x',
      primaryLabel: 'Growth Rate',
      description: 'Full integrated strategy and execution across markets',
      metrics: ['$450M incremental revenue', '18-month program'],
    },
    {
      id: 18,
      slug: 'market-entry-integrated',
      title: 'New Market Entry Program',
      service: 'integrated-solutions',
      serviceName: 'Integrated Solutions',
      client: 'Global Consumer Goods',
      year: '2023',
      primaryMetric: '4',
      primaryLabel: 'New Markets',
      description: 'Strategy to execution for market expansion',
      metrics: ['$180M year 1 revenue', 'Rapid scaling success'],
    },
  ]

  const filtered = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.service === activeFilter)

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Our Work"
          subtitle="Case Studies"
          description="Real results. Real clients. Real impact across every service we offer."
        />

        {/* Filter Section */}
        <Section sectionNumber={1}>
          <div className="flex overflow-x-auto gap-3 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-start">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveFilter(service.id)}
                className={`px-4 py-2 text-sm whitespace-nowrap rounded transition-colors font-medium ${
                  activeFilter === service.id
                    ? 'bg-text-primary text-background'
                    : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </Section>

        {/* Cases Grid - 3x3 for "All Work", 3x1 for filtered */}
        {filtered.length > 0 && (
          <Section sectionNumber={2} title={activeFilter === 'all' ? 'All Case Studies' : `${filtered[0].serviceName} Projects`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.slice(0, activeFilter === 'all' ? 9 : 3).map((study) => (
                <Link
                  key={study.id}
                  href={`/our-work/${study.slug}`}
                  className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="bg-gray-50 h-40 flex items-center justify-center border-b border-gray-200">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-text-primary mb-2">{study.primaryMetric}</p>
                      <p className="text-text-tertiary text-xs font-bold">{study.primaryLabel}</p>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="inline-block bg-gray-100 px-2 py-1 rounded mb-3">
                      <p className="text-text-tertiary text-xs font-bold uppercase">{study.serviceName}</p>
                    </div>

                    <h3 className="font-bold text-text-primary mb-2 text-sm group-hover:text-text-secondary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-text-secondary text-xs mb-1">{study.client}</p>
                    <p className="text-text-tertiary text-xs mb-4">{study.year}</p>

                    <div className="space-y-1 mb-4">
                      {study.metrics.slice(0, 2).map((metric, idx) => (
                        <p key={idx} className="text-text-secondary text-xs">
                          ✓ {metric}
                        </p>
                      ))}
                    </div>

                    <span className="text-text-primary text-xs font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      View Case →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* CTA */}
        <Section title="Ready to Start Your Project?" sectionNumber={3} darkBg>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-text-secondary mb-6 text-lg">
              See how we can drive similar results for your brand. Let's connect and explore what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-block bg-text-primary text-background px-8 py-3 hover:opacity-80 transition-opacity font-semibold text-sm"
              >
                Schedule a Conversation
              </Link>
              <Link
                href="/our-services"
                className="inline-block border border-text-primary text-text-primary px-8 py-3 hover:bg-gray-50 transition-colors font-semibold text-sm"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
