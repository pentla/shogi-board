module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'shogi.js',
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
            presets: ['@babel/preset-env']
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'shogi/[name].[ext]?[hash]'
          }
        }]
      }
    ]
  }
}
