import React, { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";
import { Link } from "react-router-dom";

function ListarTarefaNaoConcluidas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  function carregarTarefas() {
    fetch("http://localhost:5000/tarefas/naoconcluidas")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefaNaoConcluidas;