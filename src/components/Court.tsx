import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

/** Hairline court-arc section divider. */
export function CourtDivider() {
  return (
    <div aria-hidden className="court-only court-divider-mask mx-auto max-w-300 px-5 md:px-8">
      <svg viewBox="0 0 1200 40" className="h-10 w-full opacity-[0.22]" fill="none" preserveAspectRatio="none" strokeWidth="1">
        <path d="M0 39.5 H430" stroke="var(--court-b)" />
        <path d="M430 39.5 A170 38 0 0 1 770 39.5" stroke="var(--court-a)" />
        <path d="M770 39.5 H1200" stroke="var(--court-b)" />
      </svg>
    </div>
  )
}

/** Full horizontal court, framed with animated line draw on landing. */
export function CourtFrame() {
  const drawTransition = (delay: number) => ({
    duration: 1.5,
    delay,
    ease,
  })

  const half = (keyPrefix: string, delayBase: number) => (
    <g>
      <motion.path
        key={`${keyPrefix}-3pt`}
        d="M0 30 H142 A237.5 237.5 0 0 1 142 470 H0"
        stroke="var(--court-a)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(delayBase + 0.2)}
      />
      <motion.rect
        key={`${keyPrefix}-key`}
        x="0"
        y="170"
        width="190"
        height="160"
        stroke="var(--court-b)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(delayBase + 0.35)}
      />
      <motion.path
        key={`${keyPrefix}-arc1`}
        d="M190 190 A60 60 0 0 1 190 310"
        stroke="var(--court-b)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(delayBase + 0.5)}
      />
      <motion.path
        key={`${keyPrefix}-arc2`}
        d="M190 190 A60 60 0 0 0 190 310"
        stroke="var(--court-b)"
        strokeDasharray="6 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(delayBase + 0.55)}
      />
      <motion.path
        key={`${keyPrefix}-backboard`}
        d="M40 220 V280"
        stroke="var(--court-b)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(delayBase + 0.6)}
      />
      <motion.circle
        key={`${keyPrefix}-hoop`}
        cx="52.5"
        cy="250"
        r="9"
        stroke="var(--court-a)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={drawTransition(delayBase + 0.65)}
      />
    </g>
  )

  return (
    <div aria-hidden className="court-only court-fade-mask pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 940 500"
        className="absolute inset-0 hidden h-full w-full md:block"
        style={{ opacity: 'var(--court-opacity, 0.16)' }}
        fill="none"
        strokeWidth="1.5"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M470 0 V500"
          stroke="var(--court-b)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={drawTransition(0.1)}
        />
        <motion.circle
          cx="470"
          cy="250"
          r="60"
          stroke="var(--court-a)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={drawTransition(0.25)}
        />
        {half('left', 0.3)}
        <g transform="translate(940 0) scale(-1 1)">{half('right', 0.4)}</g>
      </svg>
    </div>
  )
}
