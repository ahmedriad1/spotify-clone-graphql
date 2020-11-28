const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const {
    default: NodeHotLoaderWebpackPlugin,
} = require('node-hot-loader/NodeHotLoaderWebpackPlugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
    const tsConfigFile = path.resolve(__dirname, 'tsconfig.json');

    return {
        entry: path.resolve(__dirname, 'src/main.ts'),
        target: 'node',
        devtool: false,
        mode: 'none',
        output: {
            filename: 'main.js',
        },
        externals: [nodeExternals()],
        optimization: { nodeEnv: false },
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
            new NodeHotLoaderWebpackPlugin({
                // force: true, // boolean. true - always launch entries, false (by default) - launch entries only in watch mode.
                fork: false, // boolean | string[]. For example ['--key', 'key value'].
                // args, // string[]. For example ['--arg1', 'arg2'].
                autoRestart: true, // boolean
                // logLevel: 'minimal',
            }),
        ],
        stats: {
            version: false,
            children: false,
            modulesSpace: 0,
        },
    };
};
