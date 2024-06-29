const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode : 'development',
    entry : {
        bundle: path.resolve(__dirname, 'src/index.js') // reads assets whereas * __dirname returns the working directory path
    },
    output : {
        path: path.resolve(__dirname, 'dist'), // where to put bundeled files
        filename: '[name][contenthash].js', // include hash encodings with file name for caching 
        clean: true, // to clean and keep only one bundle file
        assetModuleFilename : '[name][ext]'
    },
    module : {
        rules : [
            {
                test: /\.scss$/, // check for any file containing .scss extension 
                use : ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'], //loaders for sass
            },
            {
                test: /\.css$/, // check for any file containing .css extension 
                use : ['style-loader', 'css-loader', 'postcss-loader'], //loaders for css
            },
            {
                test: /\.js$/, // check for any file containing .js extension 
                use: {
                    loader: 'babel-loader', // for older version compatibility
                    options: {
                        presets : ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg)$/i,
                type : "asset/resource"
            },
        ]
    },
    devtool : "source-map", // enables source map file for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist') 
        },
        port: 3000,  // app access port
        open: true, // open app in browser whenever runs
        hot: true,
        compress : true, // enables compression
        historyApiFallback: true,
    },
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',  
            template: 'src/main.html' // the file that will be call to render on index.html
        }), // create and load new html file 

        new BundleAnalyzerPlugin(),
    ],

}