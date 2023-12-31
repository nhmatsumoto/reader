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
    <div className='btnContainer'>
      <button className="btnStart" onClick={handleStartPrinting}>Start</button>
      <div>{displayedText}</div>
    </div>
  );
};