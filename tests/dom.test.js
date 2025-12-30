/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const { App } = require('../scripts.min.js');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('DOM Integration Tests', () => {
    let app;

    beforeEach(() => {
        // Reset DOM
        document.documentElement.innerHTML = html.toString();

        // Mock window properties if needed
        window.scrollTo = jest.fn();

        // Mock IntersectionObserver (used by scroll animations)
        global.IntersectionObserver = class IntersectionObserver {
            constructor(callback) { this.callback = callback; }
            observe() { return null; }
            unobserve() { return null; }
            disconnect() { return null; }
        };

        // Initialize App manually
        app = new App();
    });

    test('Mobile Menu: Deve abrir e fechar ao clicar no botão', () => {
        const btn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-menu-overlay');

        expect(btn).toBeTruthy();
        expect(menu).toBeTruthy();

        // Initial state: closed
        expect(menu.classList.contains('open')).toBe(false);

        // Click to open
        btn.click();
        expect(menu.classList.contains('open')).toBe(true);
        expect(overlay.classList.contains('open')).toBe(true);

        // Click to close
        btn.click();
        expect(menu.classList.contains('open')).toBe(false);
    });

    test('Formulário: Deve bloquear envio inválido e mostrar Toast', async () => {
        const form = document.getElementById('contact-form');


        // Mock fetch para evitar chamada real
        global.fetch = jest.fn();

        expect(form).toBeTruthy();

        // Simular envio vazio
        form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

        // Toast deve aparecer com mensagem de erro
        // O código atual usa VNF (Nome Completo), então deve falhar no nome primeiro ou um por um
        // Lógica atual: Verifica Nome -> Email -> Whatsapp -> Mensagem

        // Esperamos que o toast tenha sido atualizado. 
        // Como o toast usa setTimeout e transições CSS, verificamos o conteúdo do texto.
        const toastMessage = document.getElementById('toast-message');
        expect(toastMessage.textContent).toMatch(/Por favor, insira seu nome completo/i);

        expect(global.fetch).not.toHaveBeenCalled();
    });

    test('Formulário: Deve enviar com dados válidos', async () => {
        const form = document.getElementById('contact-form');
        const inputs = {
            name: form.querySelector('[name="name"]'),
            email: form.querySelector('[name="email"]'),
            whatsapp: form.querySelector('[name="whatsapp"]'),
            message: form.querySelector('[name="message"]')
        };

        // Preencher dados válidos
        inputs.name.value = 'João da Silva'; // Nome + Sobrenome
        inputs.email.value = 'joao@teste.com';
        inputs.whatsapp.value = '11999999999';
        inputs.message.value = 'Mensagem de teste válida com mais de 10 caracteres.';

        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ success: true })
        });

        // Submit
        // Precisamos aguardar a promise do handler de submit. 
        // Como não temos acesso direto à promise do listener, e ele é async, 
        // podemos tentar esperar um tick ou usar setImmediate se estivessemos no node, 
        // ou esperar o mock ser chamado.

        await form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

        // Pequeno delay para garantir processamento async
        await new Promise(resolve => setTimeout(resolve, 100));

        expect(global.fetch).toHaveBeenCalledTimes(1);
        const toastMessage = document.getElementById('toast-message');
        expect(toastMessage.textContent).toMatch(/sucesso/i);
    });
});
