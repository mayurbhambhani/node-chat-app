
let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

let generateLocationMessage = (location) => {
    return {
        url: `https://maps.google.com/maps?q=${location.latitude}%2C${location.longitude}`,
        createdAt: new Date().getTime()
    };
};


module.exports = {
    generateMessage,
    generateLocationMessage
};