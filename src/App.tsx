import React from 'react';
import AddTask from './components/AddTask';
import Header from './components/common/Header';
import { TaskProvider } from './components/TaskContext';
import TaskList from './components/TaskList';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header />
      <TaskProvider>
        <Container>
          <AddTask />
          <TaskList />
        </Container>
      </TaskProvider>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 800px;
  flex-direction : column;
  margin : 0 auto;
`;

export default App;
