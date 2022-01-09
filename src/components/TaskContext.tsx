import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type Task = { id: number; value: string };

type Context = {
  listTask: Task[];
  setListTask: Dispatch<SetStateAction<Task[]>>;
};

const TaskContext = createContext<Context>({} as Context);

type Props = { children: ReactNode };

export const TaskProvider = (props: Props) => {
  const [listTask, setListTask] = useState<Task[]>([]);

  const value = { setListTask, listTask };

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
