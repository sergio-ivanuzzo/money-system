const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            store: path.resolve(__dirname, "./src/store/"),
            actions: path.resolve(__dirname, "./src/store/actions/"),
            reducers: path.resolve(__dirname, "./src/store/reducers/"),
            containers: path.resolve(__dirname, "./src/containers/"),
            components: path.resolve(__dirname, "./src/components/"),
            helpers: path.resolve(__dirname, "./src/helpers"),
            httpClient: path.resolve(__dirname, "./src/httpClient/")
        }
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html"
    }), new Dotenv()],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.(html)$/,
                use: "html-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ],
    },
    node: {
        fs: "empty" // fix "Can't resolve 'fs'" error
    }
};
