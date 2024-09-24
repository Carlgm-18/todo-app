import { type TodosList } from "../types"

interface Props {
  todos: TodosList
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}