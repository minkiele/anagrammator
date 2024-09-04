(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.countAnagrams = exports.getCountAnagramFactors = void 0;
    /**
     * This function anagrams in a very stupid way a string
     * This function does not use clever ways to find duplicates,
     * it just iterates all the possible combination of letters
     * as if they were al different.
     * @param input string The string to anagram
     * @returns An array with all the anagrams for the input string
     */
    function anagrammator(input) {
        if (input == null || input.length === 0) {
            return [];
        }
        else if (input.length === 1) {
            return [input];
        }
        else {
            var output = [];
            var usedLetters = [];
            var _loop_1 = function (i) {
                var currentChar = input.charAt(i);
                if (!usedLetters.includes(currentChar)) {
                    usedLetters.push(currentChar);
                    output = output.concat(anagrammator("".concat(input.substring(0, i)).concat(input.substring(i + 1))).map(function (anagram) { return "".concat(anagram).concat(currentChar); }));
                }
            };
            for (var i = 0; i < input.length; i += 1) {
                _loop_1(i);
            }
            return output;
        }
    }
    exports.default = anagrammator;
    /**
     * Get the factorial for the input (input!)
     * @param input A number
     * @returns The factorial for that number
     */
    function factorial(input) {
        var output = 1;
        for (var i = 2; i <= input; i += 1) {
            output *= i;
        }
        return output;
    }
    var getCountAnagramFactors = function (input) {
        var _a;
        var numerator = factorial(input.length);
        var letters = {};
        for (var i = 0; i < input.length; i += 1) {
            letters[input[i]] = ((_a = letters[input[i]]) !== null && _a !== void 0 ? _a : 0) + 1;
        }
        var denominator = Object.keys(letters).map(function (letter) { return factorial(letters[letter]); });
        return {
            numerator: numerator,
            denominator: denominator
        };
    };
    exports.getCountAnagramFactors = getCountAnagramFactors;
    var countAnagrams = function (input) {
        var _a = (0, exports.getCountAnagramFactors)(input), numerator = _a.numerator, denominator = _a.denominator;
        return denominator.reduce(function (acc, factor) { return factor > 1 ? (acc / factor) : acc; }, numerator);
    };
    exports.countAnagrams = countAnagrams;
});
