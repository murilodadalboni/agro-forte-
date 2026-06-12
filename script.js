function gerarMensagem() {

    const mensagens = [
        "🌱 Cuidar da natureza é investir no futuro.",
        "🚜 O agro forte depende de um ambiente saudável.",
        "💧 Economizar água é preservar a vida.",
        "🌎 Sustentabilidade é pensar nas próximas gerações.",
        "🌿 Pequenas atitudes geram grandes mudanças."
    ];

    let sorteio =
        mensagens[Math.floor(Math.random() * mensagens.length)];

    document.getElementById("texto").innerHTML = sorteio;
}
