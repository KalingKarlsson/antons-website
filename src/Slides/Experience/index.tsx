import React from 'react';
import './styles.css';
import { Typography } from '@mui/material';

import data from '../../assets/data.json';

const Experience: React.FC = () => {
    const applyRowStyles = (index: number): string => {
        if ((index + 1) % 4 === 1) {
            return 'experience-row-1';
        }
        if ((index + 1) % 4 === 2 || (index + 1) % 4 === 0) {
            return 'experience-row-2';
        }
        if ((index + 1) % 4 === 3) {
            return 'experience-row-3';
        }
        return '';
    };

    const applyRowTextStyles = (index: number): string => {
        if ((index + 1) % 4 === 2 || (index + 1) % 4 === 0) {
            return 'experience-text-black';
        }

        return 'experience-text-white';
    };

    const applyRowStatTextStyles = (index: number): string => {
        if ((index + 1) % 4 === 2 || (index + 1) % 4 === 0) {
            return 'stat-text-black';
        }

        return 'stat-text-white';
    };

    return (
        <div id="experience" className="experience">
            <div className="experience-content">
                <Typography className="experience-title" fontSize="xx-large">
                    Experience
                </Typography>
                {data.experience.map((experience, index) => (
                    <div className={applyRowStyles(index)} key={Math.random()}>
                        <img
                            src={`/assets/${experience.image}`}
                            alt="experience"
                            className="image-style"
                        />
                        <div className="experience-stats">
                            <Typography
                                className={applyRowStatTextStyles(index)}
                            >
                                {experience.name}
                            </Typography>
                            <Typography
                                className={applyRowStatTextStyles(index)}
                            >
                                {experience.title}
                            </Typography>
                            <Typography
                                className={applyRowStatTextStyles(index)}
                            >
                                {experience.start} {'> '}
                                {experience.end}
                            </Typography>
                        </div>
                        <Typography
                            className={applyRowTextStyles(index)}
                            fontSize="medium"
                        >
                            {experience.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
