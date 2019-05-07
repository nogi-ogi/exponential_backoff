const second = 1000;
const rangeMin = 1;
const rangeMax = 5;

// Generate a random jitter between range 5 to 25
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const calculateNewDelay = (retry) => {
    return (((Math.pow(2, retry)) * second) + getRandomInt(rangeMin, rangeMax) * second);
};


module.exports = calculateNewDelay;
