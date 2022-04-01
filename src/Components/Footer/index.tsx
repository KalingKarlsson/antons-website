import React from 'react';
import './styles.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';

const Footer: React.FC = () => (
    <div className="inner-Footer">
        <div className="content-footer ">
            <div className="iconContainer">
                <IconButton
                    href="https://www.linkedin.com/in/anton-karlsson-34438b104/"
                    target="_blank"
                    className="icon"
                    sx={{ color: 'rgb(255, 247, 247)', padding: '2%' }}
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    href="https://github.com/KalingKarlsson"
                    target="_blank"
                    className="icon"
                    sx={{ color: 'rgb(255, 247, 247)', padding: '2%' }}
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    href="mailto:anton.karlsson@afry.com"
                    className="icon"
                    sx={{ color: 'rgb(255, 247, 247)', padding: '2%' }}
                >
                    <EmailIcon />
                </IconButton>
            </div>
            <p className="text-footer">
                Copyright 2022. All rights reserved Anton Karlsson
            </p>
        </div>
    </div>
);

export default Footer;
