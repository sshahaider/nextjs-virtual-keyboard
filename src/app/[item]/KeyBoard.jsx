'use client';

import React, { useEffect, useRef, useState } from "react"
import Tooltip from '@/components/Tooltip';
import Key from "./Key";
import MobileKey from "./MobileKey";
import useClickOutside from "@/components/ClickOutside";
import html2canvas from 'html2canvas';

const KeyBoard = ({ font, KeyboardKeys, title, dir, smoullKeyboardKeys }) => {
    const [clickedKey, setClickedKey] = useState('');
    const [copied, setCopied] = useState(false);
    const [shiftKey, setShiftKey] = useState(false);
    const [capslock, setCapslock] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [fontSize, setFontSize] = useState(null);

    const textareaRef = useRef();

    const openRef = useClickOutside({ callback: setMenuOpen });

    useEffect(() => {
        const checkCapsLock = (e) => {
            setCapslock(e.getModifierState('CapsLock'));
        };
        document.addEventListener('keyup', checkCapsLock);
        return () => {
            document.removeEventListener('keyup', checkCapsLock);
        };
    }, []);

    const copyToClipboard = async () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(textareaRef.current.value);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
                setMenuOpen(false);
            }, 500);
        }
    };

    const downloadTxtFile = () => {
        const blob = new Blob([textareaRef.current.value], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = `${title} Text from keyboardos.com.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setMenuOpen(false);
    };

    const ShareText = async () => {
        if (navigator.share) {
            await navigator.share({
                title: `${title} Text`,
                text: textareaRef.current.value,
                url: `https://keyboardos.com/${title.toLowerCase()}`
            })
        }
        setMenuOpen(false);
    }
    const clearText = () => {
        textareaRef.current.value = '';
        setMenuOpen(false);
        localStorage.setItem(title, '');
    }

    const onKeyClick = (code, key) => {
        const element = textareaRef.current;
        switch (key) {
            case 'Shift':
                setShiftKey(!shiftKey);
                break;
            case 'CapsLock':
                setCapslock(!capslock);
                break;
            case 'Tab':
            case 'Ctrl':
            case 'Alt':
                return;
            default:
                element.focus();
                handleKey(code);
                element.blur();
                break;
        }
    }


    const handleKey = (code) => {
        const element = textareaRef.current;
        const selectionStart = element.selectionStart;
        const selectionEnd = element.selectionEnd;

        const keyObj = KeyboardKeys.flat().find(item => item.code === code);

        if (keyObj) {
            const cursorStart = selectionStart;
            const cursorEnd = selectionEnd;

            if (keyObj.v === 'Enter') {
                const newText = element.value.substring(0, cursorStart) +
                    '\n' +
                    element.value.substring(cursorEnd);
                element.value = newText;

                element.setSelectionRange(cursorStart + 1, cursorStart + 1);
            } else if (keyObj.v === 'Backspace') {
                const newText = element.value.substring(0, cursorStart - 1) +
                    element.value.substring(cursorEnd);
                element.value = newText;

                element.setSelectionRange(cursorStart - 1, cursorStart - 1);
            } else {
                const newText = element.value.substring(0, cursorStart) +
                    (shiftKey || capslock ? keyObj.s : keyObj.v) +
                    element.value.substring(cursorEnd);

                // Update the textarea value
                element.value = newText;

                // Update the selection range for the cursor
                element.setSelectionRange(cursorStart + keyObj.v.length, cursorStart + keyObj.v.length);
            }
        }
    };


    const Keydown = (event) => {
        const { key, code, ctrlKey } = event;
        if (key === 'Shift') {
            setShiftKey(true);
        } else if (key === 'CapsLock') {
            setCapslock(!capslock);
        } else {
            setClickedKey(code);
        }
        if (!ctrlKey && key.length < 2) {
            event.preventDefault();
            handleKey(code);
        }
    };

    const KeyUp = (e) => {
        let key = e.key;
        setClickedKey('');
        if (key === 'Shift') {
            setShiftKey(false);
        }
    };

    const decFontSize = () => {
        setFontSize((prevFontSize) => prevFontSize - 1)
    }
    const incFontSize = () => {
        setFontSize((prevFontSize) => prevFontSize + 1)
    }

    useEffect(() => {
        const savedText = localStorage.getItem(title);
        if (savedText) {
            textareaRef.current.value = savedText;
        }
        const savedFontSize = localStorage.getItem("fontSize");
        if (savedFontSize) {
            setFontSize(parseInt(savedFontSize));
        } else {
            setFontSize(18);
            localStorage.setItem("fontSize", 18)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(title, textareaRef.current.value);
        localStorage.setItem("fontSize", fontSize);
    }, [Keydown, onKeyClick,fontSize]);



    const genratePNG = () => {
        const textareaContent = textareaRef.current.value;
        const tempDiv = document.createElement('div');
        tempDiv.textContent = textareaContent;
        tempDiv.style.font = window.getComputedStyle(textareaRef.current).getPropertyValue('font');
        const fontSize = parseInt(window.getComputedStyle(textareaRef.current).getPropertyValue('font-size'));
        tempDiv.style.fontSize = (fontSize + 30) + 'px';
        tempDiv.style.lineHeight = (fontSize + 50) + 'px';
        tempDiv.style.paddingTop = `${fontSize + 12}px`;
        tempDiv.style.paddingBottom = `${fontSize + 15}px`;
        tempDiv.style.paddingLeft = `${fontSize + 10}px`;
        tempDiv.style.paddingRight = `${fontSize + 10}px`;
        tempDiv.style.color = `#ff0000`;
        tempDiv.style.backgroundColor = "#000000";
        tempDiv.style.width = '1200px';
        tempDiv.style.textAlign = dir === 'rtl' ? 'right' : 'left';
        tempDiv.contentEditable = true;
        tempDiv.dir = dir;

        document.body.appendChild(tempDiv);

        html2canvas(tempDiv, {
            backgroundColor: null, // Specify a transparent background
        })
            .then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = imgData;
                link.download = `keyboardos.com-${title}.png`;
                link.click();
                document.body.removeChild(tempDiv);
                setMenuOpen(false);
            });
    };


    const actions = [
        {
            title: 'Share',
            icon: "fi-br-share-square",
            todo: ShareText
        },
        {
            title: 'Copy Text',
            icon: copied ? "fi-br-check-double" : "fi-rr-duplicate",
            todo: copyToClipboard
        },
        {
            title: 'Download PNG',
            icon: "fi-rr-graphic-style",
            todo: genratePNG
        },
        {
            title: 'Download .txt',
            icon: "fi-rr-file-download",
            todo: downloadTxtFile
        },
        {
            title: 'Clear Text',
            icon: "fi-br-cross-small text-2xl leading-none",
            todo: clearText
        }

    ]


    const classes = 'flex gap-x-2 pt-1 pb-0.5 rounded-md px-2 w-full items-center hover:bg-black/10 hover:dark:bg-white/10 select-none'

    return (
        <div className="bg-white dark:bg-dark p-2 rounded-md flex flex-col items-center justify-center">
            <div className={`${font} w-full h-full `}>
                <div className="flex items-center justify-end px-2 py-1">
                    <div className="hidden md:flex items-center gap-x-5 text-lg leading-none">

                        <Tooltip text={'Font Size'}>
                            <div className='flex gap-x-1 py-0.5 px-1 -mt-2 rounded-full border border-bd dark:border-bdDark items-center justify-center'>
                                <div className='flex w-[20px] h-[20px] hover:bg-black/10 hover:dark:bg-white/10 rounded-full items-center justify-center'>
                                    <button
                                        className='opacity-80 hover:opacity-100 pt-[4px]'
                                        onClick={decFontSize}>
                                        <i className="text-[16px] fi fi-br-minus-small"></i>
                                    </button>
                                </div>
                                <div className='flex w-[20px] h-[20px] items-center justify-center text-sm leading-none'>
                                    {fontSize}
                                </div>
                                <div className='flex w-[20px] h-[20px] hover:bg-black/10 hover:dark:bg-white/10 rounded-full items-center justify-center'>
                                    <button
                                        className='opacity-80 hover:opacity-100 pt-[4px]'
                                        onClick={incFontSize}>
                                        <i className="text-[16px] fi fi-br-plus-small"></i>
                                    </button>
                                </div>
                            </div>
                        </Tooltip>
                        {actions.map(action => <Tooltip
                            key={action.icon}
                            text={action.title}>
                            <button onClick={action.todo}>
                                <i className={`fi ${action.icon}`}></i>
                            </button>
                        </Tooltip>)}


                    </div>
                    <div ref={openRef} className="relative md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <i className="fi fi-bs-menu-dots-vertical"></i>
                        </button>
                        {menuOpen && <div className="absolute top-0 right-[120%] min-w-max rounded-md flex flex-col items-center justify-start gap-y-1 p-2 z-50  bg-white dark:bg-dark shadow-md">
                            {actions.map(action => <button className={classes} key={action.icon} onClick={action.todo}>
                                <i className={`-mb-1 fi ${action.icon}`}></i> {action.title}
                            </button>)}

                            <div className='flex gap-x-1 py-0.5 px-1 w-full rounded-full border border-bd dark:border-bdDark items-center justify-between'>
                                <div className='flex w-[24px] h-[24px] hover:bg-black/10 hover:dark:bg-white/10 rounded-full items-center justify-center'>
                                    <button
                                        className='opacity-80 hover:opacity-100 pt-[5px]'
                                        onClick={decFontSize}>
                                        <i className="text-[16px] fi fi-br-minus-small"></i>
                                    </button>
                                </div>
                                <div className='flex w-[24px] h-[24px] items-center justify-center text-sm leading-none'>
                                    {fontSize}
                                </div>
                                <div className='flex w-[24px] h-[24px] hover:bg-black/10 hover:dark:bg-white/10 rounded-full items-center justify-center'>
                                    <button
                                        className='opacity-80 hover:opacity-100 pt-[5px]'
                                        onClick={incFontSize}>
                                        <i className="text-[16px] fi fi-br-plus-small"></i>
                                    </button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <textarea ref={textareaRef} style={{ fontSize }}
                    className='w-full h-[30vh] outline-none border border-bd dark:border-bdDark p-2 bg-grey dark:bg-darkBlack rounded-md'
                    onKeyDown={Keydown}
                    onKeyUp={KeyUp}
                    dir={dir}
                >
                </textarea>

                <div className=" hidden lg:flex bg-[#e0e0e0] dark:bg-dark p-4 rounded-lg  flex-col items-center justify-center w-full space-y-3">
                    {KeyboardKeys.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex items-center justify-center space-x-3 w-full ">
                            {row.map((item, index) => (
                                <Key key={index} item={item} capslock={capslock} clickedKey={clickedKey} shiftKey={shiftKey} onClick={onKeyClick} />
                            ))}
                        </div>
                    ))}
                </div>
                <div className="sticky bottom-0 lg:hidden bg-white  lg:bg-[#e0e0e0] dark:bg-dark p-4 rounded-lg flex flex-col items-center justify-center w-full space-y-2">
                    {smoullKeyboardKeys.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex items-center justify-center space-x-1.5 md:space-x-2 w-full ">
                            {row.map((item, index) => (
                                <MobileKey key={index} item={item} capslock={capslock} clickedKey={clickedKey} shiftKey={shiftKey} onClick={onKeyClick} />
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default KeyBoard;
