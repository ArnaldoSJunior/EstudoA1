import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../models/Categoria";
import { Tarefa } from "../models/Tarefa";

function CadastrarTarefa() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    carregarCategorias();
  }, []);

  function carregarCategorias() {
    fetch("http://localhost:5000/categoria/listar")
      .then((resposta) => resposta.json())
      .then((categorias: Categoria[]) => {
        setCategorias(categorias);
      })
      .catch((erro) => {
        console.error("Erro ao carregar categorias:", erro);
      });
  }

  function cadastrarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const tarefa: Tarefa = {
      titulo: titulo,
      descricao: descricao,
      categoriaId: categoriaId,
    };

    fetch("http://localhost:5000/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((tarefa: Tarefa) => {
        console.log("Tarefa cadastrada:", tarefa);
        navigate("/pages/tarefas/listar");
      })
      .catch((erro) => {
        console.error("Erro ao cadastrar tarefa:", erro);
      });
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={cadastrarTarefa}>
        <label>Título:</label>
        <input
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <br />
        <label>Descrição:</label>
        <input
          type="text"
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <br />
        <label>Categorias:</label>
        <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria.categoriaId} value={categoria.categoriaId}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarTarefa;
