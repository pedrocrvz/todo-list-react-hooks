import React from 'react';
import ToDoList from './components/ToDoList'
import AddToDoItem from './components/AddToDoItem';
import { ToDoContextProvider } from "./contexts/ToDoContext";
import Buttons from './components/Buttons';

function App() {
  return (
    <div className='app'>
        <ToDoContextProvider>
          <AddToDoItem />
          <Buttons/>
          <ToDoList />
        </ToDoContextProvider>
    </div>
  );
}

export default App;
