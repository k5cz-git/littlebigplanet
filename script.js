
const botao = document.getElementById("dark-mode");

botao.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botao.innerHTML = "☀️ Modo claro";
    } else {
        botao.innerHTML = "🌙 Modo escuro";
    }

});
