const anagrammator = (input: string): Array<string> => {
    if (input.length <= 0) {
        return [];
    } else if (input.length === 1) {
        return [input];
    } else {
        const output: Array<string> = [];
        const usedLetters: Array<string> = [];
        for (let i = 0; i < input.length; i += 1) {
            const currentChar = input.charAt(i);
            if (!usedLetters.includes(currentChar)) {
                usedLetters.push(currentChar);
                output.push(...anagrammator(`${input.substring(0, i)}${input.substring(i + 1)}`).map((anagram) => `${anagram}${currentChar}`));
            }
        }
        return output;
    }
}

export default anagrammator;
