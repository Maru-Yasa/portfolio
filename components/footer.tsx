import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='bg-transparent backdrop-blur bg-opacity-5'>
            <div className="py-7 px-8 font-semibold text-sm flex justify-between gap-5">
                <div className='flex gap-5'>
                    <Link href="https://www.linkedin.com/in/marufilyasa/" target='_blank'>
                        <LinkedInLogoIcon />
                    </Link>
                    <Link href="https://github.com/maru-yasa/" target='_blank'>
                        <GitHubLogoIcon />
                    </Link>
                </div>
                <div className='text-gray-400'>
                    Copyright © {new Date().getFullYear()} - All right reserved by ma'ruf
                </div>
            </div>
        </footer>
    )
}

export default Footer