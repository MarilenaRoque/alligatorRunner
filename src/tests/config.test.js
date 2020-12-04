import config from '../Config/config';

describe('Testing Config attribute', () => {
  it('Check width attribute', () => {
    expect(config).toHaveProperty('width');
  });
  it('Check height attribute', () => {
    expect(config).toHaveProperty('height');
  });
  it('Check type attribute', () => {
    expect(config).toHaveProperty('type');
  });
  it('Check physics attribute', () => {
    expect(config).toHaveProperty('physics');
  });
  it('Check parent attribute', () => {
    expect(config).toHaveProperty('parent');
  });
  it('Check dom attribute', () => {
    expect(config).toHaveProperty('dom');
  });

  it('Config should always have arcade default physics', () => {
    expect(config.physics).toStrictEqual({ default: 'arcade' });
  });
});