import leaderboard from '../leaderboard';



describe('Test add score response', () => {

  it('Testing fetch is working and respond with the right object', () => {
    const result = leaderboard.addScore('Marilena', 10);
    expect(typeof result).toBe('object');
  });
  
});

describe('Testing get Info', () => {

  const result = leaderboard.getInfo();
  test('Test if return an object', () => {
    return result.then(data => {
      expect(typeof data).toBe('object');
    });
  });

  test('Test if the objects has a property called score', () => {
    return result.then(data => {
      expect(data[0]).toHaveProperty('score');
    });
  });

  test('Test if the objects has a property user', () => {
    return result.then(data => {
      expect(data[0]).toHaveProperty('user');
    });
  });

  test('Test if the property score is the type number', () => {
    return result.then(data => {
      expect(typeof data[0].score).toBe('number');
    });
  });
  
});

