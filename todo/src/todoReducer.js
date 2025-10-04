import {createSlice} from '@reduxjs/toolkit'

const todosice=createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        addToDo:(state,action)=>{state.todos.push(action.payload)},
        completeTodo:(state,action)=>{
            const todo=state.todos.find(item=>item.id===action.payload)
            if(todo){
                todo.completed=true
            }
        },
        deleteToDo:(state,action)=>{state.todos=state.todos.filter(item=>item.id!==action.payload)},
        editTodo:(state,action)=>{
          const todo=  state.todos.find(item=>item.id===action.payload.id)
          if(todo){
            todo.text=action.payload.text
          }
        }
    }
})

export default todosice.reducer
export const {addToDo,completeTodo,deleteToDo,editTodo}=todosice.actions