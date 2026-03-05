# Interactive Digital Calendar

A modern, fully interactive digital calendar built with vanilla HTML, CSS, and JavaScript.

## Features

- **Month Navigation**: Easily navigate between months with previous/next buttons
- **Today Button**: Quickly jump to the current date
- **Date Selection**: Click any date to select it and view details
- **Visual Indicators**: 
  - Today's date is highlighted with a gradient background
  - Selected dates are visually distinguished
  - Other month's dates are grayed out
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Info Panel**: Displays current date, selected date, and month information
- **Local Storage**: Event data storage capability for future enhancements

## How to Use

1. Open `index.html` in a web browser
2. Navigate months using the arrow buttons (❮ and ❯)
3. Click on any date to select it
4. Use the "Today" button to return to the current date
5. Click "Clear" to deselect the current date

## Project Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Calendar logic and interactivity
└── README.md       # This file
```

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser supporting ES6 JavaScript

## Customization

### Change Colors
Edit the color values in `styles.css`:
- Primary gradient: `#667eea` and `#764ba2`
- Text colors and backgrounds can be customized

### Add Events
The calendar structure supports event storage via `localStorage`. Extend the `Calendar` class in `script.js` to add event functionality.

## No Dependencies
This calendar uses only vanilla HTML, CSS, and JavaScript - no external libraries required!

---

**Created:** March 2026
