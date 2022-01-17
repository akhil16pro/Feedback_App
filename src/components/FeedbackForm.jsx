import React,{ useState ,useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');
    const [rating,setRating] = useState(10);

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    const handleSubmit =(e)=>{
        e.preventDefault()

        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id,newFeedback );
            }else{
                addFeedback(newFeedback);
            }
            
            setText('');
        }
    }

    const handleTextChange =(e) => {

      let new_val = e.target.value;

        
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null)
        }else if( text !== '' && new_val.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage(`Text must be at least 10 characters `);
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(new_val)
        
    }

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    
    return (
        <Card invert={false} adClass="form_wrap" >
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>

                <RatingSelect  select ={(rating) => setRating(rating)}/>
                <div className="input-grop">
                    <input onChange={handleTextChange} type="text" value={text} placeholder="Write a Review" />                 
                    <Button type='submit' isDisabled={btnDisabled} ><span>Send</span></Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
            
        </Card>
    )
}

export default FeedbackForm
