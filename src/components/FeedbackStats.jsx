import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext);

    let feedbackRateAverage = feedback.length ? feedback.reduce((acc, item)=>{
        return acc + item.rate;
    }, 0) / feedback.length : 0;

    feedbackRateAverage = feedbackRateAverage
                          .toFixed(1)
                          .replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>Reviews: {feedback.length}</h4>
            <h4>Average: {feedbackRateAverage}</h4>
        </div>
    )
}

export default FeedbackStats
