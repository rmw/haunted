var board = {}

board.createBoard = function() {
  board.createMap();
  board.createTeleport();
  board.createApples();
  board.createCherry();
  board.createSpeedUp();
  board.createSlowDown();
  board.addMusic();
}

board.addMusic = function() {
  music = game.add.audio('music');
  music.play();
}

board.createMap = function() {
  map = game.add.tilemap('map');
  map.addTilesetImage('desert');
  layer = map.createLayer('Ground');
  map.setCollision(38);
  layer.resizeWorld();
}

board.createTeleport = function() {
  starOne = game.add.sprite(10, 353, 'star');
  starOne.anchor.setTo(0.5, 0.5);
  starOne.scale.setTo(1,1);

  starTwo = game.add.sprite(825, 353, 'star');
  starTwo.anchor.setTo(0.5, 0.5);
  starTwo.scale.setTo(1,1);
}

board.createApple = function(x, y) {
  apple = game.add.sprite(x, y, 'apple');
  apple.anchor.setTo(0.5, 0.5);
  apple.scale.setTo(0.5,0.5);
  apples.push(apple);
}

board.createApples = function() {
  board.createApple(290, 67); //top left
  board.createApple(65, 250); //upper left
  board.createApple(160, 445); //mid left
  board.createApple(260, 580); //center left
  board.createApple(65, 670); //bot left
  board.createApple(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50) //center mid
  board.createApple(CANVAS_WIDTH - 290, 67); //top right
  board.createApple(CANVAS_WIDTH - 160, 445); //mid right
  board.createApple(CANVAS_WIDTH - 260, 580); //mid left
  board.createApple(CANVAS_WIDTH - 65, 670); //bot right
}

board.createCherry = function() {
  cherry = game.add.sprite(CANVAS_WIDTH - 65, 250, 'cherry');
  cherry.anchor.setTo(0.5, 0.5);
}

board.createSpeedUp = function() {
  speedUp = game.add.sprite(CANVAS_WIDTH - 200, CANVAS_HEIGHT - 200, 'speed');
  speedUp.anchor.setTo(0.5, 0.5);
}

board.createSlowDown = function() {
  slowDown = game.add.sprite(160, 200, 'slow');
  slowDown.anchor.setTo(0.5, 0.5);
}

board.overlap = function(from, to, features) {
  game.physics.arcade.overlap(from, to, features, null, this);
}

board.createOverlaps = function() {
  this.overlap(person, apples, features.eatApple);
  this.overlap(person, cherry, features.cherry);
  this.overlap(person, speedUp, features.speedUp);
  this.overlap(person, slowDown, features.slowDown);
  this.overlap(ghost, speedUp, features.speedUp);
  this.overlap(ghost, slowDown, features.slowDown);
  this.overlap(person, starOne, features.teleportOne);
  this.overlap(person, starTwo, features.teleportTwo);
  this.overlap(person, ghost, features.pacMeetsGhost);
}
