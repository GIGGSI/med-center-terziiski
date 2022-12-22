import React from 'react'
import { Aboutus, Header } from '../components'

const Home = () => {
    return (
        <div id='scrollContainer'>
            <Header id="home" />
            <Aboutus id="about" />
        </div>
    )
}

export default Home