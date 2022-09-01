import { useState, useContext, useEffect } from 'react';

import Card from './shared/Card';
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {

    const [text, setText] = useState("");
    const [rating, setRating] = useState(-1);
    const [message, setMessage] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const { addFeedback, updateFeedback, feedbackEdit } = useContext(FeedbackContext);

    useEffect(()=>{
        if (feedbackEdit.edit === true) {
            setIsButtonDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rate);
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        setText(e.target.value);

        if (text === "") {
            setMessage(null);
            setIsButtonDisabled(true);
        }
        else if (text !== "" && text.trim().length<5) {
            setMessage("Text must include at least 5 characters");
            setIsButtonDisabled(true);
        }
        else {
            setMessage(null);
            setIsButtonDisabled(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length>5 && rating) {
            const feedback = {
                text: text,
                rate: rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, feedback)
            }
            else
                addFeedback(feedback);

            setText("");
            setMessage(null);
            setRating(-1);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <p>{JSON.stringify(feedbackEdit)}</p>
                <RatingSelect changeRating={(rating)=>setRating(rating)} />
                <div className="input-group">
                    <input type="text"
                           placeholder="Write your thoughts"
                           onChange={handleTextChange}
                           value={text}></input>
                    <Button type="submit" 
                            isButtonDisabled={isButtonDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm