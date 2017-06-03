const expect = require("expect");

const message = require("./message");


describe("generate message test", () => {

    it("should return proper generated message", () => {
        let msg = {
            from: 'user1',
            text: 'hello! how are you'
        }
        let generatedMsg = message.generateMessage(msg.from, msg.text);
        expect(generatedMsg.from).toBe(msg.from);
        expect(generatedMsg.text).toBe(msg.text);
        expect(generatedMsg.createdAt).toBeA("number");
    });
});

describe("generate location message test", () => {

    it("should return proper generated url", () => {
        let location = {
            latitude: 1.21,
            longitude: 2.3
        };
        let url = `https://maps.google.com/maps?q=${location.latitude}%2C${location.longitude}`;
        let generateLocMessage = message.generateLocationMessage(location);
        expect(generateLocMessage.url).toBeA("string").toBe(url);
        expect(generateLocMessage.createdAt).toBeA("number");
    });
});
