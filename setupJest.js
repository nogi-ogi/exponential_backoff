const fetch = require('jest-fetch-mock');
global.fetch = require('jest-fetch-mock');
jest.setMock('node-fetch', fetch);
