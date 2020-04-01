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
});

export type AppConfig = Readonly<ReturnType<typeof config>>;
