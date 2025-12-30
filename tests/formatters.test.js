const AppUtils = require('../scripts.min.js');

describe('Formatters', () => {
    test('formatPhone deve aplicar a máscara corretamente', () => {
        expect(AppUtils.formatPhone('11999999999')).toBe('(11) 99999-9999');
        expect(AppUtils.formatPhone('11')).toBe('(11');
        expect(AppUtils.formatPhone('')).toBe('');
        expect(AppUtils.formatPhone('abcdef')).toBe(''); // Apenas números
    });
});
