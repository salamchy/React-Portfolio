import React, { useEffect, useState } from 'react';
import "./ScrollUp.css";

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 560) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 560) {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    });

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {showScroll && (
                <div className="scrollup" onClick={scrollTop}>
                    <i className="uil uil-arrow-up scrollup__icon"></i>
                </div>
            )}
        </div>
    );
}

export default ScrollUp;
