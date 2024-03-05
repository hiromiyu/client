import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

const ScrollButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <>
            {isVisible ? <Button>
                ボタン
            </Button>
                : <Button disabled>
                    ボタン
                </Button>}
        </>
    )
}

export default ScrollButton