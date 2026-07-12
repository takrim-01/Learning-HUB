# Knowledge Café ☕🎓

A collaborative web platform designed to help aspiring developers learn modern technologies through interactive coding, real-world projects, and practical exercises.

---

## 📋 Project Overview

**Knowledge Café** is a full-featured learning platform built with a focus on responsive design, clean UI, and user-friendly navigation. The project is in active development with a strong frontend foundation featuring a modern design system and responsive interactions.

**Current Status:** Frontend Foundation - Navbar & Hero Section ✅
- Responsive sticky navbar with mobile menu ✅
- Hero section with CTA buttons ✅
- Feature showcase grid (9 boxes) ✅
- Design system defined 🎨
- Mobile responsive (768px breakpoint) ✅

---

## 📁 Project Structure

```
Learning-HUB/
├── Frontend/
│   ├── css/
│   │   ├── index-html.css    (Homepage styles)
│   │   └── style.css         (Main stylesheet - imports CSS)
│   └── js/
│       └── script.js         (Interactive features & menu toggle)
├── index.html                (Homepage)
├── README.md                 (Project documentation)
└── .gitignore               (Git ignore file)
```

---

## 🎨 Design System

### Typography

| Element | Font | Size | Weight | Usage |
|---------|------|------|--------|-------|
| Logo & Headings | Georgia / Garamond | 1.5rem+ | 600 | Primary branding & navigation |
| Body Text | System Font | 1rem | 400 - 600 | Paragraph content & descriptions |
| CTA Buttons | System Font | 1rem | 600 | Call-to-action elements |

**Font Stack:**
- Logo/Nav: Georgia, Garamond, serif (elegant, professional)
- Body: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Cream (Primary BG) | `#fdfbf7` | Page background |
| White | `#fff` | Navbar background |
| Dark Blue-Gray | `#3a4b5c` | Text, icons, primary buttons |
| Charcoal | `#2c3a47` | Button hover state |
| Gold Accent | `#c9a35d` | Link hover, accent color |
| Dark Text | `#2D2D2D` | Body text |

### Spacing & Layout

- **Padding:** 1rem, 1.5rem, 2rem (consistent spacing units)
- **Gap:** 0.5rem - 2rem (component separation)
- **Border Radius:** 4px (buttons/inputs), 6px (hover areas)
- **Max Width:** 1200px (container max-width)
- **Navbar Height:** ~70px (approx with padding)

---

## ✨ Features Implemented

### Navbar
- ✅ Sticky positioning with white background
- ✅ Responsive design with mobile hamburger menu
- ✅ Navigation links (Home, About, Courses)
- ✅ CTA button with hover animation (dark blue)
- ✅ Underline hover effect on nav links (gold accent)
- ✅ Mobile menu animation (slides from top at 768px)
- ✅ Hamburger icon animation (X transform)
- ✅ Click outside to close menu
- ✅ Escape key to close menu
- ✅ Smooth scrolling to anchors

### Hero Section
- ✅ Main heading: "Everything you need to become a Developer"
- ✅ Descriptive paragraph
- ✅ Feature pills (6 interactive learning features):
  - Structured Courses
  - Deep Learning Paths
  - Digital Learning
  - Resource Center
  - Peer Learning
  - Flexible Learning
- ✅ Dual CTA buttons (Get Started, Explore Course)
- ✅ 9-box feature grid:
  - Practice, Build, Create
  - Code, Master, Develop
  - Grow, Achieve
  - (3-column layout responsive to mobile)

### CSS Organization
- ✅ CSS reset & base styles in style.css
- ✅ Page-specific styles in index-html.css
- ✅ Responsive breakpoints (768px for mobile)
- ✅ Smooth transitions and hover effects
- ✅ Accessibility: focus states on interactive elements

### JavaScript Features
- ✅ Hamburger menu toggle functionality
- ✅ Mobile menu open/close with animations
- ✅ Smooth scroll to section anchors
- ✅ Click-outside menu close
- ✅ Escape key menu close
- ✅ Active state management for menu items

---

## 📝 What's Next

### Immediate (Frontend)
- [ ] Create Featured Courses section
- [ ] Build Course Categories grid
- [ ] Add Key Features section with icons
- [ ] Create Learning Paths section
- [ ] Build Testimonials/Reviews section
- [ ] Add Final CTA (footer) section
- [ ] Style all sections with consistent design

### Pages to Build
- [ ] `/courses/` - Courses listing page
- [ ] `/about/` - About page
- [ ] `/dashboard/` - User profile/dashboard
- [ ] `/course/[id]/` - Individual course pages

