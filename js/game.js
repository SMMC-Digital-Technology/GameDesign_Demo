window.onload = function() {

  //Create a new game, with dimensions of 800 by 600
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

	var player;
  var moveKeys;
  var speed = 5;
	var powerups;
	var environment;
  var scoreText;
  var score = 0;

  //Preload function, where we can load all of the assets that will be used
  function preload() {
		game.load.image('player','assets/player.png');
		game.load.image('background','assets/background.png');
    game.load.image('enemy', 'assets/enemy.png');
		game.load.image('powerup','assets/powerUp.png');
		game.load.image('ground', 'assets/ground.png');

	}	//END of preload

  //Create function, where everything is created
  function create() {

		//World creation
		game.add.sprite(0, 0, 'background');

		environment = game.add.group();
		environment.enableBody = true;

		ground = environment.create(0,game.world.height-48,'ground');
		ground.width = game.world.width;
		ground.body.immovable = true;


		//Player creation
		player = game.add.sprite(game.world.width/2,game.world.width/2,'player');
		game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.gravity.y = 200;
    player.body.collideWorldBounds = true;

		moveKeys = game.input.keyboard.addKeys(
      {
        'up': Phaser.KeyCode.W,
        'left': Phaser.KeyCode.A,
        'right': Phaser.KeyCode.D
      }
    );

		powerups = game.add.group();
		powerups.enableBody = true;
		powerups.create(50,200,'powerup');

    scoreText = game.add.text(650, 16, 'Score: ' + score, {fontSize: '32px', fill: '#FFF' });

  }	//END of create

  //This function runs each and every frame
  function update() {
		//Collision events
		game.physics.arcade.collide(player, environment);
    game.physics.arcade.overlap(player, powerups, collectPowerup);

	 if (moveKeys.left.isDown) {	//Player moves left
		 player.x -= speed;
	 }
	 else if (moveKeys.right.isDown) {	//Player moves right
		 player.x += speed;
	 }
		if(moveKeys.up.isDown && player.body.touching.down){	//Player jumps
			player.body.velocity.y = -350;
		}
  }	//END of update

	//Increase the player's speed when they collect a powerup
	function collectPowerup(player, powerup){
		speed *= 1.2;
		powerups.remove(powerup);
	}	//END of collectPowerup
};
