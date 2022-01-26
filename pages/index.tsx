import Todos from '../components/Todos'
import TodosActions from '../components/TodoActions'

export default function Home() {
  return (
    <div>
      <TodosActions />
      <Todos />
    </div>
  )
}
