import { FaRegCircle, FaCircleCheck, FaTrashCan } from "react-icons/fa6";

import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Task({ isCompleted = false }) {
  return (
    <Container $isCompleted={isCompleted}>
      <button type="button">
        {isCompleted ? <FaCircleCheck /> : <FaRegCircle />}
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer. Integer urna interdum massa libero auctor
        neque turpis turpis semper. Duis vel sed fames integer.Integer urna
        interdum massa libero auctor neque turpis turpis semper. Duis vel sed
        fames integer.
      </p>
      <button type="button">
        <FaTrashCan />
      </button>
    </Container>
  );
}
