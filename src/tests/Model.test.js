
import Model from '../Model';

const newModel = new Model();

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
describe('Test Model creation', () => {
  it('Testing if model returns an object', () => {
    expect(typeof newModel).toBe('object');
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel).toHaveProperty('_soundOn');
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel).toHaveProperty('_musicOn');
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel).toHaveProperty('_bgMusicPlaying');
  });
});

describe('Test if model properties are initialized with righ values', () => {
  it('Testing if that object have the right attributes', () => {
    expect(newModel._soundOn).toBe(true);
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel._musicOn).toBe(true);
  });
  it('Testing if that object have the right attributes', () => {
    expect(newModel._bgMusicPlaying).toBe(false);
  });
});