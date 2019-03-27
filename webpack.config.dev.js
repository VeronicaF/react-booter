const path = require("path")

const HTMLPlugin = require('html-webpack-plugin')
const CleanTool = require('clean-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')


const paths = {
    HTMLTemplate: path.resolve(__dirname, 'index.html'),
    src: path.resolve(__dirname, 'src'),
}


module.exports = {
    entry: ['src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash:8].bundle.js',
    },
    resolve: {
        alias: {
            src: paths.src,
        },
        extensions: ['.jsx', '.js', '.css'],
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                exclude: /node_modules/,
                test: /\.css$/,
                use: ['style-loader', 'css-loader',]
            },
            {
                exclude: /node_modules/,
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader',]
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        quiet: true,
        overlay: {
            warnings: false,
            errors: true,
        },
    },
    plugins: [
        new CleanTool({
            cleanStaleWebpackAssets: true,
        }),
        new HTMLPlugin({
            template: paths.HTMLTemplate,
            title: 'my app',
        }),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: ['Your application is running here: http://localhost:8080'],
            },
        }),
    ],
    devtool: 'inline-source-map',
}
