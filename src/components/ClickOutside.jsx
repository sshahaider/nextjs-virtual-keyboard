"use client";

import react, { useEffect, useRef } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const useClickOutside = ({ callback }) => {
  const targetRef = useRef();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const url = `${pathname}?${searchParams}`

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (targetRef.current && !targetRef.current.contains(event.target)) {
        callback(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [callback]);

  useEffect(() => {
    callback(false);
  }, [url]);

  return targetRef;
};

export default useClickOutside;
