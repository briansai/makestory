const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const apiPaths = {
  '/api': {
    target: 'http://localhost:3001',
    pathRewrite: {
      '^/api': '/api',
    },
    changeOrigin: true,
  },
  //   '/api2': {
  //     target: 'http://localhost:3081',
  //     pathRewrite: {
  //         '^/api2': '/api2'
  //     },
  //     changeOrigin: true
  // }
};

const isDevelopment = process.env.NODE_ENV !== 'production';

app
  .prepare()
  .then(() => {
    const server = express();

    if (isDevelopment) {
      server.use('/api', createProxyMiddleware(apiPaths['/api']));
      // server.use('/api2', createProxyMiddleware(apiPaths['/api2']));
    }

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Listening on port:${port}`);
    });
  })
  .catch((err) => {
    console.log('Error:::::', err);
  });
