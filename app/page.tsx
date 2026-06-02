import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, MediaPlaceholder, ServiceBox } from '@/components/SectionComponents'
import { AchievementsCard } from '@/components/AchievementsCard'
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

        {/* Trusted By */}
        <Section title="Trusted By Leading Brands" subtitle="Partnership with ambitious organizations globally" sectionNumber={1}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="flex items-center justify-center bg-gray-50 border border-gray-200 p-6 rounded-sm hover:bg-gray-100 transition-colors">
                <span className="text-text-tertiary font-semibold text-sm">LOGO</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Featured Services */}
        <Section title="Our Approach" subtitle="Integrated solutions across key disciplines" sectionNumber={2}>
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
        <Section title="Featured Work" subtitle="Case studies from our global portfolio" darkBg sectionNumber={3}>
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

        {/* Achievements */}
        <Section title="Our Impact" subtitle="Measurable results across our global partnerships" sectionNumber={4}>
          <AchievementsCard
            achievements={[
              {
                number: '500+',
                label: 'Projects Delivered',
                description: 'Strategic marketing and creative campaigns executed globally'
              },
              {
                number: '100+',
                label: 'Brands Transformed',
                description: 'From startups to Fortune 500 companies'
              },
              {
                number: '20+',
                label: 'Countries Served',
                description: 'Global reach with local expertise'
              }
            ]}
          />
        </Section>

        {/* Global Presence */}
        <Section title="Global Reach" subtitle="Partnership centers across three continents" sectionNumber={5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-text-primary mb-2 text-lg">Australia</h3>
              <p className="text-text-primary font-semibold text-sm mb-3">The Ideas Factory Australia Pty Ltd</p>
              <p className="text-text-secondary text-sm mb-3">Adelaide • Sydney</p>
              <div className="space-y-1 text-xs text-text-secondary">
                <p>ABN: 73 663 094 920</p>
                <p>Phone: <a href="tel:+61400352645" className="text-text-primary hover:underline">+61 400 352 645</a></p>
                <p><a href="mailto:sales@theidesfactory.com.au" className="text-text-primary hover:underline">sales@theidesfactory.com.au</a></p>
              </div>
            </div>
            <div className="border border-gray-200 p-6 bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-text-primary mb-2 text-lg">United States</h3>
              <p className="text-text-primary font-semibold text-sm mb-3">TIF Agency</p>
              <p className="text-text-secondary text-sm mb-3">Atlanta</p>
              <div className="space-y-1 text-xs text-text-secondary">
                <p>Phone: <a href="tel:+14046788032" className="text-text-primary hover:underline">+1 404 678 8032</a></p>
                <p><a href="https://tifagency.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">tifagency.com</a></p>
              </div>
            </div>
            <div className="border border-gray-200 p-6 bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-text-primary mb-2 text-lg">Colombia</h3>
              <p className="text-text-primary font-semibold text-sm mb-3">The Ideas Factory S.A.S</p>
              <p className="text-text-secondary text-sm mb-3">Medellín • Bogotá</p>
              <div className="space-y-1 text-xs text-text-secondary">
                <p>NIT: 901029547</p>
                <p>WhatsApp: <a href="https://wa.me/573177346527" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">+57 317 734 6527</a></p>
                <p><a href="mailto:sales@theidesfactory.comco" className="text-text-primary hover:underline">sales@theidesfactory.comco</a></p>
              </div>
            </div>
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
        <Section title="Partnership Value" darkBg sectionNumber={6}>
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
        <Section title="Ready to Transform Your Brand?" subtitle="Let's explore what partnership with TIF can deliver" sectionNumber={7}>
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
