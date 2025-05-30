import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList'
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  const [todolist, setToDoList] = React.useState([
    { id: 1, task: 'Buy groceries', status: 'Not Started', completed: <button>Complete</button>, delete: <button>Delete</button>},
    { id: 2, task: 'Walk the dog', status: 'Not Started', completed: <button>Complete</button>, delete: <button>Delete</button>},
    { id: 3, task: 'Read a book', status: 'Not Started', completed: <button>Complete</button>, delete: <button>Delete</button>},
  ]);

  return (
    <>
        <Header />
        <ToDoList todolist={todolist} setToDoList={setToDoList} />
    </>
  )
}

export default App;
