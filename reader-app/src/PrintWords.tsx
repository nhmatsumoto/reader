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
import { PrintWordsProps } from './Type';

export const SplitText = (text: string): string[] => {
  return text.split(/\s+/);
};

export const PrintWords = ({ textArea, wordFrequency, wordsPerBlock } : PrintWordsProps) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [startPrinting, setStartPrinting] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (startPrinting && index < words.length) {
        const blockEnd = Math.min(index + wordsPerBlock, words.length);
        const block = words.slice(index, blockEnd).join(' ');
        setDisplayedText(block);
        index += wordsPerBlock;
      } else {
        clearInterval(intervalId);
      }
    }, wordFrequency);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [textArea, wordFrequency, wordsPerBlock, startPrinting]);

  const handleStartPrinting = () => {

    setStartPrinting(true);
  };

  const words: string[] = SplitText(textArea);

  return (
    <div>
      <button onClick={handleStartPrinting}>Start</button>
      <div>{displayedText}</div>
    </div>
  );
};


