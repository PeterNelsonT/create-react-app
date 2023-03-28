/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-anonymous-default-export */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    process.env.VITE_API_PROXY,
    createProxyMiddleware({
      target: process.env.VITE_API,
      pathRewrite: { [process.env.VITE_API_PROXY]: '' },
      changeOrigin: true,
    })
  );
};
