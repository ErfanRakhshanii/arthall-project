import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface ToDo {
  id: number;
  title: string;
  shortDescription: string;
  date: string;
  category: string;
  description: string;
}

interface ToDoState {
  todoArray: ToDo[];
}

const initialState: ToDoState = {
  todoArray: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ToDo>) {
      state.todoArray.push(action.payload);
    },
  },
});



export const { addTodo } = todoSlice.actions;


