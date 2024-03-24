import React, { useEffect, useState } from 'react';

function TaskList({ todos, setTodos, taskCategory }) 
{
    const [tasks, setTasks] = useState([]);

    //update task list when todos change
    useEffect(() => setTasks(todos), [todos]);

    //update task categories when taskCategory changes
    useEffect(()=>{
        if(taskCategory === "completed"){
            setTasks(todos);
            setTasks(currTasks =>
                currTasks.filter(task => task.isComplete)
            )
        }
        else if(taskCategory === "pending"){
            setTasks(todos);
            setTasks(currTasks =>
                currTasks.filter(task => !task.isComplete)
            )
        }
        else if(taskCategory === "all"){
            setTasks(todos);
        }
    }, [taskCategory])

    //task toggle onclick
    const handleToggle = (index) => {
        setTodos(currTodos =>
            currTodos.map(todo =>
                todo.index === index ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    }

    //task deletion
    const handleDelete = (index) => {
        event.stopPropagation();
        console.log('delete');
        setTodos(currTodos =>
            currTodos.filter(todo => todo.index !== index)
        );  
    }

    return (
        <>
            {tasks.map(task => (
                <label className="task" key={task.index} style={{textDecoration: task.isComplete ? 'line-through' : 'none',color: task.isComplete ? 'grey' : 'initial'}}>
                        <input type="checkbox" checked={task.isComplete} onChange={() => handleToggle(task.index)} />
                        <span>{task.data}</span>
                        <button id='delete-btn' onClick={() => handleDelete(task.index)}><i class="fa-solid fa-trash"></i></button>
                </label>))
            }
        </>
    )
}

export default TaskList;
