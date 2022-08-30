import React from 'react';
import './styles.css';

import image from '../../assets/Anton.jpg';
import data from '../../assets/data.json';
import useWindowDimensions from '../../customHooks/useWindowsDimensions';

const About: React.FC = () => {
    const { width } = useWindowDimensions();
    
    const textStyles = width < 1200 ? 'text-about-small' : 'text-about';
    return (
        <div id="about" className="about">
            <div className="about-content">
                <img src={image} alt="anton" className="image-styles" />
                <p className={textStyles}>{data.about} </p>
            </div>
        </div>
    );
};

export default About;
