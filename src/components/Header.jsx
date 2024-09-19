import React from 'react'
import Logo from './Logo';
import SidePenal from './SidePenal';
import AllKeyboards from './allKeyboards';

const Header = () => {


    return (
        <header className='sticky top-0 flex items-center justify-center h-[60px] min-w-full z-50 bg-white dark:bg-dark'>
            <nav className="flex items-center justify-between px-4 lg:px-6 py-2.5 w-full ">
                <div className='flex gap-x-2 items-center'>
                    <Logo />
                </div>


                <SidePenal />
                <div className='hidden lg:block'>
                    <AllKeyboards />
                </div>
            </nav>
        </header >
    )
}

export default Header;
