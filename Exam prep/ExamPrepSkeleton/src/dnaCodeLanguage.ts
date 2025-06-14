import { Language } from "./contracts/language";
import { dnaAllowedCharacters } from "./types";
export class DNACodeLanguage implements Language {
    private _charset: Set<dnaAllowedCharacters> = new Set(["A", "C", "G", "T"]);

    get charset(): Set<dnaAllowedCharacters> {
        return this._charset;
    }

    isCompatibleToCharset(message: string): boolean {
        const messageChars = message.split("");
        const allowedChars: string[] = Array.from(this.charset.values());
        const isCompatible = messageChars.every((x) =>
            allowedChars.includes(x)
        );
        return isCompatible;
    }
}
