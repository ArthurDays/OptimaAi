/**
 * @jest-environment node
 */

describe('Service Worker', () => {
    let listeners = {};

    // Mock Global Scope setup
    beforeAll(() => {
        // Forcefully overwrite globals using Object.defineProperty to avoid read-only errors if any
        Object.defineProperty(global, 'self', {
            value: {
                addEventListener: jest.fn((event, callback) => {
                    listeners[event] = callback;
                }),
                skipWaiting: jest.fn(() => Promise.resolve()),
                clients: {
                    claim: jest.fn(() => Promise.resolve())
                },
                location: { origin: 'http://localhost' }
            },
            writable: true
        });

        Object.defineProperty(global, 'caches', {
            value: {
                open: jest.fn(),
                match: jest.fn(),
                keys: jest.fn(() => Promise.resolve([])),
                delete: jest.fn(() => Promise.resolve()),
            },
            writable: true
        });

        Object.defineProperty(global, 'fetch', {
            value: jest.fn(),
            writable: true
        });

        // Mock Response Class
        class MockResponse {
            constructor(body, init) {
                this.status = init?.status || 200;
                this._body = body;
                this.body = body; // For simple inspection if needed
            }
            clone() {
                return new MockResponse(this._body, { status: this.status });
            }
            text() {
                return Promise.resolve(this._body);
            }
            json() {
                return Promise.resolve(JSON.parse(this._body));
            }
        }

        // Mock Request Class
        class MockRequest {
            constructor(url) {
                this.url = url;
                this.method = 'GET';
                this.mode = 'cors';
            }
        }

        Object.defineProperty(global, 'Response', { value: MockResponse, writable: true });
        Object.defineProperty(global, 'Request', { value: MockRequest, writable: true });

        // Trigger helper
        global.triggerEvent = (event, data) => {
            if (listeners[event]) {
                listeners[event](data);
            }
        };
    });

    beforeEach(() => {
        jest.clearAllMocks();
        listeners = {};
        jest.resetModules();
        require('../service-worker.js');
    });

    test('Install Event: Deve abrir cache e adicionar arquivos', async () => {
        const mockCache = {
            addAll: jest.fn(() => Promise.resolve()),
        };
        global.caches.open.mockResolvedValue(mockCache);

        const waitUntil = jest.fn();
        global.triggerEvent('install', { waitUntil });

        const installPromise = waitUntil.mock.calls[0][0];
        await installPromise;

        expect(global.caches.open).toHaveBeenCalledWith('optima-v2');
        expect(mockCache.addAll).toHaveBeenCalledWith(expect.arrayContaining(['/index.html', '/scripts.min.js']));
        expect(global.self.skipWaiting).toHaveBeenCalled();
    });

    test('Fetch Event: Deve tentar rede primeiro (Network First)', async () => {
        const mockNetworkResponse = new Response('conteudo da rede');
        global.fetch.mockResolvedValue(mockNetworkResponse);
        global.caches.open.mockResolvedValue({ put: jest.fn() });

        const respondWith = jest.fn();
        const request = new Request('http://localhost/styles.css');
        global.triggerEvent('fetch', { request, respondWith });

        const responsePromise = respondWith.mock.calls[0][0];
        const response = await responsePromise;

        expect(global.fetch).toHaveBeenCalled();
        expect(await response.text()).toBe('conteudo da rede');
    });

    test('Fetch Event: Deve fazer fallback para cache se rede falhar', async () => {
        global.fetch.mockRejectedValue(new Error('Network Error'));

        const mockCacheResponse = new Response('conteudo do cache');
        global.caches.match.mockResolvedValue(mockCacheResponse);

        const respondWith = jest.fn();
        const request = new Request('http://localhost/styles.css');

        global.triggerEvent('fetch', { request, respondWith });

        const responsePromise = respondWith.mock.calls[0][0];
        const response = await responsePromise;

        expect(global.fetch).toHaveBeenCalled();
        expect(global.caches.match).toHaveBeenCalled();
        expect(await response.text()).toBe('conteudo do cache');
    });
});
