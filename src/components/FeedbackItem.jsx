import React, {useContext} from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card';
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item }) {

    // let formattedNumber = item.rating.toLocaleString('en-US', {
    //     minimumIntegerDigits: 2,
    //     useGrouping: false
    //   })

    const {feedbackDelete, editFeedback} = useContext(FeedbackContext)
    return (
        <Card invert={true}>
            <div className="number_box">{item.rating.toFixed(1)}</div>
            <div className="text_box">{item.text}</div>

            <div className="tool_box">
            <button className="edit" onClick={() =>editFeedback(item)}>
                <FaEdit color="#999" size="13px"/>
            </button>
            <button className="close" onClick={() =>feedbackDelete(item.id)}>
                <FaTimes color="#999" size="13px"/>
            </button>
            </div>
            
        </Card>
    )
}
FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired
}

export default FeedbackItem
