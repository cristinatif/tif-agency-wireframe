import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, MediaPlaceholder, ServiceBox } from '@/components/SectionComponents'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        {/* Hero Section */}
        <Hero
          title="Strategic Marketing & Creative Excellence"
          subtitle="Transform Your Brand Through Partnership"
          description="TIF Agency delivers integrated marketing, creative services, and strategic insights for ambitious global brands. We partner with organizations ready to scale impact and drive measurable business outcomes."
        />

        {/* Featured Services */}
        <Section title="Our Approach" subtitle="Integrated solutions across key disciplines" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card
              title="Strategic Research"
              description="Data-driven market analysis and consumer insights to inform all strategic decisions"
              details={['Market analysis', 'Consumer research', 'Competitive audits']}
            />
            <Card
              title="Brand & Marketing"
              description="Comprehensive brand strategy, positioning, and integrated marketing campaigns"
              details={['Brand strategy', 'Marketing planning', 'Campaign execution']}
            />
            <Card
              title="Creative Services"
              description="Design, audiovisual content, and digital experiences that capture attention"
              details={['Design services', 'AV production', 'Digital design']}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Growth Marketing"
              description="Performance-driven digital marketing including paid media, SEO, and CRM"
              details={['Web marketing', 'Performance ads', 'SEO optimization']}
            />
            <Card
              title="Experiential Marketing"
              description="Events, activations, and memorable brand experiences"
              details={['Event marketing', 'Activations', 'Merchandising']}
            />
          </div>
        </Section>

        {/* Featured Work */}
        <Section title="Featured Work" subtitle="Case studies from our global portfolio" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <MediaPlaceholder height="h-80" label="Case Study Hero Image" />
              <h3 className="font-bold text-text-primary mt-4 mb-2">Brand Transformation Project</h3>
              <p className="text-text-secondary text-sm mb-2">Strategic repositioning for Fortune 500 brand</p>
              <Link href="/our-work/case-1" className="text-text-primary hover:text-text-secondary transition-colors text-sm underline">
                View Case Study →
              </Link>
            </div>
            <div>
              <MediaPlaceholder height="h-80" label="Case Study Hero Image" />
              <h3 className="font-bold text-text-primary mt-4 mb-2">Digital Marketing Campaign</h3>
              <p className="text-text-secondary text-sm mb-2">Multi-channel campaign achieving 300% ROI</p>
              <Link href="/our-work/case-2" className="text-text-primary hover:text-text-secondary transition-colors text-sm underline">
                View Case Study →
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/our-work"
              className="inline-block border border-text-primary px-8 py-3 text-text-primary hover:bg-hover transition-colors font-semibold"
            >
              View All Work
            </Link>
          </div>
        </Section>

        {/* Global Presence */}
        <Section title="Global Reach" subtitle="Partnership centers across three continents" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceBox
              number="1"
              title="Australia & Pacific"
              description="Sydney office serving regional markets and Asia-Pacific partnerships"
            />
            <ServiceBox
              number="2"
              title="LATAM"
              description="Mexico City hub with selective Spanish-language content services"
            />
            <ServiceBox
              number="3"
              title="North America"
              description="USA presence supporting strategic partnerships and campaigns"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-block border border-text-primary px-8 py-3 text-text-primary hover:bg-hover transition-colors font-semibold"
            >
              Explore Locations
            </Link>
          </div>
        </Section>

        {/* Value Proposition */}
        <Section title="Partnership Value" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Why Partner With TIF</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Scalable solutions designed for global organizations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>ROI-focused approach with transparent metrics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Integrated services reducing complexity and costs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Strategic partnerships enabling growth at scale</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <MediaPlaceholder height="h-72" label="Partnership Value Visual" />
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section title="Ready to Transform Your Brand?" subtitle="Let's explore what partnership with TIF can deliver" sectionNumber={5}>
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
            >
              Start Conversation
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
