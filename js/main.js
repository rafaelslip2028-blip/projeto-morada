document.addEventListener('DOMContentLoaded', () => {
    // 1. Controle do Menu Hambúrguer no Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Fecha o menu ao clicar em qualquer item da lista
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // 2. Destacar link ativo da página atual no menu
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });

    // 3. Envio do Formulário de Contato Direto para o WhatsApp
    const contatoForm = document.querySelector('form');
    
    if (contatoForm) {
        contatoForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário HTML

            // Captura os valores dos campos
            const nomeInput = document.getElementById('nome');
            const whatsappInput = document.getElementById('whatsapp');
            const assuntoSelect = document.getElementById('assunto');
            const mensagemInput = document.getElementById('mensagem');

            if (nomeInput && whatsappInput && assuntoSelect && mensagemInput) {
                const nome = nomeInput.value;
                const whatsapp = whatsappInput.value;
                const assunto = assuntoSelect.options[assuntoSelect.selectedIndex].text;
                const mensagem = mensagemInput.value;

                // Formata a mensagem que será enviada para o WhatsApp
                const textoFormatado = `Olá, meu nome é *${nome}* (Tel/WhatsApp: ${whatsapp}).\n\n*Assunto:* ${assunto}\n*Mensagem:* ${mensagem}`;
                const textoCodificado = encodeURIComponent(textoFormatado);

                // Número oficial do Zyan
                const numeroWhatsApp = "5571996113441";

                // Abre o WhatsApp com a mensagem pronta
                window.open(`https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`, '_blank');
            }
        });
    }
});