import { configureStore } from '@reduxjs/toolkit';
import { todo } from './redux/todoReducer.js';

export default configureStore({
  reducer: {

    todo: todo.reducer

  }
})

