
var socket = io();

socket.on('connect', function () {
    console.log("connected to server..");
});

socket.on('disconnect', function () {
    console.log("disconnected from server..");
});

socket.on('newMessage', function (data) {
    console.log("you've got mail!!", data);
    let li = jQuery('<li></li>')
    li.text(`${data.from}:${data.text}`);
    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     text: "first email",
//     from: "client1",
// }, function (message) {
//     console.log(`message ${JSON.stringify(message)} recieved by server`)
// });


jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    let msg = {
        from: `user:${Math.floor(Math.random() * 100)}`,
        text: jQuery('[name=message]').val()
    };
    // console.log(msg);
    socket.emit('createMessage', msg, function (message) {
        console.log(`message ${JSON.stringify(message)} recieved by server`);
        jQuery('[name=message]').val("");
    });
})