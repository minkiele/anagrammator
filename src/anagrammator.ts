/**
 * This function anagrams in a very stupid way a string
 * This function does not use clever ways to find duplicates,
 * it just iterates all the possible combination of letters
 * as if they were al different.
 * @param input string The string to anagram
 * @returns An array with all the anagrams for the input string
 */
function anagrammator(input: string): Array<string> {
  if (input == null || input.length === 0) {
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
        output.push(
          ...anagrammator(`${input.substring(0, i)}${input.substring(i + 1)}`).map(
            (anagram) => `${anagram}${currentChar}`,
          ),
        );
      }
    }
    return output;
  }
}
export default anagrammator;

/**
 * Get the factorial for the input (input!)
 * @param input A number
 * @returns The factorial for that number
 */
function factorial(input: number): number {
  let output = 1;
  for (let i = 2; i <= input; i += 1) {
    output *= i;
  }
  return output;
}

export const getCountAnagramFactors = (input: string): {numerator: number, denominator: Array<number>} => {
    const numerator = factorial(input.length);
    const letters: Record<string, number> = {};
    for (let i = 0; i < input.length; i += 1) {
      letters[input[i]] = (letters[input[i]] ?? 0) + 1;
    }
    const denominator = Object.keys(letters).map((letter) => factorial(letters[letter]));
    return {
        numerator,
        denominator
    };
};

export const countAnagrams = (input: string): number => {
    const {numerator, denominator} = getCountAnagramFactors(input);
    return denominator.reduce((acc, factor) => factor > 1 ? (acc / factor) : acc, numerator);
}
