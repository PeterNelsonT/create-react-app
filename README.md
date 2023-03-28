# React app

> Template for CSR react app that uses both webpack and vite as build/dev tool

## Getting Started

- Ensure the system used for dev has node 16+ and npm 8+
- npm is used as the package manager. Perform `npm install` after checkout to install dependencies.
- Good to have eslint, prettier, stylelint and sonarlint extension installed in the code editor.
- Modify environment variables in `.env.[mode]` files. Available mode: dev, qa, prod.

> How to run the app locally:

- To start the app locally, execute: npm run start:qa

> How to create the build:

- To build the app, execute: npm run build:qa

> Notes:

- Project uses both [webpack](https://webpack.js.org/ 'webpack') and [vite](https://vitejs.dev/ 'vite') as build/dev tool.

### Options

> Available mode: dev, qa, prod. Default duild/dev tool is webpack. Suffix mode with -vite to use vite as the build/dev tool. Ex: npm run start:qa-vite

- `npm run start:[mode]` - Runs the app in the development mode.
- `npm run build:[mode]` - Builds the app for production to the `build` folder.
