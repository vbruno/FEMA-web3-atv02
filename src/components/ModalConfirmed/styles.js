import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    width: 100%;
    max-width: 400px;

    padding: 20px;
    border-radius: 10px;

    background-color: #333;

    text-align: center;

    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    gap: 24px;

    > div {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }

    > div button {
      width: 120px;
      padding: 10px;
      border-radius: 5px;
      border: 0;

      background-color: ${(props) => props.theme.COLORS.BLUE};

      color: #fff;

      font-size: 20px;
      font-weight: bold;

      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
