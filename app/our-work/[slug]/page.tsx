'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import { ProposalForm } from '@/components/ProposalForm'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function CaseStudy() {
  const params = useParams()
  const slug = params.slug as string

  const caseStudies: Record<string, any> = {
    'fortune-500-brand-transformation': {
      title: 'Fortune 500 Brand Transformation',
      service: 'Brand Strategy',
      client: 'Global Consumer Brand',
      year: '2023',
      challenge: `This Fortune 500 consumer brand had experienced stagnant market share for three years despite strong product quality. Their brand positioning felt generic and uninspiring. They were losing shelf space to more agile competitors and younger consumers weren't engaging with the brand narrative. The parent company threatened to consolidate the division unless growth accelerated within 18 months.`,
      approach: `We started with deep consumer research—500+ interviews across key markets, competitive positioning analysis, and trend mapping. The research revealed an untapped emotional insight: their customers craved authenticity and transparency in a category defined by corporate speak.

We rebuilt their entire brand platform from the ground up: new positioning, visual identity, messaging framework, and go-to-market strategy. The creative assets reflected the new authentic positioning. We then orchestrated a phased market re-launch coordinating PR, retail partnerships, digital presence, and consumer events.`,
      process: [
        { number: '1', title: 'Deep Research Phase', description: 'Consumer interviews, brand audit, competitive analysis, and market sizing to uncover insights.' },
        { number: '2', title: 'Strategy Development', description: 'Repositioning workshop with leadership team, messaging architecture, positioning framework.' },
        { number: '3', title: 'Creative Execution', description: 'Visual identity design, brand guidelines, campaign creative, and go-to-market assets.' },
        { number: '4', title: 'Launch & Amplification', description: 'Coordinated PR, digital launch, retail activation, and consumer engagement.' },
        { number: '5', title: 'Measurement & Optimization', description: 'Quarterly brand tracking, performance monitoring, and strategy evolution.' },
      ],
      results: [
        { metric: '23%', label: 'Market Share Increase', description: 'Growth in category market share within 18 months' },
        { metric: '45%', label: 'Brand Perception Lift', description: 'Increase in key brand perception metrics among target consumers' },
        { metric: '$2.1B', label: 'Revenue Impact', description: 'Three-year projected incremental revenue from market share gains' },
        { metric: '3-Year', label: 'Growth Trajectory', description: 'Established sustainable growth momentum with key metrics' },
      ],
      keyLearnings: [
        'Authenticity beats polish—consumers crave genuine brands in crowded categories',
        'Research drives confidence—deep consumer insights enable bold strategic moves',
        'Coordination multiplies impact—aligned brand, creative, PR, and retail dramatically increase effect',
        'Speed matters—18-month turnaround for mature brands requires discipline and focus',
      ],
      nextSteps: 'Extended engagement to evolve brand into international markets and new category extensions',
    },
    'digital-marketing-saas-growth': {
      title: 'Digital Marketing Campaign',
      service: 'Digital Marketing',
      client: 'Technology Services Company',
      year: '2023',
      challenge: `This B2B SaaS company had plateaued at $5M ARR despite strong product-market fit. Their marketing was siloed: PPC ran by one agency, content by another, SEO non-existent. They were spending $2M annually on ads but had no unified measurement system. CAC was high and rising. They didn't understand which channels actually drove value.`,
      approach: `We consolidated the fragmented digital marketing function and built an integrated system. First: comprehensive audit of all current spending and performance. Second: unified measurement setup with attribution modeling. Third: strategic channel mix optimization—we reallocated budget away from low-ROI channels into high-performers and filled the organic SEO gap.

We then executed coordinated campaigns: optimized PPC across Google and LinkedIn with improved landing pages, built a content strategy for SEO and thought leadership, and created nurture sequences in their marketing automation platform. Within 6 months, the system compounded and results accelerated.`,
      process: [
        { number: '1', title: 'Performance Audit', description: 'Comprehensive review of all digital channels, spend, and performance across platforms.' },
        { number: '2', title: 'Unified Measurement Setup', description: 'Implement analytics infrastructure, attribution modeling, and unified dashboards.' },
        { number: '3', title: 'Strategy & Optimization', description: 'Define channel mix, reposition budget, optimize campaigns for ROI.' },
        { number: '4', title: 'Content & SEO Build-Out', description: 'Develop SEO strategy, content roadmap, and begin ranking for high-value keywords.' },
        { number: '5', title: 'Scale & Refinement', description: 'Continuous optimization, testing, and scaling of high-performing campaigns.' },
      ],
      results: [
        { metric: '300%', label: 'ROI Achieved', description: 'Return on digital marketing spend across all channels' },
        { metric: '45K', label: 'Qualified Leads', description: 'Monthly lead volume generation by month 6' },
        { metric: '40%', label: 'CAC Reduction', description: 'Customer acquisition cost decreased through optimization' },
        { metric: '$3.2M', label: 'Revenue Impact', description: 'Net new ARR attributed to digital campaigns' },
      ],
      keyLearnings: [
        'Fragmentation is expensive—consolidated digital marketing dramatically improves ROI',
        'Attribution wins arguments—unified measurement enables confident budget allocation',
        'Content takes time but compounds—SEO and thought leadership accelerated growth in months 4-6',
        'Optimization never stops—continuous testing and channel rebalancing drive consistent improvement',
      ],
      nextSteps: 'Expanded to international markets with localized campaign strategies and market-specific content.',
    },
  }

  const study = caseStudies[slug] || caseStudies['fortune-500-brand-transformation']

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title={study.title}
          subtitle={study.service}
          description={`${study.client} • ${study.year}`}
        />

        {/* Overview */}
        <Section sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div>
              <p className="text-text-tertiary text-xs font-bold mb-2">CLIENT</p>
              <p className="text-text-primary text-sm font-medium">{study.client}</p>
            </div>
            <div>
              <p className="text-text-tertiary text-xs font-bold mb-2">SERVICE</p>
              <p className="text-text-primary text-sm font-medium">{study.service}</p>
            </div>
            <div>
              <p className="text-text-tertiary text-xs font-bold mb-2">YEAR</p>
              <p className="text-text-primary text-sm font-medium">{study.year}</p>
            </div>
            <div>
              <p className="text-text-tertiary text-xs font-bold mb-2">DURATION</p>
              <p className="text-text-primary text-sm font-medium">12-18 Months</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-b border-gray-200 pb-16">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">The Challenge</h2>
              <p className="text-text-secondary text-base leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <MediaPlaceholder height="h-80" label="Challenge Analysis" />
            </div>
          </div>
        </Section>

        {/* Approach */}
        <Section sectionNumber={2} darkBg>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Our Approach</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-8">{study.approach}</p>
            </div>
            <div>
              <MediaPlaceholder height="h-80" label="Strategy & Approach" />
            </div>
          </div>
        </Section>

        {/* Process/Methodology */}
        <Section title="Methodology" sectionNumber={3}>
          <div className="space-y-6">
            {study.process.map((step: any, idx: number) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-200 pb-8 last:border-0">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-text-primary text-background font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{step.title}</h3>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section title="Results & Impact" sectionNumber={4} darkBg>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {study.results.map((result: any, idx: number) => (
              <div key={idx} className="bg-white border border-gray-200 p-6">
                <div className="text-4xl font-bold text-text-primary mb-2">{result.metric}</div>
                <div className="font-bold text-text-primary text-sm mb-2">{result.label}</div>
                <p className="text-text-secondary text-xs">{result.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-300 pt-8">
            <div>
              <MediaPlaceholder height="h-72" label="Results Dashboard" />
            </div>
            <div>
              <h3 className="font-bold text-text-primary text-lg mb-4">Key Business Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-text-primary font-bold">✓</span>
                  <span className="text-text-secondary text-sm">Defined clear, measurable success metrics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary font-bold">✓</span>
                  <span className="text-text-secondary text-sm">Aligned organization around strategic direction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary font-bold">✓</span>
                  <span className="text-text-secondary text-sm">Enabled sustained, compounding growth</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary font-bold">✓</span>
                  <span className="text-text-secondary text-sm">Built internal capabilities and knowledge</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Key Learnings */}
        <Section title="Key Learnings" sectionNumber={5}>
          <div className="space-y-4 max-w-3xl">
            {study.keyLearnings.map((learning: string, idx: number) => (
              <div key={idx} className="border-l-4 border-text-primary pl-6 py-2">
                <p className="text-text-secondary text-base">{learning}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section title="Ready to Drive Similar Results?" sectionNumber={6} darkBg>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                This is what TIF does best: take complex challenges, apply strategic thinking and creative excellence, and drive measurable business results. Let's talk about what's possible for your brand.
              </p>
              <Link
                href="/contact-us"
                className="inline-block border border-text-primary text-text-primary px-8 py-3 hover:bg-gray-50 transition-colors font-semibold text-sm"
              >
                Start a Conversation
              </Link>
            </div>
            <div>
              <ProposalForm service={study.service} />
            </div>
          </div>
        </Section>

        {/* Navigation */}
        <Section sectionNumber={7}>
          <div className="flex gap-4 justify-between">
            <Link
              href="/our-work"
              className="inline-block text-text-primary hover:text-text-secondary transition-colors text-sm font-semibold"
            >
              ← Back to All Cases
            </Link>
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-6 py-2 hover:opacity-80 transition-opacity text-sm font-semibold"
            >
              Let's Talk
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
