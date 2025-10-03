
const initialState={
    value:0
}
const increment=()=>{
    return {
        type:"INCREMENT"
    }
}
const decrement=()=>{
    return {
        type:"DECREMENT"
    }
}
const counterReducer=(state=initialState,action)=>{
    switch (action.type){
        case "INCREMENT":
            return {...state,
                value:state.value+1
            }
        case "DECREMENT":
            return {...state,
                value:state.value-1
            }

        default:
            return state
    }
}
export default counterReducer
export  {increment,decrement}