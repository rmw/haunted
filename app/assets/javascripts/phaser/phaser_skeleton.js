//= require phaser/phaser.min.js
//= require game/board.js
//= require game/game_characters.js
//= require game/controls.js
//= require game/images.js
//= require game/game_pieces.js
//= require game/features.js

var game = new Phaser.Game( 833, 715, Phaser.AUTO, 'pac', { preload: preload, create: create, update: update } );

//preload images to use as icons in the game
function preload() {
  loadImages();

  game.load.tilemap('map', '/fartedshartpart.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('Desert', '/deserttile.png');
  game.load.audio('music', '/music.mp3');
};

var characters = [], dots = [], ghosts = [], powerUp = [];
var key1, key2, key3, key4;
var person, ghost1, ghost2, ghost3, ghost4;
var platforms;
var scoreText, livesText, starOne, starTwo;
var score = 0, maxScore = 20, lives = 4, ghost_lives = 4, dot_count = 10, powerUp_count = 1;

var map;
var layer;
var cursors;
var music;
// var a;
function changeVolume(pointer) {
    if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }

}

//create sprites (game icons) to be used during game play
function create() {
  music = game.add.audio('music');
  music.play();

  game.physics.startSystem(Phaser.Physics.ARCADE);
  // game.physics.startSystem(Phaser.Physics.P2JS);

map = game.add.tilemap('map');
map.addTilesetImage('Desert');
layer = map.createLayer('Ground');

layer.resizeWorld();

// var a = game.physics.p2.convertCollisionObjects(map,"ObjectLayer")
// collisionLayer = map.createLayer('ObjectLayer'); //no work :(
// this.game.physics.p2.convertCollisionObjects(map, visualLayer, collisionLayer);

  // map = game.add.tilemap('map');
  // map.addTilesetImage('Desert');

  // layer = map.createLayer('Ground');
  // collisionLayer = map.createLayer('ObjectLayer');



  // var tile = map.getTileWorldXY(x, y, undefined, undefined, 'ObjectLayer1');
  // // null = not such tile under x/y
  //   if(tile != null){
  //  // the tileset index
  //   var index = map.getTilesetIndex('Desert');
  //  // null = no such tileset
  //     if(index != null){
  //       var tileset = map.tilesets[index];
  //       // finally you can grab the props of your tile - mind that Phaser.Tile.index starts with 1; however tileProperties start with 0;
  //       var tileProps = tileset.tileProperties[tile.index-1];
  //     }
  //   }


  createBoard();
  controls.createHotkeys();
  gameCharacters.createPerson();
  gameCharacters.createGhosts();
  gamePieces.createTeleport();
  gamePieces.createPowerUp();
  gamePieces.createMultipleDots(dot_count);

  var gamePhysicsArray = [characters, dots, powerUp, starOne, starTwo];

  for (var i = 0; i < gamePhysicsArray.length; i++) {
    game.physics.arcade.enable(gamePhysicsArray[i]);
  }

  for (var i = 0; i < characters.length; i++) {
    characters[i].body.collideWorldBounds = true;
  }

  key1.onDown.add( function() { controls.setUserControl(1) } );
  key2.onDown.add( function() { controls.setUserControl(2) } );
  key3.onDown.add( function() { controls.setUserControl(3) } );
  key4.onDown.add( function() { controls.setUserControl(4) } );

  livesText = game.add.text(680, 550, 'lives:' + lives, { font: "20px Arial", fill: "#ffffff", align: "left" });
  scoreText = game.add.text(32, 550, 'score:' + score, { font: "20px Arial", fill: "#ffffff", align: "left" });

  cursors = game.input.keyboard.createCursorKeys();

}

//create in game functionality such as collisions and updating locations of sprites
function update() {

  game.physics.arcade.collide(person, walls);
  // game.physics.arcade.collide(person, layer);
  // game.physics.arcade.collide(person, collisionLayer);


  for (var i = 0; i < ghosts.length; i++) {
    game.physics.arcade.collide(ghosts[i], walls);
  }
  game.physics.arcade.overlap(person, dots, features.eatDot, null, this);
  game.physics.arcade.overlap(person, powerUp, features.powerUp, null, this);
  game.physics.arcade.overlap(person, starOne, features.teleportOne, null, this);
  game.physics.arcade.overlap(person, starTwo, features.teleportTwo, null, this);
  if (person.powerUp === true){
    game.physics.arcade.overlap(person, ghosts, features.eatGhosts, null, this);
  }
  else {
    game.physics.arcade.overlap(person, ghosts, features.loseLife, null, this);
  }

  characters.forEach(function(character) {
    if (character.userControl === true) {
      if (cursors.left.isDown){
        character.body.velocity.x = -200;
        character.body.velocity.y = 0;
        character.animations.play('left');
      } else if (cursors.right.isDown){
        character.body.velocity.x = 200;
        character.body.velocity.y = 0;
        character.animations.play('right');
      } else if (cursors.up.isDown){
        character.body.velocity.y = -200;
        character.body.velocity.x = 0;
        character.animations.play('up');
      } else if (cursors.down.isDown) {
        character.body.velocity.y = 200;
        character.body.velocity.x = 0;
        character.animations.play('bottom');
      }
    } else {
      game.physics.arcade.moveToObject(character, person, 60);
    }

    livesText.text = 'lives: ' + lives;
    scoreText.text = 'score: ' + score;

  });

}
