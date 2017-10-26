window.onload = function() {

  //Create a new game, with dimensions of 800 by 600
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

	var player;
  var moveKeys;
  //Preload function, where we can load all of the assets that will be used
  function preload() {
		game.load.image('player','assets/player.png');
		game.load.image('background','assets/background.png');
    game.load.image('enemy', 'assets/enemy.png');
	game.load.image('powerup','assets/powerUp.png');

	}

  //Create function, where everything is created
  function create() {

		game.add.sprite(0, 0, 'background');

	
		player = game.add.sprite(game.world.width/2,game.world.width/2,'player');
		game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.gravity.y = 200;
    player.body.collideWorldBounds = true;

		game.add.sprite(50,50,'powerup');

		moveKeys = game.input.keyboard.addKeys(
      {
        'up': Phaser.KeyCode.W,
        'left': Phaser.KeyCode.A,
        'right': Phaser.KeyCode.D
      }
    );

  }

  //This function runs each and every frame
  function update() {
		if(moveKeys.up.isDown){
			//TODO: Do jump stuff
		}
  }
};
