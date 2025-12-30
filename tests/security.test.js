const AppUtils = require('../scripts.min.js');

describe('Testes de Segurança e Robustez (Advogado do Diabo)', () => {

    describe('Crash Test - Tipos Inválidos (Null/Undefined/Number)', () => {
        test('Formatters não devem "explodir" com inputs inválidos', () => {
            // TypeError: Cannot read properties of null (reading 'replace')
            expect(AppUtils.formatPhone(null)).toBe('');
            expect(AppUtils.formatPhone(undefined)).toBe('');
            expect(AppUtils.formatPhone(123456789)).toBe('(12) 34567-89'); // Deve converter numero p/ string e aplicar máscara (9 digitos = celular sem DDD completo ou incompleto)
            expect(AppUtils.formatPhone({})).toBe('');
        });

        test('Validators não devem "explodir" com inputs inválidos', () => {
            expect(AppUtils.isValidEmail(null)).toBe(false);
            expect(AppUtils.isValidEmail(undefined)).toBe(false);
            expect(AppUtils.isValidEmail(123)).toBe(false);

            expect(AppUtils.isValidPhone(null)).toBe(false);
            expect(AppUtils.isValidName(null)).toBe(false);
            expect(AppUtils.isNotEmpty(null)).toBe(false);
        });
    });

    describe('Performance / ReDoS / Entradas Massivas', () => {
        test('Não deve travar com strings gigantes (100k chars)', () => {
            const massiveString = 'a'.repeat(100000);
            const start = performance.now();
            expect(AppUtils.isValidEmail(massiveString)).toBe(false);
            const end = performance.now();
            expect(end - start).toBeLessThan(100); // Execução deve ser rápida (<100ms)
        });

        test('Formatador deve truncar ou lidar com strings gigantes', () => {
            const massivePhone = '9'.repeat(10000);
            const result = AppUtils.formatPhone(massivePhone);
            expect(result.length).toBeLessThan(20); // Deve respeitar o tamanho da máscara
        });
    });

});
