const path = require( "path" );

const config = {
  mode: "none",
  entry: "./lib/inaturalistjs.js",
  output: {
    filename: "inaturalistjs.js",
    path: path.resolve( __dirname, "../build" ),
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      }
    ]
  },
  resolve: {
    fallback: {
      querystring: require.resolve( "querystring-es3" )
    }
  }
};

module.exports = config;
