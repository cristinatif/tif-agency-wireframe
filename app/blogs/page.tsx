import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import Link from 'next/link'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'The Future of Brand Strategy in 2024',
      category: 'Strategy',
      date: 'March 15, 2024',
      author: 'Sarah Chen, Strategy Director',
      excerpt: 'Exploring emerging trends in brand strategy, consumer behavior shifts, and opportunities for market leaders.',
      content: 'Content about 2024 brand strategy trends...',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Digital Marketing ROI: What Actually Works',
      category: 'Performance Marketing',
      date: 'March 8, 2024',
      author: 'Michael Torres, Growth Lead',
      excerpt: 'Data-driven analysis of which digital marketing channels deliver the highest ROI and how to optimize spend.',
      content: 'In-depth analysis of digital marketing channel performance...',
      readTime: '10 min read',
    },
    {
      id: 3,
      title: 'Creative Excellence in B2B Marketing',
      category: 'Creative',
      date: 'February 28, 2024',
      author: 'Emma Rodriguez, Creative Director',
      excerpt: 'Why creative quality matters in B2B contexts and strategies for standing out in competitive markets.',
      content: 'Exploring the role of creativity in B2B marketing...',
      readTime: '7 min read',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Blogs"
          subtitle="Insights and Thought Leadership"
          description="Explore our latest thinking on marketing, strategy, and creative excellence."
        />

        <Section title="Latest Articles" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="border border-border-light">
                <MediaPlaceholder height="h-56" label={`Blog ${blog.id}`} />
                <div className="p-6 bg-surface-1">
                  <p className="text-text-tertiary text-xs font-bold mb-2">{blog.category}</p>
                  <h3 className="font-bold text-text-primary mb-2">{blog.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center mb-4 text-xs text-text-tertiary">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="text-text-secondary text-xs mb-4">{blog.author}</div>
                  <Link href="#" className="text-text-primary hover:text-text-secondary text-sm underline font-semibold">
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Subscribe to Updates" darkBg sectionNumber={2}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-text-secondary mb-6">
              Get our latest articles delivered to your inbox every month.
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
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
