console.log("Hello");

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  imageLoad();
}

var characters = [];
var person;
var ghosts = [];
var ghost1, ghost2, ghost3, ghost4;
var key1, key2, key3, key4;
var platforms;

function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);

  createBoard();
  createPerson();
  createGhosts();
  createHotkeys();

  characters.forEach(function(item) { item.body.collideWorldBounds = true; });

  key1.onDown.add(function() { setUserControl(ghosts, 1) });
  key2.onDown.add(function() { setUserControl(ghosts, 2) });
  key3.onDown.add(function() { setUserControl(ghosts, 3) });
  key4.onDown.add(function() { setUserControl(ghosts, 4) });

} // End create()


function update() {

  game.physics.arcade.overlap(person, ghosts, loseLife, null, this);

  characters.forEach(function(character) {
    if (character.userControl === true) {
      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        character.x -= 4;
        returnCoordinates(character);
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        character.x += 4;
        returnCoordinates(character);
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        character.y -= 4;
        returnCoordinates(character);
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        character.y += 4;
        returnCoordinates(character);
      }
    }
  });

  // Ghost random
  // ghosts.forEach(function(item) {
  //     if (item.body.enable == false) {
  //       item.body.velocity.x = 100;
  //     }
  // });
}

function returnCoordinates(sprite) {
  var coordinates = [sprite.x, sprite.y];
  console.log(coordinates);
  return coordinates;
}

function gameOver () {
  // ghost eats pac OR checks to see if if .count equals 0
}

function loseLife (person, ghosts) {
  person.kill();
}
