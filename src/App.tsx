import React from 'react';

// 4- importação de componentes
import FirstComponent from './components/FirstComponent';

// 5- desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';

function App() {

  // 1- variáveis
  const name: string = "Mariana"
  const age: number = 27
  const isWorking: boolean = false

  // 2- funções
  const userGreeting = (name:string) : string =>{
    return `Olá, ${name}`
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      {isWorking && (
        <p>Está trabalhando!</p>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
      <SecondComponent name='Segundo'/>
      <Destructuring title='Primeiro post' content='Conteúdo do post' commentsQty={10} tags={["ts",'js', 'react']}/>
    </div>
  );
}

export default App;
