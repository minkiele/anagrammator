/**
 * This function anagrams in a very stupid way a string
 * This function does not use clever ways to find duplicates,
 * it just iterates all the possible combination of letters
 * as if they were al different.
 * @param input string The string to anagram
 * @returns An array with all the anagrams for the input string
 */
function anagrammator (input: string): Array<string> {
  if (input == null || input.length === 0) {
    return [];
  } else if (input.length === 1) {
    return [input];
  } else {
    const output = [];
    for (let i = 0; i < input.length; i += 1) {
      output.push(
        ...anagrammator(`${input.substring(0, i)}${input.substring(i + 1, input.length)}`).map(
          (partialAnagram) => `${partialAnagram}${input[i]}`,
        ),
      );
    }
    return output;
  }
};
export default anagrammator;
