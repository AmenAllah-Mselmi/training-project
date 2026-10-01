# Training Project

This is a React project built with Vite, TypeScript, and Storybook. It features a collection of highly reusable and customizable form input components styled using Emotion (`@emotion/styled`).

## Components Included

All components are fully documented in Storybook and support multiple states (Default, Hover, Focus, Disabled, Error).

1. **`Input`**: A highly versatile input component. Supports labels, optional indicators, help info icons, left/right icons, prefix/suffix blocks (e.g., `https://` or `.com`), and error/caption messages.
2. **`PhoneInput`**: A specialized input for phone numbers. Includes a built-in dropdown menu to select a country code (e.g., `+1`, `+33`, `+49`) with circular SVG flags.
3. **`CardInput`**: A clean input meant for credit card numbers. Features built-in start (card outline) and end (CVC indicator) icons.

## Getting Started

First, install the dependencies:

```bash
npm install
```

To run the local development server:

```bash
npm run dev
```

## Storybook

Storybook is configured to test and develop the components in isolation. You can play with all the props (toggling icons, labels, disabled states) directly from the UI.

To launch Storybook:

```bash
npm run storybook
```

## Technologies Used

- **React** 
- **TypeScript**
- **Vite**
- **Emotion** (`@emotion/styled` & `@emotion/react`) for CSS-in-JS styling
- **Storybook** for component-driven development
