//Importa o React para permitir a criação do componente
import React from "react";

//Importa o arquivo CSS específico
import "./MyComponent.css";

//Criação do componente funcional chamado MyComponent
function MyComponent() {
    //O return define o que será renderizado na tela
    return (
        <>
            {/* Título do componente */}
            <h1>CSS de Componente</h1>

            {/* Criando uma nova classe css */}
            <p className="my-comp-paragraph">
                Paragrafo desse componente
            </p>
        </>
    )
}

//Exporta o componente para que ele possa ser usado em outros arquivos
export default MyComponent