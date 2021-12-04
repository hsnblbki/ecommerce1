var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CssMinimizerWebpackPlugin = require ("css-minimizer-webpack-plugin")

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "main.js"
    },
    
    mode: "development",

    devServer: {
        contentBase: path.join(__dirname,"/dist"),
        port: 1239,
        writeToDisk: true,
        open:true,
    },

    module: {
        rules: [
            {
                test:  /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },

            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: "../",
                        },
                      },
                    "css-loader"
                ],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name: '[name].[ext]',
                        outputPath: 'images',
                    }
                  },
                ],
              },
              
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                        esModule:false,
                    }
                  },
                ],
            },

            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$", "jQuery"],
                },
              },

        ],
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new HtmlWebpackPlugin({
            filename: "product.html",
            template: "./src/product.html",
        }),

        new MiniCssExtractPlugin({
            filename: "style.css",
        }),

        new CssMinimizerWebpackPlugin({}),

    ]
};

