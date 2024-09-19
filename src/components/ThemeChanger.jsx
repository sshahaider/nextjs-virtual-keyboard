"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import Tooltip from './Tooltip';

const ThemeChanger = () => {
    const { setTheme } = useTheme();
    const [theme, setLocalTheme] = useState('');

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('theme');
        if (storedTheme) {
            setLocalTheme(storedTheme);
        } else {
            setLocalTheme('system')
        }
    }, []);

    const themes = [
        {
            title: 'light',
            icon: 'fi-ss-brightness',
        },
        {
            title: 'system',
            icon: 'fi-sr-laptop-mobile',
        },
        {
            title: 'dark',
            icon: 'fi-ss-moon',
        },
    ];



    return (
        <div className='flex gap-x-1 py-0.5 px-1 rounded-full border border-bd dark:border-bdDark items-center justify-center'>
            {themes.map(({ title, icon }) => (
                <div key={title} className={`flex w-[28px] h-[28px] rounded-full items-center justify-center ${theme === title ? 'bg-black/20 dark:bg-white/20' : ''}`}>
                    <Tooltip text={`Enable ${title} Theme`}>
                        <button
                            className='opacity-80 hover:opacity-100 pt-[5px]'
                            onClick={() => { setTheme(title); setLocalTheme(title) }}>
                            <i className={` text-[16px] fi ${icon}`}></i>
                        </button>
                    </Tooltip>
                </div>
            ))}
        </div>
    );
};

export default ThemeChanger;
