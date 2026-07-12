# Knowledge Café ☕🎓

A collaborative web platform designed to help aspiring developers learn modern technologies through interactive coding, real-world projects, and practical exercises.

---

## 📋 Project Overview

**Knowledge Café** is a full-featured learning platform built with a focus on responsive design, clean UI, and user-friendly navigation. The project is in active development with a strong frontend foundation featuring a modern design system.

**Status:** Frontend foundation stage ✅
- Responsive sticky navbar ✅
- Hero section with CTA buttons ✅
- Feature showcase grid ✅
- Design system defined 🎨

---

## 📁 Project Structure

```
Knowledge-Café/
├── Frontend/
│   ├── css/
│   │   ├── global.css        (Global styles & resets)
│   │   ├── index-html.css    (Index page styles)
│   │   └── style.css          (Main stylesheet - imports all CSS)
│   ├── js/
│        └── script.js             (Main JavaScript file)
├── index.html                 (Homepage)
├── README.md                  (Project documentation)
└── .gitignore                 (Git ignore file)
```

---

## 🎨 Design System

### Typography

| Element | Font | Size | Weight | Usage |
|---------|------|------|--------|-------|
| Logo & Headings | Sora | 1.75rem - 3.5rem | 500 - 700 | Primary branding & section headings |
| Body Text | Inter | 0.95rem - 1.125rem | 400 - 600 | Paragraph content & labels |
| Buttons | Sora | 1rem | 600 | Call-to-action elements |

**Font Imports:**
- Sora: Modern, geometric sans-serif (headings & branding)
- Inter: Clean, versatile sans-serif (body text & UI)

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Off-White (Primary BG) | `#F7F5F2` | Page background, navbar background |
| Dark Slate | `#1B2430` | Text, icons, borders |
| Charcoal | `#2B2925` | Hero buttons, dark boxes |
| Cream | `#E4E2DD` | Light box backgrounds, text on dark |
| Light Gray | `#f3f3f3` | Feature pill backgrounds |
| Muted Text | `#7d7d7d` | Secondary text, descriptions |

### Spacing & Layout

- **Padding:** 1rem, 1.25rem, 1.5rem (consistent spacing units)
- **Gap:** 12px - 64px (component separation)
- **Border Radius:** 10px (inputs/links), 20px (large boxes), 999px (pills/buttons)
- **Max Width:** 1400px (container max-width)

---

## ✨ Features Implemented

### Navbar
- Sticky positioning with smooth shadow
- Responsive design (mobile menu ready)
- Hover effects on navigation links
- CTA button with border & fill animation
- Logo with brand mark

### Hero Section
- Large, responsive heading (clamp 2rem - 3.5rem)
- Descriptive paragraph with line-height optimization
- Feature pills (7 interactive learning features)
- Dual CTA buttons (primary & secondary)
- 6-box feature grid showcase:
  - 3 dark boxes with light text (Hands On, Interactive, Master)
  - 3 light boxes with dark text (Build, Learn, Achieve)

### Page Structure
- Global CSS reset & variables
- Page-specific CSS organization
- Responsive breakpoints (768px, 480px)
- Focus accessibility states (outline on focus-visible)

---

## 📝 What's Left to Do

- [ ] Create JS files for interactive components
  - [ ] Navbar mobile menu toggle
  - [ ] Button click handlers
  - [ ] Smooth scrolling
  
- [ ] Build remaining sections:
  - [ ] Featured Courses section
  - [ ] Course Categories
  - [ ] Key Features section
  - [ ] Learning Paths
  - [ ] Testimonials/Reviews
  - [ ] Final CTA section
  
- [ ] Backend setup
  - [ ] Database schema design
  - [ ] API endpoints
  - [ ] Authentication system
  
- [ ] Additional pages:
  - [ ] Courses page
  - [ ] About page
  - [ ] Profile/Dashboard
  - [ ] Individual course pages
  
- [ ] Enhancement & Polish
  - [ ] Dark mode toggle
  - [ ] Search functionality
  - [ ] Filtering & sorting
  - [ ] Performance optimization
  - [ ] SEO optimization

---

## 🚀 Getting Started

### Prerequisites
- Git installed on your computer
- Code editor (VS Code recommended)
- GitHub account

