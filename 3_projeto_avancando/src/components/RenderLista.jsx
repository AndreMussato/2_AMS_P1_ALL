//importa o hook useState do React
//Usado para armazenar e gerenciar estados
import { useState } from "react";

//Declaração do componente funcional
function RenderLista() {

    //Cria um estado chamado "list" com um array de nomes
    //Aqui não usamos setList, então a lista é fixa
    const [lista] = useState(["Davi", "Geovanna", "Ana Laura", "Guilherme", "Danieli", "Erick"]);

    //Cria um estado chamado "alunos" com um array de objetos
    //Cada objeto representa um aluno com rm, nome e idade
    const [alunos] = useState([
        {rm: "10237", nome: "DAVI DE SOUZA", idade: 16 },
        {rm: "10330", nome: "GEOVANNA VIEIRA", idade: 16 },
        {rm: "10386", nome: "ANA LAURA", idade: 18 },
        {rm: "10635", nome: "GUILHERME", idade: 15 },
        {rm: "10439", nome: "DANIELI", idade: 16 },
        {rm: "10304", nome: "ERICK", idade: 17 },
    ])

    //Retorno do componente (o que será exibido na tela)
    return (
        <>
        <div>
            {/* Lista Simples de Nomes */}
            <ul type="square">
                {/* map percorre o array e retorna um elemento para cada item */}
                {lista.map((item, i) => (
                    //key é obrigatória para o React itentificar cada item
                    <li key={i}> {item} </li>
                ))}
            </ul>

            {/* Lista de objetos (mais comum em projetos reais) */}
            <ol type="I">
                {/* Percorre o array de alunos */}
                {alunos.map((aluno) => (
                    /* Exibe nome e idade */
                    <li key={aluno.rm}>
                        {aluno.nome} - {aluno.idade}
                    </li>
                ))}
            </ol>
        </div>
        </>
    )
}

export default RenderLista;