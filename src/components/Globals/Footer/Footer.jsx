import React from 'react'

import './Footer.css'
import { FooterAboutUs } from './FooterAboutUs/FooterAboutUs'
import FooterServices from './FooterServices/FooterServices'
import LogoLine from './LogoLIne/LogoLine'
import SocialMedia from './SocialMedia/SocialMedia'
import WorkTime from './WorkTime/WorkTime'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <LogoLine />
            <div className='footer-container'>
                <WorkTime />
                <FooterServices />
                <FooterAboutUs />
                <SocialMedia />
            </div>
            <p className='all-rigth-reserverd'>@{new Date().getFullYear()} МЦ "Терзииски" - Всички права запазени!</p>
        </div>
    )
}

export default Footer