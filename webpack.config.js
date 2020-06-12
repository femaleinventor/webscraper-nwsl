const webpack = require('webpack');
const path = require('path');
const folder = require('./config/folders').folder;

const environments = {
    production: function() {
        return false;
    },
    development: function() {
        return true;
    }
}

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    watch: true,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    entry: folder.components.index,
    output: {
        filename: 'index.bundle.js',
        path: folder.build.path,
        publicPath: '/build',
    },
    plugins: environments.production() ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '*']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        // hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/react']
                }
            }
        ]
    }
};