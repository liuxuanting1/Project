const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // 只要想ajax请求就会被转到target地址
    '/ajax',
    createProxyMiddleware({
      target: 'https://m.maoyan.com',
      changeOrigin: true,
    })
  );

};
