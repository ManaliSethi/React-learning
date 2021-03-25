import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


export  const Headers = (props) => {
  
    return (
        
        <header className='header'>
        
            <h1>{props.title} </h1>
            <Button  color={props.showAdd?'red':'green'} text ={props.showAdd?'Close':'Add'} onClick={props.onAdd}></Button>
            
      
        </header>
      
    )
}
Headers.defaultProps={
    
    title:"Task Traker"
    
}
Headers.propTypes={
   
    title:PropTypes.string.isRequired,
    onAdd:PropTypes.func,
    showAdd:PropTypes.any,
}


export default Headers;