// Função para ativar a rolagem suave
function scrollTo(element) {
    element.scrollIntoView({
        behavior: "smooth"
    });
}

// Adicionar evento de click aos links internos
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        var target = document.querySelector(this.getAttribute('href'));
        scrollTo(target);
    });
});

// Função para abrir e fechar o menu suspenso
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Adicionar evento de click ao botão do menu
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);