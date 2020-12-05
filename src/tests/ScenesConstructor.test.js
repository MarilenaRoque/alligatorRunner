
import GameScene from '../Scenes/GameScene';
import OverScene from '../Scenes/OverScene';
import BootScene from '../Scenes/BootScene';
import PreloaderScene from '../Scenes/PreloaderScene';
import TitleScene from '../Scenes/TitleScene';
import OptionsScene from '../Scenes/OptionsScene';
import CreditsScene from '../Scenes/CreditsScene';
import SubmitScore from '../Scenes/SubmitScore';
import InstructionsScene from '../Scenes/Instructions';


describe('Testing Scenes Constructors', () => {
  it('Game scene is a function constructor', () => {
    expect(typeof GameScene).toBe('function');
  });

  it('InstructionsScene is a function constructor', () => {
    expect(typeof InstructionsScene).toBe('function');
  });

  it(' OverScene is a function constructor', () => {
    expect(typeof OverScene).toBe('function');
  });

  it('OptionsScene is a function constructor', () => {
    expect(typeof OptionsScene).toBe('function');
  });

  it(' Boot is a function constructor', () => {
    expect(typeof BootScene).toBe('function');
  });

  it(' Title scene is a function constructor', () => {
    expect(typeof TitleScene).toBe('function');
  });

  it('Preloader scene is a function constructor', () => {
    expect(typeof PreloaderScene).toBe('function');
  });

  it('CreditScene scene is a function constructor', () => {
    expect(typeof CreditsScene).toBe('function');
  });

  it('SubmitScore scene is a function constructor', () => {
    expect(typeof SubmitScore).toBe('function');
  });
});