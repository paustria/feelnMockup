var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');
var path = require("path");

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"]},
            { test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]" }
        ]
    },
    plugins: [
        new BowerWebpackPlugin({
        }),
        new webpack.ProvidePlugin({
            $:      "jquery",
            jQuery: "jquery",
            fontawesome: "fontawesome"
        })
    ],
    resolve: {
        alias: {
            'fontawesome' : './bower_components/font-awesome/scss/font-awesome.scss'
        },
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]
    },
    devServer: {
        port: 8008
    }
};