"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anagrammator = (input) => {
    if (input.length <= 0) {
        return [];
    }
    else if (input.length === 1) {
        return [input];
    }
    else {
        const output = [];
        const usedLetters = [];
        for (let i = 0; i < input.length; i += 1) {
            const currentChar = input.charAt(i);
            if (!usedLetters.includes(currentChar)) {
                usedLetters.push(currentChar);
                output.push(...anagrammator(`${input.substring(0, i)}${input.substring(i + 1)}`).map((anagram) => `${anagram}${currentChar}`));
            }
        }
        return output;
    }
};
exports.default = anagrammator;
