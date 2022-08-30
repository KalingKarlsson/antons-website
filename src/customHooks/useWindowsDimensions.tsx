import { useState, useEffect } from 'react';

interface IDimensionsProps {
    width: number;
    height: number;
}
const getWindowDimensions = (): IDimensionsProps => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

const useWindowDimensions = (): IDimensionsProps => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        const handleResize = (): any => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
