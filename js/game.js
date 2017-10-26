window.onload = function() {

  //Create a new game, with dimensions of 800 by 600
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

  //Preload function, where we can load all of the assets that will be used
  function preload() {
		game.load.image('player','assets/player.png');
		game.load.image('background,'assets/background.png');
  }

  //Create function, where everything is created
  function create() {
		game.add.sprite(0, 0, 'background');
  }

  //This function runs each and every frame
  function update() {

  }
};
