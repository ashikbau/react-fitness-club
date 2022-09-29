import React from 'react';
import './AddBreak.css'
const AddBreak = (props) => {
    const {handleAddBreak,sec} = props
    const {toastActivate} = props
   
    

    let breaktime=localStorage.getItem('time')
   

    return (
        <div >
            <div className='add-break'>
                <button  onClick={()=>handleAddBreak(10)} >10 s</button>
             <button  onClick={()=>handleAddBreak(20)}>20 s</button>
            <button  onClick={()=>handleAddBreak(30)}>30s</button>
            <button onClick={()=>handleAddBreak(40)}>40s</button>
            </div> 
             <div className="break-time">
                <h5>Break time :{breaktime} </h5>

            </div> 
            <div className='activity-btn'>
                <button onClick={()=>toastActivate()}> Activity Completed</button>
            </div>

            
        </div>
    );
};

export default AddBreak;