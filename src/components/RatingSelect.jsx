
import React,{useState, useContext,useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';
function RatingSelect({select}) {
    const [selected, setSelected] = useState('')
    const { feedbackEdit} = useContext(FeedbackContext)
    const handleChange =(e)=>{
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value)
    }

    useEffect(() => {
        if(feedbackEdit.edit === true) {                    
            setSelected(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    return (
        <div className="choose_list">
            <ul>
                <li>
                    <input type="radio" name="rating" id="ra_1" value="1" onChange={handleChange} checked={selected === 1} />
                    <label htmlFor="ra_1">1</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_2" value="2" onChange={handleChange} checked={selected === 2} />
                    <label htmlFor="ra_2">2</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_3" value="3" onChange={handleChange} checked={selected === 3} />
                    <label htmlFor="ra_3">3</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_4" value="4" onChange={handleChange} checked={selected === 4} />
                    <label htmlFor="ra_4">4</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_5" value="5" onChange={handleChange} checked={selected === 5} />
                    <label htmlFor="ra_5">5</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_6" value="6" onChange={handleChange} checked={selected === 6} />
                    <label htmlFor="ra_6">6</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_7" value="7" onChange={handleChange} checked={selected === 7} />
                    <label htmlFor="ra_7">7</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_8" value="8" onChange={handleChange} checked={selected === 8} />
                    <label htmlFor="ra_8">8</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_9" value="9" onChange={handleChange} checked={selected === 9} />
                    <label htmlFor="ra_9">9</label>
                </li>
                <li>
                    <input type="radio" name="rating" id="ra_10" value="10" onChange={handleChange} checked={selected === 10} />
                    <label htmlFor="ra_10">10</label>
                </li>
            </ul>
        </div>
    )
}

export default RatingSelect
