export type LogoId = 'coforge' | 'accenture' | 'amazon' | 'omsoftech' | 'mahindra' | 'volopay'

type Props = { id: LogoId; className?: string }

const text = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 } as const

const base = import.meta.env.BASE_URL

/** Real logos supplied by Vibhav; rendered monochrome via CSS (see .logo-img). */
const images: Partial<Record<LogoId, { src: string; alt: string; h: string }>> = {
  coforge: { src: 'coforge.png', alt: 'Coforge', h: 'h-6' },
  accenture: { src: 'accenture.png', alt: 'Accenture', h: 'h-7' },
  amazon: { src: 'amazon.png', alt: 'Amazon', h: 'h-7' },
  mahindra: { src: 'mahindra.png', alt: 'Mahindra & Mahindra', h: 'h-7' },
}

export function Logo({ id, className = '' }: Props) {
  const img = images[id]
  if (img) {
    // Height is fixed per logo so the strip stays optically even.
    return <img src={`${base}images/logos/${img.src}`} alt={img.alt} className={`logo-img ${img.h} w-auto`} />
  }
  const common = { className, role: 'img' as const, fill: 'currentColor', height: 28 }
  if (id === 'omsoftech') {
    return (
      <svg {...common} viewBox="0 0 140 28" width={140} aria-label="Om Softech">
        <circle cx="12" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="14" r="2.5" />
        <text x="28" y="22" fontSize="24" style={text} letterSpacing="1">OM SOFTECH</text>
      </svg>
    )
  }
  return (
    <svg {...common} viewBox="0 0 110 28" width={110} aria-label="Volopay">
      <path d="M0 6 L9 22 L18 6" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <text x="26" y="22" fontSize="24" style={{ ...text, fontWeight: 700 }} letterSpacing="1">VOLOPAY</text>
    </svg>
  )
}

export const heroLogos: LogoId[] = ['coforge', 'accenture', 'amazon', 'omsoftech', 'mahindra', 'volopay']
