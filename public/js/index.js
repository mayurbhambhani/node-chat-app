
var socket = io();

let userName = Math.floor(Math.random() * 100);

socket.on('connect', function () {
    console.log("connected to server..");
});

socket.on('disconnect', function () {
    console.log("disconnected from server..");
});

socket.on('newMessage', function (data) {
    // console.log("you've got mail!!", data);
    let formattedTime = moment(data.createdAt).format("h:mm a");
    let li = jQuery('<li></li>')
    li.text(`${formattedTime} ${data.from}:${data.text}`);
    jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function (location) {
    let formattedTime = moment(location.createdAt).format("h:mm a");
    let li = jQuery('<li></li>');
    let a = jQuery('<a target="_blank">My Current Location</a>');
    a.attr("href", location.url);
    li.text(`${formattedTime} user:${userName}:`);
    li.append(a);
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
        from: `user:${userName}`,
        text: jQuery('[name=message]').val()
    };
    // console.log(msg);
    socket.emit('createMessage', msg, function (message) {
        console.log(`message ${JSON.stringify(message)} recieved by server`);
        jQuery('[name=message]').val("");
    });
});

let locationButton = jQuery('#send-location');
locationButton.on('click', function (e) {
    if (!navigator.geolocation) {
        alert("your browser doesnt support geolocations");
    }
    locationButton.attr('disabled', 'disabled');
    locationButton.text("Sending Location...");
    navigator.geolocation.getCurrentPosition(function (location) {
        // console.log(location);
        locationButton.removeAttr('disabled');
        locationButton.text("Send Location");
        socket.emit('createLocationMessage', {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }, function (message) {
            console.log("locations sent");
        });

    }, function () {
        locationButton.removeAttr('disabled');
        locationButton.text("Send Location");
        alert(`couldnt fetch your current location. Some error occured.`);
    });
});