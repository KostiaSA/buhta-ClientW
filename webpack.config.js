module.exports = {
//    entry: "./buhta_modules/components/index.js",
    entry: "./buhta_modules/components/index.js",
    output: {
        filename: "./dist/BuhtaApp.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    // resolve: {
    //     // Add '.ts' and '.tsx' as resolvable extensions.
    //     extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    // },
    //
     resolve: {
         extensions: ["", ".webpack.js", ".web.js", ".js"]
     },

     module: {
    //     loaders: [
    //         // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
    //         { test: /\.tsx?$/, loader: "ts-loader" }
    //     ],
    //
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
     },

    // When importing a module whose path matches one of the following,  just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
     externals: {
         "react": "React",
         "react-dom": "ReactDOM",
         "lodash": "_",
         "jquery":"$",
         "socket.io-client":"io"
     },
};