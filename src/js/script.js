var btn = document.querySelector(".botao").addEventListener("click", () => {
    var dia = document.querySelector("#dia").value;
    var mes = document.querySelector("#mes").value;
    var ano = document.querySelector("#ano").value;

    validarDia(dia);
    validarMes(mes);
    validarAno(ano);

    mostrar(dia, mes, ano);


});

function validarDia(dia) {
    var span = document.querySelectorAll("span");

    if (dia == "" || dia > 31) {
        span[1].innerHTML = "Dia invalido";
        document.querySelector("#dia").style.borderColor = "red";
    } else {
        span[1].style.display = "none";
        document.querySelector("#dia").style.borderColor = "grey";
    }
}

function validarMes(mes) {
    var span = document.querySelectorAll("span");

    if (mes == "" || mes > 12) {
        span[2].innerHTML = "Mês invalido";
        document.querySelector("#mes").style.borderColor = "red";
    } else {
        span[2].style.display = "none";
        document.querySelector("#mes").style.borderColor = "grey";
    }
}

function validarAno(ano) {
    var span = document.querySelectorAll("span");

    if (ano == "" || ano > 2023) {
        span[3].innerHTML = "Ano invalido";
        document.querySelector("#ano").style.borderColor = "red";
    } else {
        span[3].style.display = "none";
        document.querySelector("#ano").style.borderColor = "grey";
    }
}



function mostrar(dia, mes, ano) {
    let year = 0;
    var span = document.querySelectorAll(".value");

    if (dia <= 31 && dia > 0) {
        span[2].value = "";
        span[2].innerHTML = 31 - dia;
    } else {
        return;
    }

    if (mes <= 12 && mes > 0) {
        span[1].value = "";
        span[1].innerHTML = 12 - mes;
    } else {
        return;
    }

    if (ano <= 2023 && ano > 0) {
        span[0].value = "";
        span[0].innerHTML = 2023 - ano;
        year = span[0].innerHTML;
    }
    Complements(year)

}

function Complements(Yr) {
    const elem = document.getElementById('pShizuCommitAtoaMemokkk');
    let text = '';

    if (Yr <= 5) {
        text = 'Ainda não sabe nem que existe, é sustentado pela mãe e só chora.';
    } else if (Yr <= 10) {
        text = 'Só quer jogar joguinho sandbox e implora por migalhas de atenção.';
    } else if (Yr <= 15) {
        text = 'Minecraft já faz parte da vida do tal indivíduo e tem dificuldade de fazer amizade fora da internet.';
    } else if (Yr <= 17) {
        text = 'Conheceu o mundo do Rock e quer ter só roupa preta (faz quase emo ou 50% emo).';
    } else if (Yr <= 17) {
        text = 'Aprendeu que a vida não é fácil e desconta tudo em maconha e joguinho online, não sai de casa para tomar um sol pois está cansado do trabalho. A partir daí já é 100% estranho, ou é emo ou é Eboy/egirl.';
    } else if (Yr <= 23) {
        text = 'Pensa em parar de beber pois já viu que gastou mais de 1000 reais no ano só de maconha, pensa em sair do emprego de telemarketing e seguir carreira.';
    } else if (Yr <= 30) {
        text = 'Faz faculdade da área que gosta e quer ter um gato pois a solidão em casa já não te agrada mais (no final acaba arrumando mulher).';
    } else if (Yr <= 40) {
        text = 'A sua vida já passa a ser linear. Já tem um gol bolinha e pensa em ter filho (isso se não já fez a cagada de ter feito antes dos 25).';
    } else {
        text = 'Tá quase indo de arrasto pra cima pois não cuidou da saúde aos 20 kkkk otário.';
    }

    elem.textContent = text;
}