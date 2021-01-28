const path = require("path");
const webpack = require("webpack");


module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "jquery": "jquery",
      "window.jquery": "jquery",
      "$": "jquery",
      "window.$": "jquery"
    })
  ],

  entry: {
    main: "./src/js/index.js",
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
        ],
      },
    ]
  },

  resolve: {
    alias: {
      "%modules%": path.resolve(__dirname, "src/blocks/modules"),
      "%components%": path.resolve(__dirname, "src/blocks/components"),
    }
  }
};
