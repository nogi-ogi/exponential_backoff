const fetch = require('jest-fetch-mock');

jest.setMock('node-fetch', fetch);

const backoff = require('./backoff');
const fetcher = require('./fetcher');

describe('back off', () => {

    it('3 calls to an endpoint that returns HTTP status 429', async () => {

        const response = Promise.resolve({
            ok: false,
            status: 429,
            json: {}
        });

        fetch.mockImplementation(()=> response);

        await response;

        await backoff(3,fetcher('test')).then(function (data) {
            console.log('got data', data);
        }).catch((e) => {
            console.log(e)
        });

        expect(fetch.mock.calls.length).toEqual(3)

    }, 90000000);

    it('3 calls to an endpoint that returns HTTP status 500', async () => {

        const response = Promise.resolve({
            ok: false,
            status: 500,
            json: {}
        });

        fetch.mockImplementation(()=> response);

        await response;

        await backoff(3,fetcher('test')).then(function (data) {
            console.log('got data', data);
        }).catch((e) => {
            console.log(e)
        });

        expect(fetch.mock.calls.length).toEqual(6)

    }, 90000000);

    it('1 call to an endpoint that returns HTTP status 200', async () => {

        const response = Promise.resolve({
            ok: false,
            status: 200,
            json: {}
        });

        fetch.mockImplementation(()=> response);

        await response;

        await backoff(3,fetcher('test')).then(function (data) {
            console.log('got data', data);
        }).catch((e) => {
            console.log(e)
        });

        expect(fetch.mock.calls.length).toEqual(7)

    }, 90000000);
});
