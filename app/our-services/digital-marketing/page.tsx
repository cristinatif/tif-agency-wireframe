import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, ServiceBox, ProcessStep, MediaPlaceholder, BrochureCtaBanner, ResourcesSection } from '@/components/SectionComponents'
import { ProposalForm } from '@/components/ProposalForm'
import { HiCheckCircle } from 'react-icons/hi2'
import Link from 'next/link'

export default function DigitalMarketingService() {
  const faqs = [
    {
      question: 'What ROI should we expect?',
      answer: '3-5x average ROI on paid digital campaigns, but it depends on your current baseline, market, and goals. We model projections.',
    },
    {
      question: 'How long before we see results?',
      answer: 'Quick wins in 30-60 days. Significant momentum in 3-6 months. Sustainable scaling happens over 6-12 months.',
    },
    {
      question: 'What about SEO—how long does that take?',
      answer: '3-6 months to see meaningful traffic improvements. Competitive rankings take 6-12 months of consistent effort.',
    },
    {
      question: 'Do you work with HubSpot, Marketo, etc?',
      answer: 'Yes. We integrate with all major marketing automation platforms and CRM systems.',
    },
    {
      question: 'Can you manage underperforming campaigns?',
      answer: 'Absolutely. We audit, diagnose, and optimize campaigns for better performance and ROI.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Digital Marketing Services"
          subtitle="Performance & Growth Marketing"
          description="Drive consistent, measurable results across digital channels. From audits to automation, we build digital systems that scale with your business."
        />

        <Section title="The Challenge" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Unoptimized channels = wasted budget
                </h3>
                <p className="text-text-secondary text-sm">
                  Without strategy and continuous optimization, you're burning ad spend on low-performing channels and keywords.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Inconsistent lead quality
                </h3>
                <p className="text-text-secondary text-sm">
                  You're getting traffic, but quality is inconsistent. Bad leads waste sales team time and increase CAC.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  No unified digital strategy
                </h3>
                <p className="text-text-secondary text-sm">
                  Channels work in silos. No unified view of customer journey or coordinated growth strategy.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-200 p-6 bg-gray-50">
                <p className="font-bold text-text-primary mb-2">Why It Matters</p>
                <p className="text-text-secondary text-sm">
                  Optimized digital marketing systems deliver 3-5x ROI improvement and reduce CAC by 40%+.
                </p>
              </div>
              <MediaPlaceholder height="h-64" label="Digital Performance Metrics" />
            </div>
          </div>
        </Section>

        <BrochureCtaBanner serviceName="Digital Marketing" />

        <Section title="Our Digital Strategy" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProcessStep number="1" title="Digital Audit" description="Comprehensive assessment of current performance, gaps, and opportunities across all channels." delay="0s" />
              <ProcessStep number="2" title="Strategy & Planning" description="Define target audience, messaging, channel mix, and growth levers aligned with your goals." delay="0.1s" />
              <ProcessStep number="3" title="Campaign Execution" description="Build and launch campaigns across PPC, SEO, social, email, and marketing automation." delay="0.2s" />
              <ProcessStep number="4" title="Continuous Optimization" description="Daily/weekly optimization based on performance data. Test, learn, repeat." delay="0.3s" />
              <ProcessStep number="5" title="Measurement & Scaling" description="Track ROI, identify winners, and scale what works across channels." delay="0.4s" />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-100 p-12 mb-4 rounded-lg">
                  <p className="text-4xl font-bold text-text-primary mb-2">3-12 months</p>
                  <p className="text-text-secondary">Full system build-out</p>
                </div>
                <MediaPlaceholder height="h-64" label="Digital Performance Dashboard" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Digital Services" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card title="Web Marketing & PPC" description="Strategic paid advertising across Google, LinkedIn, and social platforms." details={['Campaign strategy', 'Ad copywriting', 'Landing page optimization', 'Bid management']} />
            <Card title="Search Engine Optimization (SEO)" description="Organic visibility and traffic growth through technical and content optimization." details={['Technical SEO audits', 'Content strategy', 'Keyword research', 'Link building']} />
            <Card title="Marketing Automation & CRM" description="Build systems that nurture leads and automate customer journeys." details={['Marketing automation setup', 'Email campaigns', 'Lead scoring', 'CRM integration']} />
            <Card title="Performance Analytics" description="Track what matters. Measure ROI and identify growth opportunities." details={['Analytics setup', 'Dashboards and reporting', 'Attribution modeling', 'Growth insights']} />
          </div>
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-12 py-5 hover:shadow-xl hover:scale-105 transition-all font-bold rounded-lg"
            >
              Talk to us
            </Link>
          </div>
        </Section>

        <Section title="Results & Impact" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ServiceBox number="1" title="3-5x ROI" description="Average ROI improvement on paid digital campaigns" />
            <ServiceBox number="2" title="40% CAC Reduction" description="Lower customer acquisition cost through optimization" />
            <ServiceBox number="3" title="2x Lead Growth" description="Increase in qualified lead volume within 6 months" />
          </div>
          <div className="border border-gray-200 p-8 bg-white">
            <h3 className="font-bold text-text-primary mb-4">Who Wins with Digital Marketing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ SaaS Companies</p>
                <p className="text-text-secondary text-sm">Scale customer acquisition through optimized paid and organic channels.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ B2B Services</p>
                <p className="text-text-secondary text-sm">Generate qualified leads and nurture through marketing automation.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Ecommerce</p>
                <p className="text-text-secondary text-sm">Drive revenue growth through optimized conversion funnels.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Fast-Growth Companies</p>
                <p className="text-text-secondary text-sm">Build scalable digital systems to support explosive growth.</p>
              </div>
            </div>
          </div>
        </Section>

        <ResourcesSection />

        <Section title="Common Questions" darkBg sectionNumber={5}>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border border-gray-200 p-6 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                <summary className="font-bold text-text-primary flex justify-between items-center">{faq.question}<span className="text-lg">+</span></summary>
                <p className="text-text-secondary text-sm mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section title="Ready to Accelerate Growth?" sectionNumber={6} id="proposal-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-start">
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Digital growth doesn't happen by accident. Let's build a strategic, optimized system that scales with your business. Get a custom proposal in 48 hours.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/contact-us" className="inline-block border border-text-primary text-text-primary px-10 py-4 hover:bg-hover transition-colors font-semibold text-center">Chat First</Link>
              </div>
            </div>
            <div>
              <ProposalForm service="Digital Marketing" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
