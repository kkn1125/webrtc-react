const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const serverHost = process.env.HOST;
const serverPort = process.env.PORT;
console.log(serverPort);
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `https://${serverHost}:${serverPort}`,
      changeOrigin: true,
    })
  );
};
