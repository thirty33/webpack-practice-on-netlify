const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/index.js', //entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js', //end bundle file
        filename: '[name].[contenthash].js', //end bundle file
        // assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    mode: 'development',
    // watch: true,
    resolve: {
        extensions: ['.js'],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|\.styl$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/images/[hash][ext][query]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[hash][ext][query]",
                },
            }

            // {
            //     test: /\.(woff|woff2)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10000,
            //             mimetype: "application/font-woff",
            //             name: "[name].[ext]",
            //             outputPath: "./assets/fonts/",
            //             publicPath: "./assets/fonts/",
            //             esModule: false
            //         }
            //     }
            // }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src', 'assets'),
        //             to: "assets"
        //         }
        //     ]
        // }),
        new Dotenv(),
    ],
}