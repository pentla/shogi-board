module.exports = {
  mode: 'development',
  entry: './src/index.js',
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
            presets: ['@babel/env']
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
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
