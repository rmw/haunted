//= require firebase/firebase_chat.js
//= require firebase/firebase_game.js

$(document).ready(function() {

  // Setup
  var roomSession = $("#room-session").val();
  if (typeof roomSession !== "undefined") {
    var firebase = new firebaseSetup(roomSession);
  }

  // Recieve a message
  firebase.chat.on("child_added", recieveMessage);

  // Send a message
  $("#chat-form").submit(function(event) {
    event.preventDefault();
    var name = $("#user-name").val()
    var content = $("#msg-input").val()
    $("#msg-input").val("");
    sendMessage(firebase, name, content);
  });

  function sendCoordinates(sprite) {
    firebase.game.push({
      message : {
        sprite: sprite,
        x_coordinates: sprite.x,
        y_coordinates: sprite.y,
        timestamp: Firebase.ServerValue.TIMESTAMP
      }
    });
  }

});

function firebaseSetup(roomSession) {
  this.ref = new Firebase("https://haunted.firebaseio.com/");
  this.room = this.ref.child(roomSession);
  this.chat = this.room.child("chat");
  this.game = this.room.child("game");
}
