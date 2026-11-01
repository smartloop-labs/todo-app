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
            aria-label="Git Monkey"
        >
            <defs>
                <linearGradient id="git-monkey-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#6366f1" />
                    <stop offset="55%" stop-color="#a855f7" />
                    <stop offset="100%" stop-color="#ec4899" />
                </linearGradient>
                <radialGradient id="git-monkey-face" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stop-color="#e8c39e" />
                    <stop offset="100%" stop-color="#a67c52" />
                </radialGradient>
                <linearGradient id="git-monkey-muzzle" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#efcfa8" />
                    <stop offset="100%" stop-color="#d4a574" />
                </linearGradient>
            </defs>

            <rect width="64" height="64" rx="16" fill="url(#git-monkey-bg)" />

            <circle cx="14" cy="30" r="9" fill="#8b5a3c" />
            <circle cx="50" cy="30" r="9" fill="#8b5a3c" />
            <circle cx="14" cy="30" r="5" fill="#f4a896" />
            <circle cx="50" cy="30" r="5" fill="#f4a896" />

            <circle cx="32" cy="32" r="20" fill="url(#git-monkey-face)" stroke="#6b4423" stroke-width="1.2" />

            <ellipse cx="32" cy="40" rx="11" ry="9" fill="url(#git-monkey-muzzle)" />

            <path d="M19 23 Q32 19 45 23" stroke="#6b4423" stroke-width="1.5" fill="none" stroke-linecap="round" />

            <ellipse cx="25" cy="29" rx="4" ry="4.5" fill="white" />
            <ellipse cx="39" cy="29" rx="4" ry="4.5" fill="white" />
            <circle cx="25" cy="30" r="2" fill="#1a1a1a" />
            <circle cx="39" cy="30" r="2" fill="#1a1a1a" />
            <circle cx="25.8" cy="29.2" r="0.7" fill="white" />
            <circle cx="39.8" cy="29.2" r="0.7" fill="white" />

            <ellipse cx="32" cy="38" rx="2.5" ry="2" fill="#5a3825" />
            <circle cx="31.3" cy="37.5" r="0.5" fill="#8b5a3c" />
            <circle cx="32.7" cy="37.5" r="0.5" fill="#8b5a3c" />

            <path d="M28 43 Q32 46 36 43" stroke="#5a3825" stroke-width="1.3" fill="none" stroke-linecap="round" />
        </svg>
    }
}
