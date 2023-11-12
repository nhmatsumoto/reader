import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { PrintWords } from './PrintWords';


function App() {

  const wordsPerBlock = 2;

  const [textArea, setTextArea] = useState<string>('');
  const [wordFrequency, setWordFrequency] = useState<number>(0);

  const handleTextArea = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  }

  const handleWordFrequencyInput = (event:ChangeEvent<HTMLInputElement>) => {
    setWordFrequency(Number(event.target.value));
  }

  return (
    <div>
      <header>
        <textarea id="textArea" name="textArea" rows={4} cols={50} value={textArea} onChange={handleTextArea} />
        
        <br />
        <label htmlFor="frequencyOfWords">Frequência em MS: {wordFrequency}</label>
        <br />
        <input type="range" name="frequencyOfWords" onChange={handleWordFrequencyInput} min={0} max={10000}/>

        <hr />

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
