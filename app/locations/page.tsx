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
        <Section id="australia" title="Australia" subtitle="APAC Regional Hub" sectionNumber={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">The Ideas Factory Australia Pty Ltd</h3>
              <p className="text-text-secondary mb-4">
                Our Australia headquarters serves as the regional hub for Asia-Pacific partnerships. We maintain strong relationships with leading organizations across Australia, New Zealand, and the broader APAC region with offices in Adelaide and Sydney.
              </p>
              <div className="mb-6 border-l border-border-medium pl-4">
                <p className="text-text-tertiary text-xs font-bold mb-1">LOCATIONS</p>
                <p className="text-text-secondary text-sm mb-3">
                  Adelaide • Sydney
                </p>
                <p className="text-text-tertiary text-xs font-bold mb-1">ABN</p>
                <p className="text-text-secondary text-sm mb-3">73 663 094 920</p>
                <p className="text-text-tertiary text-xs font-bold mb-1">PHONE</p>
                <p className="text-text-secondary text-sm mb-1"><a href="tel:+61400352645" className="text-text-primary hover:underline">+61 400 352 645</a></p>
                <p className="text-text-tertiary text-xs font-bold mb-1">EMAIL</p>
                <p className="text-text-secondary text-sm"><a href="mailto:sales@theidesfactory.com.au" className="text-text-primary hover:underline">sales@theidesfactory.com.au</a></p>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Services: Full suite of integrated marketing, strategic research, creative services, and digital marketing for regional partnerships.
              </p>
              <Link href="/contact-us" className="inline-block border border-text-primary px-6 py-2 text-text-primary hover:bg-hover transition-colors text-sm font-semibold">
                Connect With Australia Team
              </Link>
            </div>
            <MediaPlaceholder height="h-96" label="Australia Office & Location" />
          </div>
        </Section>

        {/* Colombia */}
        <Section id="colombia" title="Colombia" subtitle="LATAM Regional Hub" darkBg sectionNumber={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <MediaPlaceholder height="h-96" label="Colombia Office & Location" />
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">The Ideas Factory S.A.S</h3>
              <p className="text-text-secondary mb-4">
                Our Colombia presence specializes in Latin American partnerships and bilingual services. We provide Spanish-language content services and cultural expertise for regional market entry and expansion with offices in Medellín and Bogotá.
              </p>
              <div className="mb-6 border-l border-border-medium pl-4">
                <p className="text-text-tertiary text-xs font-bold mb-1">LOCATIONS</p>
                <p className="text-text-secondary text-sm mb-3">
                  Medellín • Bogotá
                </p>
                <p className="text-text-tertiary text-xs font-bold mb-1">NIT</p>
                <p className="text-text-secondary text-sm mb-3">901029547</p>
                <p className="text-text-tertiary text-xs font-bold mb-1">WHATSAPP</p>
                <p className="text-text-secondary text-sm mb-1"><a href="https://wa.me/573177346527" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">+57 317 734 6527</a></p>
                <p className="text-text-tertiary text-xs font-bold mb-1">EMAIL</p>
                <p className="text-text-secondary text-sm"><a href="mailto:sales@theidesfactory.comco" className="text-text-primary hover:underline">sales@theidesfactory.comco</a></p>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Services: Bilingual marketing, Spanish-language content, cultural adaptation, and LATAM-specific strategic consulting.
              </p>
              <Link href="/contact-us" className="inline-block border border-text-primary px-6 py-2 text-text-primary hover:bg-hover transition-colors text-sm font-semibold">
                Connect With Colombia Team
              </Link>
            </div>
          </div>
        </Section>

        {/* USA */}
        <Section id="usa" title="United States" subtitle="North America Strategic Hub" sectionNumber={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">TIF Agency</h3>
              <p className="text-text-secondary mb-4">
                Our USA presence in Atlanta supports strategic partnerships and enables close collaboration with North American-based clients and partners. We maintain the full scope of our integrated services while providing on-ground support.
              </p>
              <div className="mb-6 border-l border-border-medium pl-4">
                <p className="text-text-tertiary text-xs font-bold mb-1">LOCATION</p>
                <p className="text-text-secondary text-sm mb-3">
                  Atlanta
                </p>
                <p className="text-text-tertiary text-xs font-bold mb-1">PHONE</p>
                <p className="text-text-secondary text-sm mb-1"><a href="tel:+14046788032" className="text-text-primary hover:underline">+1 404 678 8032</a></p>
                <p className="text-text-tertiary text-xs font-bold mb-1">WEBSITE</p>
                <p className="text-text-secondary text-sm"><a href="https://tifagency.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">tifagency.com</a></p>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Services: Complete service suite including strategy, creative, digital marketing, and research for North American partnerships.
              </p>
              <Link href="/contact-us" className="inline-block border border-text-primary px-6 py-2 text-text-primary hover:bg-hover transition-colors text-sm font-semibold">
                Connect With USA Team
              </Link>
            </div>
            <MediaPlaceholder height="h-96" label="USA Office & Location" />
          </div>
        </Section>

        {/* Global Integration */}
        <Section title="Integrated Global Operations" sectionNumber={4}>
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
        <Section title="Service Availability by Location" darkBg sectionNumber={5}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-medium">
                  <th className="text-left py-3 px-4 font-bold text-text-primary">Service</th>
                  <th className="text-center py-3 px-4 font-bold text-text-primary">Australia</th>
                  <th className="text-center py-3 px-4 font-bold text-text-primary">Colombia</th>
                  <th className="text-center py-3 px-4 font-bold text-text-primary">USA</th>
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
        <Section title="Ready to Connect?" sectionNumber={6}>
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
