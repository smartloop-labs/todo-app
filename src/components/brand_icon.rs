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
                <linearGradient id="git-money-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#6366f1" />
                    <stop offset="55%" stop-color="#a855f7" />
                    <stop offset="100%" stop-color="#ec4899" />
                </linearGradient>
                <linearGradient id="git-money-coin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#fef3c7" />
                    <stop offset="100%" stop-color="#f59e0b" />
                </linearGradient>
            </defs>

            <rect width="64" height="64" rx="16" fill="url(#git-money-grad)" />

            <path
                d="M32 30 V40 a6 6 0 0 1 -6 6 H20"
                stroke="rgba(255,255,255,0.95)"
                stroke-width="3"
                stroke-linecap="round"
                fill="none"
            />
            <path
                d="M32 30 V40 a6 6 0 0 0 6 6 H44"
                stroke="rgba(255,255,255,0.95)"
                stroke-width="3"
                stroke-linecap="round"
                fill="none"
            />

            <circle cx="20" cy="46" r="4" fill="#fff" />
            <circle cx="44" cy="46" r="4" fill="#fff" />

            <circle
                cx="32"
                cy="20"
                r="10"
                fill="url(#git-money-coin)"
                stroke="#fff"
                stroke-width="2"
            />
            <text
                x="32"
                y="24.6"
                text-anchor="middle"
                font-family="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
                font-size="13"
                font-weight="900"
                fill="#7c3aed"
            >
                { "$" }
            </text>
        </svg>
    }
}
