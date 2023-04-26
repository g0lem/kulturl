const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/mystage', {
      target: 'https://www.mystage.ro/', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/mystage": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/cinemacity', {
      target: 'https://www.cinemacity.ro/', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/cinemacity": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}