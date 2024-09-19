"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeIn } from '@/app/utails';

const Form = () => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);



    const handleSend = async (e) => {
        e.preventDefault();
        let name = e.target[0].value
        let email = e.target[1].value
        let topic = e.target[2].value
        let message = e.target[3].value
        if (!name || !email || !topic || !message) {
            return;
        };


        try {
            setLoading(true)
            const res = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({ name, email, topic, message, type: 'Contact Us' }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (res.ok) {
                setLoading(false)
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 10000)

            } else {
                alert('Something Went wrong, try again letter')
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log("error:", error);
        }
    }


    return (
        <form onSubmit={handleSend} className="z-30  h-[80vh]  flex flex-col justify-center rounded-2xl md:px-4 py-10 md:bg-white md:dark:bg-dark ">

            {success ? ( // Step 3
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex flex-col items-center justify-center  gap-y-4'
                >
                    <motion.div><i className="fi fi-br-check-circle text-4xl text-green-500"></i></motion.div>
                    <motion.p className='text-green-500 font-bold'>
                        Message sent successfully!
                    </motion.p>
                </motion.div>
            ) : (<div className='flex flex-col justify-center gap-y-4'>
                <label htmlFor='name' className="-mb-3">
                    Name
                </label>
                <div className="relative">
                    <input type="text"
                        id="name"
                        placeholder='Your Name'
                        className="w-[100%] rounded px-4 py-2 disabled:opacity-50 dark:bg-dark dark:focus:bg-darkBlack dark:focus:outline-none dark:focus:text-light dark:placeholder:text-shade dark:text-light dark:border-bdDark bg-grey pl-12 border border-bd focus:bg-transparent placeholder:text-black" />
                    <i className="fi fi-sr-user absolute left-4 top-1/2 mt-[2px] text-lg -translate-y-1/2 dark:text-light opacity-50"></i>
                </div>
                <label htmlFor='email' className="-mb-3">
                    Email
                </label>
                <div className="relative">
                    <input type="email"
                        id="email"
                        placeholder='Your Email'
                        className="w-[100%] rounded px-4 py-2 disabled:opacity-50 dark:bg-dark dark:focus:bg-darkBlack dark:focus:outline-none dark:focus:text-light dark:placeholder:text-shade dark:text-light dark:border-bdDark bg-grey pl-12 border border-bd focus:bg-transparent placeholder:text-black" />
                    <i className="fi fi-br-envelope absolute left-4 top-1/2 mt-[2px] text-lg -translate-y-1/2 dark:text-light opacity-50"></i>
                </div>
                <label htmlFor='Topic' className="-mb-3">
                    Topic
                </label>
                <div className="relative">
                    <input type="text"
                        id="Topic"
                        placeholder='Your subject'
                        className="w-[100%] rounded px-4 py-2 disabled:opacity-50 dark:bg-dark dark:focus:bg-darkBlack dark:focus:outline-none dark:focus:text-light dark:placeholder:text-shade dark:text-light dark:border-bdDark bg-grey pl-12 border border-bd focus:bg-transparent placeholder:text-black" />
                    <i className="fi fi-rr-tags absolute left-4 top-1/2 mt-[2px] text-lg -translate-y-1/2 dark:text-light opacity-50"></i>
                </div>
                <label htmlFor='message' className="-mb-3">
                    Message
                </label>
                <div className="relative">
                    <textarea
                        id="message"
                        className="w-[100%] rounded px-4 py-2 h-24 disabled:opacity-50 dark:bg-dark dark:focus:bg-darkBlack dark:focus:outline-none dark:focus:text-light dark:placeholder:text-shade dark:text-light dark:border-bdDark bg-grey border border-bd focus:bg-transparent placeholder:text-black" />
                </div>

                {loading ? <button disabled className='h-[45px] rounded-full border border-white/50 max-w-[170px] px-8 py-2  transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
                    <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/50 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-main"></span>
                    </span></button> : <button type='submit' className='h-[45px] rounded-full border border-white/50 max-w-[170px] pxNO-8 py-2  transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
                    <span className='group-hover:opacity-0 group-hover:-translate-y-[120%] transition-all duration-300'>Submit</span>
                    <i className='fi fi-br-arrow-right -translate-y-[120%] opacity-0 group-hover:flex  group-hover:-translate-y-0  group-hover:opacity-100 transition-all duration-200 absolute text-[22px]    ' />
                </button>}
            </div>)}

        </form>
    )
}

export default Form
