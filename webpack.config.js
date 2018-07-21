module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: `${__dirname}/dist`
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-laoder' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]?[hash]'
          }
        }]
      }
    ]
  }
}
