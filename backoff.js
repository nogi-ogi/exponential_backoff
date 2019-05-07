const calculateNewDelay = require('./calculateNewDelay');
const pause = (duration) => new Promise(res => setTimeout(res, duration));

const backoff = (retries, fn, delay = 100, retry = 0) =>
    fn().catch(err => retries > 1
        ? pause(delay).then(() => backoff(retries-1, fn, calculateNewDelay(retry), retry + 1))
        : Promise.reject(err));

module.exports = backoff;
