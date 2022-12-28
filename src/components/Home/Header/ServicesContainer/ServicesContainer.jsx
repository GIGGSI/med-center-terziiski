import React from 'react'
import { useDispatch } from 'react-redux'
import { setSingleServiceid } from '../../../../actions/index'
import { servicesData } from '../../Services/ServicesData'

import { scrollToSection } from '../../../../utilities/ScrollToSection'

import './ServicesContainer.css'
const ServicesContainer = () => {
    const dispatch = useDispatch();

    const setIds = (id)=>{
        dispatch(setSingleServiceid(id))
        scrollToSection('services')
    }
    return (
        <div className='services-container'>
            {servicesData.map((item) => (
                <p key={item.id}
                    onClick={() => setIds(item.id)}
                >
                    {item.title}
                </p>
            ))}
        </div>
    )
}

export default ServicesContainer