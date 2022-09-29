import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswe = () => {
    return (
        <div >
            <div className='question-ans'>
                <h3>How does react work?</h3>
                <p>React creates the virtual Dom which is Javascrip presentation of this Dom. When <br /> updates are made Reacts compares the <br />
                current Dom to the Virtual Dom and only updates the differences <br /> between the two. This is the way of working React</p>
                <div>
                    <h3>The difference between props and state?</h3>
                    <p>State is mutable and set by parent component, on the other <br /> hand props are immutable and set by eventhandler</p>
                </div>
                <div>
                    <h3>What are useEffects other than loading data from API?</h3>
                    <p>The useEffect Hook allows you to perform side effects in <br />  your components.Some examples of side effects <br />
                     fetching data, directly updating the DOM, and timers.</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswe;