document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleciona todas as seções que devem ter o efeito fade-in
    const sections = document.querySelectorAll('.fade-in-on-load');

    // 2. Configuração do Intersection Observer
    const observerOptions = {
        root: null, // viewport como root
        rootMargin: '0px',
        threshold: 0.1 // O elemento é ativado quando 10% dele está visível
    };

    // 3. Função a ser executada quando a intersecção ocorrer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe de animação se a seção estiver visível
                entry.target.classList.add('fade-in-active');
                // Para de observar o elemento
                observer.unobserve(entry.target);
            }
        });
    };

    // 4. Cria o observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 5. Inicia a observação de cada seção
    sections.forEach(section => {
        observer.observe(section);
    });
});