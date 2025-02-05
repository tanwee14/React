import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../../features/todoSlice'; // Adjusted relative path

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
