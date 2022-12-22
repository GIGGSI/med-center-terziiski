import React from 'react'
import { images } from '../../../constants/images'

import './AboutUs.css'

const Aboutus = ({ id }) => {
    return (
        <div id={id} className="about-us-wrapper">
            <h1 className='title'>Ние се грижим за вашето здраве</h1>
            <div className='about-use-container'>
                <div className='about-us-image'>
                    <img src={images.aboutUs} alt="Медицински Център Терзийски" />

                </div>
                <div className='about-us-content'>
                    <h3>
                        Ранна и точна диагностика на онкологичните и гинекологичните заболявания.

                    </h3>
                    <h3>
                        Диагностика на заболяванията на млечната жлеза. Единственият в Югозападна България център за остеопороза.
                    </h3>
                    <h3>
                        Най-съвременната апаратура за морфология на плода и LIVE 4D/5D -
                        GE Volusion E6, Medison V20 Prestige и Medison V10
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Aboutus