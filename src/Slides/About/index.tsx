import React from 'react';
import './styles.css';

import image from '../../assets/Anton.jpg';
import data from '../../assets/data.json';

const About: React.FC = () => (
    <div id='about' className="about">
        <div className="about-content">
            <img src={image} alt="anton" className="image-styles" />
            <p className="text-about">{data.about} </p>
        </div>
    </div>
);

export default About;
