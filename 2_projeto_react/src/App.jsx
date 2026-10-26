//import { useState } from 'react'

import Nome from "./Nome"

import Desafio from "./Desafio"

import Produto from "./Produto"

//Declaração do componente principal da aplicação
function App() {

  //O Componente App retorna JSX(interface visual)
  return (
    <>
      {/* Primeiro H1 */}
      <h1>Olá Mundo!</h1>
      <hr />

      <h1>Bem vindo a este componente!</h1>

      <hr />
      {/* chamando/renderizando o componente Disc
      CASO, esse chamado seja APAGADO, o conteúdo do componente Disc
      não aparecerá na tela inicial. */}
      <Disc />

      {/* Criem um novo componente chamado Prof que retorne o nome de 
      um professor em um h2. */}
      <Prof />

      <hr />
      <Nome aluno="Davi de Sousa Pozzobom" idade="16" />

      {/* DESAFIO:
        1 - Crie um componente em um novo arquivo .jsx chamado: Desafio
        2 - Importe esse componente em App.jsx
        3 - No componente criado faça duas variáveis constantes com 
          valores numéricos
        4 - Imprima os valores no componente
        5 - Mostre a soma desses dois valores.
        
        Dicas: 
        1 - Não necessita a utilização de props
        2 - Para a criação de variáveis, elas devem ser criadas dentro 
          da function, porém,
        fora do return.
        3 - Para utilizar js dentro do return deve-se colocar em {}
        */}
        <hr />
        <Desafio />

        {/* DESAFIO 2:
        1 - Crie um componente em um novo arquivo .jsx chamado: Produto
        2 - Importe esse componente em App.jsx
        3 - No componente criado faça o recebimento de 5 props sendo elas:
              codigo, nome, valor, quantEstoque, categoria
        4 - Imprima o componente enviando os valores das props
        
        Dicas: 
        1 - Necessita a utilização de props
        */}
        <hr />
        <Produto codigo="3216145" nome="Iphone 16" valor="4.500,00" quantEstoque="3" categoria="Eletronicos" />
    </>
  )
}

//Declaração de um componente secundário chamado Disc
//Este componente "Disc" pode ser utilizado dentro deste arquivo,
//mas pode ser utilizado por qualquer outro componente criado aqui.
function Disc() {
  //Este componente retorna um <p> com o nome da disciplina
  return (
    <p>
      Programação Web II
    </p>
  )
}

function Prof() {
  //Este componente retorna um <p> com o nome da disciplina
  return (
    <h2>
      Prof. André Mussato ;D
    </h2>
  )
}

export default App
