import leaderboard from '../leaderboard';


describe('Test add score response', () => {
  it('Testing fetch is working and respond with the right object', () => {
    const result = leaderboard.addScore('Marilena', 10);
    expect(typeof result).toBe('object');
  });
});

