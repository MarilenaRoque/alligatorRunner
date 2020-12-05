import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  parent: 'myBody',
  dom: {
    createContainer: true,
  },
};