const initialState={
    userName:""
}

const userReducer=(state=initialState,action)=>{
    switch (action.type){
        case "user/input":
            return {...state,user:action.payload}
        default:
            return state
    }
}
export default userReducer