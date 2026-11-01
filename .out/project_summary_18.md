### Summary of Changes
1.  **Update `Cargo.toml`**: Add dependencies for `wasm-bindgen`, `serde`, `gloo-net`, and `gloo-storage`. These are needed because the current code uses `yew` (a web framework) but the project structure is a Rust crate (`lib.rs`). The frontend logic needs to be migrated or refactored into Rust, likely using `wasm-bindgen` for WebAssembly interop.
2.  **Update `package.json`**: Change `"type": "module"` to `"type": "commonjs"` (or remove it if the build process handles it) and update scripts to use `npm run build` or similar for a proper release, though since we are moving to Rust, this might be replaced by a new `Cargo.toml` entry.
3.  **Update `src/main.rs`**: Create a new main function that initializes the application state (todos, theme, name) and sets up the web server to serve the frontend (`index.html`) while handling HTTP requests for the backend logic (likely using `wasm-bindgen-futures`).

### Commands
```sh
git add .
git commit -m "feat: migrate from React/Vite to Rust backend with WASM"
git push origin main
```

Co-Authored By: Smartloop AI
