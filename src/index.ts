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

// const inputText : string = (<HTMLTextAreaElement>document.getElementById("inputTextArea")).value;
// let wordRate: number = parseFloat((<HTMLInputElement>document.getElementById('inputRate')).value);
// let blockRate: number = parseFloat((<HTMLInputElement>document.getElementById('inputBlockRate')).value);


const inputText : string = "A programação orientada a eventos é um paradigma de programação em que o fluxo do programa é determinado por eventos que ocorrem no sistema. Um evento pode ser qualquer coisa, desde uma interação do usuário, como clicar em um botão, até eventos internos do sistema, como a conclusão de uma tarefa.";
let wordRate: number = 300;
let blockRate: number = 5;

function splitText(text: string): string[] {
    return text.split(/\s+/);
}

function calcTime(text: string): void {
    document.getElementById("timeCount")!.innerHTML = ((splitText(text).length * wordRate) / 1000).toString();
}

// Print a block of words
function PrintWords(textInput: string, wordHz: number, blockSize: number): void {
    const words: string[] = splitText(textInput);
    let index: number = 0;

    const interval: NodeJS.Timeout = setInterval(() => {
        if (index < words.length) {
            const blockEnd = Math.min(index + blockSize, words.length);
            const block = words.slice(index, blockEnd).join(' ');
            document.getElementById("aa")!.innerHTML = block;
            index += blockSize;
        } else {
            clearInterval(interval);
        }
    }, wordHz);
}

calcTime(inputText);
PrintWords(inputText, wordRate, 1);
