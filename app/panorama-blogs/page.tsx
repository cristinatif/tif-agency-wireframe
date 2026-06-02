import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import Link from 'next/link'

export default function PanoramaBlog() {
  const articles = [
    {
      id: 1,
      title: 'The Changing Landscape of Consumer Behavior in 2024',
      date: 'April 2, 2024',
      readTime: '15 min',
      excerpt: 'A comprehensive exploration of how consumer behavior is shifting post-pandemic...',
    },
    {
      id: 2,
      title: 'Global Market Opportunities: Where to Expand in 2024',
      date: 'March 25, 2024',
      readTime: '12 min',
      excerpt: 'Strategic analysis of emerging markets and expansion opportunities...',
    },
    {
      id: 3,
      title: 'The Role of Technology in Modern Marketing',
      date: 'March 18, 2024',
      readTime: '14 min',
      excerpt: 'Deep dive into AI, automation, and emerging technologies in marketing...',
    },
    {
      id: 4,
      title: 'Brand Building in a Digital-First World',
      date: 'March 11, 2024',
      readTime: '13 min',
      excerpt: 'How brands are adapting their strategy to digital channels...',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Panorama Blogs"
          subtitle="Deep Insights & Strategic Analysis"
          description="Comprehensive thought leadership on marketing, brand strategy, and business transformation."
        />

        <Section title="Featured Articles" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {articles.slice(0, 2).map((article) => (
              <div key={article.id} className="border border-border-light">
                <MediaPlaceholder height="h-72" label={`Article ${article.id}`} />
                <div className="p-6 bg-surface-1">
                  <p className="text-text-tertiary text-xs mb-2">{article.date} • {article.readTime} read</p>
                  <h3 className="font-bold text-text-primary mb-3 text-lg">{article.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{article.excerpt}</p>
                  <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                    Read Full Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="All Panorama Articles" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="border border-border-light p-6 bg-surface-1 hover:bg-surface-2 transition-colors flex justify-between items-start">
                <div className="flex-grow">
                  <h3 className="font-bold text-text-primary mb-2">{article.title}</h3>
                  <p className="text-text-secondary text-sm mb-3">{article.excerpt}</p>
                  <p className="text-text-tertiary text-xs">{article.date} • {article.readTime} read</p>
                </div>
                <Link href="#" className="text-text-primary hover:text-text-secondary ml-4 font-semibold flex-shrink-0">
                  →
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
