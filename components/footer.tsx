import React from 'react'

function Footer() {
    return (
        <footer style={{ borderTop: '1px solid hsl(240 3.7% 15.9%)' }}>
            <div className="py-2 px-5 font-semibold text-sm flex md:justify-between">
                <div>
                    <a href="/" className="font-semibold flex gap-2 items-center text-sm">
                        maruyasa
                    </a>
                </div>
                <div>
                    Copyright © {new Date().getFullYear()} - All right reserved by maruyasa
                </div>
            </div>
        </footer>
    )
}

export default Footer