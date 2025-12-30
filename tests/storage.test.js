const AppUtils = require('../scripts.min.js');

describe('Storage Helper', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('Deve salvar e recuperar dados (JSON)', () => {
        const data = { theme: 'dark' };
        AppUtils.storage.set('test_key', data);

        // Recuperar
        const retrieved = AppUtils.storage.get('test_key');
        expect(retrieved).toEqual(data);
    });

    test('Deve retornar valor default se não encontrar', () => {
        const retrieved = AppUtils.storage.get('inexistente', 'padrao');
        expect(retrieved).toBe('padrao');
    });

    test('Deve usar o prefixo correto', () => {
        AppUtils.storage.set('key', 'valor');
        // Verifica direto no localStorage se o prefixo 'app_' foi usado (padrão da classe)
        expect(localStorage.getItem('app_key')).toContain('valor');
    });
});
