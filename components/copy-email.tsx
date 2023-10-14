'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CopyEmail() {

    const [isCopied, setIsCopied] = useState(false);
    const email = "marufilyasa13@gmail.com";
    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsCopied(false);
        }, 3000)
    }, [isCopied]);

    return (
        <div className="">
            <button onClick={copyEmail} className='my-3 flex items-center px-3 py-1 text-xs border rounded-full w-fit gap-3 hover:bg-secondary'>
                {isCopied ? <CheckIcon className='w-3 h-3' /> : <CopyIcon className='w-3 h-3' />}
                <h5 className='font-mono'>{email}</h5>
            </button>
        </div>
    )
}

export default CopyEmail