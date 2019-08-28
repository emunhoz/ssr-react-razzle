const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  modify (config, { target, dev }, webpack) {
    /** @config: SASS Loader Support */
    const isServer = target !== 'web'

    const postCssLoader = {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss'
      }
    }

    const sassLoader = {
      loader: 'sass-loader',
      options: {
        includePaths: [path.resolve(__dirname, '../node_modules')]
      }
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: isServer
        ? ['css-loader', sassLoader]
        : dev
          ? [
            'style-loader',
            {
              loader: 'css-loader',
              options: { modules: false, sourceMap: true }
            },
            postCssLoader,
            sassLoader
          ]
          : ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              postCssLoader,
              sassLoader
            ]
          })
    })

    if (!isServer && !dev) {
      config.plugins.push(
        new ExtractTextPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          allChunks: true
        })
      )
    }
    /** @endconfig */

    // add ./src to module resolver so you can import modules with absolute path
    config.resolve.modules.push('src')

    config.devtool = dev ? 'eval-source-map' : 'none'

    return config
  }
}
