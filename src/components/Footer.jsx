'use client';

import React from 'react'
import Link from 'next/link';
import Logo from './Logo';
import ThemeChanger from './ThemeChanger';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const links = [
        {
            title: 'Terms of Use',
            link: '/terms-of-use',
        },
        {
            title: 'Contact',
            link: '/contact',
        },
        {
            title: 'Privacy Policy',
            link: '/policy',
        },
    ];

    return (
        <footer className="mt-auto  px-4  bg-transparent dark:text-white relative after:absolute after:right-0 after:top-0 after:bg-gradient-radial after:h-[100px] after:w-[150px] after:md:w-[40px] after:from-pink-500 after:via-violet-500 after:to-main after:blur-2xl after:dark:opacity-60  after:content-['']">
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className='flex items-center py-3'>
                    <Logo className='brightness-0 dark:invert' />
                </div>
                <ul className='flex flex-row gap-x-1 items-center py-3'>
                    {links.map(({ link, title }) => (
                        <li key={link} className='opacity-80 text-sm'>
                            <Link className={`py-1 px-3 duration-200 rounded-lg hover:bg-black/20 dark:hover:bg-white/20 ${link === pathname && 'bg-black/20 dark:bg-white/20'}`} href={link}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='h-[1px] w-full bg-bd dark:bg-bdDark'></div>
            <div className='container mx-auto flex flex-row items-center justify-between py-3'>
                <p className='text-sm opacity-70'>© 2023 KeyboardOS.com</p>
                <ThemeChanger />
            </div>
        </footer>
    )
}

export default Footer;