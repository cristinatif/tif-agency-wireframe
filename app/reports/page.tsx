import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section } from '@/components/SectionComponents'
import Link from 'next/link'

export default function Reports() {
  const reports = [
    {
      id: 1,
      title: 'Asia-Pacific Marketing Trends Report 2024',
      category: 'Market Research',
      date: 'Q1 2024',
      description: 'Comprehensive analysis of marketing trends, consumer behavior, and opportunities across APAC markets.',
      pages: '45 pages',
    },
    {
      id: 2,
      title: 'Digital Marketing Benchmark Study',
      category: 'Performance Analysis',
      date: 'Q1 2024',
      description: 'Industry benchmark data comparing digital marketing performance across sectors and regions.',
      pages: '38 pages',
    },
    {
      id: 3,
      title: 'Consumer Insights: Brand Loyalty 2024',
      category: 'Consumer Research',
      date: 'Q2 2024',
      description: 'Deep dive into what drives brand loyalty and how to build lasting customer relationships.',
      pages: '52 pages',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Reports & Research"
          subtitle="In-Depth Analysis & Market Intelligence"
          description="Access our comprehensive research reports covering market trends, consumer insights, and competitive analysis."
        />

        <Section title="Available Reports" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report) => (
              <div key={report.id} className="border border-border-light p-6 bg-surface-1 hover:bg-surface-2 transition-colors">
                <p className="text-text-tertiary text-xs font-bold mb-1">{report.category}</p>
                <p className="text-text-tertiary text-xs mb-3">{report.date}</p>
                <h3 className="font-bold text-text-primary mb-3">{report.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{report.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-text-tertiary text-xs">{report.pages}</span>
                  <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                    Download →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Request Custom Research" darkBg sectionNumber={2}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-text-secondary mb-6">
              Need research on a specific topic or market? We can develop custom research tailored to your strategic needs.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
            >
              Request Custom Research
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
