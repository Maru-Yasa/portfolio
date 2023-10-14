'use client';

import Lenis from '@studio-freight/lenis';
import React, { useEffect } from 'react';

interface SmoothScrollerProps {
    children?: React.ReactNode
}

const SmoothScroller = ({ children }: SmoothScrollerProps) => {
    useEffect(() => {
        const lenis = new Lenis(
            {
                duration: 2, // speed
                // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                smoothTouch: true
              }
        );

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    return <>{children}</>;
};

export default SmoothScroller;