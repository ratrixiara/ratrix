//screen size
const SCREEN_W = 1920;
const SCREEN_H = 1080;

//screen center
const SCREEN_CX = SCREEN_W/2;
const SCREEN_CY = SCREEN_H/2;


//game states
const STATE_INIT = 1;
const STATE_RESTART = 2;
const STATE_PLAY = 3;
const STATE_GAMEOVER = 4;


//global variables
var state = STATE_INIT;





// MAIN SCENE
class MainScene extends Phaser.Scene
{
  constructor(){
    super({key: 'SceneMain'});
  }

  preload(){
    this.load.image('imgBack', '../assets/img_back.png');
  }

  create(){
    this.sprBack = this.add.image(SCREEN_CX, SCREEN_CY, 'imgBack');

    this.input.keyboard.on('keydown-P', function(){
      console.log("Game Paused (P)");
      this.scene.pause();
      this.scene.launch('ScenePause');
    }, this)

    this.event.on('resume', function(){
      console.log("Game resumed. (P to Pause)");
    }, this)
  }
  update(time,delta){
    switch(state){
      case STATE_INIT:
        console_log("Init Game");
        state = STATE_RESTART;
        break;

      case STATE_RESTART:
        console_log("Restart Game");
        state = STATE_PLAY;
        break;
      case STATE_PLAY:
        console_log("Play Game");
        state = STATE_GAMEOVER;
        break;
      case STATE_GAMEOVER:
        console_log("Game Over.")
        break;
    }
  }
}

// PAUSE SCENE
class PauseScene extends Phaser.Scene
{
  constructor(){
    super({key: 'ScenePause'});
  }
  create(){
    this.input.keyboard.on('keydown-P', function(){
      this.scene.resume('SceneMain');
      this.scene.stop();
    }, this)
  }
  
}

// Init Phaser Stuff
// Game Config
var config = {
  type: Phaser.AUTO,
  width: SCREEN_W,
  height: SCREEN_H,

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  scene: [MainScene, PauseScene]
};

var game = new Phaser.Game(config);






