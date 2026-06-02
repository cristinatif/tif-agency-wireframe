import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, MediaPlaceholder, ServiceBox, ServiceCard, ProcessStep } from '@/components/SectionComponents'
import { ServiceIcon } from '@/components/ServiceIcons'
import { StickyServicesCTA } from '@/components/StickyServicesCTA'
import Link from 'next/link'
import { HiLightBulb } from 'react-icons/hi2'

export default function OurServices() {
  return (
    <>
      <Navigation />
      <StickyServicesCTA />
      <main className="pt-nav-height">
        <Hero
          title="Our Services"
          subtitle="Integrated Solutions for Brand Growth"
          description="From strategic research to campaign execution, we offer comprehensive services designed to work together seamlessly."
        />

        {/* Service Selection Grid */}
        <Section title="Our Core Services" subtitle="Choose what you need, or combine for maximum impact" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<ServiceIcon service="research-lab" size={40} />}
              title="Research Lab"
              description="Data-driven insights and strategic market understanding to fuel informed decisions"
              href="/our-services/research-lab"
            />
            <ServiceCard
              icon={<ServiceIcon service="brand-strategy" size={40} />}
              title="Brand Strategy"
              description="Comprehensive positioning and marketing plans for sustainable growth"
              href="/our-services/brand-strategy"
            />
            <ServiceCard
              icon={<ServiceIcon service="creative-studio" size={40} />}
              title="Creative Services"
              description="Award-winning design, audiovisual, and digital experiences"
              href="/our-services/creative-studio"
            />
            <ServiceCard
              icon={<ServiceIcon service="digital-marketing" size={40} />}
              title="Digital Marketing"
              description="Performance-driven campaigns and growth optimization across channels"
              href="/our-services/digital-marketing"
            />
            <ServiceCard
              icon={<ServiceIcon service="experiential" size={40} />}
              title="Experiential Marketing"
              description="Memorable brand experiences and activations that drive engagement"
              href="/our-services/experiential"
            />
            <ServiceCard
              icon={<HiLightBulb size={40} />}
              title="Integrated Solutions"
              description="All services working together under unified strategy for maximum impact"
              href="/contact-us"
            />
          </div>
        </Section>

        {/* Our Process */}
        <Section title="Our Process" subtitle="How we deliver exceptional results" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProcessStep
                number="1"
                title="Discover & Research"
                description="We dive deep into your market, audience, and competitive landscape. Through interviews, data analysis, and strategic workshops, we uncover insights that inform every decision."
                delay="0s"
              />
              <ProcessStep
                number="2"
                title="Strategy & Planning"
                description="Armed with insights, we develop a comprehensive strategy that aligns with your business goals. We create roadmaps for brand positioning, marketing approach, and execution timelines."
                delay="0.1s"
              />
              <ProcessStep
                number="3"
                title="Creative Development"
                description="Our creative teams bring strategy to life through compelling design, messaging, and experiences. Every creative decision is rooted in strategy and data."
                delay="0.2s"
              />
              <ProcessStep
                number="4"
                title="Execution & Optimization"
                description="We execute flawlessly across all channels, continuously monitoring performance. Real-time optimization ensures maximum impact and ROI."
                delay="0.3s"
              />
              <ProcessStep
                number="5"
                title="Measurement & Reporting"
                description="Transparent reporting on every metric that matters. We track success, celebrate wins, and identify opportunities for continuous improvement."
                delay="0.4s"
              />
            </div>
            <div className="flex items-center justify-center">
              <MediaPlaceholder height="h-96" label="Process Workflow Diagram" />
            </div>
          </div>
        </Section>

        {/* Global Presence */}
        <Section title="Global Presence" subtitle="Offices across three continents" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceBox
              number="1"
              title="Australia"
              description="Adelaide & Sydney - Serving regional markets and Asia-Pacific partnerships"
            />
            <ServiceBox
              number="2"
              title="United States"
              description="Atlanta - Supporting strategic partnerships and campaigns"
            />
            <ServiceBox
              number="3"
              title="Colombia"
              description="Medellín & Bogotá - Spanish-language services and LATAM focus"
            />
          </div>
        </Section>

        {/* Integration */}
        <Section title="Integrated Service Advantage" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceBox
              number="1"
              title="Seamless Execution"
              description="All services work together under unified strategy, reducing silos and improving efficiency"
            />
            <ServiceBox
              number="2"
              title="Consistent Quality"
              description="Integrated teams ensure message consistency across all channels and touchpoints"
            />
            <ServiceBox
              number="3"
              title="Better ROI"
              description="Strategic alignment and data sharing optimize results and reduce wasted spend"
            />
          </div>
        </Section>

        {/* CTA */}
        <Section title="Ready to Transform Your Brand?" sectionNumber={5}>
          <div className="text-center">
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss which services align with your goals and create a roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact-us"
                className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact-us"
                className="inline-block border border-text-primary text-text-primary px-10 py-4 hover:bg-hover transition-colors font-semibold"
              >
                Request Service Guide
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
