export const config = () => ({
    name: 'Conduit',
    get port() {
        return process.env.PORT || 3000;
    },
    get production() {
        return process.env.NODE_ENV === 'production';
    },
    get graphqlEndpoint() {
        return `http://localhost:${config().port}/graphql`;
    },

    get accessTokenExpiresIn() {
        return 18 * 3600 * 1000;
    },

    get refreshTokenExpiresIn() {
        return 30 * 24 * 3600 * 1000; // 30 days
    },
});

export type AppConfig = Readonly<ReturnType<typeof config>>;
