"use strict";
var createProxyMiddleware = require('http-proxy-middleware').createProxyMiddleware;
module.exports = function (app) {
    app.use(createProxyMiddleware("/api/**", { target: 'http://localhost:6000' }));
};
//# sourceMappingURL=setupProxy.js.map