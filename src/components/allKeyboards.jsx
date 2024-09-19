'use client';

import React, { useState } from 'react'
import Arrow from './Arrow';
import Link from 'next/link';
import useClickOutside from '@/components/ClickOutside';
import { MotionDiv } from './Motion';
import { usePathname } from 'next/navigation';
import { keyboardslist } from '@/app/utails';


const AllKeyboards = () => {
    const [originOpen, setOriginOpen] = useState(false);
    const pathname = usePathname();

    const originRef = useClickOutside({ callback: setOriginOpen });

    return (
        <div className='relative' ref={originRef}>
            <button className='flex items-center justify-between gap-x-2 mx-4 rounded-full px-4 py-1 duration-100 hover:bg-black/20 dark:hover:bg-white/20 '
                onClick={() => setOriginOpen(!originOpen)}>
                Keyboards <Arrow open={originOpen} />
            </button>

            {originOpen && (
                <MotionDiv variants={{ hidden: { opacity: 0 }, show: { opacity: 1 }, }}
                    initial="hidden"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    animate="show"
                    exit="hidden"
                    className="text-sm w-full absolute top-[50px]"
                >
                    <div className="shade">
                        <div className='grid grid-cols-1 gap-y-1 z-50 rounded-lg bg-white dark:bg-dark px-2 py-10 shadow-xl overflow-y-auto max-h-[260px]'>
                            {keyboardslist.map(({ t }, index) => <Link
                                key={index}
                                href={`/${t.toLowerCase()}`}
                                className={`leading-none text-sm cursor-pointer duration-100 rounded-md hover:bg-black/10 dark:hover:bg-white/10 p-2 w-full
                                ${pathname === t.toLowerCase() && "bg-black/10 dark:bg-white/10"}
                                `}
                            >
                                {t}
                            </Link>
                            )}
                        </div>
                    </div>

                </MotionDiv>
            )}
        </div>
    )
}

export default AllKeyboards;
