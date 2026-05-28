import { useState, useEffect } from 'react';

export const useTypewriter = (
    text: string,
    speed: number = 50,
    delay: number = 0
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        // Initial delay before starting
        const startDelay = setTimeout(() => {
            let currentIndex = 0;

            const type = () => {
                if (currentIndex <= text.length) {
                    setDisplayedText(text.substring(0, currentIndex));
                    currentIndex++;
                    timeout = setTimeout(type, speed);
                } else {
                    setIsComplete(true);
                }
            };

            type();
        }, delay);

        return () => {
            clearTimeout(startDelay);
            clearTimeout(timeout);
        };
    }, [text, speed, delay]);

    return { displayedText, isComplete };
};
