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

beforeAll(async () => {
    await waitOn({
        resources: [apiBaseUrl],
    });
}, 15_000);

test('server ready', async () => {
    const result = await fetch(`${apiBaseUrl}`).then((r) => r.statusText);
    expect(result).toBe('OK');
});

describe('registration POST /api/users', () => {
    it('invalid request', async () => {
        const response = await post('/users', {});
        expect(response.status).toBe(422);
    });

    fit('invalid (empty) values', async () => {
        const response = await post('/users', { email: '', username: '', password: '' });
        expect(response.status).toBe(422);
        const body = await response.json();
        console.log('body', body);
    });

    it('valid request', async () => {
        const response = await post('/users', {
            email: `r${Math.random().toString(36).slice(-5)}@toastable.net`,
            username: 'BartonZappulla',
            password: 'diseasefulness',
        });
        expect(response.statusText).toBe('Created');
        expect(await response.json()).toEqual({
            user: {
                email: expect.stringContaining('@toastable.net'),
                name: 'BartonZappulla',
                bio: null,
                image: null,
            },
        });
    });
});
