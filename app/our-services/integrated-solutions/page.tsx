import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, ServiceBox, ProcessStep, MediaPlaceholder, BrochureCtaBanner, ResourcesSection } from '@/components/SectionComponents'
import { ProposalForm } from '@/components/ProposalForm'
import { HiCheckCircle } from 'react-icons/hi2'
import Link from 'next/link'

export default function IntegratedSolutionsService() {
  const faqs = [
    {
      question: 'What makes integrated solutions different from hiring multiple vendors?',
      answer: 'One strategic partner means unified objectives, coordinated execution, shared accountability, and economies of scale. Siloed vendors optimize independently—we optimize the entire system.',
    },
    {
      question: 'How long does an integrated engagement take?',
      answer: 'Typically 6-12 months for meaningful transformation. We start with quick wins (30-60 days) while building longer-term capabilities.',
    },
    {
      question: 'Can you work alongside our internal team?',
      answer: 'Yes. We augment internal teams, build capabilities, and transition knowledge so you own the results long-term.',
    },
    {
      question: 'What if we only need help with part of our strategy?',
      answer: 'You can start with focused services (research, brand, creative) and expand to integrated services as you see results.',
    },
    {
      question: 'How do you measure success across all these services?',
      answer: 'We define unified success metrics at the start: revenue impact, market position, brand metrics, and customer outcomes. Everything aligns to these.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Integrated Solutions"
          subtitle="Full-Service B2B Growth & Strategy"
          description="Stop managing separate vendors. Get a unified strategy partner. We coordinate research, brand, creative, and marketing into one cohesive system that drives exponential growth."
        />

        <Section title="The Challenge" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Services work in silos
                </h3>
                <p className="text-text-secondary text-sm">
                  Your brand agency doesn't know what the creative team is building. The digital team doesn't align with brand positioning. Services pull in different directions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Inconsistent results
                </h3>
                <p className="text-text-secondary text-sm">
                  Each vendor optimizes for their part. No one owns your overall business outcome. Performance is fragmented.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Wasted budget and effort
                </h3>
                <p className="text-text-secondary text-sm">
                  You're paying for coordination overhead across vendors. Budgets don't compound. You don't get economies of scale.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-200 p-6 bg-gray-50">
                <p className="font-bold text-text-primary mb-2">Why It Matters</p>
                <p className="text-text-secondary text-sm">
                  Integrated strategy compounds: 2.5x faster growth, 60% higher ROI on marketing spend, and unified brand impact across all channels.
                </p>
              </div>
              <MediaPlaceholder height="h-64" label="Integrated Growth Impact" />
            </div>
          </div>
        </Section>

        <BrochureCtaBanner serviceName="Integrated Solutions" />

        <Section title="Our Approach" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProcessStep number="1" title="Unified Strategy Discovery" description="We conduct research, analyze your market, and define one cohesive strategy that guides all services." delay="0s" />
              <ProcessStep number="2" title="Brand & Positioning Framework" description="Build your unique positioning, messaging, and brand architecture from which everything else flows." delay="0.1s" />
              <ProcessStep number="3" title="Cross-Channel Execution" description="Execute coordinated campaigns across creative, digital, events, and content—all aligned to strategy." delay="0.2s" />
              <ProcessStep number="4" title="Performance Integration" description="Unified measurement system. All services feed data into one dashboard. Optimize the system, not the parts." delay="0.3s" />
              <ProcessStep number="5" title="Continuous Evolution" description="Regular strategy reviews. Adapt to market feedback. Scale what works. Compound results over time." delay="0.4s" />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-100 p-12 mb-4 rounded-lg">
                  <p className="text-4xl font-bold text-text-primary mb-2">6-12 months</p>
                  <p className="text-text-secondary">Full transformation</p>
                </div>
                <MediaPlaceholder height="h-64" label="Integrated Roadmap" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="What's Included" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card title="Strategy & Research" description="Market research, competitive analysis, buyer insights, and unified strategy framework." details={['Market research & sizing', 'Competitive intelligence', 'Buyer persona development', 'Go-to-market strategy']} />
            <Card title="Brand & Positioning" description="Brand positioning, messaging architecture, guidelines, and marketing strategy." details={['Brand audit & positioning', 'Messaging framework', 'Brand guidelines', 'Marketing strategy']} />
            <Card title="Creative & Design" description="Strategic creative across brand, web, video, content, and all digital and physical touchpoints." details={['Brand & graphic design', 'Web & UX design', 'Video & audiovisual', 'Content creation']} />
            <Card title="Digital Marketing" description="Integrated digital campaigns, PPC, SEO, email, automation, and performance optimization." details={['Campaign strategy', 'PPC & search marketing', 'SEO & organic growth', 'Marketing automation']} />
          </div>
          <div className="border border-gray-200 p-8 bg-white">
            <h3 className="font-bold text-text-primary mb-4">Why Unified Beats Fragmented</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-text-primary mb-2">Siloed Services</p>
                <ul className="text-text-secondary text-sm space-y-2">
                  <li>✗ Inconsistent brand expression</li>
                  <li>✗ Competing budgets and priorities</li>
                  <li>✗ Fragmented measurement</li>
                  <li>✗ Coordination overhead</li>
                  <li>✗ Slow decision-making</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">Integrated Solutions</p>
                <ul className="text-text-secondary text-sm space-y-2">
                  <li>✓ Unified strategy & messaging</li>
                  <li>✓ Coordinated execution</li>
                  <li>✓ Integrated measurement</li>
                  <li>✓ One point of accountability</li>
                  <li>✓ Compounding results</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Results & Impact" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ServiceBox number="1" title="2.5x Faster Growth" description="Integrated strategy compounds to accelerate growth across all channels" />
            <ServiceBox number="2" title="60% Higher ROI" description="Unified execution and measurement increases marketing ROI significantly" />
            <ServiceBox number="3" title="Unified Impact" description="Consistent brand experience that compounds market position and loyalty" />
          </div>
          <div className="border border-gray-200 p-8 bg-white">
            <h3 className="font-bold text-text-primary mb-4">Best Suited For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Scale-Stage B2B Companies</p>
                <p className="text-text-secondary text-sm">Ready to accelerate growth with coordinated strategy and execution across all channels.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Going Through Transformation</p>
                <p className="text-text-secondary text-sm">Rebranding, repositioning, or entering new markets. Need coordinated execution across services.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Complex B2B Services</p>
                <p className="text-text-secondary text-sm">Technical offerings require coordinated strategy, creative, and marketing to explain value clearly.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ PE-Backed Companies</p>
                <p className="text-text-secondary text-sm">Need rapid growth with professional strategy and execution across all growth levers.</p>
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

        <Section title="Let's Build Your Growth Engine" sectionNumber={6} id="proposal-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-start">
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Stop managing vendors. Get a unified strategy partner who owns your growth. From research to execution, we make it all work together.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/contact-us" className="inline-block border border-text-primary text-text-primary px-10 py-4 hover:bg-hover transition-colors font-semibold text-center">Chat First</Link>
              </div>
            </div>
            <div>
              <ProposalForm service="Integrated Solutions" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
