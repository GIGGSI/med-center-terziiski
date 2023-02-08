import React from 'react'
import { Link } from 'react-router-dom'

import { footerAboutUsData } from '../FooterConstants'

export const FooterAboutUs = () => {
    return (
        <div>
            <p className='footer-title'>За Нас</p>
            {footerAboutUsData.map((item) => (
                <Link key={item.id} to="/">
                    <p className='footer-single-item'>{item.service}</p>
                </Link>
            ))}
        </div>
    )
}
