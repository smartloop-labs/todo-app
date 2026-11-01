import './BrandIcon.css'

export default function BrandIcon({ size = 40 }) {
  const gradId = 'gitMoneyGrad'
  const coinId = 'gitMoneyCoin'
  return (
    <svg
      className="brand-icon"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Git Money"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="55%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id={coinId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="16" fill={`url(#${gradId})`} />

      {/* Two branches coming off the main commit */}
      <path
        d="M32 30 V40 a6 6 0 0 1 -6 6 H20"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 30 V40 a6 6 0 0 0 6 6 H44"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* End commit dots */}
      <circle cx="20" cy="46" r="4" fill="#fff" />
      <circle cx="44" cy="46" r="4" fill="#fff" />

      {/* Main commit = gold dollar coin */}
      <circle
        cx="32"
        cy="20"
        r="10"
        fill={`url(#${coinId})`}
        stroke="#fff"
        strokeWidth="2"
      />
      <text
        x="32"
        y="24.6"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        fontSize="13"
        fontWeight="900"
        fill="#7c3aed"
      >
        $
      </text>
    </svg>
  )
}
