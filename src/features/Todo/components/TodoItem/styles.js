import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  border: 2px solid #333;
  padding: 10px;
  margin-bottom: 5px;
  text-align: left;
  &.completed {
    text-decoration: line-through;
    background-color: lightcoral;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const EditInput = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 2px;
  font-size: 14px;
`;

export const EditButton = styled(Button)`
  background-color: green;
`;

export const DeleteButton = styled(Button)`
  background-color: red;
`;
