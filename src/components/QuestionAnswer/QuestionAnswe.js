import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswe = () => {
    return (
        <div >
            <div className='question-ans'>
                <h3>How does react work?</h3>
                <p>React creates the virtual Dom which is Javascrip presentation of this Dom. When <br /> updates are made Reacts compares the <br />
                current Dom to the Virtual Dom and only updates the differences <br /> between the two. This is the way of working React</p>
            </div>
        </div>
    );
};

export default QuestionAnswe;