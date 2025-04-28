# uruz

This project is a general, opinionated setup that can be used as a boilerplate for React Native projects. It includes configurations and tools for styling, testing, internationalization, and development best practices.

## Project Structure

### app

The `app` directory contains the main application code. It is structured to follow best practices for React Native development using file-based routing. The directory is organized into subdirectories for screens, navigation, and other application logic.

Dependencies:

- `expo-router`: A file-based routing library for React Native applications that simplifies navigation and screen management.

### assets

The `assets` directory contains static assets such as images, fonts, and other resources used in the application. For the app icons I used https://onlinepngtools.com/convert-text-to-png to generate the app icon (1024x1024, 250 padding, arial, font bold, align center and middle for the icons. For the app icons in the expo icon template used 1300x1300 for the icons and splash screen and 800x800 for the adaptive icon).

Dependencies:

- `expo-fonts`: A library for loading custom fonts in React Native applications.

### components

The `components` directory contains reusable UI components that can be used throughout the application. These components are designed to be modular and easy to use.

### i18n

The `i18n` directory contains the internationalization (i18n) setup for the application. It includes configuration files and translation files for different languages.

Dependencies:

- `i18next`: A powerful internationalization framework for JavaScript.
- `react-i18next`: React bindings for i18next, providing hooks and components for easy integration with React.

### lib

The `lib` directory contains utility functions and libraries that are used throughout the application. This can include helper functions, API clients, and other shared code.

Dependencies:

- `react-native-reusables`: A library of reusable components and hooks for React Native applications comparable to shadcn/ui.

### tests

The `tests` directory contains unit and integration tests for the application. It is structured to follow best practices for testing React Native applications using Jest or Vitest.

Dependencies:

- `@testing-library/react-native`: A library for testing React Native components using the React Testing Library.
- `jest`: A JavaScript testing framework.

### Other

The root directory also contains the main configuration files for the project, including ESLint and Prettier configurations. These tools help maintain code quality and consistency across the project.

Dependencies:

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `app.json`: Configuration file for the Expo application.
- `babel.config`: Babel configuration for transpiling JavaScript and JSX code.
- `components.json`: Configuration for react-native-reusables to defined folder structure for components and lib.
- `eslint.config.js`: ESLint configuration file for linting JavaScript and JSX code including `eslint-plugin-unicorn`, `eslint-plugin-react`, and `eslint-plugin-react-hooks`.
- `index.ts`: Entry point for the application, typically used for bootstrapping the app.
- `jest.config.js`: Jest configuration file for running tests. References the `tests/setupTests.ts` file for setting up the testing environment.
- `metro.config.cjs`: Metro bundler configuration file for React Native including setup for nativewind.
- `nativewind-env.d.ts`: Type definitions for NativeWind, a utility-first CSS framework for React Native.
- `nativewind.css`: CSS file for NativeWind styles. Often referred to as a global stylesheet.
- `prettier.config.js`: Prettier configuration file for code formatting.
- `tailwind.config.js`: Tailwind CSS configuration file for styling the application used by nativewind.
- `tsconfig.json`: TypeScript configuration file for type checking and compilation.
