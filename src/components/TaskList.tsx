import Task from './Task';
import { useTaskContext } from './TaskContext';

const TaskList = () => {
  const { listTask, setListTask } = useTaskContext();

  const onDelete = (id: number) => {
    setListTask(list => {
      return list.filter(task => task.id !== id);
    });
    console.log(id);
  };

  return (
    <div>
      {listTask.map(task => {
        return (
          <Task
            id={task.id}
            key={task.id}
            value={task.value}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};


export default TaskList;
