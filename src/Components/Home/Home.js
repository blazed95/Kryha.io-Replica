import React, { useEffect } from 'react'
import HomePart1 from './HomePart1'
import HomePart2 from './HomePart2'
import HomePart3 from './HomePart3.js'
import Navbar from '../Nav/Navbar'
const Home = (props) => {
    useEffect(() => {
        /*let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty("--vw", `${vw}px`)
        and in css-style to catch the actual width width: calc(var(--vw,1vw) * 100); (for full width page 100vw)
        */
    })


    return (

        <>
            <Navbar location={props.location} />
            <HomePart1 />
            <HomePart2 />
            <HomePart3 />

        </>
    )
}
export default Home

