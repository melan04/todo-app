import { useState, ChangeEvent } from 'react';
import { useTaskContext } from './TaskContext';
import styled from 'styled-components';

const AddTask = () => {
  const [value, setValue] = useState('');

  const { setListTask } = useTaskContext();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Task>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Nom de la task"
      />
      <Button
        onClick={() => {
          if (value !== '') {
            setListTask(list => {
              return list.concat([{ id: Date.now(), value }]);
            });
          }
        }}>
        Ajouter
      </Button>
    </Task>
  );
};

const Task = styled.div`
  display: flex;
`;

const Input = styled.input`
  height: 30px;
  padding : 0px 5px ;
  border: none;
  flex: 1;
`;

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 5px;
  margin-left: 10px;
  font-size: 0.8rem;
  background-color: rgba(59, 149, 141, 0.5);
`;

export default AddTask;
