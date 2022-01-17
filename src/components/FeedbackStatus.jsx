import React, {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStatus() {

    const {feedback} = useContext(FeedbackContext);

    let Average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    Average = Average.toFixed(1).replace(/[./]0$/,'')

    return (
        <div className="statusBar">
            <h5><span>{feedback.length}</span> Reviews</h5>
            <h5>Average rating <span>{isNaN(Average) ? 0 : Average}</span></h5>
        </div>
    )
}



export default FeedbackStatus
