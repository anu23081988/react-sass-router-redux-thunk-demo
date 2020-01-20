const webpack = require('webpack');
const path=require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function srcPathExtend(subpath){
    console.log(path.join(__dirname,"dist",subpath))
    return path.join(__dirname,"dist",subpath);
}
module.exports = merge(common,{
    mode: "development",
    devtool: "inline-source-map",
    devServer:{
        contentBase: './dist',
        hot: true
    },
    module:{
        rules: [
            {
                test: /\.(css|scss)$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "react-demo-app",
            inject: 'body',
            template: srcPathExtend("index.html"),
            filename: "index.html"
        })
    ]
})