import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{task:"Sample Task",id:uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, {task: newTodo,id:uuidv4()}]);
    setNewTodo("");
  };
  let updateVlaue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <div>
        <input
          // type="text"
          placeholder="Write any  Task"
          value={newTodo}
          onChange={updateVlaue}
        />
        <br />
        <br />
        <button onClick={addNewTask}>ADD TASK</button>
        <br />
        <br />
        <br />
        <br />
        <hr></hr>
        <h4>Task Todo</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
        </ul>
      </div>
    </>
  ); 
}
