const { default: anagrammator, countAnagrams } = require('../lib/anagrammator');

describe('Anagrammator', () => {
    it('should generate 6 anagrams out of ABC', () => {
        const anagrams = anagrammator('ABC');
            expect(anagrams).toHaveLength(6);
        expect(anagrams).toContain('ABC');
        expect(anagrams).toContain('ACB');
        expect(anagrams).toContain('BAC');
        expect(anagrams).toContain('BCA');
        expect(anagrams).toContain('CAB');
        expect(anagrams).toContain('CBA');
    });
    it('should generate 12 anagrams out of AABC', () => {
        const anagrams = anagrammator('AABC');
        expect(anagrams).toHaveLength(12);
        expect(anagrams).toContain('AABC');
        expect(anagrams).toContain('AACB');
          expect(anagrams).toContain('ABAC');
        expect(anagrams).toContain('ABCA');
        expect(anagrams).toContain('ACAB');
        expect(anagrams).toContain('ACBA');
        expect(anagrams).toContain('BAAC');
        expect(anagrams).toContain('BACA');
        expect(anagrams).toContain('BCAA');
        expect(anagrams).toContain('CAAB');
        expect(anagrams).toContain('CABA');
        expect(anagrams).toContain('CAAB');
    });
    it('should count 6 anagrams out of ABC', () => {
        expect(countAnagrams('ABC')).toBe(6);
    });
    it('should count 12 anagrams out of AABC', () => {
        expect(countAnagrams('AABC')).toBe(12);
    });
    it('should count 60 anagrams out of BANANA', () => {
        expect(countAnagrams('BANANA')).toBe(60);
    });
    it('should count 2520 anagrams out of BANANANAS', () => {
        expect(countAnagrams('BANANANAS')).toBe(2520);
    });
});