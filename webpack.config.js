/// <binding ProjectOpened='Run - Development' />
const webpack = require('webpack');

console.log(`NODE_ENV ${process.env.NODE_ENV}`);

var environment = (process.env.NODE_ENV || "development").trim();

if (environment === "development") {
    module.exports = require('./webpack/webpack.dev.js');
} else {
    module.exports = require('./webpack/webpack.prod.js');
}