import fetch from 'node-fetch';
import waitOn from 'wait-on';

// https://github.com/gothinkster/realworld/tree/master/api
const apiBaseUrl = 'http://localhost:3000/api';
const post = (path: string, body: unknown) =>
    fetch(`${apiBaseUrl}${path}`, {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

const get = (path: string) =>
    fetch(`${apiBaseUrl}${path}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
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

describe('Registration POST /api/users', () => {
    it('invalid request', async () => {
        const response = await post('/users', {});
        expect(response.status).toBe(422);
    });

    it('invalid (empty) values', async () => {
        const response = await post('/users', { email: '', username: '', password: '' });
        expect(response.status).toBe(422);
        const body = await response.json();
    });

    it('valid request', async () => {
        const response = await post('/users', {
            email: `r${Math.random().toString(36).slice(-5)}@toastable.net`,
            username: 'Barton',
            password: 'diseasefulness',
        });
        expect(response.statusText).toBe('Created');
        expect(await response.json()).toEqual({
            user: {
                email: expect.stringContaining('@toastable.net'),
                name: 'Barton',
                bio: null,
                image: null,
            },
        });
    });
});

describe('Get Profile', () => {
    it('root user', async () => {
        const response = await get('/profiles/root');
        const body = await response.json();
        expect(body.profile.username).toEqual('root');
    });
});

describe('List Articles', () => {
    it('GET /api/articles', async () => {
        const response = await get('/articles');
        const body = await response.json();
        expect(body.articles).toBeTruthy();
    });
});

describe('Create Article', () => {
    it('Authenticated POST /api/articles', async () => {
        const createArticle = {
            article: {
                title: 'How to train your dragon',
                description: 'Ever wonder how?',
                body: 'You have to believe',
                tagList: ['reactjs', 'angularjs', 'dragons'],
            },
        };
        const response = await post('/articles', createArticle);
        const body = await response.json();
        expect(body.article).toBeTruthy();
    });
});
