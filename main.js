//Implementar:
//>Métricas:
//qnt total de palavras lidas.
//qnt de palavras lidas no dia + tempo de leitura
//qnt de palavras lidas na semana + tempo de leitura
//qnt de palavras lidas no mês + tempo de 
//>Funcionalidades:
//selecionar texto por arquivo .txt .pdf
//limpeza do texto (remover caracteres especiais)
//configurar leitura por palavra ou por blocos (frases) 
//configurar frequência de exibição dos blocos
//configurar duração da leitura
//configurar volume do som


const inputT = "Simultaneidade otimista O EF Core implementa a simultaneidade otimista";
let wordHz = 300; //MS

function splitText(text){
    return text.split(/\s+/);
}

function calcTime(text) {
    document.getElementById("timeCount").innerHTML = ((splitText(text).length * wordHz) / 1000).toString();
}

function PrintWord(textInput, wordHz) {
    const words = splitText(textInput);
    let index = 0;

    const interval = setInterval(() => {
        if (index < words.length) {
            document.getElementById("aa").innerHTML = words[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, wordHz);
}

PrintWord(inputT, wordHz);
calcTime(inputT, wordHz);