function createBoard() {

  walls = game.add.group();
  walls.enableBody = true;
  walls.physicsBodyType = Phaser.Physics.ARCADE;

  var c = walls.create(200, 200, 'firstaid');
  c.name = 'veg';
  c.body.immovable = true;

  for (var i=0; i < 25; i++) {

    // //top border
    // wall = walls.create(0+i*32, 0, 'firstaid');
    // wall.body.immovable = true;

    // //left border
    // wall = walls.create(0, 25+i*20, 'firstaid');
    // wall.scale.setTo(1.5, 0.75);
    // wall.body.immovable = true;

    // //right border
    // wall = walls.create(750, 30+i*20, 'firstaid');
    // wall.scale.setTo(1.5, 0.75);
    // wall.body.immovable = true;

  }

  // for (var i=0; i < 2; i++) {
  //    //top right box (near border)
  //   ledge = platforms.create(i*50+600, 100, 'platform');
  //   ledge.scale.setTo(1.5, 0.75);
  //   ledge.body.immovable = true;

  //    //top left box (near border)
  //   ledge = platforms.create(i*50+100, 100, 'platform');
  //   ledge.scale.setTo(1.5, 0.75);
  //   ledge.body.immovable = true;

  //   //bottom right box
  //   ledge = platforms.create(i*50+600, 400, 'platform');
  //   ledge.scale.setTo(1.5, 0.75);
  //   ledge.body.immovable = true;

  //   //bottom left box
  //   ledge = platforms.create(i*50+100, 400, 'platform');
  //   ledge.scale.setTo(1.5, 0.75);
  //   ledge.body.immovable = true;

  //    //center box
  //   ledge = platforms.create(i*50+350, 250, 'platform')
  //   ledge.scale.setTo(1.5, 0.75);
  //   ledge.body.immovable = true;

  //   ledge = platforms.create(i*50+350, 275, 'platform')
  //   ledge.scale.setTo(1.5, 0.75);
  //   ledge.body.immovable = true;
  // }

  // //inner borders
  // for (var i=0; i < 12; i++) {
  //   //top right border
  //   ledge = platforms.create(650, i*25+100, 'platform');
  //   ledge.scale.setTo(1.5, 0.75);
  //   ledge.body.immovable = true;

  //   ledge = platforms.create(100, i*25+100, 'platform');
  //   ledge.scale.setTo(1.5, 0.75);
  //   ledge.body.immovable = true;

  // }
}
