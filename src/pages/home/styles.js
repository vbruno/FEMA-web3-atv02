import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    width: 100%;
    min-height: 150px;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 24px;

    text-align: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    h1 {
      color: ${({ theme }) => theme.COLORS.BLUE};
      font-family: Inter;
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-family: Inter;
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
  }
`;

export const AddNewTask = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;

  margin-top: -28px;

  > input {
    width: 638px;
    height: 54px;

    padding: 16px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 8px;

    background: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    width: auto;
    height: 52px;

    border: none;
    border-radius: 8px;

    padding: 16px;

    background: ${({ theme }) => theme.COLORS.BLUE};

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 19.6px */

    svg {
      font-size: 16px;
    }
  }
`;

export const ListTasks = styled.div`
  width: 736px;

  margin-top: 64px;

  > header {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 8px;

      > h3 {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      > span {
        padding: 4px 8px;
        border: none;
        border-radius: 999px;

        background: ${({ theme }) => theme.COLORS.GRAY_400};
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    > div:nth-child(2) h3 {
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }

  > main {
    margin-top: 25px;

    display: flex;
    flex-direction: column;

    gap: 16px;
  }
`;
