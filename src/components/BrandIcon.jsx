import './BrandIcon.css'

export default function BrandIcon({ size = 40 }) {
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
        <linearGradient id="gitMoneyBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="55%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <radialGradient id="gitMoneyCoin" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="55%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
        <linearGradient id="gitMoneyCoinFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="16" fill="url(#gitMoneyBg)" />

      {/* Git branches leading out to commit dots */}
      <path
        d="M16 56 V46 a6 6 0 0 1 6-6 H26"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 56 V46 a6 6 0 0 0-6-6 H38"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="56" r="3.5" fill="#fff" />
      <circle cx="48" cy="56" r="3.5" fill="#fff" />

      {/* Big bold gold coin (the main commit) */}
      <circle cx="32" cy="28" r="20" fill="url(#gitMoneyCoin)" stroke="#92400e" strokeWidth="1.2" />
      <circle cx="32" cy="28" r="16" fill="url(#gitMoneyCoinFace)" />

      {/* Bold $ */}
      <text
        x="32"
        y="36"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', ui-serif, serif"
        fontSize="22"
        fontWeight="900"
        fill="#7c2d12"
      >
        $
      </text>
    </svg>
  )
}
