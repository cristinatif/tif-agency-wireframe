import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import Link from 'next/link'

export default function CaseStudy({ params }: { params: { id: string } }) {
  const caseStudies: Record<string, any> = {
    '1': {
      title: 'Fortune 500 Brand Transformation',
      subtitle: 'Strategic Repositioning Case Study',
      category: 'Brand Strategy',
      client: 'Global Consumer Brand',
      year: '2023',
      challenge: 'A Fortune 500 consumer brand was facing declining market relevance among millennial and Gen Z consumers. Their brand positioning felt outdated, and market share was declining by 2-3% annually.',
      solution: 'We conducted comprehensive market research, consumer insights studies, and competitive analysis to identify repositioning opportunities. We developed a new brand strategy emphasizing sustainability, innovation, and cultural relevance.',
      results: ['23% increase in market share', '45% lift in brand perception', 'Successful product line expansion', '3-year growth trajectory established'],
    },
    '2': {
      title: 'Digital Marketing Campaign Excellence',
      subtitle: 'Growth Marketing Case Study',
      category: 'Growth Marketing',
      client: 'Technology Services Company',
      year: '2023',
      challenge: 'Client needed to increase qualified lead generation while improving cost per acquisition through more efficient digital marketing spend.',
      solution: 'We developed an integrated digital marketing strategy spanning paid media, SEO, content marketing, and marketing automation. Implemented systematic testing and optimization across all channels.',
      results: ['300% ROI achieved', '2.5M total impressions', '45K qualified leads generated', 'Cost per acquisition reduced by 40%'],
    },
  }

  const study = caseStudies[params.id] || caseStudies['1']

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title={study.title}
          subtitle={study.subtitle}
        />

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border-medium">
            <div>
              <p className="text-text-tertiary text-xs font-bold mb-1">CATEGORY</p>
              <p className="text-text-primary">{study.category}</p>
            </div>
            <div>
              <p className="text-text-tertiary text-xs font-bold mb-1">CLIENT</p>
              <p className="text-text-primary">{study.client}</p>
            </div>
            <div>
              <p className="text-text-tertiary text-xs font-bold mb-1">YEAR</p>
              <p className="text-text-primary">{study.year}</p>
            </div>
            <div>
              <p className="text-text-tertiary text-xs font-bold mb-1">SERVICES</p>
              <p className="text-text-primary">{study.category}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="font-bold text-text-primary mb-4 text-2xl">The Challenge</h2>
              <p className="text-text-secondary mb-6">{study.challenge}</p>

              <h2 className="font-bold text-text-primary mb-4 text-2xl">Our Approach</h2>
              <p className="text-text-secondary mb-6">{study.solution}</p>
            </div>
            <div>
              <MediaPlaceholder height="h-80" label="Case Study Visual" />
            </div>
          </div>

          <div className="border-t border-border-medium pt-12 mb-12">
            <h2 className="font-bold text-text-primary mb-8 text-2xl">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result: string, idx: number) => (
                <div key={idx} className="border border-border-light p-6 bg-surface-1">
                  <p className="text-text-primary font-semibold">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-2 p-8">
            <p className="text-text-secondary mb-4">
              This case study demonstrates our integrated approach combining strategic research, creative excellence, and performance marketing to deliver measurable business results.
            </p>
            <Link
              href="/our-work"
              className="text-text-primary hover:text-text-secondary transition-colors underline font-semibold"
            >
              Back to Our Work
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
