import React from 'react';
import { Typography } from '@mui/material';

import './styles.css';
import skills from '../../assets/SkillsGroup.png';

const Skills: React.FC = () => (
    <div id='skills' className="skills">
        <div className="skills-content">
            <Typography className="skills-title" fontSize="xx-large">
                Skills
            </Typography>
            <img src={skills} alt="skills" className="image-skills" />
        </div>
    </div>
);

export default Skills;
