import all from '../store/useTodos';
import { store } from '../store'

export default function Home() {
  const todos = all.todos()
  console.log("RENDERING LIST", todos)

  return (
    <div>
      {todos.map(todo => <p key={todo.name}>{todo.name.toUpperCase()}</p>)}
      <button onClick={() => { console.log(store.getState().todos) }}>See store</button>
    </div>
  )
}
