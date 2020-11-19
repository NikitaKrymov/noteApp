"use strict";
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(createProxyMiddleware("/api/**", { target: 'http://localhost:6000' }));
};
//# sourceMappingURL=setupProxy.js.map