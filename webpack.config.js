module.exports = {
  entry: getEntrySources(['./src/js/entry.js']),
  output: {
      publicPath: 'http://localhost:8080/',
      filename: 'src/js/bundle.js'
  },
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
            'style',
            'css',
            'autoprefixer?browsers=last 3 versions',
            'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
            'react-hot',
            'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
        ]
      }
    ]
  }
};

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
	  sources.push('webpack-dev-server/client?http://localhost:8080');
	  sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}