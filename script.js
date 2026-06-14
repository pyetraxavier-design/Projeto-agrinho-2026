// Aguarda todo o HTML ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. ANIMAÇÃO DO CABEÇALHO AO ROLAR A PÁGINA (Efeito Futurista)
    // ==========================================================================
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        // Se a página for rolada mais de 50px, adiciona uma classe de preenchimento
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "0 15px 40px rgba(27, 77, 62, 0.15)";
            header.style.top = "10px"; // O menu "baixa" um pouco, suavizando
        } else {
            // Volta ao estado original (mais transparente e alto)
            header.style.background = "rgba(255, 255, 255, 0.85)";
            header.style.boxShadow = "0 10px 30px rgba(27, 77, 62, 0.08)";
            header.style.top = "20px";
        }
    });

    // ==========================================================================
    // 2. INTERATIVIDADE E VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    // ==========================================================================
    const form = document.getElementById("form-contato");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", (event) => {
        // Impede que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Pega os valores digitados pelo usuário
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação simples de segurança (garante que não enviou espaços vazios)
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        // Simula o sucesso do envio de dados
        // Personaliza a mensagem usando o nome que o usuário digitou
        mensagemSucesso.innerHTML = `Obrigado pelo contato, ${nome}! Sua mensagem sobre tecnologia no agro foi enviada com sucesso para a equipe do Agrinho.`;
        
        // Torna a mensagem visível
        mensagemSucesso.style.display = "block";

        // Limpa todos os campos do formulário para o próximo uso
        form.reset();

        // Esconde a mensagem de sucesso automaticamente após 7 segundos
        setTimeout(() => {
            mensagemSucesso.style.style.display = "none";
        }, 7000);
    });
});
