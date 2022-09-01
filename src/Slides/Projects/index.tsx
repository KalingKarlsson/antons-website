import React, { useState } from 'react';
import './styles.css';
import { Dialog, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

import VIDEO from '../../assets/S4AScanDemo.mp4';
import PDF from '../../assets/ProductPaper.pdf';
import data from '../../assets/data.json';

interface Iproject {
    name: string;
    hint: string;
    url: string | undefined;
    file: boolean;
}

const Project: React.FC<Iproject> = ({ name, hint, url, file }) => {
    const [hover, setHover] = useState(false);
    const [showVideo, setShowVideo] = useState<boolean>(false);

    const onHover: React.MouseEventHandler<HTMLDivElement> = () => {
        setHover(true);
        setShowVideo(false);
    };

    const onLeave: React.MouseEventHandler<HTMLDivElement> = () => {
        setHover(false);
    };

    // const downloadFile = (): void => {
    //     window.location.href =
    //         'https://expo.dev/artifacts/eas/hgEyF7KBvA6XdxJ4Vc2Pog.apk';
    // outdated apk version N/A
    // };

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

            {hover && file && (
                <div className="content-container">
                    {showVideo ? (
                        <Dialog
                            open={showVideo}
                            className="video-container"
                            onBackdropClick={() => {
                                setHover(false);
                                setShowVideo(!showVideo);
                            }}
                        >
                            <ReactPlayer
                                url={VIDEO}
                                volume={0}
                                muted
                                width="100%"
                                height="100%"
                                controls
                            />
                        </Dialog>
                    ) : null}

                    <div className="download-button">
                        <a href={PDF} target="_blank" rel="noreferrer">
                            Images
                        </a>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="download-button"
                            onClick={() => {
                                setShowVideo(!showVideo);
                            }}
                        >
                            Video
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Projects: React.FC = () => (
    <div id="projects" className="projects">
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
                        file={project.file}
                        key={Math.random()}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Projects;
