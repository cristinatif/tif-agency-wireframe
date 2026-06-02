import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, ServiceBox, ProcessStep, MediaPlaceholder } from '@/components/SectionComponents'
import { ProposalForm } from '@/components/ProposalForm'
import { ServiceIcon } from '@/components/ServiceIcons'
import Link from 'next/link'
import { HiCheckCircle } from 'react-icons/hi2'

export default function ResearchLabService() {
  const faqs = [
    {
      question: 'How long does a research project typically take?',
      answer: 'Most research projects range from 6-12 weeks depending on scope. We can accelerate for urgent timelines.',
    },
    {
      question: 'Can you research niche or B2B markets?',
      answer: 'Yes, we specialize in B2B research. We have expertise in tech, finance, healthcare, manufacturing, and enterprise software.',
    },
    {
      question: 'How do you ensure research quality and objectivity?',
      answer: 'We use mixed methodologies, validate findings across sources, and employ blind analysis techniques to minimize bias.',
    },
    {
      question: 'Do you provide actionable recommendations?',
      answer: 'Absolutely. We don\'t just report findings—we translate them into strategic recommendations your team can implement immediately.',
    },
    {
      question: 'What\'s included in the deliverables?',
      answer: 'Reports, visualizations, presentation decks, raw data, methodology documentation, and a strategy workshop with your team.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        {/* Hero */}
        <Hero
          title="Research Lab"
          subtitle="Data-Driven Insights & Strategy"
          description="Transform uncertainty into competitive advantage. Our research uncovers market opportunities, consumer behavior, and strategic positioning for B2B growth."
        />

        {/* The Challenge */}
        <Section title="The Challenge" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Decision-making without data = risk
                </h3>
                <p className="text-text-secondary text-sm">
                  Many B2B companies make strategic decisions based on assumptions rather than facts, leading to wasted resources and missed opportunities.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  You don't know your competitive landscape
                </h3>
                <p className="text-text-secondary text-sm">
                  Without competitive intelligence, you're flying blind. Understand how competitors position, price, and win deals.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Your audience is evolving, but you're not tracking it
                </h3>
                <p className="text-text-secondary text-sm">
                  Market trends, buyer behavior, and pain points shift constantly. Without ongoing research, you lose relevance.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-200 p-6 bg-gray-50">
                <p className="font-bold text-text-primary mb-2">Why It Matters</p>
                <p className="text-text-secondary text-sm">
                  Companies that invest in research make better decisions, win more deals, and achieve 2.5x faster growth than competitors who don't.
                </p>
              </div>
              <MediaPlaceholder height="h-64" label="Research Impact Visual" />
            </div>
          </div>
        </Section>

        {/* Our Approach */}
        <Section title="Our Approach" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProcessStep
                number="1"
                title="Discovery Workshop"
                description="We align on your research objectives, target audience, and critical questions. What do you need to know to make better decisions?"
                delay="0s"
              />
              <ProcessStep
                number="2"
                title="Multi-Method Research"
                description="We combine quantitative surveys, qualitative interviews, competitive analysis, and market data to get a complete picture."
                delay="0.1s"
              />
              <ProcessStep
                number="3"
                title="Analysis & Synthesis"
                description="Raw data becomes actionable insights. We identify patterns, validate findings, and uncover strategic opportunities."
                delay="0.2s"
              />
              <ProcessStep
                number="4"
                title="Strategic Recommendations"
                description="We translate research into specific, implementable actions for product, marketing, and business strategy."
                delay="0.3s"
              />
              <ProcessStep
                number="5"
                title="Knowledge Workshop"
                description="Your team learns the insights directly. We run strategy sessions to align on next steps and execution."
                delay="0.4s"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-100 p-12 mb-4 rounded-lg">
                  <p className="text-4xl font-bold text-text-primary mb-2">6-12 weeks</p>
                  <p className="text-text-secondary">Typical project timeline</p>
                </div>
                <MediaPlaceholder height="h-64" label="Process Methodology Visual" />
              </div>
            </div>
          </div>
        </Section>

        {/* Sub-Services */}
        <Section title="Research Services" sectionNumber={3}>
          <p className="text-text-secondary mb-8 max-w-3xl">
            Every business challenge is unique. We customize our research approach based on what you need to know.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Market Research & Analysis"
              description="Understand market size, growth trends, segment dynamics, and emerging opportunities in your space."
              details={[
                'Market sizing and segmentation',
                'Trend analysis and forecasting',
                'Market entry strategy validation',
                'Growth opportunity identification',
              ]}
            />
            <Card
              title="Competitive Intelligence"
              description="Know your competition inside and out. Understand their positioning, pricing, messaging, and go-to-market strategy."
              details={[
                'Competitor analysis and benchmarking',
                'Pricing strategy analysis',
                'Messaging and positioning audits',
                'Win/loss analysis',
              ]}
            />
            <Card
              title="Consumer & B2B Buyer Insights"
              description="Understand how your buyers think, decide, and choose. Uncover pain points, motivations, and decision criteria."
              details={[
                'Buyer persona development',
                'Customer journey mapping',
                'Pain point and needs analysis',
                'Purchase decision research',
              ]}
            />
            <Card
              title="Brand & Perception Audits"
              description="How does your market perceive you versus competitors? Identify positioning gaps and brand strengthening opportunities."
              details={[
                'Brand perception studies',
                'Positioning effectiveness analysis',
                'Message testing and optimization',
                'Customer satisfaction research',
              ]}
            />
          </div>
        </Section>

        {/* Results Section */}
        <Section title="Results & Impact" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ServiceBox
              number="1"
              title="Better Strategy"
              description="50% faster time-to-market for new products backed by research vs. assumption-based launches"
            />
            <ServiceBox
              number="2"
              title="Higher Conversion"
              description="35% improvement in sales effectiveness when messaging aligns with buyer research and pain points"
            />
            <ServiceBox
              number="3"
              title="Competitive Edge"
              description="3x faster growth for companies with continuous competitive intelligence vs. those without"
            />
          </div>
          <div className="border border-gray-200 p-8 bg-white">
            <h3 className="font-bold text-text-primary mb-4">Who Wins with Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ SaaS & Enterprise Software</p>
                <p className="text-text-secondary text-sm">
                  Validate product-market fit, understand buyer personas, and optimize go-to-market strategy.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ B2B Services & Consulting</p>
                <p className="text-text-secondary text-sm">
                  Identify new service opportunities and better position your expertise to target markets.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Manufacturing & Industrial</p>
                <p className="text-text-secondary text-sm">
                  Understand evolving customer needs and position products for digital transformation trends.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Financial Services & FinTech</p>
                <p className="text-text-secondary text-sm">
                  Navigate regulatory complexity while understanding customer needs and market opportunity.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Proposal Form */}
        <Section title="Ready to Make Data-Driven Decisions?" sectionNumber={5} id="proposal-form">
          <ProposalForm service="Research Lab" />
        </Section>

        {/* FAQ */}
        <Section title="Common Questions" darkBg sectionNumber={6}>
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

        {/* Final CTA */}
        <Section title="Let's Uncover Your Next Opportunity" sectionNumber={7}>
          <div className="text-center">
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Whether you need market validation, competitive intelligence, or customer insights—we'll turn data into strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#proposal-form"
                className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
              >
                Get a Proposal
              </Link>
              <Link
                href="/contact-us"
                className="inline-block border border-text-primary text-text-primary px-10 py-4 hover:bg-hover transition-colors font-semibold"
              >
                Chat First
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
