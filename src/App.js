import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList'
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  const [todolist, setToDoList] = React.useState([
    { id: 1, task: 'Buy groceries', completed: false, NotCompleted: true },
    { id: 2, task: 'Walk the dog', completed: false, NotCompleted: true },
    { id: 3, task: 'Read a book', completed: false, NotCompleted: true }
  ]);

  return (
    <>
        <Header />
        <ToDoList todolist={todolist} />
    </>
  )
}

export default App;
