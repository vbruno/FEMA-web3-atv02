import { FiPlusCircle } from "react-icons/fi";
import { Container, AddNewTask, ListTasks } from "./styles";

import logo from "../../assets/rocket.svg";

export function Home() {
  return (
    <Container>
      <header>
        <img src={logo} alt="Rocketseat" />
        <div>
          <h1>Lista de Tarefas</h1>
          <h2>WEB3 - FEMA</h2>
        </div>
      </header>

      <AddNewTask>
        <input placeholder="Adicione uma nova tarefa" />
        <button type="button">
          Criar
          <FiPlusCircle />
        </button>
      </AddNewTask>

      <ListTasks>
        <header>
          <div>
            <h3>Tarefas criadas</h3>
            <span>5</span>
          </div>
          <div>
            <h3>Concluídas</h3>
            <span>2 de 5</span>
          </div>
        </header>
        <main></main>
      </ListTasks>
    </Container>
  );
}
