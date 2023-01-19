const { default: anagrammator, countAnagrams, getCountAnagramFactors } = require("../lib/anagrammator");

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

describe('Anagrammator', () => {
    it('should correctly anagram "io"', () => {
        const anagrams = anagrammator('io');
        expect(anagrams).toHaveLength(2);
        expect(anagrams).toEqual(expect.arrayContaining(['io', 'oi']));
    });
    it('should correctly anagram "noi"', () => {
        const anagrams = anagrammator('noi');
        expect(anagrams).toHaveLength(6);
        expect(anagrams).toEqual(expect.arrayContaining(['noi', 'nio', 'oni', 'ino', 'oin', 'ion']));
    });
    it('should correctly anagram "ciao"', () => {
        const anagrams = anagrammator('ciao');
        expect(anagrams).toHaveLength(24);
        expect(anagrams).toEqual(expect.arrayContaining([
            'ciao', 'cioa', 'caio', 'caoi', 'coai', 'coia',
            'icao', 'icoa', 'iaco', 'iaoc', 'ioca', 'ioac', 'acio', 'acoi', 'aico', 'aioc', 'aoci', 'aoic',
            'ocia', 'ocai', 'oica', 'oiac', 'oaci', 'oaic'
        ]));
    });
    it('should correctly anagram "essi"', () => {
        const anagrams = anagrammator('essi');
        expect(anagrams).toHaveLength(12);
        expect(anagrams).toEqual(expect.arrayContaining([
            'essi', 'esis', 'eiss', 'isse', 'ises', 'iess',
            'ssei', 'ssie', 'sesi', 'seis', 'sise', 'sesi'
        ]));
    });
    it('should correctly anagram "aaaa"', () => {
        const anagrams = anagrammator('aaaa');
        expect(anagrams).toHaveLength(1);
        expect(anagrams).toEqual(expect.arrayContaining(['aaaa']));
    });
    it('should correctly anagram "baaaa"', () => {
        const anagrams = anagrammator('baaaa');
        expect(anagrams).toHaveLength(5);
        expect(anagrams).toEqual(expect.arrayContaining(['baaaa', 'abaaa', 'aabaa', 'aaaba', 'aaaab']));
    });
});

describe('Count Anagrams', () => {
    it('should correctly count anagrams for "io"', () => {
        const count = countAnagrams('io');
        expect(count).toBe(2);
    });
    it('should correctly count anagrams for "noi"', () => {
        const count = countAnagrams('noi');
        expect(count).toBe(6);
    });
    it('should correctly count anagrams for "ciao"', () => {
        const count = countAnagrams('ciao');
        expect(count).toBe(24);
    });
    it('should correctly count anagrams for "essi"', () => {
        const count = countAnagrams('essi');
        expect(count).toBe(12);
    });
    it('should correctly count anagrams for "baaaa"', () => {
        const count = countAnagrams('baaaa');
        expect(count).toBe(5);
    });
});

describe('Count Anagrams Formula', () => {
    it('should correctly count anagrams for "io"', () => {
        const formula = getCountAnagramFactors('io');
        expect(formula).toMatchObject({
            numerator: 2,
            denominator: expect.arrayContaining([1])
        });
        expect(formula.denominator).toHaveLength(2);
    });
    it('should correctly count anagrams for "noi"', () => {
        const formula = getCountAnagramFactors('noi');
        expect(formula).toMatchObject({
            numerator: 6,
            denominator: expect.arrayContaining([1])
        });
        expect(formula.denominator).toHaveLength(3);
    });
    it('should correctly count anagrams for "ciao"', () => {
        const formula = getCountAnagramFactors('ciao');
        expect(formula).toMatchObject({
            numerator: 24,
            denominator: expect.arrayContaining([1])
        });
        expect(formula.denominator).toHaveLength(4);
    });
    it('should correctly count anagrams for "essi"', () => {
        const formula = getCountAnagramFactors('essi');
        expect(formula).toMatchObject({
            numerator: 24,
            denominator: expect.arrayContaining([1, 2])
        });
        expect(formula.denominator).toHaveLength(3);
    });
    it('should correctly count anagrams for "baaaa"', () => {
        const formula = getCountAnagramFactors('baaaa');
        expect(formula).toMatchObject({
            numerator: 120,
            denominator: expect.arrayContaining([1, 24])
        });
        expect(formula.denominator).toHaveLength(2);
    });
});
