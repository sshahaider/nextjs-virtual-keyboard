"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from './Arrow';

const Faq = ({faqs}) => {

    const [openQuestions, setOpenQuestions] = useState([]);

    const toggleQuestion = (index) => {
        setOpenQuestions((prevOpenQuestions) =>
            prevOpenQuestions.includes(index)
                ? prevOpenQuestions.filter((i) => i !== index)
                : [...prevOpenQuestions, index]
        );
    };

    return faqs.map((item, index) => (
        <div key={index}>
            <h3
                className=" font-bold my-2 w-full cursor-pointer text-left text-sm border-b border-bd dark:border-bdDark py-2 px-3 flex items-center justify-between"
                onClick={() => toggleQuestion(index)}
            >
                <span><i className="-mb-1 fi fi-bs-interrogation pr-1.5"></i>  {item.question}</span>
               <Arrow open={openQuestions.includes(index)} />
            </h3>

            <AnimatePresence>
                {openQuestions.includes(index) && (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-6"
                    >
                        <p>{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    ));
};

export default Faq;
