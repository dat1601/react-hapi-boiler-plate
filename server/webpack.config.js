const path = require('path');

module.exports = {
    target: "node",
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: './src/main.ts',
    },
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, './build'),
    },
    externals: {
        bufferutil: "bufferutil",
        "utf-8-validate": "utf-8-validate"
    }
};