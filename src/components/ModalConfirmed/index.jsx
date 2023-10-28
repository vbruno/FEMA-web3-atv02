/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function ModalConfirmed({ onConfirm, onClosed }) {
  return (
    <Container>
      <div>
        <p>Deseja deletar a tarefa selecionada?</p>
        <div>
          <button type="button" onClick={onConfirm}>
            Sim
          </button>
          <button type="button" onClick={onClosed}>
            Cancelar
          </button>
        </div>
      </div>
    </Container>
  );
}
