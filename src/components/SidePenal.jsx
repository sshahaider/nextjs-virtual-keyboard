'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Logo from './Logo';
import styles from './styles.module.css'
import useClickOutside from '@/components/ClickOutside';
import { keyboardslist } from '@/app/utails';
import { usePathname } from 'next/navigation';


const SidePenal = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const openRef = useClickOutside({ callback: setOpen });

    return (
        <div ref={openRef}>

            <label className={`lg:hidden flex items-center justify-center ${styles.hamburger}`}>
                <input type="checkbox" onChange={() => setOpen(!open)} checked={open} />
                <svg viewBox="0 0 32 32" className='stroke-black dark:stroke-white w-[32px] h-[32px]'>
                    <path className={`${styles.line} ${styles.lineTopBottom}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className={styles.line} d="M7 16 27 16"></path>
                </svg>
            </label>

            <div className={`${open ? 'left-0 ' : 'left-[-800px]'} duration-300 lg:hidden px-2 flex flex-col bg-white dark:bg-dark z-50 h-[100dvh] w-[50%] md:w-1/4 fixed top-0  `}>
                <div className="flex flex-col gap-y-2 items-start justify-center font-medium w-full text-xl">
                    <div className='flex flex-row items-center justify-center mt-4 mb-8 mx-2 gap-2'>
                        <Logo />
                    </div>
                    <div className='shade'>
                        <div className='min-w-full flex flex-col items-center py-10 justify-center overflow-y-auto max-h-[550px]'>
                            {keyboardslist.map(({ t }, index) => (
                                <Link
                                    key={index}
                                    href={`/${t.toLowerCase()}`}
                                    className={`leading-none my-1 text-sm cursor-pointer duration-100 rounded-md hover:bg-black/10 dark:hover:bg-white/10 p-2 w-full
                                ${pathname === t.toLowerCase() && "bg-black/10 dark:bg-white/10"}
                                `}
                                >
                                    {t}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SidePenal;
