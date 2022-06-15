import React,{useState} from 'react'
import "./Todo.css"
import {TransitionGroup,CSSTransition} from "react-transition-group";

const Todo = ({toggleTodo,task,completed,id,removeTodo,updateTodo}) => {
    const [isEditing,setIsEditing]=useState(false);
    const [editTask,setEditTask]=useState(task);
    
    const handleUpdate=(e)=>{
         e.preventDefault();
         updateTodo(id,editTask);
         setIsEditing(false);
    };
  return (
   <TransitionGroup className={completed?"Todo completed":"Todo"}>
       {isEditing?(
        <CSSTransition key="editing">
          <form className="todo-edit-form" onSubmit={handleUpdate}>
            <input 
            type="text" 
            name="task" 
            value={editTask} 
            onChange={ (e)=>setEditTask(e.target.value)} 
            />
        <button>Save</button>
        </form>
        </CSSTransition>
       ):(
      <CSSTransition key="normal">
          <li className="Todo-task" onClick={toggleTodo}>
              {task}
          </li>
      </CSSTransition>
       )}
      <div className="Todo-buttons">
          <button onClick={toggleTodo}>Completed</button>
          <button onClick={()=>setIsEditing(true)}>Edit</button>
          <button onClick={removeTodo}>Delete</button>

      </div>

   </TransitionGroup>
  )
}

export default Todo