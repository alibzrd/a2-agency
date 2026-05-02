export default function Logo({ size = 40, withText = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* A² circular logo — fidèle au visuel fourni */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle
          cx="40"
          cy="40"
          r="37"
          stroke="url(#logoGrad)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Inner circle subtle */}
        <circle
          cx="40"
          cy="40"
          r="29"
          stroke="url(#logoGrad)"
          strokeWidth="1"
          strokeOpacity="0.3"
          fill="none"
        />
        {/* Letter A */}
        <text
          x="28"
          y="54"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontSize="34"
          fill="url(#logoGrad)"
          letterSpacing="-1"
        >
          A
        </text>
        {/* Diagonal slash */}
        <line
          x1="32"
          y1="56"
          x2="54"
          y2="24"
          stroke="url(#logoGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Superscript 2 */}
        <text
          x="52"
          y="34"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontSize="16"
          fill="#1e5fff"
        >
          2
        </text>
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4d8aff" />
            <stop offset="100%" stopColor="#1e5fff" />
          </linearGradient>
        </defs>
      </svg>

      {withText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: '18px',
              color: '#ffffff',
              letterSpacing: '0.05em',
            }}
          >
            A<sup style={{ color: '#1e5fff', fontSize: '11px' }}>2</sup>
          </span>
          <span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '9px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              marginTop: '2px',
            }}
          >
            Agency
          </span>
        </div>
      )}
    </div>
  )
}
