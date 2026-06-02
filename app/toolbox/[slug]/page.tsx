'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section } from '@/components/SectionComponents'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { HiLockClosed, HiChevronDown, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { useState } from 'react'

interface ContentSection {
  id: string
  level: 'h2' | 'h3'
  title: string
  content?: string
}

interface BlogContent {
  type: string
  title: string
  service: string
  date: string
  author?: string
  readTime?: string
  excerpt: string
  sections?: ContentSection[]
  faqs?: Array<{ question: string; answer: string }>
  relatedService?: { slug: string; name: string }
}

export default function ToolboxContent() {
  const params = useParams()
  const slug = params.slug as string
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Content library with structured H2/H3
  const contentLibrary: Record<string, BlogContent> = {
    'future-brand-strategy-2025': {
      type: 'blog',
      title: 'The Future of Brand Strategy in 2025',
      service: 'Brand Strategy',
      date: '2024-11-15',
      author: 'Sarah Johnson',
      readTime: '8 min read',
      excerpt: 'Understanding the latest trends in consumer psychology and how forward-thinking brands are adapting their strategies.',
      sections: [
        {
          id: 'introduction',
          level: 'h2',
          title: 'The Changing Landscape of Brand Strategy',
          content: 'Brand strategy is evolving rapidly. Consumer expectations are shifting faster than ever, and brands that fail to adapt will be left behind. The old playbook of mass marketing and generic positioning no longer works.'
        },
        {
          id: 'ai-reshaping',
          level: 'h2',
          title: 'How AI is Reshaping Consumer Behavior',
          content: 'Artificial intelligence is fundamentally changing how consumers discover, evaluate, and purchase products. Here\'s what brands need to know:'
        },
        {
          id: 'ai-subsection',
          level: 'h3',
          title: 'Personalization at Scale',
          content: 'AI enables brands to deliver personalized experiences to millions of customers simultaneously. This isn\'t just better marketing—it\'s table stakes in 2025.'
        },
        {
          id: 'ai-transparency',
          level: 'h3',
          title: 'The Demand for Transparency',
          content: 'Consumers increasingly want to understand how AI is being used. Brands that explain their AI usage transparently build more trust than those that hide behind black boxes.'
        },
        {
          id: 'conscious-consumerism',
          level: 'h2',
          title: 'The Rise of Conscious Consumerism',
          content: 'Key findings from our research show that 78% of consumers now expect brands to demonstrate social responsibility. This isn\'t just nice-to-have anymore—it\'s table stakes. Brands must align with consumer values or risk rejection.'
        },
        {
          id: 'authenticity',
          level: 'h2',
          title: 'Building Authentic Brand Connections',
          content: 'Brands succeeding in 2025 share common traits: clarity in positioning, consistency in messaging, and genuine commitment to their stated values. The winners aren\'t necessarily the biggest; they\'re the clearest about what they stand for.'
        },
        {
          id: 'legacy-brands',
          level: 'h2',
          title: 'Legacy Brands vs. Digital-Native Competitors',
          content: 'Traditional brands have advantages: heritage, trust, and distribution. But they must move faster and think differently to compete with nimble digital-native competitors who can pivot overnight.'
        }
      ],
      faqs: [
        {
          question: 'How can established brands compete with startups?',
          answer: 'By leveraging their brand heritage while adopting agile strategies. Heritage is an asset—use it. Move faster on innovation, test more, and fail cheaply.'
        },
        {
          question: 'Is AI threatening traditional brand strategy?',
          answer: 'No—AI amplifies good strategy. Brands with clear positioning benefit most from AI. Brands with muddled positioning get exposed.'
        },
        {
          question: 'What\'s the minimum social responsibility commitment required?',
          answer: 'Consistency matters more than scale. Pick 1-2 causes aligned with your brand purpose and commit long-term. Consumers can smell performative activism.'
        },
        {
          question: 'How do we update our positioning for 2025?',
          answer: 'Start with research: understand how your consumers have changed. Then audit whether your positioning still resonates. Quarterly updates are normal now.'
        }
      ],
      relatedService: { slug: 'brand-strategy', name: 'Brand Strategy' }
    },
    'seo-age-of-ai': {
      type: 'blog',
      title: 'SEO in the Age of AI: What Actually Works',
      service: 'Digital Marketing',
      date: '2024-11-10',
      author: 'Mike Chen',
      readTime: '12 min read',
      excerpt: 'AI-powered search is here. Learn how to optimize for visibility without relying on outdated techniques.',
      sections: [
        {
          id: 'intro',
          level: 'h2',
          title: 'The SEO Playbook Has Changed',
          content: 'The SEO playbook is changing. AI has fundamentally altered how search engines rank content and what users expect from search results. What worked in 2023 may hurt you in 2025.'
        },
        {
          id: 'outdated-tactics',
          level: 'h2',
          title: 'Why Old SEO Tactics Don\'t Work Anymore',
          content: 'Traditional SEO tactics that worked for the past decade are losing effectiveness. Keyword stuffing, artificial backlinks, and content farms are now penalties rather than boosts.'
        },
        {
          id: 'entity-optimization',
          level: 'h2',
          title: 'Entity Optimization & Topical Authority',
          content: 'Instead of targeting keywords, Google now targets entities. Build topical authority by covering every angle of your subject. This requires depth and breadth—not just hitting a word count.'
        },
        {
          id: 'eeat-signals',
          level: 'h2',
          title: 'E-E-A-T Signals Matter More Than Ever',
          content: 'Experience, Expertise, Authoritativeness, Trustworthiness—Google\'s E-E-A-T framework is now explicit. Brands winning in search demonstrate clear expertise and earn trust through results.'
        },
        {
          id: 'case-studies',
          level: 'h2',
          title: 'Real Results: What We\'re Seeing',
          content: 'We\'ve seen brands that implemented these strategies see 40-60% organic traffic increases within 6 months. The shift requires investment upfront, but the payoff is substantial and sustainable.'
        }
      ],
      faqs: [
        {
          question: 'Do keywords still matter in 2025?',
          answer: 'Yes, but differently. Keywords matter for search intent, not density. Write naturally for humans; Google handles the matching.'
        },
        {
          question: 'How long does topical authority take to build?',
          answer: 'Typically 4-6 months of consistent publishing to see ranking improvements. Then 12+ months to establish real authority.'
        },
        {
          question: 'Are backlinks still important?',
          answer: 'Quality > quantity. One link from an authoritative site beats 100 spam links. Focus on earned links from real relationships.'
        }
      ],
      relatedService: { slug: 'digital-marketing', name: 'Digital Marketing' }
    },
    'panorama-consumer-sentiment-q4-2024': {
      type: 'panorama',
      title: 'Panorama: Consumer Sentiment Q4 2024',
      service: 'Research Lab',
      date: '2024-11-20',
      author: 'TIF Research Team',
      readTime: '15 min read',
      excerpt: 'Comprehensive quarterly analysis of consumer sentiment, spending intentions, and brand trust across key markets.',
      sections: [
        {
          id: 'methodology',
          level: 'h2',
          title: 'Research Methodology',
          content: 'Our Q4 2024 consumer sentiment research spans 15 markets and includes insights from 5,000+ consumers. This is our most comprehensive quarterly update.'
        },
        {
          id: 'economic-sentiment',
          level: 'h2',
          title: 'Economic Sentiment is Stabilizing',
          content: 'Consumer confidence is stabilizing after Q3 volatility. 56% report stable or improving financial situations. This is a positive signal for discretionary spending.'
        },
        {
          id: 'spending-intentions',
          level: 'h2',
          title: 'Holiday Spending Up 8% Year-over-Year',
          content: 'Holiday spending projections are up 8% vs. last year, with digital channels capturing 65% of retail traffic. Mobile commerce is now the dominant channel.'
        },
        {
          id: 'brand-trust',
          level: 'h2',
          title: 'Trust in Established Brands Growing',
          content: 'Trust in established brands increased 12 points, while trust in new/emerging brands declined 8 points. Conservative choice-making is in effect as consumers prioritize reliability.'
        },
        {
          id: 'regional-insights',
          level: 'h2',
          title: 'Regional Performance Variations',
          content: 'Performance varies significantly by region. EMEA shows strongest economic sentiment, APAC is leading in digital adoption, and LATAM is showing highest growth in ecommerce spending.'
        },
        {
          id: 'implications',
          level: 'h2',
          title: 'What This Means for Marketers',
          content: 'This quarter signals a shift toward brand consolidation and quality over novelty. Marketing spend is moving toward proven channels and established brands. Budget efficiency matters more than novelty.'
        }
      ],
      faqs: [
        {
          question: 'Should we increase marketing spend based on these trends?',
          answer: 'If you\'re an established brand—yes, cautiously. If you\'re new—focus on quality and trust-building over volume.'
        },
        {
          question: 'Which channels are delivering best ROI?',
          answer: 'Digital is dominant, but email and owned channels are outperforming paid social. Channel mix depends on your audience.'
        }
      ],
      relatedService: { slug: 'research-lab', name: 'Research Lab' }
    },
    'integrated-marketing-roi-report-2024': {
      type: 'report',
      title: 'The Integrated Marketing ROI Report 2024',
      service: 'Integrated Solutions',
      date: '2024-10-30',
      pages: 42,
      preview: 'Report_Integrated_Marketing_2024',
      excerpt: 'How integrated strategies compound results vs. siloed approaches',
      content: 'Report content preview. Full report available for download after form submission.',
    },
    'brand-strategy-template-workbook': {
      type: 'downloadable',
      title: 'Brand Strategy Template & Workbook',
      service: 'Brand Strategy',
      date: '2024-11-20',
      fileType: 'PDF + Google Sheets',
      excerpt: 'Complete template for developing positioning and messaging',
      content: 'Asset preview. Full template available for download after form submission.',
    },
  }

  // All blog posts for "Latest Entries" section
  const allPosts = [
    { slug: 'future-brand-strategy-2025', title: 'The Future of Brand Strategy in 2025', date: '2024-11-15', service: 'Brand Strategy' },
    { slug: 'seo-age-of-ai', title: 'SEO in the Age of AI: What Actually Works', date: '2024-11-10', service: 'Digital Marketing' },
    { slug: 'panorama-consumer-sentiment-q4-2024', title: 'Panorama: Consumer Sentiment Q4 2024', date: '2024-11-20', service: 'Research Lab' },
  ]

  const content = contentLibrary[slug] || {
    type: 'blog',
    title: 'Article Not Found',
    service: 'Content',
    date: '2024-01-01',
    excerpt: 'This content is not available.',
  }

  const isGatedContent = ['report', 'downloadable'].includes(content.type)
  const isBlogContent = ['blog', 'panorama', 'newsletters'].includes(content.type)

  // Extract H2s for table of contents
  const tableOfContents = content.sections?.filter(s => s.level === 'h2') || []

  // Get related/latest posts (exclude current)
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        {/* Hero with Featured Image */}
        <Hero
          title={content.title}
          subtitle={content.service}
        />

        {/* Content - Ungated (Blogs, Panorama, Newsletters) */}
        {!isGatedContent && isBlogContent && (
          <>
            {/* Metadata + Excerpt Combined */}
            <Section sectionNumber={1}>
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-8 text-sm text-text-tertiary border-b border-gray-200 pb-8 mb-8">
                  <div>
                    <p className="text-xs font-bold mb-1">Date</p>
                    <p>{content.date}</p>
                  </div>
                  {content.author && (
                    <div>
                      <p className="text-xs font-bold mb-1">Author</p>
                      <p>{content.author}</p>
                    </div>
                  )}
                  {content.readTime && (
                    <div>
                      <p className="text-xs font-bold mb-1">Read Time</p>
                      <p>{content.readTime}</p>
                    </div>
                  )}
                </div>
                {/* Excerpt/Introduction */}
                <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
                  {content.excerpt}
                </p>
              </div>
            </Section>

            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <Section sectionNumber={2} darkBg>
                <div className="max-w-4xl bg-gray-50 p-6 rounded border border-gray-200">
                  <h3 className="font-bold text-text-primary mb-4">Table of Contents</h3>
                  <ul className="space-y-2">
                    {tableOfContents.map((section, idx) => (
                      <li key={idx}>
                        <a
                          href={`#${section.id}`}
                          className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                        >
                          {idx + 1}. {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
            )}

            {/* Blog Content with H2/H3 */}
            <Section sectionNumber={2}>
              <div className="max-w-3xl">
                {content.sections?.map((section, idx) => (
                  <div key={idx} id={section.id} className="mb-12 scroll-mt-20">
                    {section.level === 'h2' && (
                      <h2 className="text-2xl font-bold text-text-primary mb-4">{section.title}</h2>
                    )}
                    {section.level === 'h3' && (
                      <h3 className="text-xl font-bold text-text-primary mb-3 mt-6">{section.title}</h3>
                    )}
                    {section.content && (
                      <p className="text-text-secondary text-base leading-relaxed mb-4">{section.content}</p>
                    )}

                    {/* Internal Banner after certain sections */}
                    {section.id === 'conscious-consumerism' && content.relatedService && (
                      <div className="bg-blue-50 border-l-4 border-text-primary p-4 my-8">
                        <p className="text-text-secondary text-sm mb-2">
                          Want to audit your brand against these trends?
                        </p>
                        <Link
                          href={`/our-services/${content.relatedService.slug}`}
                          className="text-text-primary hover:text-text-secondary font-semibold text-sm"
                        >
                          Explore {content.relatedService.name} →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Section>

            {/* FAQs */}
            {content.faqs && content.faqs.length > 0 && (
              <Section sectionNumber={3} title="Frequently Asked Questions" darkBg>
                <div className="max-w-3xl space-y-3">
                  {content.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="font-semibold text-text-primary">{faq.question}</span>
                        <HiChevronDown
                          className={`text-text-tertiary transition-transform ${
                            expandedFaq === idx ? 'rotate-180' : ''
                          }`}
                          size={20}
                        />
                      </button>
                      {expandedFaq === idx && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Large Banner with Background */}
            <BlogBanner relatedService={content.relatedService} />

            {/* Blog Slider - Latest Entries */}
            <BlogSlider currentSlug={slug} allPosts={allPosts} />
          </>
        )}

        {/* Content - Gated (Reports & Downloadable Assets) */}
        {isGatedContent && (
          <Section sectionNumber={1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Preview */}
              <div>
                <h3 className="font-bold text-text-primary mb-4">Preview</h3>
                <div className="border-2 border-dashed border-gray-300 p-12 rounded bg-gray-50 flex items-center justify-center h-80">
                  <div className="text-center">
                    <HiLockClosed className="mx-auto mb-3 text-gray-400" size={32} />
                    <p className="text-text-tertiary text-sm">
                      {content.type === 'report' ? `${content.pages}-page report preview` : 'Complete workbook template'}
                    </p>
                    <p className="text-text-tertiary text-xs mt-2">[PDF/File Preview]</p>
                  </div>
                </div>
              </div>

              {/* Download Form */}
              <div>
                <h3 className="font-bold text-text-primary mb-6">Get This {content.type === 'report' ? 'Report' : 'Asset'}</h3>
                <p className="text-text-secondary mb-8">
                  {content.type === 'report'
                    ? 'Download this comprehensive report including all analysis, recommendations, and data tables.'
                    : 'Access the complete template and workbook to start developing your strategy immediately.'}
                </p>

                <form className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-text-primary"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-text-primary"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-text-primary"
                  />
                  <button
                    type="submit"
                    className="w-full bg-text-primary text-background px-4 py-3 font-semibold text-sm hover:opacity-80 transition-opacity"
                  >
                    Download Now
                  </button>
                </form>

                <p className="text-text-tertiary text-xs">
                  By downloading, you agree to receive occasional emails about relevant resources.
                </p>
              </div>
            </div>
          </Section>
        )}

      </main>
      <Footer />
    </>
  )
}

// Large Banner Component
function BlogBanner({ relatedService }: { relatedService?: { slug: string; name: string } }) {
  return (
    <Section sectionNumber={4}>
      <div
        className="relative rounded-lg overflow-hidden h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23f3f4f6;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23e5e7eb;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%221200%22 height=%22400%22 fill=%22url(%23grad)%22/%3E%3C/svg%3E)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Apply These Insights?
          </h2>
          <p className="text-white text-lg mb-8">
            Our team specializes in turning research into action. Let's discuss how to implement this for your business.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-text-primary text-background px-8 py-3 font-semibold text-base hover:opacity-80 transition-opacity rounded"
          >
            Schedule a Conversation
          </Link>
        </div>
      </div>
    </Section>
  )
}

// Blog Slider Component
function BlogSlider({
  currentSlug,
  allPosts,
}: {
  currentSlug: string
  allPosts: Array<{ slug: string; title: string; date: string; service: string }>
}) {
  const [sliderIndex, setSliderIndex] = useState(0)

  const posts = allPosts.filter(p => p.slug !== currentSlug)

  const visiblePosts = posts.slice(sliderIndex, sliderIndex + 4)

  const handlePrev = () => {
    setSliderIndex(Math.max(0, sliderIndex - 1))
  }

  const handleNext = () => {
    if (sliderIndex + 4 < posts.length) {
      setSliderIndex(sliderIndex + 1)
    }
  }

  return (
    <Section sectionNumber={4} title="Latest from the Toolbox">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/toolbox/${post.slug}`}
              className="border border-gray-200 p-5 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="inline-block bg-blue-50 px-2 py-1 rounded mb-3 w-fit">
                <p className="text-text-tertiary text-xs font-bold uppercase">{post.service}</p>
              </div>
              <h4 className="font-bold text-text-primary text-sm mb-2 group-hover:text-text-secondary transition-colors line-clamp-2 flex-1">
                {post.title}
              </h4>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-text-tertiary text-xs mb-2">{post.date}</p>
                <span className="text-text-primary text-xs font-semibold group-hover:translate-x-1 transition-transform inline-block">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Slider Controls */}
        {posts.length > 4 && (
          <div className="flex gap-3 justify-center mt-8">
            <button
              onClick={handlePrev}
              disabled={sliderIndex === 0}
              className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous posts"
            >
              <HiChevronLeft size={20} className="text-text-primary" />
            </button>
            <button
              onClick={handleNext}
              disabled={sliderIndex + 4 >= posts.length}
              className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next posts"
            >
              <HiChevronRight size={20} className="text-text-primary" />
            </button>
          </div>
        )}
      </div>
    </Section>
  )
}
