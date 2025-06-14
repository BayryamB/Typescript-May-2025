import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
export class LanguageMessageEncoder extends PartialMessageEncoder {
    encodedCount = 0;
    decodedCount = 0;
    constructor(language, cipher) {
        super(language, cipher);
    }
    encodeMessage(secretMessage) {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }
        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        if (!this.language.isCompatibleToCharset(strippedMessage)) {
            return "Message not compatible.";
        }
        this.encodedCount += strippedMessage.length;
        return this.encodeMessage(strippedMessage);
    }
    decodeMessage(secretMessage) {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }
        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        if (!this.language.isCompatibleToCharset(strippedMessage)) {
            return "Message not compatible.";
        }
        this.decodedCount += strippedMessage.length;
        return this.decodeMessage(strippedMessage);
    }
    totalProcessedCharacters(type) {
        let msgProcessedChars = "";
        switch (type) {
            case "Encoded":
                msgProcessedChars = this.encodedCount.toString();
            case "Decoded":
                msgProcessedChars = this.decodedCount.toString();
            case "Both":
                msgProcessedChars = (this.encodedCount + this.decodedCount).toString();
        }
        return msgProcessedChars;
    }
}
//# sourceMappingURL=languageMessageEncoder.js.map