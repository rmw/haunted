function createImage(name) {
  var location = "/images/" + name + ".png";
  game.load.image(name, location)
}

function createSpritesheet(name, num) {
  var location = "/images/" + name + ".png";
  game.load.spritesheet(name, location, num, num)
}

function loadImages() {
  createImage("ghost");
  createImage("star");
  createImage("firstaid");
  createImage("apple");
  createImage("slow");
  createImage("speed");
  createImage("cherry");
  createSpritesheet("sprites", 32);
  createImage("person");
  createImage("diamond");
};
