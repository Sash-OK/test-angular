'use strict';

const webpack = require('webpack'),
    sourcePath = __dirname + '/src/',
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    path = require('path'),
    ENV = process.env.npm_lifecycle_event,
    isDev = ENV === 'dev',
    extractSass = new ExtractTextPlugin({
        filename: isDev ? 'style.css' : 'style.[hash].css'
    }),
    mainHTML = new HtmlWebpackPlugin({
        template: sourcePath + '/index.html'
    }),
    uglifyBundle = new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
            compress: {
                warnings: false
            }
        }
    }),
    vendorLibs = new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        _: 'lodash',
        moment: 'moment',
        Promise: 'es6-promise-promise'
    });

function setConfig() {
    const config = {};

    config.devtool = isDev ? 'cheap-module-eval-source-map' : 'source-map';
    config.entry = [sourcePath + 'index.ts'];
    config.resolve = {
        extensions: ['.ts', '.js', '.scss']
    };

    config.output = {
        filename: isDev ? 'bundle.js' : 'bundle.[hash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    };

    config.module = {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$|\.css$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [autoprefixer('last 50 versions', '> 1%', 'ie 10')]
                            }
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                outputStyle: 'compact'
                            }
                        },
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.html$/,
                exclude: sourcePath + 'index.html',
                use: [
                    {
                        loader: 'angular2-template-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeAttributeQuotes: false,
                            caseSensitive: true,
                            customAttrSurround: [
                                [/#/, /(?:)/],
                                [/\*/, /(?:)/],
                                [/\[?\(?/, /(?:)/]
                            ],
                            customAttrAssign: [/\)?\]?=/]
                        }
                    }
                ]
            }
        ]
    };

    config.plugins = [
        vendorLibs,
        extractSass,
        mainHTML,
        new webpack.NoEmitOnErrorsPlugin(),
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
            sourcePath, // location of your src
            {} // a map of your routes
        ),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(isDev)
            }
        }),
        uglifyBundle
    ];

    config.devServer = {
        contentBase: path.join(__dirname, 'app'),
        compress: true,
        port: 8080,
        stats: 'minimal',
        open: true,
        clientLogLevel: 'none',
        historyApiFallback: {
            disableDotRule: true
        },
        host: 'localhost'
    };

    return config;
}

module.exports = setConfig();