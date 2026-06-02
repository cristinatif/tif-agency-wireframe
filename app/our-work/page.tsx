import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import Link from 'next/link'

export default function OurWork() {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Brand Transformation',
      category: 'Brand Strategy & Creative',
      description: 'Complete brand repositioning increasing market share by 23%',
      results: ['23% market share increase', '45% uplift in brand perception', '3-year growth trajectory'],
    },
    {
      id: 2,
      title: 'Digital Marketing Campaign Excellence',
      category: 'Growth Marketing',
      description: 'Multi-channel performance marketing achieving 300% ROI',
      results: ['300% ROI', '2.5M impressions', '45K qualified leads'],
    },
    {
      id: 3,
      title: 'Asia-Pacific Market Expansion',
      category: 'Strategic Research & Planning',
      description: 'Regional market entry strategy for global consumer brand',
      results: ['$50M market opportunity identified', '6-month launch readiness', 'Competitive analysis completed'],
    },
    {
      id: 4,
      title: 'Creative Studio Campaign',
      category: 'Creative & Content',
      description: 'Integrated audiovisual campaign for lifestyle brand',
      results: ['Award-winning creative', '15M social reach', '8% engagement rate'],
    },
    {
      id: 5,
      title: 'LATAM Localization Strategy',
      category: 'Localization Services',
      description: 'Spanish-language adaptation and cultural customization',
      results: ['12 market adaptations', '95% cultural relevance score', '4 months to execution'],
    },
    {
      id: 6,
      title: 'Event Activation Series',
      category: 'Experiential Marketing',
      description: 'Multi-city brand activation reaching 50K+ attendees',
      results: ['50K+ attendees', '85% satisfaction score', '$2M brand value lift'],
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Our Work"
          subtitle="Case Studies & Portfolio"
          description="Discover the results we've delivered for leading global brands across strategy, creative, and digital disciplines."
        />

        {/* Featured Work */}
        <Section title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {caseStudies.slice(0, 2).map((study) => (
              <div key={study.id} className="border border-border-light">
                <MediaPlaceholder height="h-72" label={`Case Study ${study.id}`} />
                <div className="p-6 bg-surface-1">
                  <p className="text-text-tertiary text-xs font-bold mb-2">{study.category}</p>
                  <h3 className="font-bold text-text-primary mb-2">{study.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{study.description}</p>
                  <div className="mb-4 space-y-1">
                    {study.results.map((result, idx) => (
                      <p key={idx} className="text-text-tertiary text-xs">
                        • {result}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={`/our-work/case-${study.id}`}
                    className="text-text-primary hover:text-text-secondary transition-colors text-sm underline font-semibold"
                  >
                    View Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Case Studies Grid */}
        <Section title="All Case Studies" darkBg>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-surface-1 border border-border-light hover:bg-surface-2 transition-colors">
                <MediaPlaceholder height="h-56" label={`Case Study ${study.id}`} />
                <div className="p-5">
                  <p className="text-text-tertiary text-xs font-bold mb-2">{study.category}</p>
                  <h3 className="font-bold text-text-primary mb-2 text-sm">{study.title}</h3>
                  <p className="text-text-secondary text-xs mb-3">{study.description}</p>
                  <Link
                    href={`/our-work/case-${study.id}`}
                    className="text-text-primary hover:text-text-secondary transition-colors text-xs underline font-semibold"
                  >
                    View Case →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Work by Category */}
        <Section title="Work by Discipline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Brand Strategy & Positioning</h3>
              <p className="text-text-secondary text-sm mb-4">
                Transforming brands through strategic research and positioning that drives market differentiation and growth.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm mb-4">
                <li>• Market repositioning</li>
                <li>• Brand architecture</li>
                <li>• Competitive differentiation</li>
              </ul>
              <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                View Case Studies →
              </Link>
            </div>

            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Growth Marketing</h3>
              <p className="text-text-secondary text-sm mb-4">
                Performance-driven digital marketing campaigns generating measurable ROI and scaled customer acquisition.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm mb-4">
                <li>• Digital campaign management</li>
                <li>• Performance optimization</li>
                <li>• Customer acquisition</li>
              </ul>
              <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                View Case Studies →
              </Link>
            </div>

            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Creative & Content</h3>
              <p className="text-text-secondary text-sm mb-4">
                Award-winning creative direction, design, and content production that captures attention and drives engagement.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm mb-4">
                <li>• Creative direction</li>
                <li>• Content production</li>
                <li>• Design excellence</li>
              </ul>
              <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                View Case Studies →
              </Link>
            </div>

            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Market Research & Insights</h3>
              <p className="text-text-secondary text-sm mb-4">
                Deep market analysis and consumer insights informing strategic decisions and market opportunity identification.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm mb-4">
                <li>• Market analysis</li>
                <li>• Consumer research</li>
                <li>• Opportunity identification</li>
              </ul>
              <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                View Case Studies →
              </Link>
            </div>
          </div>
        </Section>

        {/* Results Summary */}
        <Section title="By The Numbers" darkBg>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-text-primary mb-2">50+</div>
              <p className="text-text-secondary">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-text-primary mb-2">$2B+</div>
              <p className="text-text-secondary">Client Revenue Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-text-primary mb-2">30+</div>
              <p className="text-text-secondary">Industry Awards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-text-primary mb-2">3</div>
              <p className="text-text-secondary">Global Continents</p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section title="Ready to Start Your Project?">
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
            >
              Let's Discuss Your Brief
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
