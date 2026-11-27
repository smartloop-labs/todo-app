# Git Monkey

> A local-first todo app that turns GitHub issues and pull requests into a tracked, shippable list. Built two ways from the same project: a React/JSX frontend (the primary, Vite-served build) and a Yew/Rust frontend that compiles to WebAssembly. Both share the same component shapes, styles, and local-first behavior.

## Features

- Add tasks with a **priority** (low / medium / high) and a **due date**
- Paste a GitHub issue or pull request link to import its title, body, and completion state as a task
- Mark tasks complete, edit them inline, or delete them
- Filter by **All / Active / Completed**
- Light / dark theme (auto-detects `prefers-color-scheme`, persists choice)
- Everything stored in `localStorage` — no backend, no accounts

## Project layout

The app has two parallel frontends built from the same project root, sharing a single `src/` tree:

- **React (primary)** — JSX under `src/`, built and served by Vite. Entry: `src/main.jsx` → `src/App.jsx`.
- **Yew / Rust** — Rust under `src/`, compiled to WebAssembly. Entry: `src/main.rs` → `src/App.rs`.

## Repository

- Organization: `smartloop-ai`
- Remote: `git@github.com:smartloop-ai/todo-app.git`

## License

todo-app is source-available under the [Business Source License 1.1](LICENSE) (`BUSL-1.1`).

- You may read, modify, self-host and use it in production, including inside your company.
- You may not offer it to third parties as a hosted or embedded commercial product that competes with Smartloop's paid offerings.
- Each version converts to the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) four years after it is published.

For a commercial license or questions, contact [hello@smartloop.ai](mailto:hello@smartloop.ai).
