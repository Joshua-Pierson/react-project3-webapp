import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


export default function ToDoList({todolist, setToDoList}) {
  const ItemComponent = ({ item }) => <li>{item.id}, {item.task}, {item.status}, {item.completed}, {item.delete}</li>;

    const renderedItems = todolist.map((item) => (
      <ItemComponent key={item.id} item={item} />
    ));


    // Function to handle complete button click
    function handleCompleteButtonClick(id) {
      const updatedList = todolist.map(item =>
        item.id === id ? { ...item, status: 'Completed' } : item
      );
      setToDoList(updatedList);
    }


    // Function to handle delete button click
    function handleDeleteButtonClick(id) {
      const deletedList = todolist.filter(item =>
        item.id !== id
      );
      if (deletedList) {
        const lastItem = deletedList[deletedList.length - 1];
        lastItem.id = todolist.length - 1;
      }
      setToDoList(deletedList);
    }

    // Function to handle adding a new task
    function handleAddTask (e) {
      e.preventDefault();
      const newTask = prompt("Enter a new task:");
      if (newTask) {
        const newItem = {
          id: todolist.length + 1,
          task: newTask,
          status: 'Not Completed',
          completed: '',
          delete: ' '
        };
        setToDoList([...todolist, newItem]);
        

      }
    }

    return (
      <div className="container-fluid">
      <button className="mb-3" onClick={handleAddTask}>Add Task </button>
      <Table striped bordered hover responsive="xl" >
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.task}</td>
              <td>{item.status}</td>
              <td>{<Button variant="outline-success" onClick={() => handleCompleteButtonClick(item.id)}>Complete</Button>}</td>
              <td>{<Button variant="outline-danger" onClick={() => handleDeleteButtonClick(item.id)}>Delete</Button>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    
      {console.log(todolist)}
      <hr />
      </div>
  );
}
