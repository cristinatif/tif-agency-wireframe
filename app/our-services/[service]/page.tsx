import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder, Card } from '@/components/SectionComponents'
import Link from 'next/link'

const servicePages = {
  'research-lab': {
    title: 'Strategic Research Lab',
    subtitle: 'Data-Driven Insights & Market Analysis',
    description: 'Deep market research and consumer insights informing strategic decisions.',
    services: [
      { title: 'Market Analysis', description: 'Comprehensive market sizing, trends, and opportunity assessment' },
      { title: 'Consumer Research', description: 'Qualitative and quantitative consumer behavior studies' },
      { title: 'Competitive Intelligence', description: 'Competitive positioning and benchmarking analysis' },
      { title: 'Brand Audits', description: 'Brand perception, positioning, and equity assessment' },
    ],
  },
  'brand-strategy': {
    title: 'Brand & Marketing Strategy',
    subtitle: 'Strategic Brand Development & Planning',
    description: 'Comprehensive brand strategy and marketing planning for sustainable growth.',
    services: [
      { title: 'Brand Positioning', description: 'Develop clear, compelling brand positioning and messaging' },
      { title: 'Marketing Strategy', description: 'Integrated marketing strategy and go-to-market planning' },
      { title: 'Brand Guidelines', description: 'Comprehensive brand identity systems and guidelines' },
      { title: 'Strategic Planning', description: 'Multi-year strategic plans and roadmaps' },
    ],
  },
  'creative-studio': {
    title: 'Creative Studio',
    subtitle: 'Design, Content & Audiovisual Excellence',
    description: 'Award-winning creative services from concept to execution.',
    services: [
      { title: 'Graphic Design', description: 'Logo, branding, collateral, and digital design' },
      { title: 'Web & UX Design', description: 'Website design, UX optimization, and digital experiences' },
      { title: 'Audiovisual Production', description: 'Video production, animation, and multimedia content' },
      { title: 'Content Creation', description: 'Photography, copywriting, and content production' },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    subtitle: 'Performance & Growth Marketing',
    description: 'Data-driven digital marketing optimized for measurable ROI.',
    services: [
      { title: 'Paid Advertising', description: 'Strategic paid media across Google, social, and display networks' },
      { title: 'SEO Services', description: 'Search engine optimization and organic visibility strategies' },
      { title: 'Marketing Automation', description: 'CRM setup, email marketing, and lead nurturing' },
      { title: 'Analytics & Optimization', description: 'Performance tracking, analysis, and continuous optimization' },
    ],
  },
  'experiential': {
    title: 'Experiential Marketing',
    subtitle: 'Events, Activations & Brand Experiences',
    description: 'Create memorable brand experiences that drive engagement and loyalty.',
    services: [
      { title: 'Event Strategy & Planning', description: 'Strategic event planning and management' },
      { title: 'Brand Activations', description: 'Experiential marketing campaigns and activations' },
      { title: 'Event Execution', description: 'Full-service event production and management' },
      { title: 'Merchandise & Collateral', description: 'Branded merchandise design and fulfillment' },
    ],
  },
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = servicePages[params.service as keyof typeof servicePages]

  if (!service) {
    return (
      <>
        <Navigation />
        <main className="pt-nav-height min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-4">Service Not Found</h1>
            <Link href="/our-services" className="text-text-primary underline">
              Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
        />

        <Section title="What We Deliver">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {service.services.map((svc, idx) => (
              <Card
                key={idx}
                title={svc.title}
                description={svc.description}
              />
            ))}
          </div>
        </Section>

        <Section title="Our Approach" darkBg>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-text-secondary mb-4">
                We combine strategic thinking, creative excellence, and data-driven optimization to deliver results that matter. Our integrated approach ensures all services work together seamlessly.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Research-backed strategy and recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Integrated execution across all channels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Continuous optimization and performance tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Transparent communication and reporting</span>
                </li>
              </ul>
            </div>
            <MediaPlaceholder height="h-96" label="Service Approach Visual" />
          </div>
        </Section>

        <Section title="Why Choose TIF">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Integrated Services"
              description="All services work together under unified strategy for better results"
            />
            <Card
              title="Proven Results"
              description="Track record of delivering measurable business outcomes for leading brands"
            />
            <Card
              title="Global Expertise"
              description="Deep market knowledge and local partnerships across APAC, LATAM, and USA"
            />
          </div>
        </Section>

        <Section title="Ready to Get Started?" darkBg>
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
            >
              Schedule a Consultation
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
