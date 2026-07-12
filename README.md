# ☕ Knowledge Café

> A learning hub reimagined — a cozy corner of the web for sharing knowledge, notes, and resources.

*(Formerly "Learning Hub")*

---

## 📁 Project Structure

```
Knowledge Café/
├── Frontend/
│   ├── assets/              # Images, icons, fonts, and other static media
│   ├── css/
│   │   ├── global.css       # Site-wide base styles (resets, variables, typography)
│   │   ├── index-html.css   # Styles specific to index.html
│   │   └── style.css        # General/shared component styles
│   ├── js/
│   │   └── app.js           # Main JavaScript entry point / app logic
│   └── pages/
│       ├── home.html        # Home page
│       └── login.html        # Login page
├── index.html                # Main entry point
└── README.md                  # You are here
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/knowledge-cafe.git
   cd knowledge-cafe
   ```
2. Open `index.html` in your browser, or use a local dev server (recommended):
   ```bash
   npx serve .
   ```
   or, with VS Code, use the **Live Server** extension.

---

## 📐 Project Rules & Conventions

### File & Folder Naming
- Use **lowercase-with-hyphens** for all file and folder names (e.g. `home.html`, not `Home.html`).
- Keep page-specific CSS files named after their page (e.g. `index-html.css` for `index.html`).
- Shared/reusable styles go in `global.css` or `style.css` — do not duplicate rules across files.

### Folder Responsibilities
| Folder/File   | Purpose                                          |
|----------------|--------------------------------------------------|
| `assets/`      | Images, fonts, icons — no code                    |
| `css/`         | All stylesheets, one per page or purpose          |
| `js/`          | All JavaScript logic                              |
| `pages/`       | Secondary HTML pages (not the main entry point)   |
| `index.html`   | Root/landing entry point of the site              |

### Coding Style
- Indent with **2 spaces** (no tabs).
- Use semantic HTML5 tags (`<header>`, `<main>`, `<footer>`, `<section>`) over generic `<div>`s where possible.
- Keep JavaScript modular — one clear responsibility per function.
- Comment non-obvious logic, but avoid over-commenting simple code.
- Always link CSS/JS with **relative paths** so the project stays portable.

### Branching (if working with others)
- `main` → stable, deployable code only.
- `dev` → active development.
- `feature/<name>` → new features (e.g. `feature/login-page`).
- `fix/<name>` → bug fixes.

### Commit Message Style
Use short, present-tense messages, ideally following this pattern:
```
<type>: <short description>
```
Examples:
- `feat: add login page layout`
- `fix: correct navbar overflow on mobile`
- `style: update global.css color variables`
- `docs: update README with setup steps`

Common types: `feat`, `fix`, `style`, `docs`, `refactor`, `chore`

---

## 🧑‍💻 How to Commit & Push (Terminal)

### First-time setup (only once per machine)
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Initialize a repo (only if not already a git repo)
```bash
git init
git remote add origin https://github.com/<your-username>/knowledge-cafe.git
```

### Regular workflow
```bash
# 1. Check what's changed
git status

# 2. Stage your changes
git add .                     # stage everything
git add path/to/file.html     # or stage a specific file

# 3. Commit with a clear message
git commit -m "feat: add login page styling"

# 4. Pull latest changes first (avoids conflicts)
git pull origin main

# 5. Push your changes
git push origin main
```

### First push to a new remote repo
```bash
git branch -M main
git push -u origin main
```

### Working on a feature branch
```bash
git checkout -b feature/new-page
# ... make changes ...
git add .
git commit -m "feat: add new resources page"
git push -u origin feature/new-page
```
Then open a Pull Request on GitHub to merge into `main`.

---

## 🛠️ .gitignore Suggestion
Create a `.gitignore` file in the root with:
```
node_modules/
.DS_Store
*.log
.vscode/
```

---

## 📌 Roadmap / Ideas
- [ ] Add a signup page alongside login
- [ ] Add dark/light theme toggle
- [ ] Connect a backend/auth service
- [ ] Add a resources/blog section for shared notes
- [ ] Make layout responsive for mobile

---

## 📄 License
This project is currently unlicensed. Add a `LICENSE` file (e.g. MIT) if you plan to make it public or open-source.

---

*Made with ☕ and curiosity — Knowledge Café.*