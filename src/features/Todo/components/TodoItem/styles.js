import styled from 'styled-components';

export const TodoItemContainer = styled.div`
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

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.span``;

export const EditInput = styled.input`
  padding: 5px;
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const EditButton = styled(Button)`
  background-color: #1dc9b7;
  border-color: #1dc9b7;
  box-shadow: 0 2px 6px 0 rgba(29, 201, 183, 0.5);
  margin-right: 5px;
  transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #18aa9b;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #fd3995;
  border-color: #fd3995;
  box-shadow: 0 2px 6px 0 rgba(253, 57, 149, 0.5);
  transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #fc0a7c;
  }
`;
