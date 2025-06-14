"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMessageEncoder = void 0;
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
class LanguageMessageEncoder extends partialMessageEncoder_1.PartialMessageEncoder {
    encodedCount = 0;
    decodedCount = 0;
    constructor(language, cipher) {
        super(language, cipher);
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach((x) => (message = message.replaceAll(x, "")));
        return message;
    }
    encodeMessage(secretMessage) {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }
        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        const isCompatible = this.language.isCompatibleToCharset(strippedMessage);
        if (!isCompatible) {
            return "Message not compatible.";
        }
        let encodedMessage = this.cipher.encipher(strippedMessage);
        this.encodedCount += strippedMessage.length;
        return encodedMessage;
    }
    decodeMessage(secretMessage) {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }
        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        const isCompatible = this.language.isCompatibleToCharset(strippedMessage);
        console.log(isCompatible);
        if (!isCompatible) {
            return "Message not compatible.";
        }
        let decodedMessage = this.cipher.encipher(strippedMessage);
        this.decodedCount += strippedMessage.length;
        return decodedMessage;
    }
    totalProcessedCharacters(type) {
        let totalChars = 0;
        switch (type) {
            case "Encoded": {
                totalChars = this.encodedCount;
                break;
            }
            case "Decoded": {
                totalChars = this.decodedCount;
                break;
            }
            case "Both": {
                totalChars = this.encodedCount + this.decodedCount;
                break;
            }
        }
        return `Total processed characters count: ${totalChars}`;
    }
}
exports.LanguageMessageEncoder = LanguageMessageEncoder;
//# sourceMappingURL=languageMessageEncoder.js.map