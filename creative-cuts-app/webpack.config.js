module.exports = {
  entry: "./src/index.js",
    output: {
        path: __dirname + "/dist/assets/",
        filename: "bundle.js", 
        sourceMapFilename: 'bundle.map'
      },
      devtool: '#source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['env', 'stage-0', 'react']
            }
          },
          {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          }
        ]
      }
    }
