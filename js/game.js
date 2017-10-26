window.onload = function() {

  //Create a new game, with dimensions of 800 by 600
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

	var player;

  //Preload function, where we can load all of the assets that will be used
  function preload() {
		game.load.image('player','assets/player.png');
		game.load.image('background','assets/background.png');
    game.load.image('enemy', 'assets/enemy.png');
    game.load.image('NameInCode', 'assets/NameOfFile.jpg'); // Just an example
  }

  //Create function, where everything is created
  function create() {

		player = game.add.sprite(game.world.width/2,game.world.width/2,'player');
		game.add.sprite(0, 0, 'background');

  }

  //This function runs each and every frame
  function update() {

  }
};
