import {BiBellMinus} from 'react-icons/bi';
import {FaTimes} from 'react-icons/fa';

const  Task=({id, task,day,onDel,onToggle,remainder}) =>{
    console.log("Inside task",id);
    return (
        <div id={id} className={`task ${remainder?'reminder':''}`} onDoubleClick={()=>onToggle(id)}>
          
          <h3>{task}</h3>

          <h4 ><BiBellMinus/>{day}</h4>
          <div>
          <FaTimes style= {{color:'red',cursor:'pointer'}} onClick={()=>onDel(id)}/>
          </div>
        </div>
    )
}
export default Task