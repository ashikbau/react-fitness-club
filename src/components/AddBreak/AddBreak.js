import React from 'react';
import './AddBreak.css'
const AddBreak = (props) => {
    const {handleAddBreak,sec} = props
   

    return (
        <div >
            <div className='add-break'>
                <button  onClick={()=>handleAddBreak(10)} >10 s</button>
             <button  onClick={()=>handleAddBreak(20)}>20 s</button>
            <button  onClick={()=>handleAddBreak(30)}>30s</button>
            <button onClick={()=>handleAddBreak(40)}>40s</button>
            </div> 
             <div className="break-time">
                <h5>Break time :{sec} </h5>

            </div> 
            <div activity-btn>
                <button> Activity Completed</button>
            </div>

            
        </div>
    );
};

export default AddBreak;