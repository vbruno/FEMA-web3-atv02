/* eslint-disable react/prop-types */
import { FaRegCircle, FaCircleCheck, FaTrashCan } from "react-icons/fa6";

import { Container } from "./styles";

export function Task({
  isCompleted = false,
  taskDescription,
  onCompleted,
  onDeleted,
}) {
  return (
    <Container $isCompleted={isCompleted}>
      <button type="button" onClick={onCompleted}>
        {isCompleted ? <FaCircleCheck /> : <FaRegCircle />}
      </button>
      <p>{taskDescription}</p>
      <button type="button" onClick={onDeleted}>
        <FaTrashCan />
      </button>
    </Container>
  );
}
