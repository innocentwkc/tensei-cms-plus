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
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  })
  .ts('client/index.tsx', 'build/public/app.js')
  .react()
