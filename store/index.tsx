import { createStore, action, Action, StoreProvider, Thunk, thunk, persist, computed, Computed } from "easy-peasy";

type Todo = { name: string };
export interface StoreModel {
  todos: Todo[];
  addTodo: Action<StoreModel, Todo>;
  asyncAddTodo: Thunk<StoreModel, Todo>;
  clearTodos: Action<StoreModel>;
  todoCount: Computed<StoreModel, { count: number }>;
}
export const store = createStore<StoreModel>(persist(({
  todosx: [{ name: "Default" }],
  todos: [{ name: "Default" }],
  todoCount: computed(state => ({ count: state.todos.length })),
  addTodo: action((state, payload) => {
    console.log({ state, payload })
    state.todos.push(payload);
  }),
  asyncAddTodo: thunk(async (actions, payload, helpers) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(helpers.getStoreState())
    actions.addTodo(payload)
  }),
  clearTodos: action((state) => {
    state.todos = [];
  }),

}), { storage: "sessionStorage" }));

import React, { useState } from 'react';

export const Provider: React.FC = ({ children }) => <StoreProvider store={store}>{children}</StoreProvider>
