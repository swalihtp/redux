import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import logger from 'redux-logger';


const store=configureStore({
   reducer:{
    counter:counterSlice
   },
   middleware:(sample)=>
    sample().concat(logger),
   
})
export default store