import { createContext, useState, useEffect } from 'react';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const feedbackEditInitialState = {
        item: {},
        edit: false
    }
    
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState(feedbackEditInitialState);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("/feedback");
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    }

    const addFeedback = async (newFeedback) => {
        setIsLoading(true);
        const response = await fetch('/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFeedback)
            }
        );
        
        const data = await response.json();
        console.log(data);
        setFeedback([data, ...feedback]);
        setIsLoading(false);
    }

    const deleteFeedback = async (item)=>{
        setIsLoading(true);
        await fetch(`/feedback/${item.id}`, {
                method: 'DELETE'
            }
        );
        setFeedback(feedback.filter((fb)=>fb.id!==item.id));
        setIsLoading(false);
    }

    const editFeedback = async (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        });
    }

    const updateFeedback = async (upItemId, updItem) => {
        setIsLoading(true);
        await fetch(`/feedback/${upItemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updItem)
            }
        );
        setFeedback(
            feedback.map(
                item=>(item.id===upItemId ? {...item, ...updItem} : item)
            )
        );
        setFeedbackEdit(feedbackEditInitialState);
        setIsLoading(false);
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
