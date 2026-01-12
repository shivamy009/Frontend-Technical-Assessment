# Frontend

A React-based visual workflow builder with drag-and-drop node editing.

## Features

- Interactive node-based workflow editor using React Flow
- Drag-and-drop interface for creating pipelines
- Multiple node types: Input, Output, LLM, HTTP, Filter, Transform, Aggregate, Debug, Text
- Custom edges with delete functionality
- State management with Zustand
- Styled with Tailwind CSS

## Tech Stack

- React 18
- React Flow 11
- Zustand (state management)
- Tailwind CSS
- Axios
- Lucide React (icons)

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
```

## Project Structure

- `src/components/` - React components
  - `nodes/` - Custom node components
  - `edges/` - Custom edge components
  - `toolbar/` - Toolbar and navigation
  - `ui/` - Reusable UI components
- `src/hooks/` - Custom React hooks
- `src/store.js` - Zustand state management

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
