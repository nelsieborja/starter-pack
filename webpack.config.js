const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const APP_SRC = path.resolve(__dirname, 'src/js');

module.exports = {
  // https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  devServer: {
    historyApiFallback: true
  },
  output: {
    chunkFilename: `[${
      process.env.NODE_ENV === 'production' ? 'chunkhash' : 'name'
    }].js`
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // emitError: true,
          emitWarning: true
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    modules: ['node_modules'],
    alias: {
      Actions: path.join(APP_SRC, 'redux/actions'),
      Middlewares: path.join(APP_SRC, 'redux/middlewares'),
      Reducers: path.join(APP_SRC, 'redux/reducers'),
      Store: path.join(APP_SRC, 'redux/store'),

      Components: path.join(APP_SRC, 'components'),
      Constants: path.join(APP_SRC, 'constants'),
      Hooks: path.join(APP_SRC, 'hooks'),
      Materials: path.join(APP_SRC, 'materials'),
      Styled: path.join(APP_SRC, 'styled'),
      Helpers: path.join(APP_SRC, 'helpers')
    }
  }
};
