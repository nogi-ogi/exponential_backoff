const fetcher = require('./fetcher');
const backoff = require('./backoff');

const retries = 3;
const url = 'https://github.com/get/asdf';

backoff(retries, fetcher(url))
    .then((res)=> console.log('Stopping with response status', res.status || res))
    .catch((res) => {console.log('error')});
