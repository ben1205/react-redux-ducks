var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
        },
        {
            test: /\.css$/,
            use:[
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  // 启用 css modules
                  modules: true,
                  // 定义最终编译之后的样式名称
                  // local: 应用的 class 名称
                  // hash: 编译时随机生成的 hash 值， 避免 class 名称重复
                  localIdentName: '[local]--[hash:base64:5]'
                }
              }
            ]
        }, 
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images/'
            }
        }
    ]
  }
};