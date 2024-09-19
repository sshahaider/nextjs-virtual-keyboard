import React, { useEffect, useState } from 'react';

const MobileKey = ({item, onClick, clickedKey, shiftKey, capslock }) => {
    const { key, type, v, code } = item;
    const defultcolors = 'bg-[#eeeeee] dark:bg-[#252525]'
    const [colors, setColors] = useState(defultcolors);

    const changeColors = 'bg-[#e0e0e0] dark:bg-[#202021]'

    useEffect(() => {
        if (clickedKey === code) {
            setColors(changeColors);
        } else {
            setColors(defultcolors);
        }
    }, [clickedKey, key]);


    const handleOnClick = () => {
        setColors(changeColors);
        onClick(code, key);
        setTimeout(() => {
            setColors(defultcolors);
        }, 50)
    }

    if (type === 'key') {
        const { s } = item;
        return (
            <button
                className={`${colors} transition-colors duration-100 outline-none  h-8 select-none md:h-9 py-1 min-w-6 md:min-w-12 px-1 rounded-[10%] overflow-hidden overflow-ellipsis `}
                onClick={handleOnClick}
            >
                {shiftKey || capslock ? s : v}
            </button>
        );
    } else if (type === 'space') {
        return (
            <button
                className={`${colors} relative h-8 select-none md:h-9 min-w-[45%] rounded-md  `}
                onClick={handleOnClick}>
            </button >
        );
    } else {
        const { icon } = item;
        return (
            <button
                className={`flex items-center justify-center ${colors} ${key === 'Shift' && shiftKey && ('text-green-500')} h-8 select-none md:h-9 w-full px-3 md:px-4 rounded-md `}
                onClick={handleOnClick}> <i className={`-mb-2 fi ${icon}`}></i> 
            </button>
        );
    }
};

export default MobileKey;
