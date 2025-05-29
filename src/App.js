import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList'
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  const [todolist, setToDoList] = React.useState([
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Walk the dog', completed: false },
    { id: 3, task: 'Read a book', completed: false }
  ]);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  });

  return (
    <>
        <Header />
        <ToDoList />
    </>
  )
}

export default App;
