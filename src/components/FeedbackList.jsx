import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList() {
    const {feedback} = useContext(FeedbackContext);

    if (feedback.length === 0)
        return <p>There is no context yet!</p>

    return (
        <>
            <AnimatePresence>
                {feedback.map((item, index)=>(
                    <motion.div key={item.id}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}>
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}   
            </AnimatePresence>
        </>
    )
}

export default FeedbackList;
