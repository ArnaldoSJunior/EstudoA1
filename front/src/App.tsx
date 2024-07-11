import React from 'react';
import ListarTarefa from './components/listar-tarefa';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListarTarefaConcluidas from './components/listar-concluidas';
import ListarTarefaNaoConcluidas from './components/listar-naoconcluidas';
import cadastrarTarefa from './components/cadastrar-tarefa';
import CadastrarTarefa from './components/cadastrar-tarefa';
function App() {
  return (
    <div >
   <div>
    <BrowserRouter>
    <nav>
      <ul>
        <li>
         <Link to={"/"}>Home</Link>
        </li>
        <li>
         <Link to={"/pages/tarefa/listar"}>
         Listar Tarefas{""}
         </Link>
        </li>
        <li>
         <Link to={"/pages/tarefa/listarconcluidas"}>
         Listar Tarefas Concluídas{""}
         </Link>
        </li>
        <li> <Link to={"/pages/tarefa/listarnaoconcluidas"}>
         Listar Não Concluídas{""}
         </Link>
         </li>
         <li> <Link to={"/pages/tarefa/cadastrar"}>
         Cadastrar Tarefa{""}
         </Link>
         </li>
       <li></li>
      </ul>
    </nav>
    <Routes>
      <Route path= "/" element={<ListarTarefa/>}></Route>
      <Route path= "/pages/tarefa/listar" element={<ListarTarefa/>}></Route>
      <Route path= "/pages/tarefa/listarConcluidas" element={<ListarTarefaConcluidas/>}></Route>
      <Route path= "/pages/tarefa/listarnaoconcluidas" element={<ListarTarefaNaoConcluidas/>}></Route>
      <Route path= "/pages/tarefa/cadastrar" element={<CadastrarTarefa/>}></Route>
    </Routes>
      </BrowserRouter>
   </div>
    </div>
  );
}

export default App;
