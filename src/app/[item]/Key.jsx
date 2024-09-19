import React, { useEffect, useState } from 'react';

const Key = ({item, onClick, clickedKey, shiftKey, capslock }) => {
    const { key, type, v, code } = item;
    const [shadows, setShadows] = useState('');

    const colors = 'bg-[#e0e0e0] dark:bg-dark select-none'
    const defultShadows = 'shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_5px_#0c0c0d,-5px_-5px_5px_#242426]'
    const changedShadows = 'shadow-[5px_5px_10px_#cecece,-5px_-5px_10px_#f2f2f2] dark:shadow-[5px_5px_5px_#131314,-5px_-5px_5px_#1d1d1e]'

    useEffect(() => {
        if (clickedKey === code) {
            setShadows(changedShadows);
        } else {
            setShadows(defultShadows);
        }
    }, [clickedKey, key]);


    const handleOnClick = () => {
        setShadows(changedShadows);
        onClick(code, key);
        setTimeout(() => {
            setShadows(defultShadows);
        }, 50)
    }

    if (type === 'key') {
        const { s } = item;
        return (
            <button
                className={`${colors} ${shadows} relative text-xl transition-colors duration-100 outline-none overflow-hidden overflow-ellipsis h-12 min-w-12 w-13 rounded-[10%]   `}
                onClick={handleOnClick}
            >
                <span className='absolute left-1 top-1 text-xs opacity-70'>{key}</span>
                {shiftKey || capslock ? s : v}
            </button>
        );
    } else if (type === 'space') {
        return (
            <button
                className={`${colors} ${shadows} relative h-12 min-w-[60%] rounded-md  `}
                onClick={handleOnClick}>
                Space
            </button >
        );
    } else {
        const { icon } = item;
        return (
            <button
                className={`relative flex items-center justify-center gap-x-2 ${colors} ${key === 'CapsLock' && capslock || key === 'Shift' && shiftKey ? changedShadows : shadows}  h-12 w-full px-4 rounded-md `}
                onClick={ handleOnClick}>
                {key === 'CapsLock' && <span className={`absolute top-2 right-2 w-2 h-2 rounded-full ${capslock ? 'bg-green-500' : 'bg-dark/50 dark:bg-white/50'}`}></span>}
                <i className={`-mb-1 fi ${icon}`}></i>   {v}
            </button>
        );
    }
};

export default Key;
