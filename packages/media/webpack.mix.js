const mix = require('laravel-mix')

mix
  .webpackConfig({
    externals: {
      react: 'window.React'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('autoprefixer')
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  })
  .ts('client/index.tsx', 'build/public/app.js')
  .react()
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')
    ]
  })
