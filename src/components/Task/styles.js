import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  align-items: start;

  gap: 12px;

  > p {
    width: 100%;

    color: ${({ theme, $isCompleted }) =>
      $isCompleted ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    text-decoration-line: ${({ $isCompleted }) =>
      $isCompleted && "line-through"};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: auto;
    height: auto;
    background: none;
    padding: 5px 6px;

    svg {
      font-size: 16px;

      color: ${({ theme, $isCompleted }) =>
        $isCompleted ? theme.COLORS.PURPLE : theme.COLORS.BLUE};
    }
  }

  > button:last-child svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    &:hover {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }
`;
