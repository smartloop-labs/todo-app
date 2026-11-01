This task is a git remote operation — no file changes needed. The README already declares `smartloop-ai/todo-app` as the canonical home, but `origin` points at `mehfuzh/todo-app` and `smartloop-ai/todo-app` doesn't exist yet on GitHub.

The `gh repo create` command can create the new repo and push to it in one step, but it requires you to have admin access in the `smartloop-ai` organization. Your active `gh` account is `mehfuzh` with `read:org` (which only grants read access to org membership info, not repo creation).

```sh
gh repo create smartloop-ai/todo-app --private --source=. --description "A small todo app built two ways: React/JSX (primary) and Yew/Rust/WebAssembly. Local-first, no backend." --remote=origin --push
```

If that succeeds, it will:
- Create `smartloop-ai/todo-app` (private)
- Replace your `origin` to point at it
- Push `main` to it

**If it fails with a "not authorized" / "must accept invite" / 403 error**, ask a `smartloop-ai` org admin to create an empty private repo at <https://github.com/organizations/smartloop-ai/repositories/new> (name: `todo-app`, private), then run:

```sh
git remote set-url origin git@github.com:smartloop-ai/todo-app.git
git remote -v
git push origin main
```

After the new repo has the code, optionally archive `mehfuzh/todo-app` (Settings → Danger Zone → Archive) so visitors land on the canonical `smartloop-ai/todo-app`.

Co-Authored By: Smartloop AI
