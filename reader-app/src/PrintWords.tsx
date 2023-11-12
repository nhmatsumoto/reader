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
import React, { useState, useEffect } from 'react';

export const SplitText = (text: string): string[] => {
  return text.split(/\s+/);
};

interface PrintWordsProps {
  textInput: string;
  wordHz: number;
  phaseSize: number;
}

export const PrintWords = ({ textInput, wordHz, phaseSize } : PrintWordsProps) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const words: string[] = SplitText(textInput);
  let index: number = 0;

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      if (index < words.length) {
        const blockEnd = Math.min(index + phaseSize, words.length);
        const block = words.slice(index, blockEnd).join(' ');
        setDisplayedText(block);
        index += phaseSize;
      } else {
        clearInterval(interval);
      }
    }, wordHz);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [textInput, wordHz, phaseSize]);

  return displayedText;
};

export const CalcReadTime = (text: string, phaseSize: number): number => {
  return (SplitText(text).length * phaseSize) / 1000;
};


