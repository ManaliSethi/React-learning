import React from 'react'

import Task from './Task'


export const Tasks = ({ tasks,onDel,onToggle }) => {
    
    return (
        <>

            {tasks.map((task) => (
                <Task id={task.id} task={task.text} remainder={task.remainder} day={task.day} onDel={onDel} onToggle={onToggle} />
            ))}

        </>
    )
}
export default Tasks;
