import React from 'react'
import Table from 'react-bootstrap/Table';


export default function ToDoList({todolist}) {
  const ItemComponent = ({ item }) => <li>{item.id}, {item.task}, {item.completed ? 'Yes' : 'No'}, {item.NotCompleted ? 'Yes' : 'No'}</li>;

    const renderedItems = todolist.map((item) => (
      <ItemComponent key={item.id} item={item} />
    ));


    function handleCompleteButtonClick() {}

    // Function to handle delete button click
    function handleDeleteButtonClick() {}

    // Function to handle adding a new task
    function handleAddTask (e) {
      e.preventDefault();
      const newTask = prompt("Enter a new task:");
      if (newTask) {
        const newItem = {
          id: todolist.length + 1,
          task: newTask,
          Status: 'Not Started',
          completed: <button onClick={handleCompleteButtonClick}>Complete</button>,
          delete: <button onClick={handleDeleteButtonClick}>Delete</button>
        };
        todolist.push(newItem);
        

      }
    }

  return (
    <>
    <button onClick={handleAddTask}>Add Task </button>
    <Table striped bordered hover>
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
            <td>{item.Status}</td>
            <td>{item.completed}</td>
            <td>{item.delete}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    {console.log(todolist)}
    </>
  )
}
