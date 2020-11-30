import leaderboard from '../leaderboard';


describe('Testing pageInit function', () => {
    it('Testing if the Object returned is an Array', () => {
        const result = leaderboard.addScore('Marilena', 10);
        expect(typeof result).toBe('object');
    })
});