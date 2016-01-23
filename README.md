# What is it

Lightweight JavaScript package boilerplate I use in personal projects. Intended to have a page ready to write ES2015 code, with tests and linting all set up. This branch includes React (with Hot Reloading enabled), ReactDOM, CSS Module Loaders with SASS, and babel-preset-stage-2.

# Features

1. [Babel](https://github.com/babel/babel) for modern JavaScript features
2. ESLint [Semistandard](https://github.com/Flet/eslint-config-semistandard) configuration
3. [Mocha](https://github.com/mochajs/mocha) for unit testing
4. [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with [hot module replacement](https://github.com/gaearon/react-transform-hmr) for development server.
5. [webpack](https://github.com/webpack/webpack) with basic production build setup.
6. Easily distinguish between production and development 

# Install

Clone and install

    git clone http://github.com/pl12133/babel-plate.git
    cd babel-plate

Switch to `with-react` branch:

    git checkout with-react


# Setup 

1. Remove the `.git` folder from the project directory.
2. Edit `package.json` and fill it with the details of your package. Make sure to change the `title`, `description`, and `repository` entries.
3. Your entry point is `src/index.js`, start from there and you are ready to go.

# Usage

To begin development, define the environment variables HOST and PORT. Execute `npm start` to start up the development server. All changes made in the `src` folder will automatically be built by webpack-dev-server.

To build for production, use `npm run build:prod` and the output will build in the `lib` folder. There is a basic express server for production to serve up a single page app, start it with `npm run start:prod`.

*Make sure your `index.html` file includes `dist/bundle.js` for development, and `lib/bundle.js` for production.*
