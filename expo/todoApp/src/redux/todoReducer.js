import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({

  name:'todo',
  initialState:{},
  reducer:{
    fnTodo(state,action){
      state.todo = action.payload
    }
  }

});

export const {fnTodo} = todo.actions