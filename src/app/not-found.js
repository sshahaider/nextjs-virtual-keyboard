import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return <div className="relative p-10 flex h-[100dvh] flex-col items-center gap-10 text-center dark:text-light">

        <Image src='/404.png' alt="404" className="dark:invert select-none aspect-square object-cover" width={300} height={300} />
        <h1 className="text-4xl  leading-7">Page not found</h1>
        <p className="text-shade text-xl leading-7">The page you are looking for does not exists. Head back to the <Link href="/" className="text-black underline dark:text-main">Home page</Link></p>
    </div>
};