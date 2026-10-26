//Importa o hook useState do React
//Serve para criar e controlar estados dentro do componente
import { useState } from "react";

//Declaração do componente funcional RenderCondicional
const RenderCondicional = () => {

    //Cria um estado chamado "x"
    //Aqui você está pegando apenas o valor (false)
    const [ x ] = useState(false);

    //Cria um estado chamado "cor"
    //cor - valor atual
    // setCor - função para atualizar o valor
    const [cor, setCor] = useState("Rosa");

    //Retorno do componente (o que será renderizado na tela)
    return (
        <>
        <div>
            {/* Título */}
            <h1>Isso será exibido?</h1>

            {/* Renderização condicional com operador &&
            Só aparece se x for true */}
            {x && <p>X é Verdadeiro</p>} 

            {/* Aqui usamos !x (negação)
            Só aparece se o x for false */}
            {!x && <p>Agora x é falso. </p>}   

            {/* Título da próxima seção */}
            <h1>If Ternário</h1>

            {/* Operador ternário (if/else no JSX)
            se cor === "Rosa" - Mostra o primeiro texto
            Senão - Mostra o segundo */}
            {cor ==="Rosa" ? (
                <p>É Rosa mesmo, João?</p>
            ) : (
                <p>Não é Rosa!</p>
            )}

            {/* Botão que altera o estado "cor"
            Ao clicar - muda o valor para "Azul" */}
            <button onClick={() => setCor("Azul")}>
                Mudar Cor
            </button>
        </div>
        </>
    )
}

//Exporta o componente para ser usado em outros arquivos
export default RenderCondicional;