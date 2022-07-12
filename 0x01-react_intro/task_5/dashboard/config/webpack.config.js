const path = require("path");

module.exports = {
  mode: "production",
  entry: "../src/index.js",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader", "style-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
              },
          },
        ],
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../dist')
  },
};