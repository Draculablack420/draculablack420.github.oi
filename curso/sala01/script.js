// Botão voltar
function voltar() {

    alert("Voltando para a tela anterior...");

}


// Botão Próximo
function proximo() {

    // Pega o texto digitado
    let descricao = document.getElementById("descricao").value;

    // Verifica se o usuário digitou alguma coisa
    if (descricao.trim() === "") {

        alert("Digite uma descrição do problema.");

        return;
    }

    alert("Ocorrência registrada com sucesso!");

}


// Mostrar imagem escolhida
function mostrarImagem(event) {

    let arquivo = event.target.files[0];

    if (arquivo) {

        let preview = document.getElementById("preview");

        preview.src = URL.createObjectURL(arquivo);

        preview.style.display = "block";
    }

}


// Menu inferior
function menu(opcao) {

    if (opcao === "mapa") {
        alert("Abrindo Mapa...");
    }

    else if (opcao === "registrar") {
        alert("Você está em Registrar.");
    }

    else if (opcao === "inicio") {
        alert("Abrindo Início...");
    }

    else if (opcao === "historico") {
        alert("Abrindo Histórico...");
    }

    else if (opcao === "comunidade") {
        alert("Abrindo Comunidade...");
    }

}