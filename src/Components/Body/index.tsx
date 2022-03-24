import React from 'react';
import Contact from '../../Slides/Contact';
import Experience from '../../Slides/Experience';
import Projects from '../../Slides/Projects';
import Skills from '../../Slides/Skills';
import './styles.css';

const Body: React.FC = () => (
    <div className="App-Body">
        <Projects />
        <Skills />
        <Experience />
        <Contact />
    </div>
);

export default Body;
