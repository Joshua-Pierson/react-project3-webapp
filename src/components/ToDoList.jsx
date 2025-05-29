import React from 'react'
import Table from 'react-bootstrap/Table';


export default function ToDoList({todolist}) {
  const ItemComponent = ({ item }) => <li>{item.id}, {item.task}, {item.completed ? 'Yes' : 'No'}, {item.NotCompleted ? 'Yes' : 'No'}</li>;

    const renderedItems = todolist.map((item) => (
      <ItemComponent key={item.id} item={item} />
    ));


    const handleCompleteButtonClick = () => {}

    const handleDeleteButtonClick = () => {}

  const handleAddTaskButtonClick = () => {}



    
    

  return (
    <>
    <button>Add Task </button>
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
