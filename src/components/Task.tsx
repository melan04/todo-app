import styled from 'styled-components';

type Props = { id: number; value: string; onDelete: (id: number) => void };

const Task = (props: Props) => {
  return (
    <TaskCss>
      {props.value}
      <Button
        onClick={() => {
          props.onDelete(props.id);
        }}>
        Supprimer
      </Button>
    </TaskCss>
  );
};

const TaskCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  padding: 5px;
  text-align: center;
  background-color: white;
  height: auto;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  padding: 5px;
  font-size: 0.8rem;
  background-color: rgba(59, 149, 141, 0.5);
`;

export default Task;
