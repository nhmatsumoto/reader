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
const inputT: string = "aaaa aaaa aaa";
let wordHz: number = 300; //MS

function splitText(text: string): string[] {
    return text.split(/\s+/);
}

function calcTime(text: string): void {
    document.getElementById("timeCount")!.innerHTML = ((splitText(text).length * wordHz) / 1000).toString();
}

// Print word by word
function PrintWord(textInput: string, wordHz: number): void {
    const words: string[] = splitText(textInput);
    let index: number = 0;

    const interval: NodeJS.Timeout = setInterval(() => {
        if (index < words.length) {
            document.getElementById("aa")!.innerHTML = words[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, wordHz);
}

// Print a block of words
// function PrintWordBlock(textInput: string, wordHz: number): void {
//     const words: string[] = textInput.split(/\s+/);
//     let output: string = '';
//     let numWords: number = 2;

//     for (let i: number = 0; i < words.length; i += numWords) {
//         output += `Palavras ${i + 1}-${i + numWords}: `;

//         for (let j: number = i; j < i + numWords && j < words.length; j++) {
//             output += words[j] + ' ';
//         }

//         output += '<br>';
//     }

//     document.getElementById('output')!.innerHTML = output;
// }

PrintWord(inputT, wordHz);