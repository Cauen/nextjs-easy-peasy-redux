import { useState, useEffect } from 'react';
import { createTypedHooks } from "easy-peasy";
import { StoreModel } from './';

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

// This re-render on any change
export function useTodos() {
  const todos = useStoreState((state) => state.todos);
  const addTodo = useStoreActions((actions) => actions.addTodo);
  const clearTodos = useStoreActions((actions) => actions.clearTodos);

  return { todos, addTodo, clearTodos };
}