# Starter Kit

- [React](https://reactjs.org/)
- [Reach Router](https://reach.tech/router) - Keeps the UI in sync with the URL without page refresh
- [Redux](https://redux.js.org/) - For store managment, holds up the state in one place
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - A middleware that allows running async operations
- [React Redux](https://react-redux.js.org/) - Binds React with Redux
- [Styled Components](https://www.styled-components.com/) - For creating and styling components at the same time

- [Webpack](https://webpack.js.org/) - Module bundler and a task runner
- [Babel](https://babeljs.io/) - A compiler that transforms next-gen JavaScript and JSX into browser-compatible JavaScript

  - `babel-loader` - Allows transpiling JavaScript using Babel and Webpack
  - `@babel/preset-env` - Compiles next-gen JavaScript down to ES5
  - `@babel/preset-react` - Compiles JSX down to Javascript
  - `@babel/plugin-syntax-dynamic-import` - Enables parsing of dynamic imports

- [ESLint](https://eslint.org/) - For linting JavaScript and JSX

  - `eslint-loader` - Checks for linting errors using Webpack
  - `eslint-config-airbnb` - Provides Airbnb's .eslintrc as an extensible shared config. It has dependency of `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`
  - `eslint-import-resolver-webpack` - Makes ESLint aware of the Webpack aliases

- [Prettier](https://prettier.io/) - Auto formats code conforming to a consistent style

  - `eslint-plugin-prettier` - Adds Prettier as a rule in ESLint
  - `eslint-config-prettier` - Disables other rules that might conflict with Prettier

- `husky` + `lint-staged` - For setting up pre-commit hook for ESLint and Prettier to ensure code is linted and properly formatted before it's committed
- `html-loader` - Exports HTML as string
- `html-webpack-plugin` - Injects the bundles into the HTML file
- `webpack-dev-server` - Provides development server, refreshes the web browser on every file update

---

A live demo of the repo is available [here](https://starter-pack.nelsieborja.now.sh/) in case you're curious about an output 😄
