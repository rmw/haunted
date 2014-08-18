var controls = {};

controls.createHotkeys = function() {
  key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
  key2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
  key3 = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
  key4 = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
}


controls.setUserControl = function(ghostNumber) {
  for(var i = 0; i < ghosts.length; i++) {
    if (i === (ghostNumber - 1)) {
      ghosts[i].userControl = true;
    } else {
      ghosts[i].userControl = false;
    }
  }
}
