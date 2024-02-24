// //@ts-nocheck
// import { create } from "zustand";
// import { persist } from 'zustand/middleware'

// interface ToDo {
//   id: number;
//   title: string;
//   shortDescription: string;
//   date: string;
//   category: string;
//   description: string;
// }

// interface ToDoStore {
//   todoArray: ToDo[];
//   setTodoArray: (todoArray: ToDo[]) => void;
// }

// const useTodoStore = create<ToDoStore>(
//   persist(
//     (set) => ({
//       todoArray: [],
//       setTodoArray: (todoArray) => set({ todoArray }),
//     }),
//     {
//       name: 'todo-storage',
//       storage: sessionStorage,
//     },
//   ),
// );

// export default useTodoStore;
