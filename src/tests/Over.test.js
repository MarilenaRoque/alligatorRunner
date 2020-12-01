import OverScene from '../Scenes/OverScene'

const newScene =  new OverScene;

describe('Test add score response', () => {
    it('Testing fetch is working and respond with the right object', () => {
      expect(newScene).toBe('object');
    });
  });