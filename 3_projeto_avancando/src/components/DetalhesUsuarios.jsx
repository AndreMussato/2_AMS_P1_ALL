import React from "react";

function DetalhesUsuarios( {nome, idade, profissao} ) {
    return (
        <>
        <div>
            <h2>Detalhes do Usuário</h2>

            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
            </ul>

            {idade >= 18 ? (
                <p>Pode tirar carteira de habilitação.</p>
            ) : (
                <p>Não pode tirar carteira de habilitação.</p>
            )}
        </div>
        </>
    )
}

export default DetalhesUsuarios;