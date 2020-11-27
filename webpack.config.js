const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = (config) => {
    // Remove ForkTsCheckerWebpackPlugin
    const index = config.plugins.findIndex(
        (p) => p.constructor.name === 'ForkTsCheckerWebpackPlugin',
    );
    if (index !== -1) {
        config.plugins.splice(index, 1);
    }
    // Tweak ts-loader
    const tsRule = config.module.rules.find((r) => String(r.test) === '/.tsx?$/');
    const tsLoader = tsRule.use.find((x) => x.loader === 'ts-loader');
    tsLoader.options.transpileOnly = true;

    // Hot reload
    const hotReloadEntry = 'webpack/hot/poll?1000';

    config.entry = [config.entry];
    config.watch = true;
    config.externals = [
        nodeExternals({
            allowlist: [hotReloadEntry],
        }),
    ];
    config.plugins.push(
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.WatchIgnorePlugin({
            paths: [/\.js$/, /\.d\.ts$/],
        }),
        // new StartServerPlugin({ name: config.output.filename }),
    );

    return config;
};
