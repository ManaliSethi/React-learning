
import Headers from './components/Headers'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'
import './index.css'
import AddTask from './components/AddTask'
import Register from './components/Register'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Appointement",
      "remainder": false,
      "day": "March 18 2021"
    },
    {
      "id": 2,
      "text": "Checkup",
      "remainder": false,
      "day": "March 18 2021"
    },
    {
      "id": 3,
      "text": "PreLasik Procedure",
      "remainder": false,
      "day": "March 18 2021"
    },
    {
      "id": 4,
      "text": "Surgery ",
      "remainder": true,
      "day": "March 18 2021"
    }
  ])

  useEffect(() => {
    fetch('http://localhost:5000/test', { method: 'POST' })
      .then((response) => console.log("reeeesponse", response.json()))
      // .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
    // .finally(() => setLoading(false));
  }, []);
  const addTask = (task) => {
    //setTasks(tasks.filter((task) => task.id !== id))
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task };
    //set value in local storage

    localStorage.setItem('myValueInLocalStorage', JSON.stringify(newTask));
    console.log("New Task", newTask);

    setTasks([...tasks, newTask]);

  }


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))


  }
  const onToggle = (id) => {
    setTasks(tasks.map((task) => (task.id === id) ? { ...task, remainder: !task.remainder } : task))
  }



  return (
    <div className="App">
      <Router>

        <Headers onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}

        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDel={deleteTask} onToggle={onToggle} />) : "No task to Shown"}
        <Footer />
        <Link to='/register' component={Register}></Link>
      </Router>

    </div>
  )
}

export default App;
