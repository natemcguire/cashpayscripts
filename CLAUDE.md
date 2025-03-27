# CashPayScripts - Guidelines

## Project Overview
Static HTML/CSS website with JavaScript for prescription medication services across various US cities.

## Development Commands
- Local preview: Run `./server.sh` to start a local server at http://localhost:8000
- No build process required (static HTML/CSS with JavaScript for templating)
- Validate HTML: Use W3C validator at https://validator.w3.org/
- Validate CSS: Use W3C validator at https://jigsaw.w3.org/css-validator/

## Code Style Guidelines
- **HTML**: Use HTML5 doctype, semantic tags, and ensure valid markup
- **CSS**: Follow existing style and color variables in `:root`
- **JavaScript**: Used for templating; city names derived from filenames
- **Templates**: 
  - Use city-template.html as base for new city pages
  - City names automatically populated from slug in URL path
- **Naming**:
  - Classes: Use kebab-case (e.g., `med-button`, `process-steps`)
  - File names: Use kebab-case (e.g., `san-francisco.html`)
  - JavaScript functions: Use camelCase (e.g., `formatCityName`)
- **Formatting**:
  - Maintain consistent 2-space indentation
  - Include appropriate whitespace for readability
- **Content Updates**:
  - Footer changes should be made in `js/templates.js` in the `loadFooter` function
  - Global style changes in `styles.css`
  - City-specific content is automatically generated from URL filename

## File Structure
- `/cities/` - Individual city HTML pages
- `/js/templates.js` - JavaScript for dynamic content
- `/styles.css` - Global stylesheet
- `/index.html` - Main landing page