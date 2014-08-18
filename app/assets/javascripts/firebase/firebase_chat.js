var recieveMessage = function(snapshot) {
  var message = snapshot.val().message;
  var name = message.name;
  var content = message.content;
  var user = ((name === "Rootul") ? "me" : "you"); //Set Rootul to user.name
  var output = "<div class='message " + user + "'>";
        output += "<span>" + content + "</span>";
        output += "</div>";
  $("#msg-output").append(output);
}

var sendMessage = function(firebase, name, content) {
  firebase.chat.push({
    message : {
      name: name,
      content: content,
      timestamp: Firebase.ServerValue.TIMESTAMP
    }
  });
}