const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry : './src/index.js',
    devServer : {
        static : './dist'
    },
    output : {
        path : path.resolve(__dirname, 'docs'),
        filename : '[name].bundle.js',
        clean : true
    },
    module: {
        rules : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use : [MiniCssExtractPlugin.loader, "css-loader"],
                exclude : /node_modules/
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "public", "index.html")
        }),
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin()
    ],
    optimization : {
        minimizer : [
            new CssMinimizerPlugin()
        ],
        runtimeChunk : 'single'
    },
    mode : "development"
}