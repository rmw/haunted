var features = {};

features.eatApple = function(person, apples) {
  score++;
  apples.kill();

  if (score === MAX_SCORE) {
    this.gameOver("Player 1");
  }
}

features.cherry = function(person, cherry) {
  cherry.kill();
  person.cherry = true;
  setTimeout(function(){person.cherry = false}, 5000);
}

features.speedUp = function(character, speedUp) {
  speedUp.kill();
  character.speedMultiplyer = 1.5;
  setTimeout(function(){character.speedMultiplyer = 1}, 5000);
}

features.slowDown = function(character, slowDown) {
  slowDown.kill();
  character.speedMultiplyer = 0.5;
  setTimeout(function(){character.speedMultiplyer = 1}, 5000);
}

features.teleportOne = function(person, starOne) {
  person.kill();
  person.reset(790,353);
  person.body.velocity.x = -200;
};

features.teleportTwo = function(person, starTwo) {
  person.kill();
  person.reset(40,353);
  person.body.velocity.x = 200;
};

features.pacMeetsGhost = function(person, ghost) {
  if (person.cherry === true){
    features.eatGhost(person, ghost);
  }
  else {
    features.loseLife(person, ghost);
  }
}

features.eatGhost = function(person, ghost) {
  ghost.kill();
  ghost.reset(Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT);
};

features.loseLife = function(person) {
  person.kill();
  ghost.kill();
  person.reset(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
  ghost.reset(70, 70);
  features.gameOver("Player 2");
};

features.movePlayer = function(character) {
  if (cursors.left.isDown || this.pointer('left')){
    character.body.velocity.x = -VELOCITY * character.speedMultiplyer;
    character.body.velocity.y = 0;
    character.animations.play('left', 10, true);
  } else if (cursors.right.isDown || this.pointer('right')){
    character.body.velocity.x = VELOCITY * character.speedMultiplyer;
    character.body.velocity.y = 0;
    character.animations.play('right', 10, true);
  } else if (cursors.up.isDown || this.pointer('up')){
    character.body.velocity.y = -VELOCITY * character.speedMultiplyer;
    character.body.velocity.x = 0;
    character.animations.play('up', 10, true);
  } else if (cursors.down.isDown || this.pointer('down')) {
    character.body.velocity.y = VELOCITY * character.speedMultiplyer;
    character.body.velocity.x = 0;
    character.animations.play('bottom', 10, true);
  }
}

features.pointer = function(direction) {
  if (game.input.activePointer.isDown) {
    if (direction === "up") {
      if (game.input.activePointer.y < 100) {
        return true;
      }
    } else if (direction === "down") {
      if (game.input.activePointer.y > 220) {
        return true;
      }
    } else if (direction === "left") {
      if (game.input.activePointer.x < 100) {
        return true;
      }
    } else if (direction === "right") {
      if (game.input.activePointer.x > 600) {
        return true;
      }
    }
  }
  return false;
}

features.pacmanCoordinates = function() {
  if (currentPlayer === "player1") {
    this.movePlayer(person);
    if ((person.x !== person.lastx) || (person.y !== person.lasty )) {
      fb.person.set({
        x : person.position.x,
        y : person.position.y
      });
    }

    fb.ghost.on("value", function(snapshot) {
      ghost.x = snapshot.val().x
      ghost.y = snapshot.val().y
    });
  }
}

features.ghostCoordinates = function() {
  if (currentPlayer === "player2") {
    this.movePlayer(ghost);
    if ((ghost.x !== ghost.lastx) || (ghost.y !== ghost.lasty )) {
      fb.ghost.set({
        x : ghost.position.x,
        y : ghost.position.y
      });
    }

    fb.person.on("value", function(snapshot) {
      person.x = snapshot.val().x
      person.y = snapshot.val().y
    });
  }
}

features.gameOver = function(winner) {
  fb.pause.set(true);
  fb.player1.set(false);
  fb.player2.set(false);
  location.reload();
};