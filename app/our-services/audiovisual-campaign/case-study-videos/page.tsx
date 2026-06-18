'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { VideoPlaceholder } from '@/components/SectionComponents'
import { LanguageProvider, useLanguage, type Lang } from '@/components/LanguageContext'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const WHATSAPP_NUMBER = '573146926758'
const waLink = (lang: Lang) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lang === 'es'
      ? 'Hola, quiero más información sobre los videos de caso de estudio'
      : "Hi, I'd like more information about your case study videos"
  )}`

const content = {
  en: {
    langName: 'EN',
    hero: {
      bg: 'Background video — best AV cuts, 30s, no subtitles',
      h1: 'Turn your projects into sales tools',
      sub: 'Industrial companies are turning their success stories into narratives that accelerate sales, build trust, and open new opportunities.',
      ctaPrimary: 'Chat with us now',
      ctaSecondary: "Let's talk about your goals",
    },
    social: { label: 'Trusted by' },
    problem: {
      label: 'The Problem',
      h2: 'Most industrial projects are worth far more than they communicate.',
      body: 'Every delivered project contains real proof of your capability: the problem you solved, how you did it, what resulted. But that value disappears into reports, PDFs no one reads, and meetings you repeat over and over. Meanwhile, your sales team keeps explaining from scratch. Every time. With every prospect.',
      cards: [
        { title: "What's happening?", text: 'You deliver the project, document it, forget it.' },
        { title: 'The result', text: 'Your sales team explains the same thing, over and over, in every meeting.' },
        { title: 'The missed opportunity', text: 'Proposals with no visual proof. Tenders lost to competitors who communicate their achievements better.' },
      ],
    },
    how: {
      label: 'How it works',
      h2: 'The format that turns projects into sales tools.',
      subtext: 'A well-made case study video follows the same narrative principle that convinces any industrial buyer:',
      steps: [
        { n: '01', title: 'Challenge', text: 'The real challenge your client faced. Concrete, recognizable, with industrial context.' },
        { n: '02', title: 'Solution', text: 'Your solution in action: the process, the team, the technology used.' },
        { n: '03', title: 'Result', text: 'Measurable result. What changed for your client. Numbers, efficiency, trust earned.' },
      ],
      note: "An industrial buyer doesn't need more information. They need to understand faster. A case study video is the tool that makes that happen.",
      ctaPrimary: "Let's talk?",
      ctaSecondary: 'Download the "Case Study Playbook"',
    },
    proof: {
      label: 'See how it looks in practice',
      h2: "We don't just tell you. We show you.",
      body: "These are results from real industrial projects transformed into strategic case study videos. It's not just marketing content — it's a commercial tool that works for your sales team.",
      videos: [
        'Australian Turntables & Ecocementos — Rotating platform for trucks',
        'Orica — Entrepreneurs’ school',
        'Australian Turntables & B.A.R.T — Revolutionizing rail operations',
      ],
    },
    who: {
      label: 'Who This Is For',
      h2: 'For industrial companies doing world-class work but still explaining it the wrong way.',
      needIf: 'You need this if:',
      bullets: [
        "You have delivered projects with provable results you've never communicated visually.",
        "Your sales team relies on meetings and documents to explain, over and over, what they've achieved.",
        'You take part in tenders or proposals and need to stand out from the competition.',
        'You want to build trust with new clients before the first conversation.',
        "Your company is active on LinkedIn but you're not using video strategically.",
      ],
      pricing: 'Investment from $3,500,000 COP.',
    },
    contact: {
      label: 'Talk to Us',
      h2: 'Do you have a project that deserves to be communicated more powerfully?',
      body: 'Tell us about your company. Our commercial team will reach out to discuss how we can turn your work into your best sales tool.',
      whatsappNote: 'Or if you prefer, message us directly',
      whatsappBtn: 'Message us on WhatsApp',
      formTitle: 'Send us your details',
      fields: { name: 'Name', company: 'Company', role: 'Role', email: 'Email', phone: 'Phone', optional: 'optional' },
      submit: 'Send',
      success: 'Thanks! Our commercial team will be in touch shortly.',
    },
    final: {
      h2: 'Every project you deliver without turning it into a case study is a sales opportunity lost.',
      subtext: 'A case study video is the most underused B2B sales tool in Colombian industry. The companies that use it sell faster.',
      cta: 'Chat with us now',
      small: 'The Ideas Factory · B2B Audiovisual Production · www.tifagency.com',
    },
    playbook: {
      title: 'Get the Case Study Playbook',
      subtitle: 'Stories that sell. Leave your details and we’ll send it straight to your inbox.',
      submit: 'Download Playbook',
      success: 'Done! Check your email for the Playbook.',
    },
  },
  es: {
    langName: 'ES',
    hero: {
      bg: 'Video de fondo — mejores cortes AV, 30s, sin subtítulos',
      h1: 'Transforma tus proyectos en herramientas comerciales',
      sub: 'Las empresas industriales están convirtiendo sus casos de éxito en historias que aceleran las ventas, construyen confianza y abren nuevas oportunidades.',
      ctaPrimary: 'Chatea con nosotros ahora',
      ctaSecondary: 'Conversemos sobre tus objetivos',
    },
    social: { label: 'Confían en nosotros' },
    problem: {
      label: 'El Problema',
      h2: 'La mayoría de los proyectos industriales valen mucho más de lo que comunican.',
      body: 'Cada proyecto entregado contiene prueba real de tu capacidad: el problema que resolviste, cómo lo hiciste, qué resultó. Pero ese valor desaparece en informes, en PDFs que nadie lee y en reuniones que hay que repetir una y otra vez. Mientras tanto, tu equipo de ventas sigue explicando desde cero. Cada vez. Con cada prospecto.',
      cards: [
        { title: '¿Qué está pasando?', text: 'Entregas el proyecto, lo documentas, lo olvidas.' },
        { title: 'El resultado', text: 'Tu equipo de ventas explica lo mismo, una y otra vez, en cada reunión.' },
        { title: 'La oportunidad perdida', text: 'Propuestas sin prueba visual. Licitaciones que se pierden ante competidores que saben comunicar mejor sus logros.' },
      ],
    },
    how: {
      label: 'Cómo funciona',
      h2: 'El formato que convierte proyectos en herramientas de venta.',
      subtext: 'Un video de caso de estudio bien hecho sigue el mismo principio narrativo que convence a cualquier comprador industrial:',
      steps: [
        { n: '01', title: 'Reto', text: 'El reto real que tu cliente enfrentaba. Concreto, reconocible, con contexto industrial.' },
        { n: '02', title: 'Solución', text: 'Tu solución en acción: el proceso, el equipo, la tecnología usada.' },
        { n: '03', title: 'Resultado', text: 'Resultado medible. Lo que cambió para tu cliente. Números, eficiencia, confianza ganada.' },
      ],
      note: 'Un comprador industrial no necesita más información. Necesita entender más rápido. Un video de caso de estudio es la herramienta que lo facilita.',
      ctaPrimary: '¿Conversamos?',
      ctaSecondary: 'Descarga el "Case Study Playbook"',
    },
    proof: {
      label: 'Descubre cómo se ve en la práctica',
      h2: 'No solo te lo explicamos. Te lo mostramos.',
      body: 'Estos son resultados de proyectos industriales reales que se transforman en videos de casos de estudio estratégicos. No es únicamente contenido de marketing, es una herramienta comercial que trabaja para tu equipo de ventas.',
      videos: [
        'Australian Turntables & Ecocementos — Plataforma giratoria para camiones',
        'Orica — Escuela de emprendedoras',
        'Australian Turntables & B.A.R.T — Revolucionando operaciones férreas',
      ],
    },
    who: {
      label: 'Para Quién Es Esto',
      h2: 'Para empresas industriales que hacen trabajo de clase mundial, pero lo siguen explicando de la manera incorrecta.',
      needIf: 'Necesitas esto si:',
      bullets: [
        'Tienes proyectos entregados con resultados comprobables que nunca has comunicado visualmente.',
        'Tu equipo de ventas depende de reuniones y documentos para explicar una y otra vez lo que han logrado.',
        'Participas en licitaciones o propuestas y necesitas diferenciarte de la competencia.',
        'Quieres generar confianza con nuevos clientes antes de la primera conversación.',
        'Tu empresa tiene presencia activa en LinkedIn pero no estás usando el formato de video estratégicamente.',
      ],
      pricing: 'Inversión desde $3.500.000 COP.',
    },
    contact: {
      label: 'Habla Con Nosotros',
      h2: '¿Tienes un proyecto que debería comunicarse de manera más contundente?',
      body: 'Cuéntanos de tu empresa. Nuestro equipo comercial te contactará para hablar sobre cómo podemos convertir tu trabajo en tu mejor herramienta de ventas.',
      whatsappNote: 'O si prefieres, escríbenos directamente',
      whatsappBtn: 'Escríbenos por WhatsApp',
      formTitle: 'Déjanos tus datos',
      fields: { name: 'Nombre', company: 'Empresa', role: 'Cargo', email: 'Email', phone: 'Teléfono', optional: 'opcional' },
      submit: 'Enviar',
      success: '¡Gracias! Nuestro equipo comercial te contactará muy pronto.',
    },
    final: {
      h2: 'Cada proyecto que entregas sin convertirlo en un caso de estudio es una oportunidad de venta que se pierde.',
      subtext: 'Un video de caso de estudio es la herramienta de ventas B2B más subutilizada en la industria colombiana. Las empresas que lo usan, venden más rápido.',
      cta: 'Chatea con nosotros ahora',
      small: 'The Ideas Factory · Producción Audiovisual B2B · www.tifagency.com',
    },
    playbook: {
      title: 'Descarga el Case Study Playbook',
      subtitle: 'Historias que venden. Déjanos tus datos y te lo enviamos a tu correo.',
      submit: 'Descargar Playbook',
      success: '¡Listo! Revisa tu correo para descargar el Playbook.',
    },
  },
} as const

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  return (
    <div ref={ref} className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  )
}

export default function CaseStudyVideosPage() {
  return (
    <LanguageProvider initial="en">
      <CaseStudyVideosContent />
    </LanguageProvider>
  )
}

function CaseStudyVideosContent() {
  const langCtx = useLanguage()
  const lang: Lang = langCtx ? langCtx.lang : 'en'
  const [playbookOpen, setPlaybookOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [playbookSent, setPlaybookSent] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const t = content[lang]
  const wa = waLink(lang)

  const f = t.contact.fields

  return (
    <>
      <Navigation />

      <main className="pt-nav-height">
        {/* 1. HERO */}
        <section className="relative border-b border-gray-200 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)' }}
            />
            <div className="absolute inset-0 bg-white/70" />
            <span className="absolute bottom-4 right-4 text-gray-600 text-xs font-semibold z-[1]">[{t.hero.bg}]</span>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center">
            <p className="text-gray-500 text-sm mb-4">[Hero section]</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">{t.hero.h1}</h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">{t.hero.sub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-4 font-bold hover:opacity-80 transition-opacity">
                {t.hero.ctaPrimary}
              </a>
              <a href="#contact" className="inline-block border border-black text-black px-10 py-4 font-semibold hover:bg-gray-100 transition-colors">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        {/* 2. SOCIAL PROOF */}
        <section className="bg-white border-b border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 text-sm mb-4">[Section 01]</p>
            <p className="text-text-tertiary text-xs uppercase tracking-widest text-center mb-8">{t.social.label}</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {['Orica', 'ATT', 'RQ', 'TFUN'].map((logo) => (
                <div
                  key={logo}
                  className="w-40 h-24 border border-gray-200 bg-white flex items-center justify-center text-text-tertiary text-sm font-semibold"
                >
                  [{logo}]
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PROBLEM & INSIGHT */}
        <section className="bg-gray-50 border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 text-sm mb-4">[Section 02]</p>
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.problem.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-6">{t.problem.h2}</h2>
              <p className="text-text-secondary max-w-3xl leading-relaxed mb-12">{t.problem.body}</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.problem.cards.map((card) => (
                <div key={card.title} className="bg-white border border-gray-200 p-8">
                  <h3 className="text-text-primary font-bold uppercase text-sm tracking-wide mb-3">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="bg-white border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 text-sm mb-4">[Section 03]</p>
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.how.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-4">{t.how.h2}</h2>
              <p className="text-text-secondary max-w-3xl leading-relaxed mb-12">{t.how.subtext}</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {t.how.steps.map((step) => (
                <div key={step.n} className="border border-gray-200 p-8">
                  <p className="text-4xl font-bold text-text-tertiary mb-4">{step.n}</p>
                  <h3 className="text-text-primary font-bold uppercase text-sm tracking-wide mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
            <p className="text-text-primary text-lg md:text-xl font-semibold max-w-3xl border-l-4 border-black pl-6 mb-12">
              {t.how.note}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-4 font-bold hover:opacity-80 transition-opacity text-center">
                {t.how.ctaPrimary}
              </a>
              <button onClick={() => setPlaybookOpen(true)} className="inline-block border border-black text-black px-10 py-4 font-semibold hover:bg-gray-100 transition-colors text-center">
                {t.how.ctaSecondary}
              </button>
            </div>
          </div>
        </section>

        {/* 5. PROOF VIDEO */}
        <section className="bg-gray-50 border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 text-sm mb-4">[Section 04]</p>
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.proof.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-4">{t.proof.h2}</h2>
              <p className="text-text-secondary max-w-3xl leading-relaxed mb-12">{t.proof.body}</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.proof.videos.map((video) => (
                <button
                  key={video}
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="block w-full text-left cursor-pointer"
                  aria-label={`${lang === 'es' ? 'Ampliar video' : 'Expand video'}: ${video}`}
                >
                  <VideoPlaceholder height="h-56" label={video} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHO IS THIS FOR */}
        <section className="bg-white border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 text-sm mb-4">[Section 05]</p>
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.who.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-10">{t.who.h2}</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-text-primary font-semibold mb-4">{t.who.needIf}</p>
                <ul className="space-y-4">
                  {t.who.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                      <span className="text-text-primary font-bold mt-0.5">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-8 md:p-10 text-center">
                <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.who.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-text-primary mb-6">{t.who.pricing}</p>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 font-bold hover:opacity-80 transition-opacity">
                  {t.hero.ctaPrimary}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT FORM */}
        <section id="contact" className="bg-gray-50 border-b border-gray-200 py-20 md:py-28 scroll-mt-nav-height">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 text-sm mb-4">[Section 06]</p>
            <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.contact.label}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{t.contact.h2}</h2>
                <p className="text-text-secondary leading-relaxed mb-8">{t.contact.body}</p>
                <p className="text-text-primary font-semibold mb-3">{t.contact.whatsappNote}</p>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-block border border-black text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-colors">
                  {t.contact.whatsappBtn}
                </a>
              </div>
              <div className="bg-white border border-gray-200 p-8 md:p-10">
                <h3 className="text-xl font-bold text-text-primary mb-6">{t.contact.formTitle}</h3>
                {formSent ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">✓</div>
                    <p className="text-text-secondary">{t.contact.success}</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setFormSent(true)
                      setTimeout(() => setFormSent(false), 5000)
                    }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">{f.name} *</label>
                      <input required type="text" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">{f.company} *</label>
                      <input required type="text" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">
                        {f.role} <span className="text-text-tertiary font-normal">({f.optional})</span>
                      </label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">{f.email} *</label>
                      <input required type="email" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">
                        {f.phone} <span className="text-text-tertiary font-normal">({f.optional})</span>
                      </label>
                      <input type="tel" className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary" />
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-4 font-bold hover:opacity-80 transition-opacity">
                      {t.contact.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm mb-4">[Section 07]</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{t.final.h2}</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">{t.final.subtext}</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-12 py-5 font-bold hover:opacity-80 transition-opacity">
              {t.final.cta}
            </a>
            <p className="text-text-tertiary text-xs mt-12">{t.final.small}</p>
          </div>
        </section>
      </main>

      {/* Video lightbox */}
      {activeVideo && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
              aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
            >
              ✕
            </button>
            <VideoPlaceholder height="h-[70vh]" label={activeVideo} />
          </div>
        </div>
      )}

      {/* Playbook gated modal */}
      {playbookOpen && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4" onClick={() => { setPlaybookOpen(false); setPlaybookSent(false) }}>
          <div className="bg-white max-w-md w-full p-8 md:p-10 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setPlaybookOpen(false); setPlaybookSent(false) }}
              className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary text-xl"
              aria-label="Close"
            >
              ✕
            </button>
            {playbookSent ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-4">✓</div>
                <p className="text-text-secondary">{t.playbook.success}</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{t.playbook.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{t.playbook.subtitle}</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setPlaybookSent(true)
                  }}
                  className="space-y-4"
                >
                  <input required type="text" placeholder={`${f.name} *`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                  <input required type="text" placeholder={`${f.company} *`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                  <input required type="text" placeholder={`${f.role} *`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                  <input required type="email" placeholder={`${f.email} *`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                  <input type="tel" placeholder={f.phone} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                  <button type="submit" className="w-full bg-black text-white py-4 font-bold hover:opacity-80 transition-opacity">
                    {t.playbook.submit}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
