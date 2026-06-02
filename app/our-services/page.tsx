import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, MediaPlaceholder, ServiceBox, ServiceCard, ProcessStep } from '@/components/SectionComponents'
import { ServiceIcon } from '@/components/ServiceIcons'
import Link from 'next/link'
import { HiLightBulb } from 'react-icons/hi2'

export default function OurServices() {
  return (
    <>
      <Navigation />
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

        {/* Research Lab */}
        <Section id="research" title="Research Lab" subtitle="Data-Driven Insights & Strategy" sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <div className="mb-4">
                <ServiceIcon service="research-lab" size={40} />
              </div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Strategic Research Foundation</h3>
              <p className="text-text-secondary mb-4">
                Every successful strategy begins with deep market understanding. Our research lab combines qualitative and quantitative methodologies to uncover consumer insights, market opportunities, and competitive positioning.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Market analysis and trend forecasting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Consumer behavior research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Competitive intelligence</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Brand perception audits</span>
                </li>
              </ul>
            </div>
            <MediaPlaceholder height="h-96" label="Research Insights Visual" />
          </div>
          <Link href="/our-services/research-lab" className="inline-block border border-text-primary px-6 py-3 text-text-primary hover:bg-hover transition-colors font-semibold">
            Explore Research Services
          </Link>
        </Section>

        {/* Brand & Marketing Strategy */}
        <Section id="strategy" title="Brand & Marketing Strategy" darkBg sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <MediaPlaceholder height="h-96" label="Strategy Development Visual" />
            <div>
              <div className="mb-4">
                <ServiceIcon service="brand-strategy" size={40} />
              </div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Strategic Brand Development</h3>
              <p className="text-text-secondary mb-4">
                We develop comprehensive brand strategies and marketing plans that position your organization for sustainable growth. Our approach integrates brand positioning, market strategy, and integrated marketing planning.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Brand positioning and architecture</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Marketing strategy development</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Go-to-market planning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Brand guidelines and systems</span>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/our-services/brand-strategy" className="inline-block border border-text-primary px-6 py-3 text-text-primary hover:bg-hover transition-colors font-semibold">
            Explore Brand Strategy
          </Link>
        </Section>

        {/* Creative Services */}
        <Section id="creative" title="Creative Services" subtitle="Design, AV, & Digital Excellence" sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <div className="mb-4">
                <ServiceIcon service="creative-studio" size={40} />
              </div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Premium Creative Output</h3>
              <p className="text-text-secondary mb-4">
                From concept to execution, our creative studio delivers award-winning design, audiovisual content, and digital experiences. We combine artistic vision with strategic thinking.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Graphic and digital design</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Audiovisual production</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Web and UX design</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Content creation</span>
                </li>
              </ul>
            </div>
            <MediaPlaceholder height="h-96" label="Creative Portfolio Visual" />
          </div>
          <Link href="/our-services/creative-studio" className="inline-block border border-text-primary px-6 py-3 text-text-primary hover:bg-hover transition-colors font-semibold">
            Explore Creative Services
          </Link>
        </Section>

        {/* Digital Marketing */}
        <Section title="Digital Marketing Services" darkBg sectionNumber={5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <MediaPlaceholder height="h-96" label="Digital Marketing Analytics" />
            <div>
              <div className="mb-4">
                <ServiceIcon service="digital-marketing" size={40} />
              </div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Performance & Growth Marketing</h3>
              <p className="text-text-secondary mb-4">
                We optimize digital channels for measurable ROI. Our services span paid media, search optimization, CRM, and performance analytics to drive sustainable growth.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Web marketing and paid advertising</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Search engine optimization (SEO)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Performance analytics and optimization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>CRM and marketing automation</span>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/our-services/digital-marketing" className="inline-block border border-text-primary px-6 py-3 text-text-primary hover:bg-hover transition-colors font-semibold">
            Explore Digital Marketing
          </Link>
        </Section>

        {/* Experiential Marketing */}
        <Section title="Experiential Marketing & Events" sectionNumber={6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <ServiceIcon service="experiential" size={40} />
              </div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Memorable Brand Experiences</h3>
              <p className="text-text-secondary mb-4">
                Create lasting brand connections through events, activations, and experiential marketing. We design and execute memorable experiences that drive engagement and brand loyalty.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Event strategy and planning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Brand activations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Experiential marketing campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-primary">→</span>
                  <span>Merchandise design and fulfillment</span>
                </li>
              </ul>
            </div>
            <MediaPlaceholder height="h-96" label="Event Experience Visual" />
          </div>
          <div className="mt-8">
            <Link href="/our-services/experiential" className="inline-block border border-text-primary px-6 py-3 text-text-primary hover:bg-hover transition-colors font-semibold">
              Explore Experiential Services
            </Link>
          </div>
        </Section>

        {/* Our Process */}
        <Section title="Our Process" subtitle="How we deliver exceptional results" darkBg sectionNumber={7}>
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
        <Section title="Global Presence" subtitle="Offices across three continents" sectionNumber={8}>
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
        <Section title="Integrated Service Advantage" darkBg sectionNumber={9}>
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
        <Section title="Ready to Transform Your Brand?" sectionNumber={10}>
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
