import React from 'react'
import { Link } from 'react-router-dom'

import { footerServicesData } from '../FooterConstants'

const FooterServices = () => {
    return (
        <div>
            <p className='footer-title'>Услуги</p>
            {footerServicesData.map((item) => (
                <Link key={item.id} to="/">
                    <p className='footer-single-item'>{item.service}</p>
                </Link>
            ))}
        </div>
    )
}

export default FooterServices