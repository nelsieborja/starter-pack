const presets = ['@babel/preset-env', '@babel/preset-react'];
const plugins = ['@babel/plugin-syntax-dynamic-import'];

const styledComponentsConfig = { pure: true, ssr: false, displayName: true };
if (process.env.NODE_ENV === 'production') {
  styledComponentsConfig.displayName = false;
  styledComponentsConfig.minify = true;
}
plugins.push(['babel-plugin-styled-components', styledComponentsConfig]);

module.exports = { presets, plugins };
