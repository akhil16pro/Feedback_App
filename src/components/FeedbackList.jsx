import React,{useContext}  from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem";
import Loader from './shared/Loader';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
   const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length ===0)) {
        return <div className="no_result"><p >no results found</p></div>
    }

    return isLoading ? <Loader /> : (<>
        <AnimatePresence>
            {feedback.map( (item)=> (
                <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.03 }}
                    
                    initial={{ opacity:0 , y:-80}}
                    animate={{ opacity:1, y: 0 }}
                    transition={{                       
                        duration: .4,
                      
                    }}
                    exit ={{opacity:0 , y: -80}}
                >
                    <FeedbackItem key={item.id} item ={item}  />
                </motion.div>                
            ))}
        </AnimatePresence>
          
        </> )
 
    
}


export default FeedbackList
