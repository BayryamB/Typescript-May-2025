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
    private encodedCount: number = 0;
    private decodedCount: number = 0;

    constructor(language: Tlanguage, cipher: TCipher) {
        super(language, cipher);
    }

    public encodeMessage(secretMessage: string): string {
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

    public decodeMessage(secretMessage: string): string {
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

    public totalProcessedCharacters(type: string): string {
        let msgProcessedChars = "";
        switch (type) {
            case "Encoded":
                msgProcessedChars = this.encodedCount.toString();
            case "Decoded":
                msgProcessedChars = this.decodedCount.toString();
            case "Both":
                msgProcessedChars = (
                    this.encodedCount + this.decodedCount
                ).toString();
        }
        return msgProcessedChars;
    }
}
