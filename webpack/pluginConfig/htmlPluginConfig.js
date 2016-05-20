// Configuration object for HtmlWebpackPlugin
var path = require('path');
var moduleRoot = path.resolve(__dirname, '..', '..');

module.exports = {
  template: path.join(moduleRoot, 'src', 'index.template.html'),
  title: 'Babel Plate',
  description: 'A single page application template',
//  favicon: path.join(moduleRoot, 'dist', 'favicon.ico'),
  minify: {
    minifyJS: true,
    minifyCSS: true,
    html5: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true
  },
  appMountId: 'root',
  showLoadingIcon: true,
  unsupportedBrowser: true,
  cache: true,
  mobile: true,
  useCDN: true
};
