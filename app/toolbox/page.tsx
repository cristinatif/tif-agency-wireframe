import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section } from '@/components/SectionComponents'
import Link from 'next/link'

export default function Toolbox() {
  const resources = [
    {
      id: 1,
      title: 'Strategic Marketing Audit Framework',
      category: 'Tools',
      description: 'Comprehensive checklist for evaluating marketing strategy effectiveness and identifying optimization opportunities.',
      type: 'Downloadable Guide',
    },
    {
      id: 2,
      title: 'Brand Positioning Template',
      category: 'Tools',
      description: 'Structured template for developing clear brand positioning statements and competitive differentiation.',
      type: 'Downloadable Template',
    },
    {
      id: 3,
      title: 'Digital Marketing ROI Calculator',
      category: 'Tools',
      description: 'Interactive tool for calculating and forecasting ROI across digital marketing channels.',
      type: 'Calculator',
    },
    {
      id: 4,
      title: 'Market Research Planning Guide',
      category: 'Guides',
      description: 'Step-by-step guide for planning and executing effective market research studies.',
      type: 'Guide',
    },
    {
      id: 5,
      title: 'Campaign Performance Dashboard Template',
      category: 'Tools',
      description: 'Ready-to-use template for tracking and reporting marketing campaign performance metrics.',
      type: 'Excel Template',
    },
    {
      id: 6,
      title: 'Brand Voice & Messaging Guide',
      category: 'Guides',
      description: 'Framework for developing consistent brand voice, tone, and messaging across all channels.',
      type: 'Guide',
    },
  ]

  const blogs = [
    {
      id: 1,
      title: 'The Future of Brand Strategy in 2024',
      category: 'Strategy',
      date: 'March 15, 2024',
      excerpt: 'Exploring emerging trends in brand strategy, consumer behavior shifts, and opportunities for market leaders.',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Digital Marketing ROI: What Actually Works',
      category: 'Performance Marketing',
      date: 'March 8, 2024',
      excerpt: 'Data-driven analysis of which digital marketing channels deliver the highest ROI and how to optimize spend.',
      readTime: '10 min read',
    },
    {
      id: 3,
      title: 'Creative Excellence in B2B Marketing',
      category: 'Creative',
      date: 'February 28, 2024',
      excerpt: 'Why creative quality matters in B2B contexts and strategies for standing out in competitive markets.',
      readTime: '7 min read',
    },
  ]

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
          title="Toolbox & Insights Hub"
          subtitle="Resources to Drive Better Marketing Decisions"
          description="Explore our collection of tools, guides, research reports, and industry insights designed to help you succeed."
        />

        {/* Tools Section */}
        <Section title="Marketing Tools & Templates" subtitle="Ready-to-use resources to streamline your work" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {resources.map((resource) => (
              <div key={resource.id} className="border border-border-light p-6 bg-surface-1 hover:bg-surface-2 transition-colors">
                <p className="text-text-tertiary text-xs font-bold mb-2">{resource.category}</p>
                <h3 className="font-bold text-text-primary mb-2 text-sm">{resource.title}</h3>
                <p className="text-text-secondary text-xs mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-text-tertiary text-xs">{resource.type}</span>
                  <Link href="#" className="text-text-primary hover:text-text-secondary text-xs underline font-semibold">
                    Download →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Blogs Section */}
        <Section title="Insights & Articles" subtitle="Latest thinking on marketing and strategy" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="border border-border-light bg-surface-1">
                <div className="h-48 bg-surface-3 border-b border-border-light flex items-center justify-center">
                  <span className="text-text-tertiary text-sm">[Article Image]</span>
                </div>
                <div className="p-6">
                  <p className="text-text-tertiary text-xs font-bold mb-2">{blog.category}</p>
                  <h3 className="font-bold text-text-primary mb-2">{blog.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center mb-4 text-xs text-text-tertiary">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-block border border-text-primary px-8 py-3 text-text-primary hover:bg-hover transition-colors font-semibold"
            >
              View All Articles
            </Link>
          </div>
        </Section>

        {/* Reports Section */}
        <Section title="Research Reports" subtitle="In-depth analysis and market research" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reports.map((report) => (
              <div key={report.id} className="border border-border-light p-6 bg-surface-1">
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
          <div className="text-center">
            <Link
              href="/reports"
              className="inline-block border border-text-primary px-8 py-3 text-text-primary hover:bg-hover transition-colors font-semibold"
            >
              View All Reports
            </Link>
          </div>
        </Section>

        {/* Panorama Section */}
        <Section title="Panorama Blogs" subtitle="Extended insights and thought leadership" darkBg sectionNumber={4}>
          <div className="max-w-3xl mx-auto">
            <div className="border border-border-light p-8 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-4 text-lg">Comprehensive Industry Analysis</h3>
              <p className="text-text-secondary mb-4">
                Our Panorama blog series provides deep, comprehensive analysis of major industry trends, market shifts, and strategic opportunities. Each article is researched and written by our team of strategy experts.
              </p>
              <p className="text-text-secondary mb-6">
                Topics covered include:
              </p>
              <ul className="space-y-2 text-text-secondary text-sm mb-6">
                <li>• Market dynamics and competitive analysis</li>
                <li>• Consumer behavior and trend forecasting</li>
                <li>• Digital transformation strategies</li>
                <li>• Brand evolution and positioning trends</li>
                <li>• International market opportunities</li>
                <li>• Innovation and emerging technologies</li>
              </ul>
              <Link
                href="/panorama-blogs"
                className="inline-block border border-text-primary px-8 py-3 text-text-primary hover:bg-hover transition-colors font-semibold"
              >
                Explore Panorama
              </Link>
            </div>
          </div>
        </Section>

        {/* Newsletter Section */}
        <Section title="Stay Updated" sectionNumber={5}>
          <div className="max-w-2xl mx-auto border border-border-light p-8 bg-surface-1 text-center">
            <h2 className="font-bold text-text-primary mb-3 text-xl">Subscribe to Our Newsletter</h2>
            <p className="text-text-secondary mb-6">
              Get monthly insights, research findings, and strategic thinking delivered to your inbox. No spam, just valuable content.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow border border-border-medium p-3 text-text-primary bg-background focus:outline-none focus:border-text-primary"
                required
              />
              <button
                type="submit"
                className="bg-text-primary text-background px-8 py-3 font-semibold hover:opacity-80 transition-opacity"
              >
                Subscribe
              </button>
            </form>
            <p className="text-text-tertiary text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </Section>

        {/* Downloadable Assets */}
        <Section title="Downloadable Resources" darkBg sectionNumber={6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-2">Brand Guidelines Template</h3>
              <p className="text-text-secondary text-sm mb-4">
                Complete template for developing comprehensive brand guidelines covering voice, visual identity, and application standards.
              </p>
              <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                Download PDF →
              </Link>
            </div>

            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-2">Marketing Metrics Handbook</h3>
              <p className="text-text-secondary text-sm mb-4">
                Reference guide to key marketing metrics, KPIs, and how to interpret data for strategic decision-making.
              </p>
              <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                Download PDF →
              </Link>
            </div>

            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-2">Competitive Analysis Workbook</h3>
              <p className="text-text-secondary text-sm mb-4">
                Interactive workbook for conducting thorough competitive analysis and developing differentiation strategies.
              </p>
              <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                Download Excel →
              </Link>
            </div>

            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-2">Campaign Planning Calendar</h3>
              <p className="text-text-secondary text-sm mb-4">
                Annual campaign planning template with timelines, dependencies, and integrated cross-channel planning.
              </p>
              <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                Download Excel →
              </Link>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section title="Need Something Specific?" sectionNumber={7}>
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
