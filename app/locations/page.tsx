import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero, Section, MediaPlaceholder } from '@/components/SectionComponents'
import Link from 'next/link'

export default function Locations() {
  return (
    <>
      <Navigation />
      <main className="pt-nav-height">
        <Hero
          title="Global Locations"
          subtitle="Partnership Centers Across Three Continents"
          description="TIF Agency operates strategically positioned offices to serve regional markets while maintaining global integration."
        />

        {/* Australia */}
        <Section id="australia" title="Australia & Pacific" subtitle="APAC Regional Hub">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Sydney Office</h3>
              <p className="text-text-secondary mb-4">
                Our Sydney headquarters serves as the regional hub for Asia-Pacific partnerships. We maintain strong relationships with leading organizations across Australia, New Zealand, and the broader APAC region.
              </p>
              <div className="mb-6 border-l border-border-medium pl-4">
                <p className="text-text-tertiary text-xs font-bold mb-1">ADDRESS</p>
                <p className="text-text-secondary text-sm mb-3">
                  Level 10, 123 Pitt Street<br />
                  Sydney, NSW 2000<br />
                  Australia
                </p>
                <p className="text-text-tertiary text-xs font-bold mb-1">CONTACT</p>
                <p className="text-text-secondary text-sm">+61 2 8000 0000</p>
                <p className="text-text-secondary text-sm">sydney@tifagency.com</p>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Services: Full suite of integrated marketing, strategic research, creative services, and digital marketing for regional partnerships.
              </p>
              <Link href="/contact-us" className="inline-block border border-text-primary px-6 py-2 text-text-primary hover:bg-hover transition-colors text-sm font-semibold">
                Connect With Sydney Team
              </Link>
            </div>
            <MediaPlaceholder height="h-96" label="Sydney Office & Location" />
          </div>
        </Section>

        {/* LATAM */}
        <Section id="latam" title="LATAM Hub" subtitle="Mexico City Partnership Center" darkBg>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <MediaPlaceholder height="h-96" label="Mexico City Office & Location" />
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Mexico City Office</h3>
              <p className="text-text-secondary mb-4">
                Our Mexico City office specializes in Latin American partnerships and bilingual services. We provide selective Spanish-language content services and cultural expertise for regional market entry and expansion.
              </p>
              <div className="mb-6 border-l border-border-medium pl-4">
                <p className="text-text-tertiary text-xs font-bold mb-1">ADDRESS</p>
                <p className="text-text-secondary text-sm mb-3">
                  Avenida Paseo de la Reforma 505<br />
                  Cuauhtémoc, CDMX 06500<br />
                  Mexico
                </p>
                <p className="text-text-tertiary text-xs font-bold mb-1">CONTACT</p>
                <p className="text-text-secondary text-sm">+52 55 0000 0000</p>
                <p className="text-text-secondary text-sm">latam@tifagency.com</p>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Services: Bilingual marketing, Spanish-language content, cultural adaptation, and LATAM-specific strategic consulting.
              </p>
              <Link href="/contact-us" className="inline-block border border-text-primary px-6 py-2 text-text-primary hover:bg-hover transition-colors text-sm font-semibold">
                Connect With LATAM Team
              </Link>
            </div>
          </div>
        </Section>

        {/* USA */}
        <Section id="usa" title="North America" subtitle="USA Strategic Partnerships">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">New York Office</h3>
              <p className="text-text-secondary mb-4">
                Our USA presence in New York supports strategic partnerships and enables close collaboration with North American-based clients and partners. We maintain the full scope of our integrated services while providing on-ground support.
              </p>
              <div className="mb-6 border-l border-border-medium pl-4">
                <p className="text-text-tertiary text-xs font-bold mb-1">ADDRESS</p>
                <p className="text-text-secondary text-sm mb-3">
                  350 Fifth Avenue<br />
                  New York, NY 10118<br />
                  USA
                </p>
                <p className="text-text-tertiary text-xs font-bold mb-1">CONTACT</p>
                <p className="text-text-secondary text-sm">+1 212 000 0000</p>
                <p className="text-text-secondary text-sm">usa@tifagency.com</p>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Services: Complete service suite including strategy, creative, digital marketing, and research for North American partnerships.
              </p>
              <Link href="/contact-us" className="inline-block border border-text-primary px-6 py-2 text-text-primary hover:bg-hover transition-colors text-sm font-semibold">
                Connect With USA Team
              </Link>
            </div>
            <MediaPlaceholder height="h-96" label="New York Office & Location" />
          </div>
        </Section>

        {/* Global Integration */}
        <Section title="Integrated Global Operations">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Unified Strategy</h3>
              <p className="text-text-secondary text-sm">
                All offices operate under integrated strategy frameworks ensuring consistent brand messaging and approach across regions while maintaining cultural relevance.
              </p>
            </div>
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Seamless Collaboration</h3>
              <p className="text-text-secondary text-sm">
                Our global teams work together across time zones to deliver coordinated campaigns, research, and strategic initiatives for clients operating across markets.
              </p>
            </div>
            <div className="border border-border-light p-6 bg-surface-1">
              <h3 className="font-bold text-text-primary mb-3">Local Expertise</h3>
              <p className="text-text-secondary text-sm">
                Each office brings deep local market knowledge, cultural understanding, and regional partnerships enabling effective market entry and expansion strategies.
              </p>
            </div>
          </div>
        </Section>

        {/* Capabilities by Location */}
        <Section title="Service Availability by Location" darkBg>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-medium">
                  <th className="text-left py-3 px-4 font-bold text-text-primary">Service</th>
                  <th className="text-center py-3 px-4 font-bold text-text-primary">Sydney</th>
                  <th className="text-center py-3 px-4 font-bold text-text-primary">Mexico City</th>
                  <th className="text-center py-3 px-4 font-bold text-text-primary">New York</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="border-b border-border-medium">
                  <td className="py-3 px-4">Strategic Research</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b border-border-medium">
                  <td className="py-3 px-4">Brand Strategy</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b border-border-medium">
                  <td className="py-3 px-4">Creative Services</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b border-border-medium">
                  <td className="py-3 px-4">Digital Marketing</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b border-border-medium">
                  <td className="py-3 px-4">Experiential Marketing</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b border-border-medium">
                  <td className="py-3 px-4">Spanish-Language Services</td>
                  <td className="text-center">●</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">●</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Regional Partnerships</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>
              </tbody>
            </table>
            <p className="text-text-tertiary text-xs mt-4">
              ✓ = Full service available | ● = Available on request
            </p>
          </div>
        </Section>

        {/* CTA */}
        <Section title="Ready to Connect?">
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-text-primary text-background px-10 py-4 hover:opacity-80 transition-opacity font-semibold"
            >
              Contact Your Regional Office
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
