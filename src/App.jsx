import "./App.css";
import React from "react";
import {Header} from "./Components/Header/Header"
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer"
import {Todo} from "./Components/Todos/Todo"
function App() {

  const [todos, setTodos] = React.useState(JSON.parse(window.localStorage.getItem('todo')) || []);

  const handleDelete = (evt)=>{
     const todoId = parseInt(evt.target.dataset.todoId);
     const filteredTodos = todos.filter((row)=>row.id !== todoId);
     setTodos([...filteredTodos])
     window.localStorage.setItem("todo",JSON.stringify([...filteredTodos]))
  }
  const handleComplete  = (evt)=>{
    const todoId = parseInt(evt.target.dataset.todoId);
    const foundCompiled = todos.find((row)=>row.id===todoId)
     foundCompiled.isCompiled=!foundCompiled.isCompiled
     setTodos([...todos]);
     window.localStorage.setItem('todo',JSON.stringify([...todos]))
  }

  return (
    <div className="App">
      <div className="todo">
      <div className="todo-list">
       <h1 className="todo-heading">To Do List</h1>
       <input className="todo_input" type="text" onKeyUp={(evt)=>{
         if(evt.code==="Enter"){
             const newTodos = {
               id:todos[todos.length-1]?.id+1 || 0,
               title:evt.target.value,
               isCompiled:false
             }
             setTodos([...todos,newTodos])

             window.localStorage.setItem("todo",JSON.stringify([...todos,newTodos]))
             evt.target.value=null;
         }
       }} placeholder="todo..." />

       <div className="todo_list-items">
         {
           todos.map((row)=>(
            <Todo key={row.id}  id={row.id} deleted = {handleDelete} title={row.title} isCompiled={row.isCompiled} handleComplete={handleComplete}/>
           ))
         }
       </div>

      </div>

      </div>
    </div>
  );
}
export default App;
