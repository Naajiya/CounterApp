// 
import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
  name:'counter',
  initialState: {
    count:0,
  },
  reducers:{
    increament:(state)=>{
        state.count++
    },
    decrement:(state)=>{
        state.count--
    },
    reset:(state)=>{
        return {...state,count:0}
    },
    increamentByAmount:((state,action)=>{
        state.count+=action.payload
    })
  }
})

export const {increament,decrement,reset,increamentByAmount}=counterSlice.actions
export default counterSlice.reducer
