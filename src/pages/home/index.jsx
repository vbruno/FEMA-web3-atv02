import { useState, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Container, AddNewTask, ListTasks } from "./styles";

import { Task } from "../../components/Task";
import { ModalConfirmed } from "../../components/ModalConfirmed";

import logo from "../../assets/rocket.svg";

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [countTasks, setCountTasks] = useState(0);
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  const [isOpenModal, setIsOpenModal] = useState(0);

  function handleAddNewTask() {
    if (
      newTask.trim() === "" ||
      newTask.trim() === null ||
      newTask === undefined ||
      newTask === " "
    ) {
      return;
    }

    setTasks((oldTasks) => [
      ...oldTasks,
      {
        description: newTask,
        isCompleted: false,
      },
    ]);
    setNewTask("");
  }

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
    setTasks((oldTasks) =>
      oldTasks.filter((_, index) => index !== positionTask - 1)
    );

    setIsOpenModal(false);

    if (tasks.length === 1) {
      localStorage.removeItem("@FEMA-Web3-atv02:tasks");
    }
  }

  function handleDeleteTaskConfirmed(positionTask) {
    setIsOpenModal(positionTask + 1);
  }

  function handleDeleteTaskCanceled() {
    setIsOpenModal(false);
  }

  useEffect(() => {
    const tasksStorage = localStorage.getItem("@FEMA-Web3-atv02:tasks");
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    }
  }, []);

  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }

    localStorage.setItem("@FEMA-Web3-atv02:tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    setCountTasks(tasks.length);
    setCountCompletedTasks(
      tasks.filter((task) => task.isCompleted === true).length
    );
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
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="button" onClick={handleAddNewTask}>
          Criar
          <FiPlusCircle />
        </button>
      </AddNewTask>

      <ListTasks>
        <header>
          <div>
            <h3>Tarefas criadas</h3>
            <span>{countTasks}</span>
          </div>
          <div>
            <h3>Concluídas</h3>
            <span>
              {countCompletedTasks} de {countTasks}
            </span>
          </div>
        </header>
        <main>
          {tasks.map((task, index) => (
            <Task
              key={index}
              taskDescription={task.description}
              isCompleted={task.isCompleted}
              onCompleted={() => {
                handleCompleteTask(index);
              }}
              onDeleted={() => handleDeleteTaskConfirmed(index)}
            />
          ))}
        </main>
      </ListTasks>

      {!!isOpenModal && (
        <ModalConfirmed
          onConfirm={() => {
            handleDeleteTask(isOpenModal);
          }}
          onClosed={handleDeleteTaskCanceled}
        />
      )}
    </Container>
  );
}
