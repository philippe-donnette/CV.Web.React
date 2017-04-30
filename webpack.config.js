/// <binding ProjectOpened='Run - Development' />

var environment = (process.env.NODE_ENV || "development").trim();

if (environment === "development" || isDevelopment) {
    module.exports = require('./webpack/webpack.dev.js');
} else {
    module.exports = require('./webpack/webpack.prod.js');
}