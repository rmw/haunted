var features = {};

features.teleportOne = function(person, starOne) {
  person.kill();
  person.reset(790,358);
  person.body.velocity.x = -200;
};

features.teleportTwo = function(person, starTwo) {
  person.kill();
  person.reset(40,358);
  person.body.velocity.x = 200;
};

features.loseLife = function(person, ghosts) {
  lives--;
  person.kill();

  if (lives === 0) {
    features.gameOver("Player 2");
  } else {
    person.reset(100, 100);
  }
};

features.eatDot = function(person, dots) {
  score++;
  dot_count--;
  dots.kill();

  if (dot_count === 0 && powerUp_count === 0) {
    features.gameOver("Player 1");
  }
}

features.powerUp = function(person, powerUp) {
  score += 5;
  powerUp_count--;
  powerUp.kill();
  person.powerUp = true;
  setTimeout(function(){person.powerUp = false}, 5000);

  if (dot_count === 0 && powerUp_count === 0) {
    features.gameOver("Player 1");
  }
}

features.gameOver = function(winner) {
  alert("Winner: " + winner);
};

features.eatGhosts = function(person, ghosts) {
    ghost_lives--;
    ghosts.kill();

    if (ghost_lives === 0) {
      features.gameOver("Player 1");
    }
};

features.returnCoordinates = function(sprite) {
  var coordinates = [sprite.x, sprite.y];
  return coordinates;
};
