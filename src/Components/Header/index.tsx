import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './styles.css';
import data from '../../assets/data.json';
import About from '../../Slides/About';

const Header: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll: any = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="App-header">
            <section
                className={scrollPosition === 0 ? 'top-nav' : 'top-nav-scroll'}
            >
                <div>{data.name}</div>
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-button-container" htmlFor="menu-toggle">
                    <div className="menu-button" />
                </label>
                <ul className="menu">
                    <li>
                        <Link className="link-tag" to="/#about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="link-tag" to="/#projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="link-tag" to="/#skills">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link className="link-tag" to="/#experience">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link className="link-tag" to="/#contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </section>
            <About />
        </header>
    );
};

export default Header;
