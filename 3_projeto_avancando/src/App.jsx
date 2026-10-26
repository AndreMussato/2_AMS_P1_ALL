import { useState } from 'react'

//Importa uma imagem da pasta assets
//O React trata isso como um módulo e gera um caminho válido
import Luffy from './assets/luffy.webp';

import AlteraValor from './components/AlteraValor';

//Importa o componente RenderCondicional
import RenderCondicional from './components/RenderCondicional';

//Importa o componente o RenderLista
import RenderLista from './components/RenderLista';
import DetalhesUsuarios from './components/DetalhesUsuarios';

function App() {

  const pessoas = [
    { id: 1, nome: "Rei Davi", idade: 16, profissao: "Estudante" },
    { id: 2, nome: "Ana", idade: 16, profissao: "Estudante" },
    { id: 3, nome: "Erik vulgo Tilapia do passado", idade: 16, profissao: "Estudante" },
    { id: 4, nome: "André Mussato", idade: 31, profissao: "Professor de Programação" },
    { id: 5, nome: "Adriano", idade: 42, profissao: "Professor de Quimica" },
    { id: 6, nome: "Isa Vannucci", idade: 52, profissao: "Professora de Física" },
  ]

  return (
    <>
      <div className='App'>
        {/* Título da aplicação */}
        <h1>Avançando em React</h1>

        {/* IMAGEM EM PUBLIC */}
        {/* Aqui a imagem foi importada na pasta /public */}
        {/* Pode ser acessada diretamente pelo camimho */}
        <img src='/imagem2.avif' alt='One Piece' />

        <hr />
        {/* IMAGEM EM ASSETS */}
        <div>
          {/* Aqui a imagem foi importada no início do arquivo
          aqui usamos a variável Luffy como src */}
          <img src={Luffy} alt='Luffy' />
        </div>

        <hr />
        {/* Renderiza o componente que demonstra o uso do useState */}
        <AlteraValor />

        <hr />
        {/* Renderiza o componente RenderCondicional
        mostra conteúdos diferentes dependendo do estado */}
        <RenderCondicional />

        <hr />

        {/* Renderiza o componente de lista
        Aqui será exibido um array de dados na tela */}
        <RenderLista />

        {/* DESAFIO 
        1 - Crie um array de objetos composto de pessoas, com as propriedades de:
          nome, idade e profissão (array com pelo menos 3 itens); (deve estar na App)
        2 - Os dados devem ser exibidos em um componente DetalhesUsuarios, que você deve
        criar, todas as informações devem ser exibidas;
        3 - Faça uma renderização condicional que exibe se o usuário pode tirar carteira
        de habilitação ou não, imprima isso também no componente
        4 - A informação pode ser exibida num parágrafo (checar se idade >= 18)
        */}

        <hr />
        <h1>Desafio</h1>
        {pessoas.map((pessoa) => (
          <DetalhesUsuarios 
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
          />
        ))}

      </div>
    </>
  )
}

export default App
