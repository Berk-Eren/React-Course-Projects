import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';


function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext);

    return isLoading ? (
                <Spinner />
            ) : (
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
