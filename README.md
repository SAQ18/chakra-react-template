# Chakra React Template

A modern starter template for building responsive and accessible React applications using Chakra UI and TypeScript. This template provides a solid foundation to kickstart your web development projects with ease.

## Features

- **React (v18)**: Latest version of React for building user interfaces.
- **Chakra UI (v2)**: A simple, modular, and accessible component library for React.
- **TypeScript**: Strongly typed JavaScript for better code quality and developer experience.
- **ESLint and Prettier**: Code linting and formatting out of the box.
- **Vite**: Fast and lightweight development server and build tool.

## Getting Started

### Prerequisites

Ensure that you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** or **yarn** (latest version recommended)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SAQ18/chakra-react-template.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd chakra-react-template
   ```

3. **Install dependencies**:

   If you use npm:

   ```bash
   npm install
   ```

   Or with yarn:

   ```bash
   yarn install
   ```

### Running the Project

To start the development server:

```bash
npm run dev
```

Or if you're using yarn:

```bash
yarn dev
```

This will start the application on `http://localhost:5173` by default (with Vite).

### Building for Production

To build the project for production:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This will create a production build in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

Or with yarn:

```bash
yarn preview
```

This will serve the production build locally, allowing you to test the app in a production environment.

## Project Structure

```bash
chakra-react-template/
├── src/                # Main source directory
│   ├── components/     # Reusable components
│   ├── pages/          # Application pages
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│   └── theme.ts        # Chakra UI theme customization
├── public/             # Static assets
├── package.json        # Project metadata and scripts
└── vite.config.ts      # Vite configuration file
```

## Customizing Chakra UI

You can customize Chakra UI by modifying the `theme.ts` file located in the `src/` directory. Chakra UI’s theming system allows you to create a custom look and feel that matches your design requirements.

## Available Scripts

- **`yarn dev`**: Starts the development server.
- **`yarn build`**: Builds the project for production.
- **`yarn preview`**: Previews the production build locally.
- **`yarn lint`**: Lints the codebase using ESLint.

## Contributing

Contributions are welcome! If you have any suggestions or find any bugs, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
