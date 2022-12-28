import React from 'react'
import { Aboutus, Header, Services } from '../components'

const Home = () => {
    return (
        <div id='scrollContainer'>
            <Header id="home" />
            <Aboutus id="about" />
            <Services id="services" />
        </div>
    )
}

export default Home