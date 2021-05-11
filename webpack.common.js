const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'jsons/',
              publicPath: '/jsons/'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: '/images/'
            }
          }
        ]
      },


      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: '/images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WriteFilePlugin(),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src', 'robots.txt'),
        to: path.resolve(__dirname, 'dist', 'robots.txt')
      }
    ]),
    new HtmlWebpackPlugin({
      title: 'nikodem marek',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'vogue-seeandsay.html',
    template: './src/vogue-seeandsay.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'arek-jakubik.html',
    template: './src/arek-jakubik.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'schaftertaco.html',
    template: './src/schaftertaco.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'reserved.html',
    template: './src/reserved.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'short-films.html',
    template: './src/short-films.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'about.html',
    template: './src/about.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'Estee_Lauder.html',
    template: './src/Estee_Lauder.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'na-koncu-drogi.html',
    template: './src/na-koncu-drogi.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'OIO-Moonwalk.html',
    template: './src/OIO-Moonwalk.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'mandragory.html',
    template: './src/mandragory.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'odlamek.html',
    template: './src/odlamek.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'zblizenia.html',
    template: './src/zblizenia.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'lockdown.html',
    template: './src/lockdown.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'machina-umana.html',
    template: './src/machina-umana.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: 'engram.html',
    template: './src/engram.html',
    inject: 'head'
  }),
    new HtmlWebpackPlugin({
    title: 'project-page',
    filename: '4F-Ania-Lewandowska.html',
    template: './src/4F-Ania-Lewandowska.html',
    inject: 'head'
  }),


    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.(woff|woff2|ttf|otf)$/.test(entry)) return 'font';
      },
      fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
      include: 'allAssets'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  externals: {
    $: 'jquery',
    jquery: 'jQuery',
    'window.$': 'jquery'
  }
};
