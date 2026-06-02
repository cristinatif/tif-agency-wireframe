'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section } from '@/components/SectionComponents'
import Link from 'next/link'
import { useState } from 'react'

export default function Toolbox() {
  const [activeFilter, setActiveFilter] = useState('all')

  const contentTypes = [
    { id: 'all', label: 'All Resources' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'panorama', label: 'Panorama Blogs' },
    { id: 'reports', label: 'Reports' },
    { id: 'newsletters', label: 'Newsletters' },
    { id: 'downloadable', label: 'Downloadable Assets' },
  ]

  const resources = [
    // Blogs - 4 items
    {
      id: 1,
      type: 'blogs',
      title: 'The Future of Brand Strategy in 2025',
      subtitle: 'How consumer behavior shifts are reshaping brand positioning',
      service: 'Brand Strategy',
      date: '2024-11-15',
      author: 'Sarah Johnson',
      readTime: '8 min read',
      excerpt: 'Understanding the latest trends in consumer psychology and how forward-thinking brands are adapting their strategies.',
      slug: 'future-brand-strategy-2025',
    },
    {
      id: 2,
      type: 'blogs',
      title: 'SEO in the Age of AI: What Actually Works',
      subtitle: 'Practical strategies for organic visibility when AI changes everything',
      service: 'Digital Marketing',
      date: '2024-11-10',
      author: 'Mike Chen',
      readTime: '12 min read',
      excerpt: 'AI-powered search is here. Learn how to optimize for visibility without relying on outdated techniques.',
      slug: 'seo-age-of-ai',
    },
    {
      id: 3,
      type: 'blogs',
      title: 'Creative Direction in a Fractured Media Landscape',
      subtitle: 'Building cohesive brand experiences across 20+ channels',
      service: 'Creative Services',
      date: '2024-11-05',
      author: 'Elena Rodriguez',
      readTime: '10 min read',
      excerpt: 'The challenge isn\'t creating good creative anymore. It\'s creating consistent creative across an impossible number of platforms.',
      slug: 'creative-direction-media-landscape',
    },
    {
      id: 4,
      type: 'blogs',
      title: 'Market Research That Actually Predicts Outcomes',
      subtitle: 'Moving beyond surveys to predictive consumer insights',
      service: 'Research Lab',
      date: '2024-10-28',
      author: 'David Park',
      readTime: '9 min read',
      excerpt: 'Traditional market research is slow. Here\'s how leading brands are using data science to predict market moves.',
      slug: 'market-research-predictive-outcomes',
    },

    // Panorama Blogs - 3 items
    {
      id: 5,
      type: 'panorama',
      title: 'Panorama: Consumer Sentiment Q4 2024',
      subtitle: 'Quarterly insights across 15 markets and 5,000+ consumers',
      service: 'Research Lab',
      date: '2024-11-20',
      author: 'TIF Research Team',
      readTime: '15 min read',
      excerpt: 'Comprehensive quarterly analysis of consumer sentiment, spending intentions, and brand trust across key markets.',
      slug: 'panorama-consumer-sentiment-q4-2024',
    },
    {
      id: 6,
      type: 'panorama',
      title: 'Panorama: Digital Marketing Trends 2025',
      subtitle: 'What\'s working, what\'s dying, and what\'s next in paid digital',
      service: 'Digital Marketing',
      date: '2024-11-15',
      author: 'TIF Research Team',
      readTime: '12 min read',
      excerpt: 'In-depth analysis of digital marketing performance, emerging channels, and budget allocation strategies for 2025.',
      slug: 'panorama-digital-marketing-trends-2025',
    },
    {
      id: 7,
      type: 'panorama',
      title: 'Panorama: Brand Health Across Industries',
      subtitle: 'How brands are performing in their categories right now',
      service: 'Brand Strategy',
      date: '2024-11-01',
      author: 'TIF Research Team',
      readTime: '14 min read',
      excerpt: 'Competitive brand analysis across 10 industries. See who\'s winning, why, and what moves are working.',
      slug: 'panorama-brand-health-industries',
    },

    // Reports - 3 items (gated)
    {
      id: 8,
      type: 'reports',
      title: 'The Integrated Marketing ROI Report 2024',
      subtitle: 'How integrated strategies compound results vs. siloed approaches',
      service: 'Integrated Solutions',
      date: '2024-10-30',
      pages: 42,
      downloadUrl: '#',
      preview: 'Report_Integrated_Marketing_2024',
      slug: 'integrated-marketing-roi-report-2024',
    },
    {
      id: 9,
      type: 'reports',
      title: 'Market Opportunity Assessment: LATAM Tech',
      subtitle: 'Sizing and strategy for technology companies entering Latin America',
      service: 'Research Lab',
      date: '2024-10-15',
      pages: 68,
      downloadUrl: '#',
      preview: 'Report_LATAM_Tech_Opportunity',
      slug: 'market-opportunity-latam-tech',
    },
    {
      id: 10,
      type: 'reports',
      title: 'The Modern Brand Playbook: Strategic Framework',
      subtitle: '12-step framework for brand transformation and market positioning',
      service: 'Brand Strategy',
      date: '2024-10-01',
      pages: 56,
      downloadUrl: '#',
      preview: 'Report_Brand_Playbook',
      slug: 'modern-brand-playbook-framework',
    },

    // Newsletters converted to posts - 2 items
    {
      id: 11,
      type: 'newsletters',
      title: 'TIF Weekly: Growth Levers in B2B SaaS',
      subtitle: 'Key insights from this week\'s newsletter',
      service: 'Digital Marketing',
      date: '2024-11-18',
      author: 'The TIF Team',
      readTime: '6 min read',
      excerpt: 'This week we break down the top 3 growth levers that are working for B2B SaaS companies right now.',
      slug: 'tif-weekly-growth-levers-saas',
    },
    {
      id: 12,
      type: 'newsletters',
      title: 'TIF Weekly: The State of Brand Loyalty',
      subtitle: 'Why consumers abandon brands (and how to prevent it)',
      service: 'Brand Strategy',
      date: '2024-11-11',
      author: 'The TIF Team',
      readTime: '7 min read',
      excerpt: 'New research on brand loyalty reveals surprising insights about why consumers switch brands.',
      slug: 'tif-weekly-brand-loyalty-state',
    },

    // Downloadable Assets - 3 items (gated)
    {
      id: 13,
      type: 'downloadable',
      title: 'Brand Strategy Template & Workbook',
      subtitle: 'Complete template for developing positioning and messaging',
      service: 'Brand Strategy',
      date: '2024-11-20',
      fileType: 'PDF + Google Sheets',
      slug: 'brand-strategy-template-workbook',
    },
    {
      id: 14,
      type: 'downloadable',
      title: 'Digital Marketing Audit Checklist',
      subtitle: '50-point comprehensive audit of your digital marketing function',
      service: 'Digital Marketing',
      date: '2024-11-15',
      fileType: 'PDF + Spreadsheet',
      slug: 'digital-marketing-audit-checklist',
    },
    {
      id: 15,
      type: 'downloadable',
      title: 'Market Research Template & Methodology',
      subtitle: 'Framework and templates for conducting primary market research',
      service: 'Research Lab',
      date: '2024-11-10',
      fileType: 'PDF + Workbook',
      slug: 'market-research-template-methodology',
    },
  ]

  const filtered = activeFilter === 'all'
    ? resources
    : resources.filter(r => r.type === activeFilter)

  const isGatedContent = (type: string) => ['reports', 'downloadable'].includes(type)

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Toolbox"
          subtitle="Resources & Knowledge"
          description="Strategic guides, research reports, and insights to help you grow your brand and drive results."
        />

        {/* Filter Section */}
        <Section sectionNumber={1}>
          <div className="flex overflow-x-auto gap-3 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-start">
            {contentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`px-4 py-2 text-sm whitespace-nowrap rounded transition-colors font-medium ${
                  activeFilter === type.id
                    ? 'bg-text-primary text-background'
                    : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </Section>

        {/* Resources Grid */}
        <Section sectionNumber={2} title={activeFilter === 'all' ? 'All Resources' : `${filtered[0]?.service || ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource) => (
              <Link
                key={resource.id}
                href={`/toolbox/${resource.slug}`}
                className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                {/* Card Header */}
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="inline-block bg-blue-50 px-3 py-1 rounded">
                      <p className="text-text-tertiary text-xs font-bold uppercase">
                        {resource.type === 'panorama' ? 'Panorama' :
                         resource.type === 'downloadable' ? 'Asset' :
                         resource.type === 'newsletters' ? 'Newsletter' :
                         resource.type === 'reports' ? 'Report' :
                         'Blog'}
                      </p>
                    </div>
                    {isGatedContent(resource.type) && (
                      <div className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                        Gated
                      </div>
                    )}
                  </div>

                  {resource.type === 'reports' && (
                    <div className="text-2xl font-bold text-text-primary mb-2">{resource.pages}</div>
                  )}
                  {resource.type === 'downloadable' && (
                    <div className="text-sm font-semibold text-text-secondary mb-2">{resource.fileType}</div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-text-primary mb-2 text-sm group-hover:text-text-secondary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-text-secondary text-xs mb-4">{resource.subtitle}</p>

                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-xs text-text-tertiary mb-3">
                      <span>{resource.date}</span>
                      {(resource.readTime || resource.fileType) && (
                        <span>{resource.readTime || resource.fileType}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-text-primary font-semibold text-xs group-hover:translate-x-1 transition-transform">
                      {isGatedContent(resource.type) ? 'Download →' : 'Read Article →'}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section sectionNumber={3} darkBg title="Get Insights Delivered Weekly">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Subscribe to the TIF Weekly newsletter and get curated insights, research findings, and strategic frameworks delivered to your inbox every week.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-text-primary font-bold flex-shrink-0">✓</div>
                  <p className="text-text-secondary text-sm">Weekly strategic insights & market trends</p>
                </div>
                <div className="flex gap-3">
                  <div className="text-text-primary font-bold flex-shrink-0">✓</div>
                  <p className="text-text-secondary text-sm">Early access to new resources and reports</p>
                </div>
                <div className="flex gap-3">
                  <div className="text-text-primary font-bold flex-shrink-0">✓</div>
                  <p className="text-text-secondary text-sm">Exclusive data and research for subscribers</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-8 bg-white">
              <h3 className="font-bold text-text-primary mb-6">Subscribe to TIF Weekly</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-text-primary"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-text-primary"
                />
                <button
                  type="submit"
                  className="w-full bg-text-primary text-background px-4 py-3 font-semibold text-sm hover:opacity-80 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-text-tertiary text-xs mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
