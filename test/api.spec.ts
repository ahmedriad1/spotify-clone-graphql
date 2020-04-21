import fetch from 'node-fetch';
import waitOn from 'wait-on';

// https://github.com/gothinkster/realworld/tree/master/api
const apiBaseUrl = 'http://localhost:3000/api';
const post = (args: { path: string; body?: unknown; token?: string }) =>
    fetch(`${apiBaseUrl}${args.path}`, {
        body: JSON.stringify(args.body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: args.token ? `Token ${args.token}` : '',
        },
    });

const get = (args: { path: string; token?: string }) =>
    fetch(`${apiBaseUrl}${args.path}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token: args.token || '',
        },
    });

beforeAll(async () => {
    await waitOn({
        resources: [apiBaseUrl],
    });
}, 15_000);

test('server ready', async () => {
    const result = await fetch(`${apiBaseUrl}`).then((r) => r.statusText);
    expect(result).toBe('OK');
});

const authToken = (() => {
    let token: string;
    return async () => {
        if (token === undefined) {
            const credentials = { email: 'root@conduit.com', password: '123' };
            const response = await post({
                path: '/users/login',
                body: { user: credentials },
            });
            const body = await response.json();
            token = body.user.token;
        }
        return token;
    };
})();

describe('User login', () => {
    it('POST /users/login', async () => {
        const token = await authToken();
        expect(token).toBeTruthy();
    });
});

describe('Registration POST /api/users', () => {
    xit('invalid request', async () => {
        const response = await post({ path: '/users', body: { user: {} } });
        expect(response.status).toBe(422);
    });

    it('invalid (empty) values', async () => {
        const response = await post({
            path: '/users',
            body: { user: { email: '', username: '', password: '' } },
        });
        expect(response.status).toBe(422);
        const body = await response.json();
    });

    it('valid request', async () => {
        const randomName = `r${Math.random().toString(36).slice(-5)}`;
        const userData = {
            email: `${randomName}@toastable.net`,
            username: randomName,
            password: '123',
        };
        const response = await post({ path: '/users', body: { user: userData } });
        expect(response.statusText).toBe('Created');
        expect(await response.json()).toEqual({
            user: {
                email: expect.stringContaining('@toastable.net'),
                username: randomName,
                bio: null,
                image: null,
                token: expect.any(String),
            },
        });
    });
});

describe('Get user profile by name', () => {
    it('root', async () => {
        const response = await get({ path: '/profiles/root' });
        const body = await response.json();
        expect(body.profile.username).toEqual('root');
    });
});

describe('List Articles', () => {
    it('GET /api/articles', async () => {
        const response = await get({ path: '/articles' });
        const body = await response.json();
        expect(body.articles).toBeTruthy();
    });

    it('Articles Favorited by Username', async () => {
        const response = await get({ path: '/articles?favorited=jane' });
        const body = await response.json();
        expect(body.articles).toBeTruthy();
    });
});

describe('Create Article', () => {
    it('Authenticated POST /api/articles', async () => {
        const token = await authToken();
        const body = {
            article: {
                title: 'How to train your dragon',
                description: 'Ever wonder how?',
                body: 'You have to believe',
                tagList: ['reactjs', 'angularjs', 'dragons'],
            },
        };

        const response = await post({
            path: '/articles',
            body,
            token,
        }).then((r) => r.json());
        expect(response.article).toBeTruthy();
    });
});
