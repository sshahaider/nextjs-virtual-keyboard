
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex gap-x-2 items-center'>
      <Image width={32} height={32} src='/logo.png' alt="keyboardos.com" /> <div className="text-xl text-center font-bold bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-main to-pink-500 ">
        KeyboardOS
      </div>
    </Link>
  )
}

export default Logo;
