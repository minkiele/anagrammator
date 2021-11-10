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
            var _loop_1 = function (i) {
                output.push.apply(output, anagrammator("" + input.substring(0, i) + input.substring(i + 1, input.length)).map(function (partialAnagram) { return "" + partialAnagram + input[i]; }));
            };
            for (var i = 0; i < input.length; i += 1) {
                _loop_1(i);
            }
            return output;
        }
    }
    ;
    exports.default = anagrammator;
});
