const fetch = require('node-fetch');

const checkStatus = (res) => {
    if (res.ok)
        return Promise.resolve(res);
    else
        return Promise.reject(res);
};

const fetcher = (url) => () => {
    return fetch(url)
        .then(checkStatus)
        .catch ( (res) => {
            if (res.status === 429 || res.status >= 500){
                console.log('server error or too many requests');
                return Promise.reject(res);
            } else {
                console.log('error');
                return Promise.resolve(res);
            }
        })
};


module.exports = fetcher;
