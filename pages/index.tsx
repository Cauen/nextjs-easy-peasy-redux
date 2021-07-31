import { createTypedHooks } from "easy-peasy";
import { StoreModel } from './_app';

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default function Home() {
  const todos = useStoreState((state) => state.todos);
  const addTodo = useStoreActions((actions) => actions.addTodo);
  const clearTodos = useStoreActions((actions) => actions.clearTodos);

  return (
    <div>
      <button onClick={() => { addTodo({ name: "New" + +new Date() }) }}>Add news</button>
      <button onClick={() => clearTodos()}>Clear todos</button>
      {todos.map(todo => <p key={todo.name}>{todo.name.toUpperCase()}</p>)}
    </div>
  )
}
