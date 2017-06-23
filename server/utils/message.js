let moment = require("moment");

let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};

let generateLocationMessage = (location) => {
    return {
        url: `https://maps.google.com/maps?q=${location.latitude}%2C${location.longitude}`,
        createdAt: moment().valueOf()
    };
};


module.exports = {
    generateMessage,
    generateLocationMessage
};