import {useSelector,useDispatch}  from 'react-redux'
import store from './redux/store'

    
function Counter() {
    const dispatch=useDispatch()
  
    const count=useSelector((state)=>{
        return state.count.count
    })

    const increment=(count=0)=>{
      return {type:'count/increment',
        payload:5
      }
    }

    const decrement=(count=0)=>{
      return {type:'count/decrement',
        payload:10
      }
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment(0))}>+</button>
        <button onClick={()=>dispatch(decrement(0))}>-</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter