const calculateNewDelay = require('./calculateNewDelay');

describe('exponential back off calculation', () => {

    it('For 5th call, the delay should be in the range 33 to 37 seconds', () => {
       const lower_inclusive = 33000;
       const upper_inclusive = 37000;
       const delay = calculateNewDelay(5);
       expect(delay).toBeGreaterThanOrEqual(lower_inclusive);
       expect(delay).toBeLessThanOrEqual(upper_inclusive);
    });

    it('For 10th call, the delay should be in the range 33 to 37 seconds', () => {
        const lower_inclusive = 1025000;
        const upper_inclusive = 1029000;
        const delay = calculateNewDelay(10);
        expect(delay).toBeGreaterThanOrEqual(lower_inclusive);
        expect(delay).toBeLessThanOrEqual(upper_inclusive);
    });

    it('For 10th call, the delay should be in the range 33 to 37 seconds', () => {
        const lower_inclusive = 1025000;
        const upper_inclusive = 1029000;
        const delay = calculateNewDelay(10);
        expect(delay).toBeGreaterThanOrEqual(lower_inclusive);
        expect(delay).toBeLessThanOrEqual(upper_inclusive);
    });

    it('For 10th call, the delay should be in the range 33 to 37 seconds', () => {
        const lower_inclusive = 1025000;
        const upper_inclusive = 1029000;
        const delay = calculateNewDelay(10);
        expect(delay).toBeGreaterThanOrEqual(lower_inclusive);
        expect(delay).toBeLessThanOrEqual(upper_inclusive);
    });
});
