export default function Logo({ size = 48, withText = true, dark = false }) {
  const textColor = dark ? '#0f2236' : '#0f2236'
  const subColor = dark ? 'rgba(15,34,54,0.5)' : 'rgba(15,34,54,0.5)'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* A² SVG — style 3D cercle comme charte */}
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5baed4"/>
            <stop offset="50%" stopColor="#2a7fc0"/>
            <stop offset="100%" stopColor="#1a5a8a"/>
          </linearGradient>
          <linearGradient id="letter" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7ec4e4"/>
            <stop offset="100%" stopColor="#2a7fc0"/>
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#1a5a8a" floodOpacity="0.3"/>
          </filter>
        </defs>
        {/* Outer ring */}
        <circle cx="50" cy="50" r="46" stroke="url(#ring)" strokeWidth="3" fill="none" filter="url(#shadow)"/>
        {/* Inner ring subtle */}
        <circle cx="50" cy="50" r="36" stroke="url(#ring)" strokeWidth="1" strokeOpacity="0.3" fill="none"/>
        {/* Letter A */}
        <text x="14" y="70" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="52" fill="url(#letter)" filter="url(#shadow)">A</text>
        {/* Diagonal slash */}
        <line x1="38" y1="72" x2="68" y2="26" stroke="url(#ring)" strokeWidth="3.5" strokeLinecap="round" filter="url(#shadow)"/>
        {/* Superscript 2 */}
        <text x="64" y="38" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="20" fill="#2a7fc0" filter="url(#shadow)">2</text>
      </svg>

      {withText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{
            fontFamily: 'Montserrat, sans-serif', fontWeight: 900,
            fontSize: '1.2rem', color: textColor, letterSpacing: '0.02em',
          }}>
            A<sup style={{ color: '#2a7fc0', fontSize: '0.7rem', verticalAlign: 'super' }}>2</sup>
          </span>
          <span style={{
            fontFamily: 'Montserrat, sans-serif', fontWeight: 600,
            fontSize: '0.55rem', color: subColor,
            letterSpacing: '0.4em', textTransform: 'uppercase', marginTop: '1px',
          }}>
            Agency
          </span>
        </div>
      )}
    </div>
  )
}
