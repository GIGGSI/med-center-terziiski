import React from 'react'
import { socialMediaData } from '../FooterConstants'

import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className='social-media-wrapper'>
            <p className='footer-title'>Блог</p>
            <p className='footer-title'>Последвайте ни</p>
            <div className='social-media-container'>
                {socialMediaData.map((item) => (
                    <a href={item.url} key={item.id} target="_blank" rel="noreferrer">
                        {item.icon}
                    </a>
                ))}

            </div>
        </div>
    )
}

export default SocialMedia