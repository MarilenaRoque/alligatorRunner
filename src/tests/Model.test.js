
import Model from '../Model';

const newModel = new Model();


describe('Test Model creation', () => {
  it('Testing if model returns an object', () => {
    expect(typeof newModel).toBe('object');
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel).toHaveProperty('soundOn');
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel).toHaveProperty('musicOn');
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel).toHaveProperty('bgMusicPlaying');
  });
});

describe('Test if model properties are initialized with righ values', () => {
  it('Testing if that object have the right attributes', () => {
    expect(newModel.soundOn).toBe(true);
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel.musicOn).toBe(true);
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel.bgMusicPlaying).toBe(false);
  });
});