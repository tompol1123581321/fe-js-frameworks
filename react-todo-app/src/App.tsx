import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([{ label: 'Learn React', id: '1' }, { label: 'Build App', id: '2' }, { label: 'Deploy to production', id: '3' }]);
  const [newTask, setNewTask] = useState({ id: String(Math.random() * 1000), label: '' });

  const addTask = () => {
    if (newTask.label !== '') {
      setTasks([...tasks, newTask]);
      setNewTask({ id: String(Math.random() * 1000), label: '' });
    }
  }

  const deleteTast = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.label}
            <button onClick={() => deleteTast(task.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTask.label} onChange={(event) => setNewTask({ ...newTask, label: event.target.value })} />
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default App
