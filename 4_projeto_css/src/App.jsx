
import { useState } from "react";

//Importa o componente MyComponent
import MyComponent from './components/MyComponent';

//Importa o componente Title
import Title from "./components/Title";

function App() {

  //cria uma constante numérica
  const n = 5;

  const nome = "André";

  return (
    <>
      {/* CSS GLOBAL */}
      <h1> CSS COM REACT </h1>

      {/* CSS DE COMPONENTE */}
      <MyComponent />

      {/* CSS INLINE 
      Estilização aplicada diretamente no elemento */}
      <p style={{
        color: "blue", padding: "25px",
        borderTop: "2px solid red"
      }}>
        Esse elemento foi estilizado de forma inline
      </p>

      {/* CSS DINÂMICO
      Se n for menor que 10, a cor será roxa; caso contrário, rosa */}
      <h2 style={n < 10 ? ({ color: "purple" }) :
        ({ color: "pink" })}>
        CSS Dinâmico
      </h2>

      {/* Se o nome for André, aplica cor verde e fundo preto
      senão estilização null */}
      <h2 style={nome == "André" ? ({ color: "green", backgroundColor: "black" }) :
        null}>
        CSS Dinâmico
      </h2>


      {/* CSS MODULES */}
      <Title />
    </>
  )
}

export default App