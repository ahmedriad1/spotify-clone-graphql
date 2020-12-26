const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = (options = {}) => {
    const hmr2 = options.hmr2 === true;
    const tsConfigFile = path.resolve(__dirname, 'tsconfig.json');
    const hotEntry = 'webpack/hot/poll?1000';
    const main = path.resolve(__dirname, 'src/main.ts');

    return {
        entry: !hmr2 ? [hotEntry, main] : main,
        target: 'node',
        devtool: 'source-map',
        mode: 'none',
        output: {
            filename: 'main.js',
            hotUpdateChunkFilename: '.hot/[id].[fullhash:6].hot-update.js',
            hotUpdateMainFilename: '.hot/[fullhash:6].hot-update.json',
        },
        externals: [
            nodeExternals({
                allowlist: [hotEntry],
            }),
        ],
        optimization: {
            moduleIds: 'named',
            nodeEnv: false,
        },
        node: {
            __filename: false,
            __dirname: false,
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                                configFile: tsConfigFile,
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: tsConfigFile,
                }),
            ],
        },
        plugins: [
            ...(hmr2
                ? () => {
                      const {
                          default: NodeHotLoaderWebpackPlugin,
                      } = require('node-hot-loader/NodeHotLoaderWebpackPlugin');
                      return [
                          new NodeHotLoaderWebpackPlugin({
                              fork: false,
                              args: [],
                              autoRestart: true,
                          }),
                      ];
                  }
                : () => {
                      const StartServerPlugin = require('start-server-nestjs-webpack-plugin');
                      return [
                          new webpack.HotModuleReplacementPlugin(),
                          new webpack.WatchIgnorePlugin({
                              paths: [/\.js$/, /\.d\.ts$/],
                          }),
                          new StartServerPlugin({
                              name: 'main.js',
                              nodeArgs: ['-r', 'source-map-support/register'],
                          }),
                      ];
                  })(),
        ],
        stats: {
            version: false,
            children: false,
            modulesSpace: 0,
        },
    };
};
