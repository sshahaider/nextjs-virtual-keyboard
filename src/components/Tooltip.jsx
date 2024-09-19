import React from 'react'

const Tooltip = ({ text, children }) => {
    return (
            <div className="relative flex flex-col items-center group">
                {children}
                <div className="absolute capitalize bottom-[35%] text-white dark:text-black flex-col items-center hidden mb-6 lg:group-hover:flex">
                    <span className="relative z-10 py-1 px-2 text-xs leading-none rounded  text-nowrap bg-black dark:bg-white">
                        {text}</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black dark:bg-white"></div>
                </div>
            </div>
    )
}

export default Tooltip
