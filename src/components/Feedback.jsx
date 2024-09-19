'use client';

import React, { useState } from 'react'
import Tooltip from './Tooltip';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utails';

const Feedback = ({ title }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [emoji, setEmoji] = useState('');
    const [message, setMessage] = useState('');

    const items = [
        {
            title: "Disappointed",
            icon: "fi-br-sad",
        },
        {
            title: "Feeling Blue",
            icon: "fi-rr-sad",
        },
        {
            title: "Enjoying It!",
            icon: "fi-rr-smile",
        },
        {
            title: "Love It!",
            icon: "fi-rr-laugh-beam",
        }
    ]

    const click = (title) => {
        if (emoji === title) {
            setEmoji('')
        } else {
            setEmoji(title)

        }
    }


    const handleSend = async (e) => {
        e.preventDefault();
        const name = emoji
        const email = emoji

        if (!name || !message) {
            return;
        };


        try {
            setLoading(true)
            await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({ name, email, topic: `${title} Keyboard`, message, type: 'Feedback' }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setLoading(false)
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setMessage('')
                setEmoji('')
            }, 4000)


        } catch (error) {
            setLoading(false)
            console.log("error:", error);
        }
    }



    return (

        <div className={`w-full max-w-xs py-0.5 px-3 flex flex-col gap-y-1 items-center justify-center ${emoji === '' ? 'rounded-full' : "rounded-lg h-full"}  ${success && "min-h-[195px]"} bg-white dark:bg-dark border border-bd dark:border-bdDark`}>
            {success ? ( // Step 3
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex flex-col items-center justify-center gap-y-2'
                >
                    <motion.div><i className="fi fi-br-check-circle text-4xl text-green-500"></i></motion.div>
                    <motion.p className='text-green-500 font-bold'>
                        Message sent successfully!
                    </motion.p>
                </motion.div>
            ) : (<div className='w-full'>
                <div className='flex gap-x-0.5 items-center justify-center'>
                    Feedback: {items.map(({ title, icon }) => (
                        <div key={title} className={`flex w-[35px] h-[35px] rounded-full items-center justify-center ${title === emoji ? 'bg-black/20 dark:bg-white/20' : ''}`}>
                            <Tooltip text={title}>
                                <button
                                    type='button'
                                    className='opacity-80 hover:opacity-100 pt-[5px]'
                                    onClick={() => click(title)}>
                                    <i className={` text-[16px] fi ${icon}`}></i>
                                </button>
                            </Tooltip>
                        </div>
                    ))}
                </div>
                {emoji !== '' &&
                    <motion.div
                        initial={{ height: 40 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 40 }}
                        transition={{ duration: 0.4 }}
                        className='flex flex-col items-center justify-center w-full gap-y-2 my-2'>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='h-[100px] p-2 w-full text-sm border border-bd dark:border-bdDark rounded-sm outline-none bg-grey dark:bg-darkBlack'></textarea>
                        {loading ? <button disabled className='h-[38px]  w-[100px] rounded-full border border-white/50 max-w-[170px] px-8 py-2  transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/50 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-main"></span>
                            </span></button> : <button onClick={handleSend} type='submit' className='h-[38px] w-[100px] rounded-full border border-white/50 max-w-[170px] pxNO-8 py-2  transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
                            <span className='group-hover:opacity-0 group-hover:-translate-y-[120%] transition-all duration-300'>Send</span>
                            <i className='fi fi-br-arrow-right -translate-y-[120%] opacity-0 group-hover:flex  group-hover:-translate-y-0  group-hover:opacity-100 transition-all duration-200 absolute text-[22px]    ' />
                        </button>}
                    </motion.div>}
            </div>)}


        </div>

    )
}

export default Feedback
