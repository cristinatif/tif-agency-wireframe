import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder, TimelineItem } from '@/components/SectionComponents'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="About TIF Agency"
          subtitle="Strategic Partnership for Global Brands"
        />

        {/* Story Section */}
        <Section title="Our Story" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-text-secondary mb-4">
                TIF Agency was founded on the principle that strategic partnerships drive transformative business outcomes. For over a decade, we've worked with Fortune 500 companies and ambitious market leaders across multiple continents.
              </p>
              <p className="text-text-secondary mb-4">
                Our integrated approach combines strategic research, creative excellence, and performance marketing to deliver measurable results. We believe in transparency, accountability, and the power of data-driven decision making.
              </p>
              <p className="text-text-secondary">
                Today, TIF operates across three continents with offices in Sydney, Mexico City, and the USA. Our team brings diverse perspectives and deep expertise in building brands that scale.
              </p>
            </div>
            <MediaPlaceholder height="h-96" label="Company Story Visual" />
          </div>
        </Section>

        {/* Timeline Section */}
        <Section title="Our Journey" subtitle="Key milestones in TIF's evolution" darkBg sectionNumber={2}>
          <div className="max-w-2xl">
            <TimelineItem
              year="2010"
              title="Founded"
              description="TIF Agency established with a focus on strategic marketing and brand transformation"
            />
            <TimelineItem
              year="2012"
              title="First International Expansion"
              description="Opened Sydney office to serve Asia-Pacific market and established regional partnerships"
            />
            <TimelineItem
              year="2015"
              title="Research Lab Launch"
              description="Established dedicated research and insights division to drive data-led strategy"
            />
            <TimelineItem
              year="2017"
              title="Creative Studio Integration"
              description="Integrated in-house creative and design services for seamless campaign delivery"
            />
            <TimelineItem
              year="2019"
              title="LATAM Hub Opening"
              description="Expanded to Mexico City with bilingual services for Latin American market"
            />
            <TimelineItem
              year="2021"
              title="Global Digital Marketing"
              description="Launched comprehensive digital marketing services including performance and growth channels"
            />
            <TimelineItem
              year="2023"
              title="USA Strategic Partnerships"
              description="Established North American presence to serve US-based partnership opportunities"
            />
            <TimelineItem
              year="2024"
              title="Integrated Services Platform"
              description="Unified all service offerings into seamless integrated partnership model"
            />
          </div>
        </Section>

        {/* Core Values */}
        <Section title="Our Values" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3 text-lg">Strategic Thinking</h3>
              <p className="text-text-secondary">
                Every decision is grounded in research, data, and clear business objectives. We think beyond the immediate campaign to long-term brand building and sustainable growth.
              </p>
            </div>
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3 text-lg">Creative Excellence</h3>
              <p className="text-text-secondary">
                We believe great creativity must be grounded in strategy. Our creative work consistently wins awards while delivering measurable business results.
              </p>
            </div>
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3 text-lg">Scalable Partnerships</h3>
              <p className="text-text-secondary">
                We design solutions built to scale globally. Our processes, tools, and team structure enable consistent quality across markets and growth stages.
              </p>
            </div>
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3 text-lg">Transparency & Accountability</h3>
              <p className="text-text-secondary">
                Clear communication, honest assessment, and measurable outcomes are non-negotiable. We report on what matters and take responsibility for results.
              </p>
            </div>
          </div>
        </Section>

        {/* Global Footprint */}
        <Section title="Global Footprint" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-text-primary mb-2">Sydney, Australia</h3>
              <p className="text-text-secondary text-sm mb-4">
                Our Asia-Pacific headquarters serves regional clients and enables partnerships across APAC markets
              </p>
              <Link href="/locations#australia" className="text-text-primary hover:text-text-secondary text-sm underline">
                View Details →
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-2">Mexico City, Mexico</h3>
              <p className="text-text-secondary text-sm mb-4">
                LATAM hub providing bilingual services and cultural expertise for Latin American partnerships
              </p>
              <Link href="/locations#latam" className="text-text-primary hover:text-text-secondary text-sm underline">
                View Details →
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-2">USA</h3>
              <p className="text-text-secondary text-sm mb-4">
                Strategic partnership presence supporting North American clients and expanding market reach
              </p>
              <Link href="/locations#usa" className="text-text-primary hover:text-text-secondary text-sm underline">
                View Details →
              </Link>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section title="Let's Build Something Together" sectionNumber={5}>
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
            >
              Start a Conversation
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
