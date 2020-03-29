export const config = () => ({
    name: 'Conduit',
    get port() {
        return process.env.PORT || 2999;
    },
    get production() {
        return process.env.NODE_ENV === 'production';
    },
});

export type AppConfig = Readonly<ReturnType<typeof config>>;
