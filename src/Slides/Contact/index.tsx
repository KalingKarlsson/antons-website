import React from 'react';
import './styles.css';
import { IconButton, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Contact: React.FC = () => (
    <div id='contact' className="contact">
        <div className="contact-content">
            <Typography className="contact-title" fontSize="xx-large">
                Contact
            </Typography>
            <div className="contact-card">
                <p className="text">Do you want to know more? Contact me</p>
                <IconButton
                    className="button"
                    href="mailto:anton.karlsson@afry.com"
                >
                    <ArrowRightAltIcon className="icon" fontSize="large" />
                </IconButton>
            </div>
        </div>
    </div>
);

export default Contact;
