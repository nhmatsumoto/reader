import React from 'react';
import './App.css';
import { PrintWords, CalcReadTime } from './PrintWords';

function App() {

  const textInput : string = "A programação orientada a eventos é um paradigma de programação em que o fluxo do programa é determinado por eventos que ocorrem no sistema. Um evento pode ser qualquer coisa, desde uma interação do usuário, como clicar em um botão, até eventos internos do sistema, como a conclusão de uma tarefa.";
  const wordHz = 1000; 
  const phaseSize = 2;

  return (
    <div>
      <h1>
        {PrintWords({textInput, wordHz, phaseSize})}  
      </h1>
      
      <p>Estimated read time: {CalcReadTime(textInput, phaseSize)} seconds</p>
    </div>
  );
}

export default App;
