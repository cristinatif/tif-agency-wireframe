'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import { ProposalForm } from '@/components/ProposalForm'
import { WorkShowcase } from '@/components/WorkShowcase'
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
      workCategories: [
        {
          id: 'brand-assets',
          title: 'Brand Assets',
          description: 'Complete visual identity system developed from scratch, including logo, color palette, typography, and brand guidelines.',
          icon: '🎨',
          items: [
            { id: '1', type: 'placeholder', title: 'Logo Design', description: 'Primary logo mark and variations' },
            { id: '2', type: 'placeholder', title: 'Brand Guidelines', description: 'Comprehensive brand guidelines document' },
            { id: '3', type: 'placeholder', title: 'Color Palette', description: 'Primary and secondary colors with applications' },
            { id: '4', type: 'placeholder', title: 'Typography System', description: 'Font pairings and usage rules' },
            { id: '5', type: 'placeholder', title: 'Visual Elements', description: 'Icons and decorative elements' },
          ],
        },
        {
          id: 'creative-work',
          title: 'Creative Executions',
          description: 'Campaign creative across multiple channels including print, digital, and environmental.',
          icon: '🎬',
          items: [
            { id: '6', type: 'placeholder', title: 'Campaign Hero Image', description: 'Primary campaign visual' },
            { id: '7', type: 'placeholder', title: 'Advertising Creative', description: 'Digital and print ads' },
            { id: '8', type: 'placeholder', title: 'Social Media Assets', description: 'Optimized for all platforms' },
            { id: '9', type: 'placeholder', title: 'Video Content', description: 'Campaign video production' },
            { id: '10', type: 'placeholder', title: 'Print Materials', description: 'Brochures, packaging, collateral' },
          ],
        },
        {
          id: 'strategy-docs',
          title: 'Strategic Documents',
          description: 'Research findings, strategy frameworks, and implementation roadmaps.',
          icon: '📊',
          items: [
            { id: '11', type: 'placeholder', title: 'Market Research', description: 'Consumer insights and competitive analysis' },
            { id: '12', type: 'placeholder', title: 'Strategy Framework', description: 'Positioning and messaging architecture' },
            { id: '13', type: 'placeholder', title: 'Implementation Plan', description: 'Phased go-to-market roadmap' },
            { id: '14', type: 'placeholder', title: 'Brand Guidelines', description: 'Internal brand management system' },
          ],
        },
      ],
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
      workCategories: [
        {
          id: 'digital-campaigns',
          title: 'Digital Campaigns',
          description: 'Multi-channel PPC campaigns across Google Ads and LinkedIn with optimized landing pages and ad creatives.',
          icon: '📱',
          items: [
            { id: '1', type: 'placeholder', title: 'Google Ads Campaign', description: 'Search and display advertising' },
            { id: '2', type: 'placeholder', title: 'LinkedIn Campaigns', description: 'B2B targeting and lead generation' },
            { id: '3', type: 'placeholder', title: 'Landing Pages', description: 'Conversion-optimized pages' },
            { id: '4', type: 'placeholder', title: 'Ad Creative', description: 'Variations and A/B tests' },
          ],
        },
        {
          id: 'seo-content',
          title: 'SEO & Content',
          description: 'Content strategy, keyword optimization, and thought leadership articles driving organic growth.',
          icon: '📝',
          items: [
            { id: '5', type: 'placeholder', title: 'Content Calendar', description: '6-month content roadmap' },
            { id: '6', type: 'placeholder', title: 'Blog Articles', description: 'SEO-optimized thought leadership' },
            { id: '7', type: 'placeholder', title: 'Technical SEO', description: 'Site optimization and structure' },
            { id: '8', type: 'placeholder', title: 'Keyword Research', description: 'Competitive keyword analysis' },
          ],
        },
        {
          id: 'analytics',
          title: 'Analytics & Performance',
          description: 'Dashboards, attribution modeling, and performance reports showing ROI across all channels.',
          icon: '📈',
          items: [
            { id: '9', type: 'placeholder', title: 'Performance Dashboard', description: 'Real-time metrics and KPIs' },
            { id: '10', type: 'placeholder', title: 'Monthly Reports', description: 'Channel performance analysis' },
            { id: '11', type: 'placeholder', title: 'Attribution Model', description: 'Customer journey tracking' },
            { id: '12', type: 'placeholder', title: 'ROI Analysis', description: 'Channel contribution breakdown' },
          ],
        },
      ],
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

        {/* Work Showcase */}
        {study.workCategories && (
          <Section title="Work & Deliverables" sectionNumber={3}>
            <WorkShowcase categories={study.workCategories} />
          </Section>
        )}

        {/* Process/Methodology */}
        <Section title="Methodology" sectionNumber={4}>
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
        <Section title="Results & Impact" sectionNumber={5} darkBg>
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
        <Section title="Key Learnings" sectionNumber={6}>
          <div className="space-y-4 max-w-3xl">
            {study.keyLearnings.map((learning: string, idx: number) => (
              <div key={idx} className="border-l-4 border-text-primary pl-6 py-2">
                <p className="text-text-secondary text-base">{learning}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section title="Ready to Drive Similar Results?" sectionNumber={7} darkBg>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                This is what TIF does best: take complex challenges, apply strategic thinking and creative excellence, and drive measurable business results. Let's talk about what's possible for your brand.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-text-primary text-background px-12 py-5 hover:shadow-xl hover:scale-105 transition-all font-bold rounded-lg"
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
        <Section sectionNumber={8}>
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
