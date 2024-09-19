import Link from 'next/link';
import React from 'react'

const Similler = ({ item }) => {
    const { t, n } = item;
    return (
            <Link
                href={`/${t.toLowerCase()}`}
                className="group rounded-lg border border-transparent px-5 pb-4  flex flex-col justify-center items-start transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3  text-lg  md:text-xl lg:text-2xl font-semibold">
                    {t}{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-xs md:text-sm opacity-50">
                    {n}
                </p>
            </Link>
    )
}

export default Similler
