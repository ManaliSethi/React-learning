import React from 'react'
import { useState } from 'react'


function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remainder, setRemainder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("please Enter the Text")
            return
        }
        onAdd({ text, day, remainder })
        setDay('')
        setText('')
        setRemainder(false)

    }

    return (

        <form className="add-form" onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => { setText(e.target.value) }}>
                </input>
            </div>

            <div className='form-control'>
                <label>Day and Time  </label>
                <input type='text' placeholder='Day and Time' value={day} onChange={(e) => { setDay(e.target.value) }}>
                </input>
            </div>
            <div className='form-control form-control-checkz '>
                <label> Set Remainder  </label>
                <input type='checkbox' value={remainder} checked={remainder} onChange={(e) => { setRemainder(e.currentTarget.checked) }}>
                </input>
            </div>

            <div className='form-control'>

                <input type='submit' value='Save Task' onClick={onSubmit} className='btn btn-block'>
                </input>
            </div>
        </form>


    )
}

export default AddTask
