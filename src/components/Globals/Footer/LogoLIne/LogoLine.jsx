import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import { images } from '../../../../constants/images'

import './LogoLine.css'
const LogoLine = () => {
    let location = useLocation();

    return (
        <div className="logo-line-wrapper">
            <div className='logo-line-image-container'>
                <Link
                    to={location.pathname !== '/' && '/'}
                >
                    <img
                        onClick={() => location.pathname === '/' && window.scrollTo(0, 0)}
                        src={images.logoTerziiski}
                        alt="Medical Center Trinity"
                    />
                </Link>
            </div>
        </div>

    )
}

export default LogoLine