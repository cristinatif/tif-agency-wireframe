import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, Card, ServiceBox, ProcessStep, MediaPlaceholder } from '@/components/SectionComponents'
import { ProposalForm } from '@/components/ProposalForm'
import { HiCheckCircle } from 'react-icons/hi2'
import Link from 'next/link'

export default function CreativeStudioService() {
  const faqs = [
    {
      question: "What makes your creative approach different?",
      answer: "We combine strategic thinking with creative excellence. Every design, video, and asset is grounded in strategy and designed to drive measurable results.",
    },
    {
      question: "Can you handle complex, technical products?",
      answer: "Yes, we specialize in making complex products understandable. We excel at simplifying technical concepts for B2B audiences.",
    },
    {
      question: "Do you provide creative retouching and revisions?",
      answer: "Absolutely. We build revision rounds into every project and continue until you're thrilled with the creative.",
    },
    {
      question: "What mediums do you work in?",
      answer: "Graphic design, web/UX design, audiovisual production, 3D visualization, animation, and content creation.",
    },
    {
      question: "How long do creative projects take?",
      answer: "Most projects range from 4-12 weeks depending on scope. We can expedite for urgent needs.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Creative Services"
          subtitle="Design, AV, & Digital Excellence"
          description="Compelling creative that captures attention, communicates value, and drives action. From concept to execution, we deliver award-winning design and storytelling."
        />

        <Section title="The Challenge" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Generic creative gets ignored
                </h3>
                <p className="text-text-secondary text-sm">
                  Average designs and stock imagery blend into the noise. You need creative that stands out and captures attention.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  You can't explain complexity clearly
                </h3>
                <p className="text-text-secondary text-sm">
                  Complex products need visual clarity. Poorly explained value proposition kills conversion regardless of quality.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-3 flex items-start gap-3">
                  <HiCheckCircle className="flex-shrink-0 mt-1" size={24} />
                  Inconsistent brand expression
                </h3>
                <p className="text-text-secondary text-sm">
                  Different designers, different styles, different messaging. Inconsistency undermines brand value.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-200 p-6 bg-gray-50">
                <p className="font-bold text-text-primary mb-2">Why It Matters</p>
                <p className="text-text-secondary text-sm">
                  Strong creative increases engagement by 40%, improves conversion by 35%, and strengthens brand recognition by 60%.
                </p>
              </div>
              <MediaPlaceholder height="h-64" label="Creative Impact" />
            </div>
          </div>
        </Section>

        <Section title="Our Creative Process" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ProcessStep
                number="1"
                title="Strategic Brief"
                description="We align on objectives, target audience, key messages, and success metrics before any creative is produced."
                delay="0s"
              />
              <ProcessStep
                number="2"
                title="Creative Concepting"
                description="Multiple strategic concepts exploring different creative directions to solve your communication challenge."
                delay="0.1s"
              />
              <ProcessStep
                number="3"
                title="Design Development"
                description="Refine the selected concept into polished, production-ready creative across all needed formats."
                delay="0.2s"
              />
              <ProcessStep
                number="4"
                title="Production & Execution"
                description="Professional production for video, photography, animation, or print. Every detail matters."
                delay="0.3s"
              />
              <ProcessStep
                number="5"
                title="Optimization & Delivery"
                description="Final revisions, optimization for different formats, and delivery of all files and assets."
                delay="0.4s"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-100 p-12 mb-4 rounded-lg">
                  <p className="text-4xl font-bold text-text-primary mb-2">4-12 weeks</p>
                  <p className="text-text-secondary">Project timeline</p>
                </div>
                <MediaPlaceholder height="h-64" label="Creative Workflow" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Creative Services" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Brand & Graphic Design"
              description="Logo design, brand identity systems, and visual assets that represent your brand with sophistication."
              details={[
                'Logo and wordmark design',
                'Brand identity systems',
                'Print collateral design',
                'Digital asset libraries',
              ]}
            />
            <Card
              title="Web & UX Design"
              description="User-centered design that's beautiful, functional, and optimized for conversion."
              details={[
                'Website design',
                'UX/UI design',
                'Wireframing and prototyping',
                'Interaction design',
              ]}
            />
            <Card
              title="Audiovisual Production"
              description="Professional video, animation, and multimedia content that tells your story compellingly."
              details={[
                'Video production and editing',
                'Animation and motion graphics',
                '3D visualization',
                'Multimedia content',
              ]}
            />
            <Card
              title="Content Creation"
              description="Strategic content across formats: blog, social, imagery, copywriting, and storytelling."
              details={[
                'Copywriting and messaging',
                'Photography and imagery',
                'Social content strategy',
                'Content calendar and production',
              ]}
            />
          </div>
        </Section>

        <Section title="Results & Impact" darkBg sectionNumber={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ServiceBox
              number="1"
              title="Higher Engagement"
              description="40% increase in engagement with strategic creative vs. average design"
            />
            <ServiceBox
              number="2"
              title="Better Conversion"
              description="35% improvement in conversion rates with clear, compelling creative"
            />
            <ServiceBox
              number="3"
              title="Brand Strength"
              description="60% improvement in brand recognition with consistent, professional creative"
            />
          </div>
          <div className="border border-gray-200 p-8 bg-white">
            <h3 className="font-bold text-text-primary mb-4">Who Wins with Creative Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ SaaS & Tech Companies</p>
                <p className="text-text-secondary text-sm">
                  Make complex products understandable through clear design and storytelling.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Enterprise & B2B Services</p>
                <p className="text-text-secondary text-sm">
                  Build premium brand perception through sophisticated, strategic creative.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Campaign Launches</p>
                <p className="text-text-secondary text-sm">
                  Comprehensive creative for multi-channel campaigns and new product launches.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-2">✓ Rebrands & Refreshes</p>
                <p className="text-text-secondary text-sm">
                  Modernize visual identity while maintaining brand equity and recognition.
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

        <Section title="Let's Create Something Exceptional" sectionNumber={6} id="proposal-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-start">
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Exceptional creative is a strategic weapon. Let's design something that stands out, communicates value, and drives action.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/contact-us" className="inline-block border border-text-primary text-text-primary px-10 py-4 hover:bg-hover transition-colors font-semibold text-center">Chat First</Link>
              </div>
            </div>
            <div>
              <ProposalForm service="Creative Services" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
