const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
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
              bypassOnDebug: true,
              disable: true,
              },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    hot:true,
		contentBase: path.resolve('./dist'),
    compress: true,
	},
  output: {
    filename: "bundle.js",
    path: path.resolve('./dist')
  },
};