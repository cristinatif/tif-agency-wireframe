import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import Link from 'next/link'

export default function Insights() {
  const insights = [
    {
      id: 1,
      title: 'Market Insights: Q1 2024 Performance Review',
      category: 'Market Analysis',
      date: 'April 1, 2024',
      description: 'Summary of Q1 2024 marketing performance across key channels and industries.',
    },
    {
      id: 2,
      title: 'Consumer Behavior Shifts: What Brands Need to Know',
      category: 'Consumer Research',
      date: 'March 20, 2024',
      description: 'Key findings from our latest consumer research study across APAC regions.',
    },
    {
      id: 3,
      title: 'Digital Marketing Trends: Mid-Year Outlook',
      category: 'Digital Marketing',
      date: 'March 15, 2024',
      description: 'Emerging trends and opportunities in digital marketing for the second half of 2024.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Insights Hub"
          subtitle="Research, Trends & Strategic Thinking"
          description="Stay informed with our latest market research, insights, and strategic analysis."
        />

        <Section title="Latest Insights" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <div key={insight.id} className="border border-border-light p-6 bg-surface-1">
                <p className="text-text-tertiary text-xs font-bold mb-2">{insight.category}</p>
                <p className="text-text-tertiary text-xs mb-3">{insight.date}</p>
                <h3 className="font-bold text-text-primary mb-3">{insight.title}</h3>
                <p className="text-text-secondary text-sm">{insight.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Featured Research" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border-light p-6 bg-surface-1">
              <MediaPlaceholder height="h-64" label="Research Study" />
              <h3 className="font-bold text-text-primary mt-4 mb-2">APAC Consumer Preferences Study</h3>
              <p className="text-text-secondary text-sm">Comprehensive study of consumer preferences and behaviors across APAC markets.</p>
            </div>
            <div className="border border-border-light p-6 bg-surface-1">
              <MediaPlaceholder height="h-64" label="Market Analysis" />
              <h3 className="font-bold text-text-primary mt-4 mb-2">Digital Channel Performance Analysis</h3>
              <p className="text-text-secondary text-sm">Benchmark analysis of digital marketing channel performance and ROI across sectors.</p>
            </div>
          </div>
        </Section>

        <Section title="Explore More" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blogs" className="border border-border-light p-6 bg-surface-1 hover:bg-surface-2 transition-colors text-center">
              <h3 className="font-bold text-text-primary mb-2">Blogs</h3>
              <p className="text-text-secondary text-sm">Read our latest articles and thought leadership</p>
            </Link>
            <Link href="/reports" className="border border-border-light p-6 bg-surface-1 hover:bg-surface-2 transition-colors text-center">
              <h3 className="font-bold text-text-primary mb-2">Reports</h3>
              <p className="text-text-secondary text-sm">Access comprehensive research reports</p>
            </Link>
            <Link href="/panorama-blogs" className="border border-border-light p-6 bg-surface-1 hover:bg-surface-2 transition-colors text-center">
              <h3 className="font-bold text-text-primary mb-2">Panorama</h3>
              <p className="text-text-secondary text-sm">Deep dive analysis and strategic insights</p>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
