const database = () => {

    function Post(key:string, value:string) {
        const data = JSON.parse(localStorage.getItem('database')) || {};
        data[key] = value;
        localStorage.setItem('database', JSON.stringify(database));
    }
    
    function Get() {
        const data = JSON.parse(localStorage.getItem('database')) || {};
        return data;
    }
    
    function GetById(key:string) {
        const data = JSON.parse(localStorage.getItem('database')) || {};
        return data[key];
    }
    
    function Put(key:string, value:string) {   
        const data = JSON.parse(localStorage.getItem('database')) || {};
        data[key] = value;
        localStorage.setItem('database', JSON.stringify(data));
    }
      
    function Delete(key:string) {
        const data = JSON.parse(localStorage.getItem('database')) || {};
        delete data[key];
        localStorage.setItem('database', JSON.stringify(data));
    }
      
    Post('text1', 'A programação orientada a eventos é um paradigma de programação em que o fluxo do programa é determinado por eventos que ocorrem no sistema. Um evento pode ser qualquer coisa, desde uma interação do usuário, como clicar em um botão, até eventos internos do sistema, como a conclusão de uma tarefa.');
    Post('text2', 'A ideia central é que o programa responde a eventos, executando funções específicas quando esses eventos ocorrem. Em vez de ter um fluxo de controle linear, onde o programa executa uma sequência de instruções de cima para baixo, na programação orientada a eventos, o programa permanece em espera até que um evento específico aconteça.');
    
    console.log(Get());
}

export default database;