### Backend Setup
- [ ] Database schema design (PostgreSQL/MongoDB)
- [ ] API endpoints (Node.js/Express or Python/Flask)
- [ ] Authentication system (JWT or OAuth)
- [ ] Course management system
- [ ] User enrollment system

### Enhancements
- [ ] Dark mode toggle
- [ ] Course search functionality
- [ ] Filtering & sorting options
- [ ] User progress tracking
- [ ] Comment/discussion system
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Analytics integration

---

## 🚀 Getting Started

### Prerequisites
- Git installed on your computer
- Code editor (VS Code recommended)
- GitHub account

### Step 1: Clone the Repository

**If you're a new contributor:**

1. Open VS Code
2. Open Terminal: `Ctrl + `` (backtick) or `View > Terminal`
3. Navigate to where you want the project:
   ```bash
   cd Desktop
   ```
4. Clone the repository:
   ```bash
   git clone https://github.com/takrim-01/Learning-HUB.git
   ```
5. Enter the project folder:
   ```bash
   cd Learning-HUB
   ```
6. Open in VS Code:
   ```bash
   code .
   ```

### Step 2: View the Project
1. Right-click `index.html` → "Open with Live Server" (if you have the extension)
2. Or open `index.html` directly in your browser

---

## 👨‍💻 Git Workflow for Contributors

### Before You Start
Always pull the latest changes:
```bash
git pull origin main
```

### Create a Feature Branch

Use descriptive branch names:
```bash
git checkout -b feature/courses-section
```

**Branch naming:**
- `feature/feature-name` (new features)
- `fix/bug-name` (bug fixes)
- `docs/update-readme` (documentation)

### Make Your Changes

Edit files in VS Code and save regularly (`Ctrl + S`).

### Check Status

See what you've modified:
```bash
git status
```

### Stage & Commit

Add your changes:
```bash
git add .
```

Write a clear commit message:
```bash
git commit -m "Add featured courses section with filtering"
```

**Good commit messages:**
- Use present tense: "Add" not "Added"
- Be specific about what changed
- Keep under 50 characters if possible

### Push & Create Pull Request

Push your branch:
```bash
git push origin feature/courses-section
```

Then:
1. Go to https://github.com/takrim-01/Learning-HUB
2. Click "Pull Requests" → "New Pull Request"
3. Select your branch and add a description
4. Submit for review

---

## 💡 Working with the Code

### CSS Structure
- `style.css` → Main import file (base styles)
- `index-html.css` → Homepage-specific styles
- **Future:** Create `pages/` CSS for additional pages

### JavaScript Organization
- `script.js` → Main interactive features (currently: navbar menu toggle)
- **Future:** Create page-specific JS files as needed

### Adding New Sections to Homepage
1. Add HTML in `index.html` with semantic tags
2. Add CSS in `index-html.css` with clear section classes
3. Add JS in `script.js` if interaction is needed
4. Test responsiveness at 768px and 480px breakpoints

### Creating New Pages
1. Create `pages/[page-name].html`
2. Create `Frontend/css/[page-name].css`
3. Create `Frontend/js/[page-name].js` (if needed)
4. Update navbar links to point to new pages

---

## 📱 Responsive Design

### Mobile Breakpoints

| Breakpoint | Size | Changes |
|-----------|------|---------|
| Desktop | 1200px+ | Full layout, multi-column grids |
| Tablet | 768px - 1199px | Hamburger menu active, adjusted spacing |
| Mobile | Below 768px | Stack layout, full-width buttons, mobile menu |

**Mobile Menu:**
- Hidden on desktop
- Slides down from top on tablet/mobile
- Takes full viewport width
- Closes on link click, escape key, or click outside

---

## 🤝 Contributing Guidelines

1. **Pull latest:** `git pull origin main` before starting
2. **Create feature branch** for your work
3. **Keep commits focused** (one feature per commit)
4. **Test responsiveness** at 768px breakpoint
5. **Write clear commit messages**
6. **Submit PR** when ready for review
7. **Wait for approval** before merging

---

## 🎯 Quick Reference Commands

```bash
# Clone repository
git clone https://github.com/takrim-01/Learning-HUB.git

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature/your-feature-name

# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin feature/your-feature-name

# Switch branches
git checkout main

# View branch list
git branch
```

---

## 📧 Questions or Issues?

1. Check this README first
2. Review code comments in relevant files
3. Check existing issues on GitHub
4. Ask Takreem for guidance

---

## 📄 License

This project is part of the Knowledge Café collaborative learning initiative.

---

**Happy coding! 🚀**
