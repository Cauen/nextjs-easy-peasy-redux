import { useState, useEffect } from 'react';
import { createTypedHooks } from "easy-peasy";
import { StoreModel } from './';

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

// this only re-render on state change
export const useTodos = () => useStoreState((state) => state.todos);
export const useAddTodo = () => useStoreActions((actions) => actions.addTodo);
export const useClearTodos = () => useStoreActions((actions) => actions.clearTodos);

export default { todos: useTodos, addTodo: useAddTodo, clearTodos: useClearTodos }