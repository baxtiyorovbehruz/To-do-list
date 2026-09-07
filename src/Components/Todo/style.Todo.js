import styled from 'styled-components';

export const StyleTodo = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: white;
  color: black;
  border-radius: 12px;
  nav {
    display: flex;
    align-items: center;

    justify-content: center;
    gap: 10px;
  }
  nav input {
    border-radius: 8px;
    padding-left: 20px;
    height: 30px;
    width: 220px;
  }
  nav button {
    height: 38px;
    background-color: blue;
  }
  .filter {
    display: flex;
    justify-content: space-around;

    gap: 10px;
    padding: 8px;
    margin-top: 15px;
    border: 2px solid black;
    border-radius: 12px;
    button {
      height: 30px;
      width: 80px;
      font-size: 10px;
    }
  }
  .all {
    margin-top: 15px;
    border-radius: 12px;
    border: 2px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: aqua;
    border-radius: 12px;
  }
  .edit {
    background-color: green;
    width: 40px;
    height: 35px;
    font-size: 12px;
  }
  .box .checkbox {
    width: 15px;
    height: 35px;
  }
  .del {
    background-color: red;
    width: 40px;
    height: 35px;
    font-size: 12px;
  }
`;
