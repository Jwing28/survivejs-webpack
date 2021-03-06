const { mode } = require('webpack-nano/argv');
const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');
const cssLoaders = [parts.autoprefix(), parts.tailwind()];

const commonConfig = merge([
  { entry: ['./src'] },
  parts.page({ title: 'Demo' }),
  parts.extractCSS({ loaders: cssLoaders }),
  parts.loadImages({ limit: 15000 }),
  parts.loadJavaScript(),
  { output: { path: path.resolve(process.cwd(), 'dist') } },
  parts.clean(),
]);

const productionConfig = merge([
  parts.eliminateUnusedCSS(),
  parts.attachRevision,
  parts.generateSourceMaps({ type: 'source-map' }),
  { optimization: { splitChunks: { chunks: 'all' } } },
  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          },
        },
      },
    },
  },
]);

const developmentConfig = merge([
  { entry: ['webpack-plugin-serve/client'] },
  parts.devServer(),
]);

const getConfig = (mode) => {
  switch (mode) {
    case 'production':
      return merge(commonConfig, productionConfig, { mode });
    case 'development':
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
