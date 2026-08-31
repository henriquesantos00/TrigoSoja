const botaoTema = document.getElementById('botao-tema');


botaoTema.addEventListener('click', () => {

    document.body.classList.toggle('tema-claro');
    
    if (document.body.classList.contains('tema-claro')) {
        botaoTema.innerHTML = '<span>☀️</span> Modo Claro';
    } else {
        botaoTema.innerHTML = '<span>🌙</span> Modo Escuro';
    }
});