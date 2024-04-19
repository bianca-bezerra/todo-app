import { useRef, useState } from "react";
import { Task } from "./components/Task";
import styles from './App.module.css'

export function App() {

  const inputRef = useRef(null)
  const [task, setTasks] = useState([])

  function handleEnter(){
    if (event.key == 'Enter'){
      handleAddTask()
    }
  }

  function handleAddTask(){
    const newTask = {
      id: task.length + 1,
      content: inputRef.current.value,
      isCompleted: false
    }

    inputRef.current.value != '' && setTasks([...task,newTask])

    inputRef.current.value = ''
    console.log(task)
  }

  function handleComplete(id){
    const taskIndex = task.findIndex(item => item.id === id)

    if(taskIndex === -1 ){
      return
    }

    const newTasks = [...task]
    newTasks[taskIndex].isCompleted = true
    setTasks(newTasks)
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Daily Tasks</h1>

      <div className={styles.inputGroup}>
        <input onKeyPress={handleEnter} className={styles.input} ref={inputRef} type="text" placeholder="What do you have to do?"/>
        <button className={styles.button} onClick={handleAddTask} >Create</button>
      </div>

      {/* Exibição de cada task do array */}
        {task.map((task) => (
            <Task key={task.id} task={task} handleComplete={handleComplete}/>
        ))}

      {!task.length && <p>YOU'RE FREE!</p>}

    </main>
  )
}