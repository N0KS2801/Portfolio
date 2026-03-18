# Portfolio Website - AI Coding Guidelines

## Architecture Overview
This is a single-page portfolio website built with vanilla HTML, CSS, and JavaScript. The site consists of five main sections: profile, about, experience, projects, and contact. Navigation uses smooth scrolling between sections with both desktop and mobile hamburger menus.

## Key Files & Structure
- `index.html`: Main HTML structure with semantic sections and inline event handlers
- `style.css`: Core styling with Poppins font and 300ms transitions
- `mediaquerries.css`: Responsive design with breakpoints at 1400px, 1200px, and 600px
- `script.js`: Hamburger menu toggle functionality
- `assets/`: Static images, icons, and resume PDF

## Coding Patterns
- **Navigation**: Use `location.href='./#section'` for internal links and `window.open()` for external links
- **Event Handlers**: Inline `onclick` attributes for buttons (e.g., `onclick="toggleMenu()"`)
- **CSS Classes**: Hierarchical naming like `section__text__p1`, `btn btn-color-1`
- **Responsive**: Mobile-first approach with hamburger nav appearing at ≤1200px
- **Images**: Stored in `assets/` folder, referenced as `./assets/filename.ext`

## Development Workflow
- No build process required - open `index.html` directly in browser
- Edit CSS in `style.css` for general styles, `mediaquerries.css` for responsive adjustments
- Add new sections by following the existing `<section id="name">` pattern with corresponding nav links

## Conventions
- Font: Poppins (weights 300-600) from Google Fonts
- Colors: Black text, grey hover states, custom button colors (btn-color-1, btn-color-2)
- Icons: 24x24px images with `class="icon"` for consistent sizing
- Projects: Displayed in grid layout with image, title, description, and action buttons