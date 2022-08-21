import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { navbarLinks } from './NavbarConstants'
import { scrollToSection } from '../../../utilities/ScrollToSection'

import { HashLink } from 'react-router-hash-link';

import HamburgerIcon from '../../UI/HamburgerIcon/HamburgerIcon'

import { images } from '../../../constants/images'
import { FiPhone } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
    const height = useSelector(state => state.height)

    const [click, setClick] = useState(false);

    let container = React.createRef();
    let location = useLocation();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = id => {
        scrollToSection(id)
    }

    const handleClickOutside = (event) => {
        if (
            container.current &&
            !container.current.contains(event.target) &&
            !(event.target.className === "menu-icon")
        ) {
            closeMobileMenu()
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    });

    return (
        <div className={location.pathname === '/'
            ? height < 600 && !click
                ? 'navbar-home-transparent'
                : 'navbar-home'
            : 'navbar'
        }
        >
            <div className="navbar-container container">

                <Link
                    to={location.pathname !== '/' && '/'}
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                >
                    <div className='navbar-logo-container'>
                        <img
                            onClick={() => location.pathname === '/' && window.scrollTo(0, 0)}
                            src={images.logoTerziiski}
                            alt="Medical Center Trinity"
                        />
                    </div>

                </Link>
                <div
                    className="menu-icon" ref={container}
                    onClick={handleClick}
                >
                    <HamburgerIcon open={click} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    {navbarLinks.map((item) => (
                        <li
                            key={item.id}
                            className="nav-item"
                            onClick={() => {
                                scrollToTop(item.url)
                                closeMobileMenu()
                            }}
                        >
                            <HashLink
                                to={location.pathname !== '/' ? `/${item.footerUrl}` : '/'}
                                onClick={() => location.pathname === '/' && scrollToSection(item.url)}
                                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                                elementId={location.pathname === '/' ? `${item.footerUrl}` : ''}
                                className="nav-links"
                            >
                                {item.title}
                            </HashLink>

                        </li>
                    ))}

                    <li className='save-hours-mobile'>
                        <a
                            href='tel:0895690009'
                        >
                            <FiPhone /> Запази час

                        </a>
                    </li>
                </ul>
                <div className='save-hours'>

                    <HashLink
                        to={location.pathname !== '/' ? `/#contact` : ''}
                        onClick={() => location.pathname === '/' && scrollToSection('contact')}
                        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                        // elementId={location.pathname === '/' ? `${item.footerUrl}` : ''}
                        className="nav-links"
                    >
                        <FiPhone />   <p> <span>Запази час</span></p>
                    </HashLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar