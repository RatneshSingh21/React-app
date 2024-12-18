import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{task:"Sample Task",id:uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodo)=>{
        return[...prevTodo,{task: newTodo,id:uuidv4()}];
    })
    setNewTodo("");
  };
  let updateVlaue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo=(id)=>{
   setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=id));
  }

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
            <li key={todo.id}>
                <span>{todo.task}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span><button onClick={()=>deleteTodo(todo.id)}>delete</button></span>
                </li>
          ))}
        </ul>
      </div>
    </>
  ); 
}
