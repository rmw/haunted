var firebase = {}

firebase.firebaseSetup = function(roomSession) {
  this.ref = new Firebase("https://haunted.firebaseio.com/");
  this.room = this.ref.child(roomSession);
  this.chat = this.room.child("chat");
  this.game = this.room.child("game");
  this.pause = this.game.child("pause");
  this.player1 = this.game.child("player1");
  this.player2 = this.game.child("player2");
  this.person = this.game.child("person");
  this.ghost = this.game.child("ghost");
}

firebase.recieveMessage = function(snapshot) {
  var message = snapshot.val().message;
  var name = message.name;
  var content = message.content;
  var output = "<div class='message'><b>" + name + ":</b> ";
        output += "<span>" + content + "</span>";
        output += "</div>";
  $("#msg-output").append(output);
}

firebase.preMessage = function(event) {
  event.preventDefault();
  var name = $("#user-name").val()
  var content = $("#msg-input").val()
  $("#msg-input").val("");
  firebase.sendMessage(fb, name, content);
}

firebase.sendMessage = function(firebase, name, content) {
  firebase.chat.push({
    message : {
      name: name,
      content: content,
      timestamp: Firebase.ServerValue.TIMESTAMP
    }
  });
}

firebase.sendCoordinates = function(sprite) {
  firebase.game.push({
    message : {
      sprite: sprite,
      x_coordinates: sprite.x,
      y_coordinates: sprite.y,
      timestamp: Firebase.ServerValue.TIMESTAMP
    }
  });
}
