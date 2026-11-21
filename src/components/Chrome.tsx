import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Download, Moon, Palette, Sun } from 'lucide-react'

export const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`

const nav = [
  ['Products', '#products'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Credentials', '#credentials'],
] as const

export function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
    />
  )
}

type Theme = 'dark' | 'light'

const styles = [
  ['court', 'Courtside'],
  ['editorial', 'Editorial'],
  ['terminal', 'Terminal'],
  ['swiss', 'Swiss'],
] as const
type StyleId = (typeof styles)[number][0]

function useStyle() {
  const [style, setStyle] = useState<StyleId>(
    () => (document.documentElement.dataset.style as StyleId) || 'court',
  )
  useEffect(() => {
    document.documentElement.dataset.style = style
    localStorage.setItem('style', style)
  }, [style])
  return [style, setStyle] as const
}

function StyleSwitcher({ style, onChange }: { style: StyleId; onChange: (s: StyleId) => void }) {
  return (
    <label className="inline-flex h-9 shrink-0 items-center gap-1.5 sm:gap-2 border border-line px-2 sm:px-2.5 text-muted transition-colors focus-within:border-accent hover:border-accent hover:text-ink">
      <Palette size={15} aria-hidden />
      <span className="sr-only">Design style</span>
      <select
        value={style}
        onChange={(e) => onChange(e.target.value as StyleId)}
        className="cursor-pointer bg-transparent text-xs sm:text-sm font-medium text-ink outline-none [&>option]:bg-canvas [&>option]:text-ink"
      >
        {styles.map(([id, label]) => (
          <option key={id} value={id}>{label}</option>
        ))}
      </select>
    </label>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) || 'dark',
  )
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-muted transition-colors hover:border-accent hover:text-ink"
    >
      {theme === 'dark' ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
    </button>
  )
}

function Avatar() {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <img
      src={asset('images/profile.jpg')}
      alt="Vibhav Kumar"
      width={36}
      height={36}
      onError={() => setFailed(true)}
      className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full border border-line object-cover object-top"
    />
  )
}

export function Header() {
  const [style, setStyle] = useStyle()
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex h-16 max-w-300 items-center justify-between gap-2 px-4 sm:px-5 md:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2 sm:gap-3" aria-label="Vibhav Kumar — top">
          <Avatar />
          <span className="display text-xl sm:text-2xl text-ink">
            VK<span className="text-accent-ink">.</span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <StyleSwitcher style={style} onChange={setStyle} />
          {style === 'court' && <ThemeToggle />}
          <a
            href={asset('Vibhav_Kumar_Resume.pdf')}
            download
            className="inline-flex h-9 shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap border border-accent px-2.5 sm:px-4 text-xs sm:text-sm font-semibold text-accent-ink transition-colors hover:bg-accent hover:text-on-accent"
          >
            <Download size={14} aria-hidden />
            <span>
              <span className="hidden sm:inline">Download </span>CV
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
