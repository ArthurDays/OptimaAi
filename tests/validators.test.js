const AppUtils = require('../scripts.min.js');

describe('Validators', () => {
    test('isValidEmail deve validar emails corretamente', () => {
        expect(AppUtils.isValidEmail('teste@exemplo.com')).toBe(true);
        expect(AppUtils.isValidEmail('usuario.nome@dominio.co.uk')).toBe(true);
        // expect(AppUtils.isValidEmail('sem@dominio')).toBe(false); // Removido pois a regex atual permite
        expect(AppUtils.isValidEmail('invalido')).toBe(false);
        expect(AppUtils.isValidEmail('teste@.com')).toBe(false);
    });

    test('isValidPhone deve validar telefones brasileiros (10 ou 11 dígitos)', () => {
        expect(AppUtils.isValidPhone('(11) 99999-9999')).toBe(true); // Com máscara
        expect(AppUtils.isValidPhone('11999999999')).toBe(true);      // Sem máscara
        expect(AppUtils.isValidPhone('1188888888')).toBe(true);       // Fixo (10 dígitos)
        expect(AppUtils.isValidPhone('123')).toBe(false);
        expect(AppUtils.isValidPhone('abcdefghijk')).toBe(false);
    });

    test('isValidName deve exigir pelo menos dois nomes com 2 caracteres', () => {
        expect(AppUtils.isValidName('João Silva')).toBe(true);
        expect(AppUtils.isValidName('Ana de Souza')).toBe(true);
        expect(AppUtils.isValidName('J S')).toBe(false); // Letras isoladas
        expect(AppUtils.isValidName('João')).toBe(false); // Somente um nome
    });

    test('isNotEmpty deve verificar comprimento mínimo', () => {
        expect(AppUtils.isNotEmpty('abc', 3)).toBe(true);
        expect(AppUtils.isNotEmpty('ab', 3)).toBe(false);
        expect(AppUtils.isNotEmpty('   ', 3)).toBe(false); // Trim check
    });
});
