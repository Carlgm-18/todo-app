import { useState } from "react"
import { Todos } from "./components/Todos.tsx"

const mockTodos = [
	{
		id: '1',
    title: 'todo 1',
    completed: false
	},
	{
		id: '2',
    title: 'todo 2',
    completed: false
	},
	{
		id: '3',
    title: 'todo 3',
    completed: false
	}
]


const App = (): JSX.Element => {

  const [todos, setTodos] = useState(mockTodos)
  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}

export default App
