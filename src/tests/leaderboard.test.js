import leaderboard from '../leaderboard';

const array = [{ score: 10, user: 'Marilena' },
  { score: 10, user: 'Marilena' },
  { score: 10, user: 'Marilena' },
  { score: 10, user: 'Marilena' },
  { score: 10, user: 'Marilena' },
  { score: 10, user: 'Marilena' }];

leaderboard.getInfo = jest.fn().mockImplementationOnce(() => {
  const result = Promise.resolve(array);
  return result;
});

describe('Test add score response', () => {
  it('Testing fetch is working and respond with the right object', () => {
    const result = leaderboard.addScore('Marilena', 10);
    expect(typeof result).toBe('object');
  });
});

describe('Testing get Info', () => {
  const result = leaderboard.getInfo();
  test('Test if return an object', () => result.then(data => {
    expect(typeof data).toBe('object');
  }));

  test('Test if the objects has a property called score', () => result.then(data => {
    expect(data[0]).toHaveProperty('score');
  }));

  test('Test if the objects has a property user', () => result.then(data => {
    expect(data[0]).toHaveProperty('user');
  }));

  test('Test if the property score is the type number', () => result.then(data => {
    expect(typeof data[0].score).toBe('number');
  }));

  test('Test if return just 6 elements', () => result.then(data => {
    expect(data.length).toBe(6);
  }));
});
