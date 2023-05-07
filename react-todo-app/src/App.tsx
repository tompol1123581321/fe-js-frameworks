import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(['Learn React', 'Build an app', 'Deploy to production']);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default App
