gamePieces = {};

gamePieces.createTeleport = function() {
  starOne = game.add.sprite(10, game.world.height/2, 'star');
  starOne.anchor.setTo(0.5, 0.5);
  starOne.scale.setTo(1,1);

  starTwo = game.add.sprite(825, game.world.height/2, 'star');
  starTwo.anchor.setTo(0.5, 0.5);
  starTwo.scale.setTo(1,1);
}

gamePieces.createOneDot = function() {
    dot = game.add.sprite(Math.random()*700, Math.random()*500, 'diamond');
    dot.anchor.setTo(0.5, 0.5);
    dots.push(dot);
};

gamePieces.createMultipleDots = function(count) {
    for(var i = 0; i < count; i++){
    gamePieces.createOneDot();
  }
};

gamePieces.createPowerUp = function() {
  cherry = game.add.sprite(Math.random()*700, Math.random()*500, 'star');
  cherry.anchor.setTo(0.5, 0.5);
  powerUp.push(cherry);
};
