# Sparo Regional - React App

A React web application built with Create React App.

## Project Overview

This is a production-ready React application deployed at the `/sparo_regional/` base path.

## Tech Stack

- **React** - Frontend library
- **Create React App** - Build tooling and configuration
- **Bootstrap 4.3.1** - CSS framework for styling
- **JavaScript** - Application logic

## Project Structure

```
/workspace
├── index.html              # Main HTML entry point
├── asset-manifest.json     # Build asset manifest
├── static/
│   └── js/
│       ├── main.*.js       # Compiled JavaScript bundle
│       ├── main.*.js.map   # Source maps
│       └── main.*.js.LICENSE.txt  # Third-party licenses
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm start
```

The app will run at `http://localhost:3000/sparo_regional/`

### Production Build

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

### Deployment

This application is configured to be deployed at the `/sparo_regional/` path. Ensure your web server is configured to serve the static files from this base path.

## Features

- Single Page Application (SPA) architecture
- Responsive design with Bootstrap
- Optimized production build with code splitting
- Source maps for debugging

## License

See the `main.*.js.LICENSE.txt` file in the `static/js/` directory for third-party license information.

## Additional Resources

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
