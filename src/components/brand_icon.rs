use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct BrandIconProps {
    #[prop_or(40)]
    pub size: u32,
}

#[function_component(BrandIcon)]
pub fn brand_icon(props: &BrandIconProps) -> Html {
    let size_str = props.size.to_string();
    html! {
        <svg
            class="brand-icon"
            width={size_str.clone()}
            height={size_str}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Git Money"
        >
            <defs>
                <linearGradient id="git-money-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#6366f1" />
                    <stop offset="55%" stop-color="#a855f7" />
                    <stop offset="100%" stop-color="#ec4899" />
                </linearGradient>
                <radialGradient id="git-money-coin" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stop-color="#fef9c3" />
                    <stop offset="55%" stop-color="#fbbf24" />
                    <stop offset="100%" stop-color="#b45309" />
                </radialGradient>
                <linearGradient id="git-money-coin-face" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#fde68a" />
                    <stop offset="100%" stop-color="#f59e0b" />
                </linearGradient>
            </defs>

            <rect width="64" height="64" rx="16" fill="url(#git-money-bg)" />

            <path
                d="M16 56 V46 a6 6 0 0 1 6-6 H26"
                stroke="rgba(255,255,255,0.9)"
                stroke-width="2.5"
                stroke-linecap="round"
                fill="none"
            />
            <path
                d="M48 56 V46 a6 6 0 0 0-6-6 H38"
                stroke="rgba(255,255,255,0.9)"
                stroke-width="2.5"
                stroke-linecap="round"
                fill="none"
            />
            <circle cx="16" cy="56" r="3.5" fill="#fff" />
            <circle cx="48" cy="56" r="3.5" fill="#fff" />

            <circle cx="32" cy="28" r="20" fill="url(#git-money-coin)" stroke="#92400e" stroke-width="1.2" />
            <circle cx="32" cy="28" r="16" fill="url(#git-money-coin-face)" />

            <text
                x="32"
                y="36"
                text-anchor="middle"
                font-family="Georgia, 'Times New Roman', ui-serif, serif"
                font-size="22"
                font-weight="900"
                fill="#7c2d12"
            >
                { "$" }
            </text>
        </svg>
    }
}
