const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 打印环境变量
console.log('process.env.NODE_ENV = ', process.env.NODE_ENV)

const config = {
  entry: './src/index.js', // 打包入口地址
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.join(__dirname, 'dist') // 输出文件目录
  },
  module: {
    rules: [
      {
        test: /\.css$/, //匹配所有的 css 文件
        use: 'css-loader' // use: 对应的 Loader 名称
      }
    ]
  },
  plugins: [ // 配置插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    // open: true // 是否开启浏览器
  }
}

module.exports = (env, argv) => {
  // 打印 mode(模式) 值
  console.log('argv.mode = ', argv.mode)
  // 这里可以通过不同的模式修改 config 配置
  return config;
}