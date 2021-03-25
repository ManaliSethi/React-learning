import React, { Component } from 'react'

export default class Register extends Component {

    
    render() {
        return (
            <>
                <form className="add-form" >

                    <div className='form-control'>
                        <label>First Name</label>
                        <input type='text' placeholder='Add Task' >
                        </input>
                    </div>

                    <div className='form-control'>
                        <label>Last Name</label>
                        <input type='text' placeholder='Day and Time' >
                        </input>
                    </div>
                    <div className='form-control form-control-checkz '>
                        <label> Password  </label>
                        <input type='text' placeholder='Password' >
                        </input>
                    </div>

                    <div className='form-control'>

                        <input type='submit' value='Save Task'  className='btn btn-block'>
                        </input>
                    </div>
                </form>


            </>
        )
    }
}
