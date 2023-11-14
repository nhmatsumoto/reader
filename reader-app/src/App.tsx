import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { PrintWords } from './PrintWords';


function App() {

  const [textArea, setTextArea] = useState<string>('');
  const [wordFrequency, setWordFrequency] = useState<number>(300);
  const [wordsPerBlock, setWordsPerBlock] = useState<number>(1);

  const handleTextArea = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  }

  const handleWordFrequency = (event:ChangeEvent<HTMLInputElement>) => {
    setWordFrequency(Number(event.target.value));
  }

  const handleWordsPerBlock = (event:ChangeEvent<HTMLInputElement>) => {
    setWordsPerBlock(Number(event.target.value));
  }

  return (
    <div>
      <header>

        <input type="file" />

        <label htmlFor="textArea">Texto:</label>
        <br />
        <textarea className="textArea" name="textArea" rows={4} cols={50} value={textArea} onChange={handleTextArea} />
        <br />

        <label htmlFor="frequencyOfWords">Frequência em MS:</label>
        <br />
        <input className='frequencyWords' type="number" name="frequencyOfWords" onChange={handleWordFrequency} min={0} max={10000} defaultValue={300} />
        <br />

        <label htmlFor='blockSize'>Quantidade de palavras:</label>
        <br></br>
        <input className='wordsPerBlock' type="number" name="blockSize" onChange={handleWordsPerBlock} min={0} max={10000} defaultValue={1} />
        
      </header>

      <main>
        <h1>
          {PrintWords({textArea, wordFrequency, wordsPerBlock})}
        </h1>
      </main>
      
    </div>
  );
}

export default App;
