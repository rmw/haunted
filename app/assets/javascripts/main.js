//= require vendor/phaser.min.js
//= require firebase.js
//= require modals.js
//= require game/board.js
//= require game/characters.js
//= require game/images.js
//= require game/features.js

CANVAS_WIDTH = 833;
CANVAS_HEIGHT = 715;
CANVAS_OFFSET = 60;
MAX_SCORE = 10;
DEFAULT_LIVES = 1;
player1 = false;
player2 = false;
currentPlayer = false;
VELOCITY = 200;

var score = 0;
var lives = DEFAULT_LIVES;
var apples = [];
var cherry;
var speedUp;
var slowDown;
var person;
var ghost;
var starOne, starTwo;
var map;
var layer;
var cursors;
var music;
var fb;

var instructions = '<b>PacMan:</b><br />'
  + '<i>Controls</i> - Move your character with the arrow keys.<br />'
  + '<i>Objective</i> - Collect all the apples to win.<br /><br />'
  + '<b>Ghost</b>:<br />'
  + '<i>Controls</i> - Move your character with the arrow keys.<br />'
  + '<i>Objective</i> - Eat PacMan until he has no more lives.<br />'
  + '<br />Need a moment? Press <b>P</b> to pause and <b>R</b> to resume.';

var aboutUs = 'Hello! Welcome to <i>Haunted</i>! We are a team of 5 '
  + 'members that are currently pursuing our passion for coding @ Dev Bootcamp: '
  + 'David Sin, Rootul Patel, Sid Patel, Cassie Moy, and Julius Jung. We hope you enjoy '
  + 'playingthis game as much as we enjoyed creating it. Check out our <a id="aboutus" '
  + 'href="https://github.com/red-spotted-newts-2014/haunted">GitHub Repo</a>!';

$(document).ready(function() {
  roomSession = $("#room-session").val();
  if (typeof roomSession !== "undefined") {
    fb = new firebase.firebaseSetup(roomSession);
  }

  $("#instructions-button").click(modals.instructions);

  $("#aboutus-button").click(modals.aboutUs);

  $("#chat-form").submit(firebase.preMessage);

  fb.chat.on("child_added", firebase.recieveMessage);

  document.onkeydown = function (e) {
    if(e.which == 80) {
      fb.pause.set(true);
    } else if (e.which == 82) {
      fb.pause.set(false);
    }
  }

  fb.pause.on("value", function(snapshot) {
    game.paused = snapshot.val();
  });

  fb.player1.on("value", function(snapshot) {
    if ((snapshot.val() === true) && (currentPlayer !== "player1")) {
      fb.player2.on("value", function(snapshot) {
        if (snapshot.val() !== true) {
          modals.confirmP2();
        }
      });
    } else {
      modals.confirmP1(roomSession);    
    }
  });
  
});

var game = new Phaser.Game( CANVAS_WIDTH, CANVAS_HEIGHT, Phaser.AUTO, 'pac', { preload: preload, create: create, update: update } );

function preload() {
  loadImages();
  game.load.tilemap('map', '/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.audio('music', '/music.mp3');
};

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  board.createBoard();
  characters.createCharacters();

  var gamePhysicsArray = [person, ghost, apples, cherry, speedUp, slowDown, starOne, starTwo];

  for (var i = 0; i < gamePhysicsArray.length; i++) {
    game.physics.arcade.enable(gamePhysicsArray[i]);
  }

  person.body.collideWorldBounds = true;
  ghost.body.collideWorldBounds = true;
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  game.physics.arcade.collide(person,layer);
  game.physics.arcade.collide(ghost,layer);
  board.createOverlaps();
  features.pacmanCoordinates();
  features.ghostCoordinates();
}
