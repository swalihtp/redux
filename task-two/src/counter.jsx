import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from './redux/counterSlice'

function Counter() {
    const count=useSelector(state=>state.counter.value)
    const dispacth=useDispatch()
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>dispacth(increment())}>+</button>
        <button onClick={()=>dispacth(decrement())}>-</button>
    </div>
  )
}

export default Counter
