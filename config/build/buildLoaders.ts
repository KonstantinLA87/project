import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  // Typescript
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}
