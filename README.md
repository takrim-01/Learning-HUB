# 📚 Knowledge Café

A modern learning platform built from scratch using HTML, CSS, JavaScript, and future backend technologies.

---

## 📂 Project Structure

```text
Frontend/
├── assets/          # Images, icons, fonts
├── css/
│   ├── components/  # Buttons, cards, tables
│   ├── layout/      # Navbar, sidebar, footer
│   ├── pages/       # Page-specific CSS
│   ├── variables.css
│   ├── global.css
│   └── style.css
├── js/
│   └── app.js
└── pages/           # HTML files
```

---

## 📌 Rules

- Store all images in `Frontend/assets/`
- Reusable CSS → `css/components/`
- Layout CSS → `css/layout/`
- Page CSS → `css/pages/`
- Import all CSS files in `style.css`
- Organize JavaScript like the CSS structure
- Keep all HTML files inside `Frontend/pages/`

---

## 📷 Asset Example

```html
<img src="../assets/images/logo.png" alt="Logo">
```

---

## 🎨 CSS Example

```html
<link rel="stylesheet" href="../css/style.css">
```

---

## 🚀 Git Workflow

```bash
git status
git add .
git commit -m "Short description"
git push
```

---

## 🤝 Contribution

- Follow the folder structure.
- Write clean and readable code.
- Use meaningful commit messages.
- Test your changes before pushing.