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

import database from './database';


const inputT = database.Get();
let wordHz = 300; //MS

function splitText(text){
    return text.split(/\s+/);
}

function calcTime(text) {
    document.getElementById("timeCount").innerHTML = ((splitText(text).length * wordHz) / 1000).toString();
}

//Print word by word
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

//Print a block of words 
function PrintWordBlock(textInput, wordHz){

    const words = textInput.split(/\s+/); 
    let output = '';
    let numWords = 2;

    for (let i = 0; i < words.length; i += numWords) {
      output += `Palavras ${i + 1}-${i + numWords}: `;

      for (let j = i; j < i + numWords && j < words.length; j++) {
        output += words[j] + ' ';
      }

      output += '<br>';
    }

    document.getElementById('output').innerHTML = output;

}

//PrintWordBlock(inputT, 3000);

PrintWord(inputT, wordHz);
calcTime(inputT, wordHz);