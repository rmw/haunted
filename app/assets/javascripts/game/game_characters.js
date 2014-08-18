var gameCharacters = {};

gameCharacters.createPerson = function() {

  person = game.add.sprite(100, game.world.height - 150, 'sprites');
  person.scale.setTo(1.2, 1.2);
  person.anchor.setTo(0.5, 0.5);
  person.userControl = true;
  person.animations.add('right', [10, 11], 0, true);
  person.animations.add('bottom', [24, 25], 0, true);
  person.animations.add('left', [38, 39], 0, true);
  person.animations.add('up', [52, 53], 0, true);
  person.powerUp = false;
  characters.push(person);
}

gameCharacters.createGhosts = function() {
  ghost1 = game.add.sprite(100, game.world.height - 100, 'sprites');
  ghost1.anchor.setTo(0.5, 0.5);
  ghost1.scale.setTo(1.2,1.2);
  ghost1.isControlled = true;
  ghost1.animations.add('right', [0, 1], 0, true);
  ghost1.animations.add('bottom', [14, 15], 0, true);
  ghost1.animations.add('left', [28, 29], 0, true);
  ghost1.animations.add('up', [42, 43], 0, true);

  ghost2 = game.add.sprite(200, game.world.height - 150, 'sprites');
  ghost2.anchor.setTo(0.5, 0.5);
  ghost2.scale.setTo(1.2,1.2);
  ghost2.isControlled = true;
  ghost2.animations.add('right', [2, 3], 0, true);
  ghost2.animations.add('bottom', [16, 17], 0, true);
  ghost2.animations.add('left', [30, 31], 0, true);
  ghost2.animations.add('up', [44, 45], 0, true);

  ghost3 = game.add.sprite(300, game.world.height - 150, 'sprites');
  ghost3.anchor.setTo(0.5, 0.5);
  ghost3.scale.setTo(1.2,1.2);
  ghost3.isControlled = true;
  ghost3.animations.add('right', [4, 5], 0, true);
  ghost3.animations.add('bottom', [18, 19], 0, true);
  ghost3.animations.add('left', [32, 33], 0, true);
  ghost3.animations.add('up', [46, 47], 0, true);

  ghost4 = game.add.sprite(400, game.world.height - 150, 'sprites');
  ghost4.anchor.setTo(0.5, 0.5);
  ghost4.scale.setTo(1.2,1.2);
  ghost4.isControlled = true;
  ghost4.animations.add('right', [6, 7], 0, true);
  ghost4.animations.add('bottom', [20, 21], 0, true);
  ghost4.animations.add('left', [34, 35], 0, true);
  ghost4.animations.add('up', [48, 49], 0, true);

  ghosts.push(ghost1, ghost2, ghost3, ghost4);
  characters.push(ghost1, ghost2, ghost3, ghost4);
}
