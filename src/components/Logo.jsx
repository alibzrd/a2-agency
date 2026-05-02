export default function Logo({ size = 48, showAgency = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aGrad" x1="60" y1="20" x2="140" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ddeeff" />
            <stop offset="40%" stopColor="#c0d8f0" />
            <stop offset="100%" stopColor="#7aaed8" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c8e0f4" />
            <stop offset="100%" stopColor="#8ab8d8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Ring — open circle like the logo (gap at top-left and bottom-right) */}
        <path
          d="M 100 18
             A 82 82 0 1 1 34 151"
          stroke="url(#ringGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
        />
        <path
          d="M 166 49
             A 82 82 0 0 1 100 182"
          stroke="url(#ringGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Bold italic A */}
        <text
          x="100"
          y="158"
          textAnchor="middle"
          fontFamily="Montserrat, Arial Black, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="148"
          fill="url(#aGrad)"
          filter="url(#glow)"
          style={{ userSelect: 'none' }}
        >
          A
        </text>

        {/* Superscript 2 */}
        <text
          x="148"
          y="60"
          fontFamily="Montserrat, Arial, sans-serif"
          fontWeight="700"
          fontSize="40"
          fill="url(#aGrad)"
          filter="url(#glow)"
          style={{ userSelect: 'none' }}
        >
          2
        </text>
      </svg>

      {showAgency && (
        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 300,
          fontSize: `${size * 0.115}px`,
          color: '#c0d8f0',
          letterSpacing: `${size * 0.07}px`,
          textTransform: 'uppercase',
          paddingLeft: `${size * 0.07}px`,
          userSelect: 'none',
        }}>
          AGENCY
        </span>
      )}
    </div>
  )
}
