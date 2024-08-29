// javascript.js
function carregar() {
    var img = window.document.getElementById('foto');
    var msg = window.document.getElementById('mensagem');
    var msg1 = window.document.getElementById('mensagem1');
    var relogio = window.document.getElementById('relogio');

    var data = new Date();
    var hora = data.getHours(); // Use a hora atual
    //var hora = 3; // Para teste

    if (hora >= 5 && hora <= 12) {
        // bom dia
        msg.innerHTML = `Tenha um bom dia!`;
        img.src = 'img/sol.gif';
        document.body.style.background = '#dbc234';
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        msg.innerHTML = `Tenha uma boa tarde!`;
        img.src = 'img/campo.gif';
        document.body.style.background = '#d8794d';
    } else {
        // boa noite
        msg.innerHTML = `Tenha uma boa noite!`;
        img.src = 'img/noite.gif';
        document.body.style.background = '#113b88e5';
    }

    // Função para atualizar o relógio
    function atualizarRelogio() {
        var agora = new Date();
        var horas = agora.getHours().toString().padStart(2, '0');
        var minutos = agora.getMinutes().toString().padStart(2, '0');
        var segundos = agora.getSeconds().toString().padStart(2, '0');
        relogio.innerHTML = `O horário atual é ${horas}h:${minutos}m:${segundos}s`;
    }

    // Atualiza o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio(); // Chama a função imediatamente para exibir o relógio sem atraso
}

function escolherClima(clima) {
    var img = window.document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 3; // Para teste
    var msg1 = window.document.getElementById('mensagem1');

    if (clima === 'chuvoso' && hora >= 5 && hora <= 12) {
        // dia
        img.src = 'img/tempestade.gif';
        msg1.innerHTML = `O clima atual está chuvoso.`;
        document.body.style.background = '#a3c1ad';
    } else if (clima === 'chuvoso' && hora >= 12 && hora <= 18) {
        // tarde
        img.src = 'img/chuva.gif';
        msg1.innerHTML = `O clima atual está chuvoso.`;
        document.body.style.background = '#5f9ea0';
    } else if (clima === 'estavel' && hora >= 5 && hora <= 12) {
        // dia
        img.src = 'img/sol.gif';
        msg1.innerHTML = `O clima atual está estável.`;
        document.body.style.background = '#dbc234';
    } else if (clima === 'estavel' && hora >= 12 && hora <= 18) {
        // tarde
        img.src = 'img/campo.gif';
        document.body.style.background = '#d8794d';
        msg1.innerHTML = `O clima atual está estável.`;
    } else if (clima === 'chuvoso' && (hora >= 19 || hora <= 4)) {
        // noite
        msg1.innerHTML = `O clima atual está chuvoso.`;
        img.src = 'img/chuva.gif';
        document.body.style.background = '#113b88e5';
    } else if (clima === 'estavel' && (hora >= 19 || hora <= 4)) {
        msg1.innerHTML = `O clima atual está estável.`;
        img.src = 'img/noite.gif';
    }

    // Esconde a caixa de diálogo
    document.getElementById('dialogo').style.display = 'none';
}

