"use client"
import React from 'react'

const GoToTop = () => {

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
        <button onClick={goToBtn}>
            action
        </button>
    )
}

export default GoToTop
