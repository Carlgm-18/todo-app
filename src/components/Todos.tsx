interface Todo {
  id: string,
  title: string,
  completed: boolean
}

type TodosList = Todo[]

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