### Step 1: Clone the Repository

**If you're a contributor:**

1. Open VS Code
2. Open Terminal: `Ctrl + `` (backtick) or `View > Terminal`
3. Navigate to where you want the project:
   ```bash
   cd Desktop
   ```
4. Clone the repository:
   ```bash
   git clone https://github.com/takrim-01/Knowledge-Cafe.git
   ```
5. Enter the project folder:
   ```bash
   cd Knowledge-Cafe
   ```
6. Open the project in VS Code:
   ```bash
   code .
   ```

---

## 👨‍💻 Git Workflow for Contributors

### Step 1: Pull Latest Changes

Before starting work, always get the latest code:

```bash
git pull origin main
```

### Step 2: Create a New Branch

Create a branch for your feature (keep it descriptive):

```bash
git checkout -b feature/navbar-mobile
```

**Branch naming convention:**
- `feature/feature-name` (for new features)
- `fix/bug-name` (for bug fixes)
- `docs/update-readme` (for documentation)

### Step 3: Make Your Changes

Edit files in VS Code. Save your work (`Ctrl + S`).

### Step 4: Check Changed Files

See what you've modified:

```bash
git status
```

### Step 5: Add Changes to Staging

Add specific files:
```bash
git add Frontend/js/app.js
```

Or add all changes:
```bash
git add .
```

### Step 6: Commit Your Changes

Write a clear, short commit message:

```bash
git commit -m "Add mobile navbar toggle functionality"
```

**Commit message tips:**
- Use present tense: "Add" not "Added"
- Be specific: "Fix hero button spacing" not "Bug fix"
- Keep it short: 50 characters or less

### Step 7: Push to GitHub

Push your branch to GitHub:

```bash
git push origin feature/navbar-mobile
```

### Step 8: Create a Pull Request

1. Go to the repository on GitHub
2. Click "Pull Requests" tab
3. Click "New Pull Request"
4. Select your branch and add a description
5. Submit for review

---

## 📥 After Accepting Contributor Invitation

**If you haven't cloned the repo yet:**

1. Check your GitHub email for the invitation
2. Click "Accept invitation" in the email or on GitHub
3. Go to: https://github.com/takrim-01/Knowledge-Cafe
4. Click the green "Code" button
5. Copy the HTTPS link
6. Follow **Step 1: Clone the Repository** above

**If you already cloned it:**
- You're ready to go! Just create a branch and start working (see Git Workflow above).

---

## 💡 Working with the Code

### CSS Structure
- `global.css` → Reset & base styles
- `index-html.css` → Homepage-specific styles
- `style.css` → Main import file (includes all CSS)
- **Future:** Create page-specific CSS files for new pages

### JavaScript Organization
- `app.js` → Main JavaScript file
- **Future:** Create page-specific JS files for interactive features
- Keep functions modular and reusable

### Adding New Pages
1. Create HTML file in `Frontend/pages/`
2. Create corresponding CSS file in `Frontend/css/`
3. Create corresponding JS file in `Frontend/js/`

---

## 📱 Responsive Breakpoints

The design uses two main breakpoints:

| Breakpoint | Size | Used For |
|------------|------|----------|
| Tablet & Mobile | 768px and below | Stack layout, hide desktop elements |
| Mobile | 480px and below | Full-width buttons, adjust spacing |

---

## 🤝 Contributing Guidelines

1. **Always pull before working:** `git pull origin main`
2. **Create a feature branch** for your work
3. **Keep commits small & focused** (one feature per commit)
4. **Test your changes** before pushing
5. **Write clear commit messages**
6. **Submit PR when ready** for review

---

## 🎯 Quick Reference Commands

```bash
# Clone repository
git clone https://github.com/takrim-01/Knowledge-Cafe.git

# Check status of files
git status

# Create new branch
git checkout -b feature/your-feature-name

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin feature/your-feature-name

# Switch between branches
git checkout main

# Pull latest changes
git pull origin main
```

---

## 📧 Questions?

If you're stuck:
1. Check this README first
2. Review the code comments
3. Ask your Takreem

---

## 📄 License

This project is part of the Knowledge Café collaborative initiative.

---

**Happy coding! 🚀**

