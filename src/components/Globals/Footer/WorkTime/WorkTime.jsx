import React from 'react'

import { phonesData } from '../FooterConstants'

const WorkTime = () => {
    return (
        <div>
            <div className='phones-container'>
                <p className='footer-title'>Телефон</p>
                {phonesData.map((item) => (
                    <p key={item.id} className="footer-single-item">{item.phoneNumber}</p>
                ))}

            </div>
        </div>
    )
}

export default WorkTime