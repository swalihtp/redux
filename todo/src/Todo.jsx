import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo,completeTodo, deleteToDo, editTodo } from "./todoReducer";

function Todo() {
  const [todo, setTodo] = useState({ id: Date.now(), text: "" });
  const [editOpen,setEditOpen]=useState(null)
  const [updatedTodo,setUpdatedTodo]=useState("")

  const todoDatas = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const sample = () => {
    dispatch(addToDo(todo));
    setTodo({
      id: Date.now(),
      text: "",
      completed: false,
    });
  };

  const hadleEdit=(id)=>{
    setEditOpen(id)
  }
  console.log(todoDatas);
  
  return (
    <>
      <div>
        <input
          type="text"
          value={todo.text}
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        />
        <button onClick={sample}>Add</button>
      </div>
      <div>
        {todoDatas.map((item) => (
          <>
            <p style={{backgroundColor: item.completed ?  "green":"red"}} key={item.id}>
              <b>{item.text}</b>
            </p>
            <button onClick={()=>dispatch(completeTodo(item.id))}>completed</button>
            <button onClick={()=>dispatch(deleteToDo(item.id))}>Delete</button>
            <button onClick={()=>hadleEdit(item.id)}>Edit</button>
            {editOpen===item.id?(

                <> <input type="text"  onChange={(e)=>setUpdatedTodo(e.target.value)}/> <button onClick={()=>dispatch(editTodo({text:updatedTodo,id:item.id}))}>update</button> </>
            ):<p></p>}
          </>
        ))}
      </div>
    </>
  );
}

export default Todo;
