import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";
import { ProcessedCharacters } from "./types";
export class LanguageMessageEncoder<
        Tlanguage extends Language,
        TCipher extends Cipher<Tlanguage>
    >
    extends PartialMessageEncoder
    implements MessageEncoder
{
    private encodedCount = 0;
    private decodedCount = 0;

    constructor(language: Tlanguage, cipher: TCipher) {
        super(language, cipher);
    }

    public encodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }
        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        if (!this.language.isCompatibleToCharset(strippedMessage)) {
            return "Message not compatible.";
        }
        let encodedMessage = this.cipher.encipher(strippedMessage);
        this.encodedCount += strippedMessage.length;
        return encodedMessage;
    }

    public decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }
        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        if (!this.language.isCompatibleToCharset(strippedMessage)) {
            return "Message not compatible.";
        }
        let decodedMessage = this.cipher.decipher(secretMessage);
        this.decodedCount += strippedMessage.length;
        return decodedMessage;
    }
    public totalProcessedCharacters(type: ProcessedCharacters): string {
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
    protected stripForbiddenSymbols(message: string): string {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach((x) => (message = message.replaceAll(x, "")));
        return message;
    }
}
