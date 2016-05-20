const express = require('express');
const compression = require('compression');

const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const app = express();

const publicPath = path.resolve(__dirname, '..', 'lib');
const indexHtmlPath = path.join(publicPath, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

module.exports = function start() {
  // gzip responses
  app.use(compression());
  // serve static assets normally
  app.use(express.static(publicPath));

  // handle every other route with index.html, which will contain
  // a script tag to your application's JavaScript file(s).
  app.get('*', function (request, response){
    response.send(indexHtml);
  })

  app.listen(port, host)
  console.log('server started on ' + host + ':' + port)
}
