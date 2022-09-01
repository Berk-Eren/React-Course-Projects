import PropTypes from 'prop-types';
import { FaEdit, FaTimes } from 'react-icons/fa';

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackItem({ item, reversed }) {
    const {editFeedback, deleteFeedback} = useContext(FeedbackContext);

    return (
        <div className={`card${reversed ? ' reverse' : ''}`}>
            <div className="num-display">{item.rate}</div>
            <button className="edit" onClick={()=>editFeedback(item)}>
                <FaEdit color='purple' />
            </button>
            <button className="close" onClick={()=>deleteFeedback(item)}>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </div>
    )
}

FeedbackItem.defaultProps = {
    reversed: false
}

FeedbackItem.propTypes = {
    item: PropTypes.shape({
        rate: PropTypes.number, 
        text: PropTypes.string
    }),
    reversed: PropTypes.bool,
    handleDelete: PropTypes.func
}

export default FeedbackItem;
