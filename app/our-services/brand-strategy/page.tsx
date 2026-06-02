import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, ServiceBox, ProcessStep, MediaPlaceholder } from '@/components/SectionComponents'
import { ProposalForm } from '@/components/ProposalForm'
import { HiCheckCircle } from 'react-icons/hi2'
import Link from 'next/link'

export default function BrandStrategyService() {
  const faqs = [
    {
      question: "How long does a full brand strategy take?",
      answer: "Typically 8-12 weeks from research through implementation planning. We can accelerate for urgent timelines.",
    },
    {
      question: "Do you rebrand existing companies?",
      answer: "Yes, we specialize in strategic rebranding for companies entering new markets, changing positioning, or modernizing their image.",
    },
    {
      question: "What if we don't know what we want?",
      answer: "That's normal. We start with discovery and research to understand your market position, audience, and competitive landscape.",
    },
    {
      question: "Do you help with implementation?",
      answer: "Yes. We provide implementation plans and can guide rollout across all touchpoints, working with your internal teams.",
    },
    {
      question: "What's included in brand guidelines?",
      answer: "Logo usage, color palette, typography, messaging frameworks, tone of voice, visual language, and application guidelines.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Brand & Marketing Strategy"
          subtitle="Strategic Brand Development"
          description="Build a brand that stands out, resonates with your market, and drives sustainable business growth. Strategy that starts with people and ends with performance."
        />

        <Section title="The Challenge" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Your brand is invisible in a crowded market
                </h3>
                <p className="text-text-secondary text-sm">
                  Without clear positioning and differentiation, you blend in with competitors and struggle to attract premium clients.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Your messaging doesn't resonate with buyers
                </h3>
                <p className="text-text-secondary text-sm">
                  You're talking about what you do, not solving what your customers care about. This kills conversion.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  No clear go-to-market strategy
                </h3>
                <p className="text-text-secondary text-sm">
                  Even great brands fail without a clear plan for market entry, positioning, and customer acquisition.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-200 p-6 bg-gray-50">
                <p className="font-bold text-text-primary mb-2">Why It Matters</p>
                <p className="text-text-secondary text-sm">
                  Strong brand strategy increases perceived value by 45%, improves customer loyalty by 60%, and enables premium pricing.
                </p>
              </div>
              <MediaPlaceholder height="h-64" label="Brand Strategy Impact" />
            </div>
          </div>
        </Section>

        <Section title="Our Strategic Process" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProcessStep
                number="1"
                title="Brand Audit"
                description="We assess your current brand, positioning, messaging, and market perception to identify gaps and opportunities."
                delay="0s"
              />
              <ProcessStep
                number="2"
                title="Strategic Research"
                description="Deep dive into market dynamics, competitive landscape, and buyer psychology to inform positioning."
                delay="0.1s"
              />
              <ProcessStep
                number="3"
                title="Brand Positioning"
                description="Define your unique value, target audience, competitive advantages, and brand personality."
                delay="0.2s"
              />
              <ProcessStep
                number="4"
                title="Marketing Strategy"
                description="Build your go-to-market plan, messaging frameworks, and customer acquisition strategy."
                delay="0.3s"
              />
              <ProcessStep
                number="5"
                title="Implementation Roadmap"
                description="Create actionable plans for rolling out your new brand across all touchpoints and channels."
                delay="0.4s"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-100 p-12 mb-4 rounded-lg">
                  <p className="text-4xl font-bold text-text-primary mb-2">8-12 weeks</p>
                  <p className="text-text-secondary">End-to-end strategy</p>
                </div>
                <MediaPlaceholder height="h-64" label="Strategy Framework" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Brand Strategy Services" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Brand Positioning & Architecture"
              description="Define what makes you different and how you own a space in the customer's mind."
              details={[
                'Unique value proposition definition',
                'Competitive differentiation mapping',
                'Target market segmentation',
                'Brand archetype and personality',
              ]}
            />
            <Card
              title="Marketing Strategy Development"
              description="Build a comprehensive plan that connects brand positioning to customer acquisition."
              details={[
                'Go-to-market strategy',
                'Customer acquisition planning',
                'Channel strategy and roadmap',
                'Launch and rollout planning',
              ]}
            />
            <Card
              title="Brand Guidelines & Systems"
              description="Create comprehensive guidelines that ensure consistent brand expression across all touchpoints."
              details={[
                'Visual identity systems',
                'Tone of voice and messaging',
                'Application guidelines',
                'Brand usage standards',
              ]}
            />
            <Card
              title="Messaging Framework"
              description="Develop clear, compelling messaging that resonates with your target buyers and drives conversion."
              details={[
                'Value proposition messaging',
                'Positioning statement',
                'Key message pillars',
                'Elevator pitch variations',
              ]}
            />
          </div>
        </Section>

        <Section title="Results & Impact" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ServiceBox
              number="1"
              title="Stronger Positioning"
              description="45% increase in perceived differentiation and brand value vs. competitors"
            />
            <ServiceBox
              number="2"
              title="Better Conversion"
              description="35% improvement in customer acquisition when messaging aligns with buyer needs"
            />
            <ServiceBox
              number="3"
              title="Premium Pricing"
              description="Ability to command 20-30% higher prices with clear differentiation and value"
            />
          </div>
          <div className="border border-gray-200 p-8 bg-white">
            <h3 className="font-bold text-text-primary mb-4">Who Wins with Brand Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Companies Entering New Markets</p>
                <p className="text-text-secondary text-sm">
                  Establish differentiated positioning and messaging in unfamiliar markets.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Scale-Stage B2B Companies</p>
                <p className="text-text-secondary text-sm">
                  Build cohesive brand and marketing strategy to accelerate growth at scale.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Rebranding Organizations</p>
                <p className="text-text-secondary text-sm">
                  Modernize brand image, shift positioning, or reflect company evolution.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Private Equity Backed Companies</p>
                <p className="text-text-secondary text-sm">
                  Support growth initiatives with professional brand and marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Common Questions" darkBg sectionNumber={5}>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="border border-gray-200 p-6 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <summary className="font-bold text-text-primary flex justify-between items-center">
                  {faq.question}
                  <span className="text-lg">+</span>
                </summary>
                <p className="text-text-secondary text-sm mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section title="Let's Build Your Strategic Brand" sectionNumber={6} id="proposal-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-start">
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                A strong brand strategy is the foundation for sustainable growth. Let's define your unique position and build a go-to-market plan that wins.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/contact-us" className="inline-block border border-text-primary text-text-primary px-10 py-4 hover:bg-hover transition-colors font-semibold text-center">Chat First</Link>
              </div>
            </div>
            <div>
              <ProposalForm service="Brand Strategy" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
