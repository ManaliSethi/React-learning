import React from 'react'
import PropTypes from 'prop-types'





export const Button = ({color,text,onClick}) => {
  
    return   <button style={{backgroundColor:color}} className='btn' onClick={onClick} >{text} </button>  
       
    
}
Button.defaultProps={
    color:"black",
    text:"Add task"
}
Button.propTypes={
    color:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired

}
export default Button;