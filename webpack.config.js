var webpack = require("webpack");

// The configuration object
module.exports = {
    entry: "./src/index.js", // Where webpack should start
    output: { // Where should webpack place the bundle
        path: __dirname + "dist/assets",
        filename: "bundle.js",
        publicPath: "assets" // Tell the devServer where to find this file when on the client
    },
    devServer: { // How should the webpack devServer operate?
        inline: true, // Use a client entry point so we can access via localhost
        contentBase: "./dist", // Server content from here, with index.html as the default
        port: 3000
    },
    module: { // Instructions to transpile the bundled code
        rules: [ // Rules are used by webpack when importing modules to transpile (allows ES6 without fear)
            {
                // The babel loader
                test: /\.js$/, // run on any .js file
                exclude: /(node_modules)/, // But don't run on anything in the node_modules folder
                loader: 'babel-loader', // Which loader package to use for these files
                query: {
                    presets: ['@babel/preset-env'] // Same as babel.rc
                }
            }
        ]
    }
}