const path = require('path')
const PnpWebpackPlugin = require(`pnp-webpack-plugin`)
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  devServer: {
    port: 3000
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [PnpWebpackPlugin],
    modules: [path.resolve('./src')]
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)]
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ]
}
