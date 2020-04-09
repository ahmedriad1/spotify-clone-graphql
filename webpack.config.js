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
    const tsLoader = tsRule && tsRule.use.find((x) => x.loader === 'ts-loader');
    if (tsLoader) {
        tsLoader.options.transpileOnly = true;
    }

    // todo: hot reload

    return config;
};
