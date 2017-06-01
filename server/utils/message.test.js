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
