import { FiPlusCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Container, AddNewTask, ListTasks } from "./styles";

import { Task } from "../../components/Task";

import logo from "../../assets/rocket.svg";

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  function handleCreateTask() {
    if (!newTask || newTask.trim() === "") {
      return;
    }

    const newTaskObject = {
      title: newTask,
      isCompleted: false,
    };

    setTasks((listTasks) => {
      return [...listTasks, newTaskObject];
    });
    setNewTask("");
  }

  // function handleCompleteTask(posTask) {
  //   setTasks((listTasks) => {
  //     const newTasks = [...listTasks];
  //     newTasks[posTask].isCompleted = true;
  //     console.log(newTasks);
  //     return newTasks;
  //   });
  // }

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

  function handleDeleteTask(posTask) {
    setTasks((listTasks) => {
      const newTasks = [...listTasks];
      newTasks.splice(posTask, 1);
      return newTasks;
    });
  }

  useEffect(() => {
    if (!tasks.length) {
      return;
    }
    let count = 0;
    tasks.map((task) => {
      if (task.isCompleted) {
        count++;
      }
      return count;
    });

    setCountCompletedTasks(count);
  }, [tasks]);

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
        <input
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <button type="button" onClick={handleCreateTask}>
          Criar
          <FiPlusCircle />
        </button>
      </AddNewTask>

      <ListTasks>
        <header>
          <div>
            <h3>Tarefas criadas</h3>
            <span>{tasks.length}</span>
          </div>
          <div>
            <h3>Concluídas</h3>
            <span>
              {countCompletedTasks} de {tasks.length}
            </span>
          </div>
        </header>
        <main>
          {tasks &&
            tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  taskTitle={task.title}
                  isCompleted={task.isCompleted}
                  onCompleted={() => {
                    handleCompleteTask(index);
                  }}
                  onDeleted={() => {
                    handleDeleteTask(index);
                  }}
                />
              );
            })}
        </main>
      </ListTasks>
    </Container>
  );
}
