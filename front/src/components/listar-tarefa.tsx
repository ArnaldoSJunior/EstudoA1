import React, { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";
import { Link } from "react-router-dom";
import axios from "axios";

function ListarTarefa() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  function carregarTarefas() {
    axios.get<Tarefa[]>('http://localhost:5000/tarefas/listar')
      .then((resposta) => {
        console.table(resposta.data);  // Exemplo: exibindo no console em formato de tabela
        setTarefas(resposta.data);     // Define o estado das tarefas com os dados recebidos
      })
      .catch((erro) => {
        console.error('Erro ao carregar tarefas:', erro);
      });
  }
  
  function alterar(id: string) {
    console.log(`Id: ${id}`);
    axios
      .put(`http://localhost:5000/tarefas/alterar/${id}`)
      .then((resposta) => {
        if (resposta && resposta.data) {
            setTarefas(resposta.data as Tarefa[]);
        }
      });
  }

  return (
    <div>
      <h1>Listar Tarefas</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>CriadoEm</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.criadoEm}</td>
              <td>
                <button
                  onClick={() => {
                    alterar(tarefa.tarefaId!);
                  }}
                >
                  Alterar
                </button>
              </td>
          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefa;
