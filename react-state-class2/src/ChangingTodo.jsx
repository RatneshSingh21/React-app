import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ChangingTodo(){
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(),isDone :false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(),isDone :false}];
    });
    setNewTodo("");
  };
  let updateVlaue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let updateCaseAll = () => {
    setTodos(todos.map((todo) => {
        return{
            ...todo,
            task: todo.task.toUpperCase(),
            isDone:true,
        };
        
    })); 
  };
  let updateCaseOne =(id)=>{
    setTodos(todos.map((todo) => {
      
          if(todo.id==id)
          {
            return{
              ...todo,
              task: todo.task.toUpperCase(),
              isDone:true,
            };
          }
         else{
          return todo;
         }
      
  })); 
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
              
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>updateCaseOne(todo.id)}>UpperCaseOne</button>
            </li>
          ))}
        </ul>
        <hr></hr>
        <button onClick={updateCaseAll}>UpperCase All</button>
      </div>
    </>
  );
}