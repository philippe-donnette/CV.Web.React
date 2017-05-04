var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@');
console.log(__dirname);
console.log(path.resolve(__dirname, '/../node_modules'));

module.exports = {
    devtool: 'source-map',
    entry: {
        'vendor': './src/vendor',
        'client': './src/main'
    },
    output: {
        path: __dirname + '/../dist/',
        filename: '[hash:6]_[name].bundle.js',
        chunkFilename: '[hash:6]_[id].chunk',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css', '.scss', '.html'],
        modules: ['node_modules']
    },
    target: 'web',
    node: {
        __filename: true,
        __dirname: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
            },
            {
                test: /favicon.ico$/,
                loader: 'file-loader?name=/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(scss|less)$/,
                // exclude: /node_modules/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'less-loader']
                })
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: ['vendor'] }),
        new webpack.IgnorePlugin(/vertx/),
        new CleanWebpackPlugin(
            [
                'assets',
                '*.*'
            ],
            { root: path.resolve(__dirname + '/../dist') }
        ),
        new CopyWebpackPlugin([
            { from: './src/images/*.*', to: 'assets/', flatten: true }
        ]),
        new ExtractTextPlugin('[name].bundle.css'),
        new HtmlWebpackPlugin({
            template: __dirname + '/../src/index.template.ejs',
            inject: 'body'
        })
    ]
};