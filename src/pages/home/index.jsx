import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Container, AddNewTask, ListTasks } from "./styles";

import { Task } from "../../components/Task";

import logo from "../../assets/rocket.svg";

export function Home() {
  const [tasks, setTasks] = useState([
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Massa tincidunt dui ut ornare lectus. Quis lectus nulla at volutpat diam. Maecenas pharetra convallis posuere morbi leo. Suspendisse potenti nullam ac tortor. Eu turpis egestas pretium aenean pharetra magna ac. At augue eget arcu dictum varius. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.",
      isCompleted: false,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Massa tincidunt dui ut ornare lectus. Quis lectus nulla at volutpat diam. Maecenas pharetra convallis posuere morbi leo. Suspendisse potenti nullam ac tortor. Eu turpis egestas pretium aenean pharetra magna ac. At augue eget arcu dictum varius. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.",
      isCompleted: false,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Massa tincidunt dui ut ornare lectus. Quis lectus nulla at volutpat diam. Maecenas pharetra convallis posuere morbi leo. Suspendisse potenti nullam ac tortor. Eu turpis egestas pretium aenean pharetra magna ac. At augue eget arcu dictum varius. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.",
      isCompleted: true,
    },
  ]);

  function handleCompleteTask(positionTask) {
    setTasks((oldTasks) =>
      oldTasks.map((task, index) => {
        if (index === positionTask) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      })
    );
  }

  function handleDeleteTask(positionTask) {
    console.log(positionTask);
    setTasks((oldTasks) =>
      oldTasks.filter((_, index) => index !== positionTask)
    );
  }

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
        <main>
          {tasks.map((task, index) => (
            <Task
              key={task.description}
              taskDescription={task.description}
              isCompleted={task.isCompleted}
              onCompleted={() => {
                handleCompleteTask(index);
              }}
              onDeleted={() => {
                handleDeleteTask(index);
              }}
            />
          ))}
        </main>
      </ListTasks>
    </Container>
  );
}
