import { useAddTodo, useClearTodos, useStoreState, useStoreActions } from '../store/useTodos';
import { getState } from '../utils/state';

export default function Home() {
  const addTodo = useAddTodo()
  const clearTodos = useClearTodos()
  const addAsync = useStoreActions(state => state.asyncAddTodo)

  console.log("TODO ACTIONS")

  return (
    <div>
      <button onClick={() => { addTodo({ name: "New" + +new Date() }) }}>Add news</button>
      <button onClick={() => { addAsync({ name: "New" + +new Date() }) }}>Add news async</button>
      <button onClick={() => clearTodos()}>Clear todos</button>
      <button onClick={() => getState()}>Get state</button>
    </div>
  )
}
