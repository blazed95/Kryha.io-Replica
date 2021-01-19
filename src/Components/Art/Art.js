import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../Nav/Navbar'
import styled from "styled-components";
import ArtHearder from "./ArtHeader";
import img from '../../photos/pexels-anni-roenkae-4175070.jpg';
import ArtImages from "./ArtImages";
import Overlay from "./Overlay";
import gsap, {
    Power2
} from "gsap";

const ArtAnimation = (divRef, completeAnimation) => {
    //console.log(divRef)

    let t1 = gsap.timeline();
    t1.to(divRef, 1.2, { opacity: 1, ease: Power2.easeInOut })
        .to(".overlay", 1.3, {
            height: 0,
            ease: "expo.out",
            stagger: { amount: 0.4 },
            delay: 0.3,
            zIndex: -2
        }, "-=0.8s")
        .from(".image img", 0.8, {
            scale: 1.2,
            delay: -1.5,
            ease: "expo.out",
            stagger: { amount: 0.4 },
            onComplete: completeAnimation
        })
}

const Art = (props) => {
    const styledArtRef = useRef();
    const [completed, setCompleted] = useState(false);

    const completeAnimation = () => {
        setCompleted(true)
    };

    useEffect(() => {
        ArtAnimation(styledArtRef.current, completeAnimation);
    }, [])

    return (
        <StyledArt >
            <Navbar location={props.location} />
            <div className="outter-container" ref={styledArtRef} >


                <div className="art-container" >
                    {completed === false ? <Overlay /> : <></>}
                    <ArtHearder />
                    <ArtImages />
                </div>

            </div>
        </StyledArt >
    )
}

export default Art

const StyledArt = styled.div`
width: 100%;
height: 100vh;
background-color: #5E60CE;
.outter-container{
    opacity: 0;
    background-image: url(${img});
    background-image: linear-gradient(rgba(94, 96, 206, 1 ), rgba(94, 96, 206, 0.7)),url(${img}); 
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}

`