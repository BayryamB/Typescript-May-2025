//DO NOT CHANGE
import { decorator4 } from "../../decorators";
@decorator4
export class PartialMessageEncoder {
    _language;
    _cipher;
    static forbiddenSymbols = ['_', ',', '.', '!', '?', '-', ';', ' '];
    constructor(language, cipher) {
        this._language = language;
        this._cipher = cipher;
    }
    get language() {
        return this._language;
    }
    get cipher() {
        return this._cipher;
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replace(x, ''));
        return message;
    }
    encodeMessage(secretMessage) {
        if (secretMessage.length === 0) {
            throw new Error('No message.');
        }
        let encodedMessage = this._cipher.encipher(secretMessage);
        return encodedMessage;
    }
}
//# sourceMappingURL=partialMessageEncoder.js.map