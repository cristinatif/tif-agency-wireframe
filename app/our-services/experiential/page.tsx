import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, ServiceBox, ProcessStep, MediaPlaceholder } from '@/components/SectionComponents'
import { ProposalForm } from '@/components/ProposalForm'
import { HiCheckCircle } from 'react-icons/hi2'
import Link from 'next/link'

export default function ExperientialMarketingService() {
  const faqs = [
    {
      question: 'How do you measure the success of an experiential campaign?',
      answer: 'We track engagement metrics, brand lift, social amplification, lead generation, and customer lifetime value impact. Every activation includes measurement strategy.',
    },
    {
      question: 'What types of events do you produce?',
      answer: 'Product launches, user conferences, executive summits, pop-up experiences, brand activations, trade shows, and digital experiences.',
    },
    {
      question: 'How long do projects typically take?',
      answer: '4-8 weeks for smaller activations, 2-3+ months for major events. Complex campaigns need 3-6 months planning.',
    },
    {
      question: 'Can you reach audiences in multiple cities/countries?',
      answer: 'Yes. We design scalable experiences and partner with local teams to execute consistently across geographies.',
    },
    {
      question: 'What's the typical budget range?',
      answer: 'Activations range from $50K for focused experiences to $500K+ for major brand campaigns. We work within your parameters.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Experiential Marketing"
          subtitle="Events, Activations & Brand Experiences"
          description="Create unforgettable brand experiences that drive engagement, loyalty, and measurable business results. From intimate activations to major events."
        />

        <Section title="The Challenge" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Campaigns disappear without a trace
                </h3>
                <p className="text-text-secondary text-sm">
                  Generic events get forgotten. Without strategic design and emotional resonance, you're wasting budget on activities that don't stick.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Missed opportunities for loyalty
                </h3>
                <p className="text-text-secondary text-sm">
                  Events can be platforms for deeper customer relationships, but poorly executed activations push people away instead.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  No measurable impact
                </h3>
                <p className="text-text-secondary text-sm">
                  High-cost events often lack clear business objectives. You can't justify the spend or scale what works.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-200 p-6 bg-gray-50">
                <p className="font-bold text-text-primary mb-2">Why It Matters</p>
                <p className="text-text-secondary text-sm">
                  Strategic experiential marketing drives 67% higher brand recall, increases customer lifetime value by 45%, and generates 3x more qualified leads than traditional campaigns.
                </p>
              </div>
              <MediaPlaceholder height="h-64" label="Experiential Impact Metrics" />
            </div>
          </div>
        </Section>

        <Section title="Our Approach" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProcessStep number="1" title="Strategic Foundation" description="Define experience objectives, target audience, key messages, and success metrics. Why does this event exist?" delay="0s" />
              <ProcessStep number="2" title="Creative Concept & Design" description="Develop a unique, branded experience concept that resonates emotionally and aligns with your positioning." delay="0.1s" />
              <ProcessStep number="3" title="Execution & Production" description="Manage every detail: venue, logistics, technology, talent, and brand consistency across the entire activation." delay="0.2s" />
              <ProcessStep number="4" title="Engagement & Measurement" description="Execute flawlessly, capture engagement data, measure impact in real-time, and optimize throughout." delay="0.3s" />
              <ProcessStep number="5" title="Amplification & Advocacy" description="Extend reach through social amplification, content strategy, and post-event engagement to maximize impact." delay="0.4s" />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-100 p-12 mb-4 rounded-lg">
                  <p className="text-4xl font-bold text-text-primary mb-2">4-8 weeks</p>
                  <p className="text-text-secondary">Activation timeline</p>
                </div>
                <MediaPlaceholder height="h-64" label="Event Timeline & Planning" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Experiential Services" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Event Strategy & Planning" description="From concept through execution, we design and produce events that achieve specific business objectives." details={['Strategic brief and objectives', 'Audience experience design', 'Venue and logistics management', 'Event production coordination']} />
            <Card title="Brand Activations" description="Create immersive, branded experiences that engage audiences and drive brand affinity." details={['Activation concept development', 'Experience design and production', 'Interactive installations', 'Social amplification strategy']} />
            <Card title="Campaign & Tour Strategy" description="Design multi-location campaigns that scale while maintaining local relevance and brand consistency." details={['Multi-city campaign planning', 'Local market customization', 'Tour logistics and management', 'Regional activation design']} />
            <Card title="Digital & Hybrid Experiences" description="Blend physical and digital for expanded reach and engagement across channels." details={['Virtual event production', 'Hybrid event technology', 'Digital engagement tools', 'Live streaming and broadcast']} />
          </div>
        </Section>

        <Section title="Results & Impact" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ServiceBox number="1" title="67% Brand Recall" description="Higher brand recall with strategic experiential vs. traditional advertising" />
            <ServiceBox number="2" title="45% LTV Increase" description="Significant increase in customer lifetime value from engaged participants" />
            <ServiceBox number="3" title="3x More Leads" description="Qualified lead generation compared to traditional marketing channels" />
          </div>
          <div className="border border-gray-200 p-8 bg-white">
            <h3 className="font-bold text-text-primary mb-4">Who Wins with Experiential Marketing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ B2B Technology Companies</p>
                <p className="text-text-secondary text-sm">Launch products, build executive relationships, and demonstrate complex value in immersive settings.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Premium Consumer Brands</p>
                <p className="text-text-secondary text-sm">Create emotional connections and drive loyalty through memorable brand experiences.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Scaling B2B Services</p>
                <p className="text-text-secondary text-sm">Build customer communities, strengthen relationships, and drive expansion opportunities.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Market Entry Initiatives</p>
                <p className="text-text-secondary text-sm">Make a bold entrance into new markets with high-impact brand activations and awareness campaigns.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Ready to Create an Experience?" sectionNumber={5} id="proposal-form">
          <ProposalForm service="Experiential Marketing" />
        </Section>

        <Section title="Common Questions" darkBg sectionNumber={6}>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border border-gray-200 p-6 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                <summary className="font-bold text-text-primary flex justify-between items-center">{faq.question}<span className="text-lg">+</span></summary>
                <p className="text-text-secondary text-sm mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section title="Let's Create Something Unforgettable" sectionNumber={7}>
          <div className="text-center">
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              The most powerful marketing happens in moments of human connection. Let's design experiences that people remember and talk about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#proposal-form" className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold">Get a Proposal</Link>
              <Link href="/contact-us" className="inline-block border border-text-primary text-text-primary px-10 py-4 hover:bg-hover transition-colors font-semibold">Chat First</Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
