import React from 'react'

const InfoCard = ({ icon, title, dec }) => {
    return (
        <div className="min-w-full h-full flex flex-col items-center justify-center p-5">
            <div className="h-1/2">
                <i className={`text-4xl fi ${icon}`}></i>
                <h2 className='text-lg font-bold leading-none m-0 mt-2 -mb-4'>{title}</h2>
            </div>
            <div className='h-1/2 flex justify-start text-sm opacity-80'>
                <p>
                    {dec}
                </p>
            </div>
        </div>
    )
}

export default InfoCard
