'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { MediaPlaceholder } from '@/components/SectionComponents'
import { LanguageProvider, useLanguage, type Lang } from '@/components/LanguageContext'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const WHATSAPP_NUMBER = '573146926758'
const waLink = (lang: Lang) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lang === 'es'
      ? 'Hola, quiero una auditoría gratuita de nuestro sitio web (WordPress)'
      : "Hi, I'd like a free audit of our website (WordPress)"
  )}`

const content = {
  en: {
    hero: {
      label: 'Web Partnership',
      h1: 'We become the web team you never had to hire.',
      sub: "Your website is live — but stuck. It looks dated, nobody on your team knows how to update it, and every small change turns into a project. We step in as an extension of your team: we look after your site, fix what's holding it back, and keep making it better. Starting with quick wins you'll see in days, not months.",
      ctaPrimary: 'Get a free website audit',
      ctaSecondary: 'See what we fix first',
      tagline: 'An on-call web team — without the headcount. WordPress care, quick wins, real ownership.',
    },
    social: { label: 'WordPress sites we care for like our own' },
    problem: {
      label: 'The Problem',
      h2: "The real problem isn't your website. It's that no one owns it.",
      body: "Most B2B companies don't have a website problem — they have an ownership gap. The site exists, but no one is truly responsible for it. Plugins go stale, security slips, the design ages, and the one person who knew how to edit it left two years ago. Requests pile up, freelancers go quiet, and your site slowly starts working against you. You don't need another tool or another redesign — you need a team that picks it up and runs with it.",
      table: {
        headers: ['On your own today', 'With us on your team', 'What you gain'],
        rows: [
          ['Nobody knows how to update it', 'A team that knows your site inside out', 'Changes done in hours, not months'],
          ['Stale plugins, no backups, security gaps', 'Proactive maintenance, backups & updates', 'Peace of mind — no more 2am surprises'],
          ['Looks dated, breaks on phones', 'Continuous fixes and a sharper, modern look', 'A site you’re proud to put in front of clients'],
        ],
      },
    },
    quickWins: {
      label: 'Where we start',
      h2: 'Small fixes. Big impact. Visible in days.',
      subtext: "We don't ask you to bet on a big project up front. We start with quick, low-risk wins you can see right away — the fastest way to feel what having us on your team is actually like.",
      items: [
        { title: 'Visual quick wins', text: 'Spacing, fonts, broken images, tired copy and buttons — the details that make a site feel cheap, cleaned up fast.' },
        { title: 'Mobile that works', text: 'Fix the layouts that fall apart on phones and tablets, where most of your visitors and buyers actually are.' },
        { title: 'Faster pages', text: 'Compress images, cut the bloat, and fix the obvious things dragging your load times down.' },
        { title: 'Updates without the fear', text: 'Plugins, themes and core updated safely — always with a backup first — so nothing ever breaks on your watch.' },
      ],
    },
    scope: {
      label: 'The Partnership',
      h2: 'Think of us as your in-house web team.',
      subtext: 'Start with a single quick fix. Grow into a partner who quietly owns the whole thing — so your team can stop worrying about the website and get back to the business.',
      groups: [
        {
          title: 'Improve what exists',
          items: ['High-impact quick fixes', 'Refresh tired sections', 'Mobile & responsive cleanup', 'Faster, lighter pages'],
        },
        {
          title: 'Maintenance & peace of mind',
          items: ['Scheduled backups', 'Security monitoring & hardening', 'Plugin, theme & core updates', 'Uptime & broken-link checks'],
        },
        {
          title: 'Grow & empower your team',
          items: ['Blog & content partnership', 'New pages & landing pages', 'Hands-on training for your team', 'On-call support when you need a change'],
        },
      ],
    },
    how: {
      label: 'How it works',
      h2: 'A partnership that starts with zero risk.',
      subtext: "You give us access, we prove our value fast, and the relationship grows from there. No big upfront commitment — just results you can see.",
      steps: [
        { n: '01', title: 'Free audit', text: 'We review your WordPress site and send back a short, plain-language report: what’s broken, what’s risky, and the quick wins we’d tackle first. Yours to keep, no strings attached.' },
        { n: '02', title: 'Quick wins', text: 'We fix the easy, high-impact things first. You see real improvements in days and feel what it’s like to have us on the team — before committing to anything ongoing.' },
        { n: '03', title: 'Your web team', text: 'Once the trust is there, we take over maintenance, content and improvements on a simple monthly plan. Your website finally has an owner — and your team has one less thing to worry about.' },
      ],
    },
    who: {
      label: 'Who this is for',
      h2: 'For teams that own a WordPress site — but not a webmaster.',
      needIf: 'This is for you if:',
      bullets: [
        'You have a WordPress site that hasn’t meaningfully changed in a year or more.',
        'Nobody on your team feels confident editing it — so requests just pile up.',
        'You lose sleep over backups, security, or a plugin update taking the site down.',
        'It looks dated or breaks on mobile, and that quietly costs you in front of clients.',
        'You want a dependable partner on your side — not another big redesign project.',
      ],
    },
    plans: {
      label: 'Plans',
      h2: 'Start small. Scale as you trust us.',
      tiers: [
        { name: 'Website Audit', price: 'Free', text: 'A clear, honest report of what’s broken, what’s risky, and the quick wins worth doing first. No commitment.', cta: 'Request audit', highlight: false },
        { name: 'Quick-Win Sprint', price: 'One-time', text: 'A focused burst of high-impact fixes that make your site look and feel new — fast.', cta: 'Start a sprint', highlight: true },
        { name: 'Partner Plan', price: 'Monthly', text: 'Your on-call web team: maintenance, backups, security, content and support, every month.', cta: 'Become a partner', highlight: false },
      ],
    },
    faqs: {
      label: 'Common questions',
      h2: 'Questions we hear a lot.',
      items: [
        { q: 'Do you only work with WordPress?', a: 'WordPress is our home turf — it’s where we add the most value, fastest. On another platform? Tell us, and we’ll give you an honest answer on whether we’re the right fit.' },
        { q: 'Do we have to sign a long contract?', a: 'Never. We start with a free audit and quick wins so you feel the value first. The monthly Partner Plan is optional and month-to-month — you stay because it works, not because you’re locked in.' },
        { q: 'Will you break our site?', a: 'We take a full backup before touching anything and test every update carefully. Our whole job is to take that fear off your plate — not add to it.' },
        { q: 'Can you train our team?', a: 'Absolutely. Part of being your partner is teaching your team to make everyday edits with confidence — so you’re empowered, never held hostage by an agency.' },
        { q: 'What access do you need?', a: 'Admin access to your WordPress site and hosting. We follow secure practices and are happy to sign an NDA before we start.' },
      ],
    },
    contact: {
      label: 'Get started',
      headline: 'Let’s start with a free audit.',
      copy: 'Tell us about your site and we’ll send back a short report with the quick wins we’d tackle first — no cost, no commitment, no pressure. Just a clear first step.',
      cta: 'Request my free audit',
      whatsapp: 'Chat on WhatsApp',
      fields: { name: 'Name', company: 'Company', email: 'Email', url: 'Website URL', message: 'What bothers you most about your site?', optional: 'optional' },
      success: 'Thanks! We’ll review your site and come back to you shortly with your quick wins.',
    },
  },
  es: {
    hero: {
      label: 'Web Partnership',
      h1: 'Nos volvemos el equipo web que nunca tuviste que contratar.',
      sub: 'Tu sitio está en línea — pero estancado. Se ve anticuado, nadie en tu equipo sabe actualizarlo y cada cambio pequeño se vuelve un proyecto. Entramos como una extensión de tu equipo: cuidamos tu sitio, arreglamos lo que lo frena y lo seguimos mejorando. Empezando por quick wins que verás en días, no en meses.',
      ctaPrimary: 'Solicita una auditoría gratis',
      ctaSecondary: 'Mira qué arreglamos primero',
      tagline: 'Un equipo web a tu disposición — sin sumar headcount. Cuidado de WordPress, quick wins y verdadera apropiación.',
    },
    social: { label: 'Sitios WordPress que cuidamos como propios' },
    problem: {
      label: 'El Problema',
      h2: 'El problema real no es tu sitio web. Es que nadie se apropia de él.',
      body: 'La mayoría de las empresas B2B no tienen un problema de sitio web — tienen un vacío de responsabilidad. El sitio existe, pero nadie está realmente a cargo. Los plugins se desactualizan, la seguridad se descuida, el diseño envejece, y la única persona que sabía editarlo se fue hace dos años. Las solicitudes se acumulan, los freelancers desaparecen, y tu sitio empieza a jugar en tu contra. No necesitas otra herramienta ni otro rediseño — necesitas un equipo que lo tome y lo saque adelante.',
      table: {
        headers: ['Hoy, por tu cuenta', 'Con nosotros en tu equipo', 'Lo que ganas'],
        rows: [
          ['Nadie sabe actualizarlo', 'Un equipo que conoce tu sitio al detalle', 'Cambios en horas, no en meses'],
          ['Plugins viejos, sin backups, huecos de seguridad', 'Mantenimiento proactivo, backups y actualizaciones', 'Tranquilidad — sin sustos a las 2am'],
          ['Se ve anticuado y se rompe en celulares', 'Mejoras continuas y un look más moderno', 'Un sitio que con orgullo le muestras a tus clientes'],
        ],
      },
    },
    quickWins: {
      label: 'Por dónde empezamos',
      h2: 'Arreglos pequeños. Gran impacto. Visibles en días.',
      subtext: 'No te pedimos apostar por un gran proyecto de entrada. Empezamos con mejoras rápidas y de bajo riesgo que se ven de inmediato — la forma más rápida de sentir lo que es tenernos en tu equipo.',
      items: [
        { title: 'Quick wins visuales', text: 'Espaciados, tipografías, imágenes rotas, textos y botones cansados — los detalles que hacen ver barato un sitio, resueltos rápido.' },
        { title: 'Mobile que funciona', text: 'Arreglamos los diseños que se caen en celulares y tablets, donde está la mayoría de tus visitantes y compradores.' },
        { title: 'Páginas más rápidas', text: 'Comprimimos imágenes, eliminamos el exceso y corregimos lo evidente que arrastra tus tiempos de carga.' },
        { title: 'Actualizar sin miedo', text: 'Plugins, temas y core actualizados de forma segura — siempre con backup previo — para que nada se rompa bajo tu responsabilidad.' },
      ],
    },
    scope: {
      label: 'El Partnership',
      h2: 'Piensa en nosotros como tu equipo web interno.',
      subtext: 'Empieza con un solo arreglo rápido. Crece hacia un partner que se apropia de todo en silencio — para que tu equipo deje de preocuparse por el sitio y vuelva al negocio.',
      groups: [
        {
          title: 'Mejorar lo que existe',
          items: ['Quick fixes de alto impacto', 'Refrescar secciones cansadas', 'Limpieza responsive y mobile', 'Páginas más rápidas y livianas'],
        },
        {
          title: 'Mantenimiento y tranquilidad',
          items: ['Backups programados', 'Monitoreo y refuerzo de seguridad', 'Actualización de plugins, temas y core', 'Chequeos de uptime y enlaces rotos'],
        },
        {
          title: 'Crecer y empoderar a tu equipo',
          items: ['Partner de contenido para el blog', 'Nuevas páginas y landing pages', 'Capacitación práctica para tu equipo', 'Soporte a demanda cuando necesites un cambio'],
        },
      ],
    },
    how: {
      label: 'Cómo funciona',
      h2: 'Una alianza que empieza sin ningún riesgo.',
      subtext: 'Nos das acceso, demostramos nuestro valor rápido, y la relación crece desde ahí. Sin grandes compromisos por adelantado — solo resultados que puedes ver.',
      steps: [
        { n: '01', title: 'Auditoría gratis', text: 'Revisamos tu sitio WordPress y te enviamos un reporte corto y en lenguaje claro: qué está roto, qué es riesgoso y los quick wins que atacaríamos primero. Tuyo para quedártelo, sin compromiso.' },
        { n: '02', title: 'Quick wins', text: 'Arreglamos primero lo fácil y de alto impacto. Ves mejoras reales en días y sientes lo que es tenernos en el equipo — antes de comprometerte con algo continuo.' },
        { n: '03', title: 'Tu equipo web', text: 'Cuando la confianza está, asumimos el mantenimiento, el contenido y las mejoras con un plan mensual simple. Tu sitio por fin tiene un dueño — y tu equipo, una preocupación menos.' },
      ],
    },
    who: {
      label: 'Para quién es esto',
      h2: 'Para equipos con un sitio WordPress — pero sin un webmaster.',
      needIf: 'Esto es para ti si:',
      bullets: [
        'Tienes un sitio WordPress que no cambia de forma significativa hace un año o más.',
        'Nadie en tu equipo se siente seguro editándolo — y las solicitudes se acumulan.',
        'Pierdes el sueño por los backups, la seguridad o que una actualización tumbe el sitio.',
        'Se ve anticuado o se rompe en mobile, y eso te cuesta en silencio frente a tus clientes.',
        'Quieres un partner confiable de tu lado — no otro gran proyecto de rediseño.',
      ],
    },
    plans: {
      label: 'Planes',
      h2: 'Empieza pequeño. Escala a medida que confías en nosotros.',
      tiers: [
        { name: 'Auditoría Web', price: 'Gratis', text: 'Un reporte claro y honesto de qué está roto, qué es riesgoso y los quick wins que vale la pena hacer primero. Sin compromiso.', cta: 'Solicitar auditoría', highlight: false },
        { name: 'Sprint de Quick Wins', price: 'Pago único', text: 'Una ráfaga enfocada de arreglos de alto impacto que hacen ver y sentir tu sitio como nuevo — rápido.', cta: 'Iniciar un sprint', highlight: true },
        { name: 'Plan Partner', price: 'Mensual', text: 'Tu equipo web a la mano: mantenimiento, backups, seguridad, contenido y soporte, cada mes.', cta: 'Volverse partner', highlight: false },
      ],
    },
    faqs: {
      label: 'Preguntas frecuentes',
      h2: 'Preguntas que escuchamos seguido.',
      items: [
        { q: '¿Solo trabajan con WordPress?', a: 'WordPress es nuestra cancha — es donde aportamos más valor, más rápido. ¿Estás en otra plataforma? Cuéntanos y te daremos una respuesta honesta sobre si somos el partner indicado.' },
        { q: '¿Tenemos que firmar un contrato largo?', a: 'Nunca. Empezamos con una auditoría gratis y quick wins para que sientas el valor primero. El Plan Partner mensual es opcional y mes a mes — te quedas porque funciona, no porque estés amarrado.' },
        { q: '¿Van a romper nuestro sitio?', a: 'Tomamos un backup completo antes de tocar nada y probamos cada actualización con cuidado. Nuestro trabajo es quitarte ese miedo — no aumentarlo.' },
        { q: '¿Pueden capacitar a nuestro equipo?', a: 'Claro. Parte de ser tu partner es enseñarle a tu equipo a hacer ediciones cotidianas con confianza — para que estés empoderado, nunca secuestrado por una agencia.' },
        { q: '¿Qué accesos necesitan?', a: 'Acceso de administrador a tu sitio WordPress y al hosting. Seguimos prácticas seguras y con gusto firmamos un NDA antes de empezar.' },
      ],
    },
    contact: {
      label: 'Empecemos',
      headline: 'Empecemos con una auditoría gratis.',
      copy: 'Cuéntanos sobre tu sitio y te devolvemos un reporte corto con los quick wins que atacaríamos primero — sin costo, sin compromiso, sin presión. Solo un primer paso claro.',
      cta: 'Solicitar mi auditoría gratis',
      whatsapp: 'Escríbenos por WhatsApp',
      fields: { name: 'Nombre', company: 'Empresa', email: 'Email', url: 'URL del sitio', message: '¿Qué es lo que más te molesta de tu sitio?', optional: 'opcional' },
      success: '¡Gracias! Revisaremos tu sitio y te contactamos muy pronto con tus quick wins.',
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

export default function WebPartnershipPage() {
  return (
    <LanguageProvider initial="en">
      <WebPartnershipContent />
    </LanguageProvider>
  )
}

function WebPartnershipContent() {
  const langCtx = useLanguage()
  const lang: Lang = langCtx ? langCtx.lang : 'en'
  const [sent, setSent] = useState(false)
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
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
            <p className="text-text-tertiary text-xs uppercase tracking-widest mb-4">{t.hero.label}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">{t.hero.h1}</h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">{t.hero.sub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#audit" className="inline-block bg-black text-white px-10 py-4 font-bold hover:opacity-80 transition-opacity">
                {t.hero.ctaPrimary}
              </a>
              <a href="#quick-wins" className="inline-block border border-text-primary text-text-primary px-10 py-4 font-semibold hover:bg-hover transition-colors">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <p className="text-text-tertiary text-xs mt-6">{t.hero.tagline}</p>
          </div>
        </section>

        {/* 2. SOCIAL PROOF */}
        <section className="bg-white border-b border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-text-tertiary text-xs uppercase tracking-widest text-center mb-8">{t.social.label}</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {['Client', 'Client', 'Client', 'Client'].map((logo, i) => (
                <div
                  key={i}
                  className="w-40 h-20 border border-gray-200 bg-white flex items-center justify-center text-text-tertiary text-sm font-semibold"
                >
                  [{logo}]
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PROBLEM */}
        <section className="bg-gray-50 border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.problem.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-6">{t.problem.h2}</h2>
              <p className="text-text-secondary max-w-3xl leading-relaxed mb-12">{t.problem.body}</p>
            </Reveal>
            <div className="overflow-x-auto border border-gray-300 bg-white">
              <table className="w-full border-collapse text-left min-w-[640px]">
                <thead>
                  <tr>
                    {t.problem.table.headers.map((header, idx) => (
                      <th
                        key={header}
                        className={`bg-gray-100 px-6 py-4 text-text-primary font-bold text-xs uppercase tracking-widest ${
                          idx > 0 ? 'border-l border-gray-300' : ''
                        } border-b border-gray-300`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.problem.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-gray-50 transition-colors">
                      {row.map((cell, colIdx) => (
                        <td
                          key={colIdx}
                          className={`px-6 py-5 align-top text-sm leading-relaxed ${
                            colIdx > 0 ? 'border-l border-gray-300' : ''
                          } ${rowIdx < t.problem.table.rows.length - 1 ? 'border-b border-gray-300' : ''} ${
                            colIdx === 2 ? 'text-text-primary font-medium' : 'text-text-secondary'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. QUICK WINS */}
        <section id="quick-wins" className="bg-white border-b border-gray-200 py-20 md:py-28 scroll-mt-nav-height">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.quickWins.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-4">{t.quickWins.h2}</h2>
              <p className="text-text-secondary max-w-3xl leading-relaxed mb-12">{t.quickWins.subtext}</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.quickWins.items.map((item) => (
                  <div key={item.title} className="border border-gray-200 p-6">
                    <h3 className="text-text-primary font-bold text-sm tracking-wide mb-3">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <MediaPlaceholder height="h-full min-h-[320px]" label="Before / After — homepage refresh" />
            </div>
          </div>
        </section>

        {/* 5. PARTNERSHIP SCOPE */}
        <section className="bg-gray-50 border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.scope.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-4">{t.scope.h2}</h2>
              <p className="text-text-secondary max-w-3xl leading-relaxed mb-12">{t.scope.subtext}</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.scope.groups.map((group) => (
                <div key={group.title} className="border border-gray-200 bg-white p-8">
                  <h3 className="text-text-primary font-bold mb-5">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                        <span className="text-text-primary font-bold mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. HOW IT WORKS */}
        <section className="bg-white border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.how.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-4">{t.how.h2}</h2>
              <p className="text-text-secondary max-w-3xl leading-relaxed mb-12">{t.how.subtext}</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.how.steps.map((step) => (
                <div key={step.n} className="border border-gray-200 p-8">
                  <p className="text-4xl font-bold text-text-tertiary mb-4">{step.n}</p>
                  <h3 className="text-text-primary font-bold uppercase text-sm tracking-wide mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WHO IS THIS FOR */}
        <section className="bg-gray-50 border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="bg-white border border-gray-200 p-8 md:p-10 text-center">
                <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.hero.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-text-primary mb-6">{t.hero.ctaPrimary}</p>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 font-bold hover:opacity-80 transition-opacity">
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PLANS */}
        <section className="bg-white border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.plans.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary max-w-3xl mb-12">{t.plans.h2}</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.plans.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-8 border flex flex-col ${
                    tier.highlight ? 'border-black border-2 bg-gray-50' : 'border-gray-200 bg-white'
                  }`}
                >
                  <h3 className="text-text-primary font-bold text-lg mb-1">{tier.name}</h3>
                  <p className="text-2xl font-bold text-text-primary mb-4">{tier.price}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-1">{tier.text}</p>
                  <a
                    href="#audit"
                    className={`inline-block text-center px-6 py-3 font-semibold transition-all ${
                      tier.highlight
                        ? 'bg-black text-white hover:opacity-80'
                        : 'border border-text-primary text-text-primary hover:bg-hover'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="bg-gray-50 border-b border-gray-200 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3 text-center">{t.faqs.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">{t.faqs.h2}</h2>
            <div className="space-y-4">
              {t.faqs.items.map((faq, idx) => (
                <details key={idx} className="border border-gray-200 p-6 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                  <summary className="font-bold text-text-primary flex justify-between items-center">
                    {faq.q}
                    <span className="text-lg">+</span>
                  </summary>
                  <p className="text-text-secondary text-sm mt-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CONTACT / AUDIT FORM */}
        <section id="audit" className="bg-white py-20 md:py-28 scroll-mt-nav-height">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col justify-start">
                <p className="text-text-tertiary text-xs uppercase tracking-widest mb-3">{t.contact.label}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{t.contact.headline}</h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">{t.contact.copy}</p>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-block border border-text-primary text-text-primary px-10 py-4 font-semibold hover:bg-hover transition-colors text-center self-start">
                  {t.contact.whatsapp}
                </a>
              </div>
              <div className="border border-gray-200 p-8 bg-gray-50">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">✓</div>
                    <p className="text-text-secondary">{t.contact.success}</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSent(true)
                    }}
                    className="space-y-4"
                  >
                    <input required type="text" placeholder={`${f.name} *`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                    <input required type="text" placeholder={`${f.company} *`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                    <input required type="email" placeholder={`${f.email} *`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                    <input required type="url" placeholder={`${f.url} *`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm" />
                    <textarea rows={4} placeholder={`${f.message} (${f.optional})`} className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-text-primary text-sm resize-none" />
                    <button type="submit" className="w-full bg-black text-white py-4 font-bold hover:opacity-80 transition-opacity">
                      {t.contact.cta}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
