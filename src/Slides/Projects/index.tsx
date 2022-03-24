import React, { useState } from 'react';
import './styles.css';
import { Typography } from '@mui/material';

import data from '../../assets/data.json';

interface Iproject {
    name: string;
    hint: string;
    url: string | undefined;
}

const Project: React.FC<Iproject> = ({ name, hint, url }) => {
    const [hover, setHover] = useState(false);
    const onHover: React.MouseEventHandler<HTMLDivElement> = () => {
        setHover(true);
    };

    const onLeave: React.MouseEventHandler<HTMLDivElement> = () => {
        setHover(false);
    };

    return (
        <div
            className="projects-card"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={hover ? 'project-text-hint' : 'project-text-name'}
            >
                <p>{hover ? hint : name}</p>
            </a>
        </div>
    );
};

const Projects: React.FC = () => (
    <div id='projects' className="projects">
        <div className="projects-content">
            <Typography className="projects-title" fontSize="xx-large">
                Projects
            </Typography>
            <Typography className="sub-title" fontSize="larger">
                Hover over to learn more
            </Typography>
            <div className="projects-container">
                {data.projects.map((project, index) => (
                    <Project
                        name={project.name}
                        hint={project.hint}
                        url={project.github}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Projects;
