import { createContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: "The item is from context",
            rate: 10
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (item)=>{
        setFeedback(feedback.filter((fb)=>fb.id!==item.id));
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        });
    }

    const updateFeedback = (upItemId, updItem) => {
        console.log(upItemId, updItem);
        setFeedback(
            feedback.map(
                item=>(item.id===upItemId ? {...item, ...updItem} : item)
            )
        );
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
            feedbackEdit,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
};

export default FeedbackContext;
