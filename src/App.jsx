import { useEffect, useState } from 'react'
import TaskList from './TaskList.jsx';
import './App.css'

function App() {
  const [input, setInput] = useState(""); //takes input
  const [todos, setTodos] = useState([]); //main task list
  const [taskIndex, setTaskIndex] = useState(0);  //maintains unique key(index) for every task
  const [category, setCategory] = useState("all");  //chooses b/w all, pending, completed

  //setting input value
  const handleChange = (event) => setInput(event.target.value);

  //adding task to list
  const handleClick = () => {
    if (input !== '') setTodos(currTodos => [...currTodos, { data: input, index: taskIndex, isComplete: false }]);
    setTaskIndex(taskIndex + 1);
    console.log(taskIndex);
    setInput('');
  }
  //adding task to list on Enter click
  const handleEnterPress = () => {
    if (event.key === 'Enter') handleClick();
  }


  /* JSX Content */
  return (
    <>
      <div className="form-container">
        <div className='form'>
          <div id='title'>Todo</div>
          <div className="input">
            <label htmlFor="task-input">Add Item</label>
            <input type="text" value={input} id='task-input' onChange={handleChange} onKeyDown={handleEnterPress} />
            <button id='add-btn' onClick={handleClick}>Add</button>
            <button id='clear-btn' onClick={() => { setTodos([]); setTaskIndex(0) }}>Clear</button>
          </div>

          <div className="todo-title">Todo List</div>
          <div className="task-categories">
            <button className={`task-button ${category === "all" ? "active" : ""}`} onClick={() => setCategory("all")}>All</button>
            <button className={`task-button ${category === "pending" ? "active" : ""}`} onClick={() => setCategory("pending")}>Pending</button>
            <button className={`task-button ${category === "completed" ? "active" : ""}`} onClick={() => setCategory("completed")}>Completed</button>
          </div>
          <div className="list">
            <TaskList todos={todos} setTodos={setTodos} taskCategory={category} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
