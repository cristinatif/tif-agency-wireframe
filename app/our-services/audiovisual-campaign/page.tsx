import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import {
  Hero,
  Section,
  ProcessStep,
  MediaPlaceholder,
} from '@/components/SectionComponents'
import { MediaCarousel } from '@/components/MediaCarousel'
import { LogoCarousel } from '@/components/LogoCarousel'
import { ServiceVideoCard } from '@/components/ServiceVideoCard'
import { AudiovisualForm } from '@/components/AudiovisualForm'
import Link from 'next/link'
import { HiPlay } from 'react-icons/hi2'

export default function AudiovisualCampaign() {
  const whyVideo = [
    'Accelerate Sales with Case Studies & Testimonials',
    'Educate & Train Teams with Micro-Learning Videos',
    'Showcase Expertise with Explainer Videos',
    'Inspire & Align Stakeholders with Leadership Films',
    'Recruit & Retain Talent with Culture Videos',
  ]

  const services = [
    {
      title: 'Brand Intro & Corporate Identity Videos',
      valueStatement: 'Define who you are in 60 seconds. A premium brand film that positions you as an industry leader.',
      price: '$4,500',
      examples: ['Corporate brand film', 'Company manifesto piece', 'Vision & culture intro'],
    },
    {
      title: 'Explainer Videos for Complex Solutions',
      valueStatement: 'Make the complicated simple. Animation and live-action explainers that clarify your value proposition.',
      price: '$3,500',
      examples: ['2D/3D animated explainer', 'Product walkthrough', 'Motion graphics short'],
    },
    {
      title: 'On-Site Industrial & Manufacturing Videos',
      valueStatement: 'Capture operations at scale. Drone, on-site, and process footage that showcases capability and safety.',
      price: '$6,000',
      examples: ['Drone & aerial reel', 'Process documentation', 'Safety & compliance walkthrough'],
    },
    {
      title: 'Case Study & Testimonial Videos',
      valueStatement: 'Proof that sells. Client stories structured as Challenge → Solution → Result to drive conversion.',
      price: '$3,000',
      examples: ['Client interview feature', 'Results case study', 'Short testimonial cut'],
    },
    {
      title: 'Training & Compliance Videos',
      valueStatement: 'Standardize knowledge across your organization with clear, repeatable training content.',
      price: '$2,500',
      examples: ['Micro-learning series', 'Onboarding & SOP module', 'Compliance training'],
    },
    {
      title: 'Executive Leadership Communication Videos',
      valueStatement: 'Internal and external messages that land. Polished leadership films for key moments.',
      price: '$3,500',
      examples: ['Town hall & update', 'Investor communication', 'Vision & strategy film'],
    },
    {
      title: 'Event Recap & Conference Aftermovies',
      valueStatement: 'Relive the energy and extend the reach. High-impact aftermovies that keep your event alive.',
      price: '$4,000',
      examples: ['Conference aftermovie', 'Same-day highlight edit', 'Multi-cam event recap'],
    },
  ]

  const portfolioItems = [
    { id: 'av-1', type: 'placeholder' as const, title: 'Orica — Investor Event Video', description: 'Mining video production for Orica in Colombia — event coverage that engaged investors.' },
    { id: 'av-2', type: 'placeholder' as const, title: 'ATT — Solution Explainer', description: 'Explainer video clarifying a complex enterprise solution for B2B buyers.' },
    { id: 'av-3', type: 'placeholder' as const, title: 'RQ — Corporate Identity Film', description: 'Brand intro film positioning RQ as an industry leader.' },
    { id: 'av-4', type: 'placeholder' as const, title: 'Manufacturing On-Site Recap', description: 'Drone and on-site footage showcasing industrial capability and scale.' },
    { id: 'av-5', type: 'placeholder' as const, title: 'Conference Aftermovie', description: 'High-energy aftermovie extending the reach of a flagship event.' },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        {/* 1. Hero */}
        <Hero
          title="Your Story, Seen. Heard. Felt."
          subtitle="B2B Video Production & Corporate Audiovisual Services"
          description="Video cuts through complexity, builds trust, and accelerates decisions in B2B."
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#proposal-form"
              className="inline-block bg-text-primary text-background px-10 py-4 hover:shadow-xl hover:scale-105 transition-all font-bold rounded-lg text-center"
            >
              Book Your Video Strategy Call
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center gap-2 border border-text-primary text-text-primary px-10 py-4 hover:bg-hover transition-colors font-semibold rounded-lg text-center"
            >
              <HiPlay size={20} />
              See Our Work
            </Link>
          </div>
        </Hero>

        <Section title="Why Your Company Needs Video" subtitle="In today's B2B landscape, corporate video is a critical tool for engagement and decision-making" sectionNumber={1}>
          {/* Benefits — icon grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {whyVideo.map((title, idx) => {
              const isLast = idx === whyVideo.length - 1
              return (
                <div
                  key={title}
                  className={`flex items-center gap-4 border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow ${
                    isLast ? 'md:col-span-2 md:w-[calc(50%-0.5rem)] md:mx-auto' : ''
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-200 border border-gray-300 flex items-center justify-center">
                    <span className="text-[10px] text-gray-500 font-semibold">[icon]</span>
                  </div>
                  <h3 className="font-bold text-text-primary">{title}</h3>
                </div>
              )
            })}
          </div>

          {/* Impact statements — horizontal strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: 'Viewers retain 95% of a message in video vs. 10% in text.', source: 'Forbes.com' },
              { text: 'Decision cycles shorten when buyers see proof on screen.' },
              { text: 'Premium visuals position you as an industry leader.' },
            ].map((statement) => (
              <div key={statement.text} className="flex flex-col border-t-4 border-text-primary bg-gray-50 p-6">
                <p className="text-text-primary text-lg leading-relaxed flex-grow">{statement.text}</p>
                {statement.source && (
                  <p className="text-text-tertiary text-xs mt-4">Source: {statement.source}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* 2. Trusted by / Testimonials */}
        <Section title="Trusted by Global B2B Leaders" subtitle="Governments, corporates, and associations across three continents" darkBg sectionNumber={2}>
          <LogoCarousel
            logos={['Orica', 'ATT', 'RQ', 'Logo 4', 'Logo 5', 'Logo 6', 'Logo 7', 'Logo 8', 'Logo 9', 'Logo 10']}
          />
        </Section>

        {/* 3. Featured Work */}
        <Section title="B2B Video Production Case Studies" sectionNumber={3} id="case-studies">
          <MediaCarousel items={portfolioItems} />
        </Section>

        {/* 4. Our Audiovisual Services */}
        <Section title="Corporate Video Production Services We Offer" subtitle="TIF provides a full range of audiovisual services for B2B organizations, from explainer videos to event recaps" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, idx) => {
              const isLast = idx === services.length - 1
              return (
                <ServiceVideoCard
                  key={service.title}
                  title={service.title}
                  valueStatement={service.valueStatement}
                  price={service.price}
                  examples={service.examples}
                  className={
                    isLast
                      ? 'md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto lg:col-span-3 lg:w-[calc(33.333%-1rem)] lg:mx-auto'
                      : ''
                  }
                />
              )
            })}
          </div>
          <div className="text-center">
            <Link href="#proposal-form" className="inline-block bg-text-primary text-background px-12 py-5 hover:shadow-xl hover:scale-105 transition-all font-bold rounded-lg">
              Request a Custom Quote
            </Link>
          </div>
        </Section>

        {/* 5. How We Work */}
        <Section title="Our Audiovisual Production Process" subtitle="A clear, flexible roadmap from idea to delivery" sectionNumber={5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProcessStep
                number="1"
                title="Discovery & Strategy"
                description="Defining your story, audience, and objectives. We align on message and expectatives before anything is filmed."
                delay="0s"
              />
              <ProcessStep
                number="2"
                title="Production"
                description="On-site or remote filming with a professional AV team — including drone, multi-cam, and directed interviews."
                delay="0.1s"
              />
              <ProcessStep
                number="3"
                title="Post-Production"
                description="Editing, motion graphics, voiceover, and music. This is where footage becomes a polished, on-brand story."
                delay="0.2s"
              />
              <ProcessStep
                number="4"
                title="Delivery"
                description="Multi-format masters for every platform — web, social, and broadcast — captioned and ready to publish."
                delay="0.3s"
              />
            </div>
            <div className="flex flex-col gap-4">
              <MediaPlaceholder height="h-72" label="Production in Action" />
              <div className="border border-gray-200 p-6 bg-gray-50">
                <p className="font-bold text-text-primary mb-2">Full Flexibility</p>
                <p className="text-text-secondary text-sm">
                  Production and post-production can be booked together or separately. Already have footage? We can take it from the edit.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. Final CTA + Form */}
        <Section title="Schedule Your Free AV Strategy Session" sectionNumber={6} id="proposal-form">
          <div className="max-w-2xl mx-auto">
            <AudiovisualForm />
            <p className="text-text-secondary text-sm text-center mt-6">
              Or email us directly:{' '}
              <a href="mailto:hello@theideasfactory.com" className="font-semibold text-text-primary hover:underline">
                hello@theideasfactory.com
              </a>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
