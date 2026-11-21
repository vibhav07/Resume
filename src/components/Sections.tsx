import { useEffect, useRef, useState, type RefObject } from 'react'
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Download, Link2, Mail, Terminal, Phone, ChevronRight } from 'lucide-react'
import {
  awards, education, interests, internships, leadership, products, profile, roles, skills, stats,
} from '../data'
import { CourtDivider, CourtFrame } from './Court'
import { Logo, heroLogos } from './Logos'
import { asset } from './Chrome'

export { CourtDivider }

const ease = [0.22, 1, 0.36, 1] as const

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease },
}

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <motion.div {...reveal} className="rule-top mb-12 pt-6 md:mb-16">
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">{title}</h2>
      {sub && <p className="mt-3 max-w-xl text-muted">{sub}</p>}
    </motion.div>
  )
}

function HeroBasketball({ targetRef }: { targetRef: RefObject<HTMLElement | null> }) {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })
  const rotate = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 20])
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 32])

  return (
    <motion.div
      aria-hidden="true"
      className="court-only relative mx-auto w-48 sm:w-56 md:w-72 lg:w-96 xl:w-[420px] shrink-0 select-none pointer-events-none"
      initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.92, rotate: -12 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.1, ease }}
    >
      <motion.div style={{ rotate, y }}>
        <img
          src={asset('images/basketball-dark.png')}
          alt=""
          aria-hidden="true"
          className="basketball-dark aspect-square w-full object-contain opacity-95"
        />
        <img
          src={asset('images/basketball-light.png')}
          alt=""
          aria-hidden="true"
          className="basketball-light aspect-square w-full object-contain opacity-95"
        />
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const link = 'inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink hover:underline'

  // Kinetic text animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVars = {
    hidden: { y: 32, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease },
    },
  }

  return (
    <section id="top" ref={heroRef} className="relative overflow-hidden">
      <div className="relative">
        <CourtFrame />

        <div className="relative mx-auto flex max-w-300 flex-col items-start justify-between gap-12 px-5 pb-16 pt-16 md:flex-row md:items-center md:gap-10 md:px-8 md:pb-24 md:pt-24">
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-2xl"
          >
            {/* Kinetic Title */}
            <motion.h1
              variants={itemVars}
              className="display text-ink leading-[0.88]"
              style={{ fontSize: 'var(--hero-size, clamp(4rem, 12vw, 8.5rem))' }}
            >
              Vibhav
              <br />
              Kumar<span className="text-accent-ink">.</span>
            </motion.h1>

            {/* Location & pedigree marker */}
            <motion.div variants={itemVars} className="mt-5 flex items-center gap-2.5">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <p className="mono text-xs uppercase tracking-[0.2em] text-muted">
                Noida, India · IIM Calcutta MBA (99.43 %ile)
              </p>
            </motion.div>

            {/* Positioning */}
            <motion.p
              variants={itemVars}
              className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl"
            >
              {profile.positioning}
            </motion.p>

            {/* Summary */}
            <motion.p
              variants={itemVars}
              className="mt-5 max-w-2xl text-base text-muted leading-relaxed"
            >
              Manager (Product &amp; Strategy) at Coforge with ~6 years of experience, owning Agentic AI enterprise products from 0 to 1 to 10. Supporting a $500M+ AI-Native Engineering business unit and a $100M+ asset-led delivery pipeline.
            </motion.p>

            {/* CTAs with hover physics */}
            <motion.div
              variants={itemVars}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <motion.a
                href={asset('Vibhav_Kumar_Resume.pdf')}
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-ink hover:text-canvas"
              >
                <Download size={16} aria-hidden /> Download Resume PDF
              </motion.a>
              <motion.a whileHover={{ x: 3 }} href={profile.linkedin} className={link} target="_blank" rel="noreferrer">
                <Link2 size={15} aria-hidden /> LinkedIn
              </motion.a>
              <motion.a whileHover={{ x: 3 }} href={profile.github} className={link} target="_blank" rel="noreferrer">
                <Terminal size={15} aria-hidden /> GitHub
              </motion.a>
              <motion.a whileHover={{ x: 3 }} href={`mailto:${profile.email}`} className={link}>
                <Mail size={15} aria-hidden /> Email
              </motion.a>
            </motion.div>
          </motion.div>

          <HeroBasketball targetRef={heroRef} />
        </div>
      </div>

      {/* Marquee Logo Strip */}
      <div className="border-y border-line py-8" aria-label="Companies">
        <div className="marquee" style={{ ['--marquee-duration' as string]: '40s' }}>
          <ul className="marquee-track">
            {[...heroLogos, ...heroLogos].map((id, i) => (
              <li key={`${id}-${i}`} aria-hidden={i >= heroLogos.length} className="marquee-item text-muted">
                <Logo id={id} className="h-6 w-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function CountUp({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.4, ease, onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

export function Impact() {
  return (
    <section aria-labelledby="box-score" className="mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28">
      <h2 id="box-score" className="sr-only">Impact at a glance</h2>
      <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col px-4 py-8 md:px-8 md:py-10 ${i % 2 === 1 ? 'border-l border-line' : ''} ${i > 0 ? 'md:border-l md:border-line' : ''} ${i > 1 ? 'border-t border-line md:border-t-0' : ''}`}
          >
            <dt className="mono order-2 mt-3 text-xs uppercase leading-relaxed tracking-[0.12em] text-muted">{s.label}</dt>
            <dd className="display text-5xl text-accent-ink md:text-7xl order-1 tabular-nums">
              <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function Products() {
  const [active, setActive] = useState(products[0].id)
  const p = products.find((x) => x.id === active)!
  return (
    <section id="products" className="mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28">
      <SectionHead title="Flagship products" sub="Four products owned end to end at Coforge." />
      <div role="tablist" aria-label="Flagship products" className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line">
        {products.map((x) => (
          <button
            key={x.id}
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={active === x.id}
            aria-controls="products-panel"
            onClick={() => setActive(x.id)}
            className={`relative pb-4 font-display text-xl font-bold uppercase tracking-wide transition-colors md:text-2xl ${active === x.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
          >
            {x.name}
            {active === x.id && (
              <motion.span layoutId="products-indicator" transition={{ duration: 0.35, ease }} className="absolute inset-x-0 -bottom-px h-0.5 bg-accent" />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={p.id}
        id="products-panel"
        role="tabpanel"
        aria-labelledby={`tab-${p.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
        className="grid gap-12 pt-10 md:grid-cols-[1.4fr_1fr] md:gap-16"
      >
        <div>
          <p className="mono text-xs uppercase tracking-[0.14em] text-accent-ink">{p.role} · {p.scope}</p>
          <p className="mt-4 max-w-xl text-lg text-ink">{p.summary}</p>
          <ul className="mt-6 space-y-3 text-muted">
            {p.outcomes.map((o) => (
              <li key={o} className="flex gap-3"><span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />{o}</li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Architecture and AI stack">
            {p.stack.map((t) => (
              <li key={t} className="mono border border-line px-2.5 py-1 text-xs text-muted">{t}</li>
            ))}
          </ul>
        </div>
        <dl className="grid grid-cols-1 content-start border-t border-line">
          {p.metrics.map((m) => (
            <div key={m.label} className="border-b border-line py-5">
              <dd className="display text-5xl text-accent-ink">{m.value}</dd>
              <dt className="mono mt-1 text-xs uppercase tracking-[0.12em] text-muted">{m.label}</dt>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}

/** Upgraded Experience section with winding serpentine pathway and bold numbered milestones */
export function Timeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28 overflow-hidden">
      <SectionHead
        title="Career Journey"
        sub="6 years owning product charters, AI-native platforms, and scaling enterprise delivery from 0 to 1 to 10."
      />

      <div className="relative mt-12">
        {/* Sinuous SVG timeline track inspired by reference design */}
        <div aria-hidden className="pointer-events-none absolute left-6 top-8 bottom-12 hidden w-12 md:block">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 40 1000" fill="none">
            {/* Base faint track */}
            <path
              d="M 20 0 C 35 150, 5 300, 20 450 C 35 600, 5 750, 20 900 L 20 1000"
              stroke="var(--color-line)"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
            {/* Accent lead segment */}
            <path
              d="M 20 0 C 35 150, 5 300, 20 450"
              stroke="var(--color-accent)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Roles Roadmap */}
        <div className="space-y-16 md:space-y-24">
          {roles.map((r, idx) => (
            <motion.article
              key={r.company}
              {...reveal}
              className="relative grid gap-6 md:grid-cols-[80px_1fr] md:gap-10 items-start"
            >
              {/* Bold Numbered Badge (inspired by reference image 01, 02, 03, 04) */}
              <div className="flex items-center gap-4 md:flex-col md:items-center">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-line bg-surface text-ink shadow-sm transition-transform hover:scale-105 group">
                  <span className="display text-xl text-ink font-bold">{r.num}</span>
                  {/* Outer accent ring on current active role */}
                  {idx === 0 && (
                    <span className="absolute -inset-1 rounded-full border border-accent" />
                  )}
                </div>
                <div className="hidden h-full w-0.5 bg-line md:block" />
              </div>

              {/* Card Content with bold architecture */}
              <div className="border border-line bg-surface p-6 md:p-8 transition-colors hover:border-accent/60 group">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
                  <div className="flex items-center gap-4">
                    <Logo id={r.company} className="h-6 w-auto text-muted group-hover:text-ink transition-colors" />
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
                        {r.title}
                      </h3>
                      <p className="mono text-xs text-accent-ink mt-0.5 font-medium">{r.tagline}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="mono inline-block border border-line bg-canvas px-3 py-1 text-xs text-muted">
                      {r.dates}
                    </span>
                    <p className="mono mt-1 text-xs text-muted">{r.location}</p>
                  </div>
                </div>

                {/* Highlight metric pills */}
                {r.highlights && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {r.highlights.map((h) => (
                      <span
                        key={h}
                        className="mono inline-flex items-center gap-1.5 border border-line bg-canvas/80 px-2.5 py-1 text-xs text-ink font-medium"
                      >
                        <ChevronRight size={11} className="text-accent-ink shrink-0" />
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Achievement Bullets */}
                <ul className="mt-6 space-y-3 text-muted">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}

          {/* Internships as Milestone 05 */}
          <motion.article
            {...reveal}
            className="relative grid gap-6 md:grid-cols-[80px_1fr] md:gap-10 items-start"
          >
            {/* Number 05 Badge */}
            <div className="flex items-center gap-4 md:flex-col md:items-center">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-line bg-surface text-ink shadow-sm">
                <span className="display text-xl text-ink font-bold">05</span>
              </div>
            </div>

            {/* Internships Box */}
            <div className="border border-line bg-surface p-6 md:p-8">
              <div className="border-b border-line pb-4">
                <p className="mono text-xs uppercase tracking-widest text-accent-ink font-semibold">
                  Foundational Impact &amp; Research
                </p>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink mt-1">
                  Internships &amp; Early Ventures
                </h3>
              </div>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                {internships.map((i) => (
                  <div key={i.company} className="border border-line/60 bg-canvas/40 p-5">
                    <div className="flex items-center justify-between gap-2">
                      <Logo id={i.company} className="h-5 w-auto text-muted" />
                      <span className="mono text-xs text-muted">{i.dates}</span>
                    </div>
                    <h4 className="mt-3 text-base font-semibold text-ink">{i.title}</h4>
                    <p className="mono text-xs text-accent-ink mt-0.5">{i.tagline} · {i.location}</p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{i.text}</p>
                    {i.highlights && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {i.highlights.map((h) => (
                          <span key={h} className="mono border border-line bg-canvas px-2 py-0.5 text-xs text-muted">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28">
      <SectionHead title="Skills" sub="Comprehensive stack across enterprise product strategy, commercial models, and agentic AI." />
      <div className="grid gap-12 md:grid-cols-3 md:gap-0">
        {skills.map((s, i) => (
          <motion.div key={s.title} {...reveal} className={`md:px-8 ${i === 0 ? 'md:pl-0' : 'md:border-l md:border-line'} ${i === 2 ? 'md:pr-0' : ''}`}>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">{s.title}</h3>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {s.items.map((it) => (
                <li key={it} className="py-2.5 text-muted">{it}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28">
      <SectionHead title="Education & awards" />
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <h3 className="label mb-6">Education</h3>
          <ul className="divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.school} className="py-6">
                <p className="mono text-xs text-muted">{e.dates} · {e.place}</p>
                <p className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-ink">{e.school}</p>
                <p className="text-muted">{e.degree}</p>
                <p className="mono mt-2 text-xs text-accent-ink">{e.note}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="label mb-6">Awards</h3>
          <ul className="divide-y divide-line border-y border-line">
            {awards.map((a) => (
              <li key={a.title} className="py-6">
                <p className="font-display text-2xl font-bold uppercase tracking-wide text-ink">{a.title}</p>
                <p className="mono text-xs text-accent-ink">{a.org}</p>
                <p className="mt-2 text-muted">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-20 border-t border-line pt-6">
        <h3 className="label">Leadership &amp; interests</h3>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {leadership.map((o) => (
            <div key={o.title}>
              <p className="font-display text-xl font-bold uppercase tracking-wide text-ink">{o.title}</p>
              <p className="mono text-xs text-accent-ink">{o.org}</p>
              <p className="mt-2 text-muted">{o.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-muted">
          Interests: {interests.join(' · ')}
        </p>
      </div>
    </section>
  )
}

export function Footer() {
  const link = 'inline-flex items-center gap-2 text-muted transition-colors hover:text-ink'
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-300 gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <p className="label">Contact</p>
          <p className="display mt-3 text-5xl text-ink md:text-7xl">Let's talk<span className="text-accent-ink">.</span></p>
        </div>
        <ul className="space-y-3 self-end">
          <li><a className={link} href={`mailto:${profile.email}`}><Mail size={15} aria-hidden />{profile.email}</a></li>
          <li><a className={link} href="tel:+918004885992"><Phone size={15} aria-hidden />{profile.phone}</a></li>
          <li><a className={link} href={profile.linkedin} target="_blank" rel="noreferrer"><Link2 size={15} aria-hidden />{profile.linkedinLabel}<ArrowUpRight size={13} aria-hidden /></a></li>
          <li><a className={link} href={profile.github} target="_blank" rel="noreferrer"><Terminal size={15} aria-hidden />{profile.githubLabel}<ArrowUpRight size={13} aria-hidden /></a></li>
        </ul>
      </div>
      <div className="border-t border-line py-6 text-center">
        <p className="mono text-xs text-muted">© {new Date().getFullYear()} Vibhav Kumar · Noida, India</p>
      </div>
    </footer>
  )
}
