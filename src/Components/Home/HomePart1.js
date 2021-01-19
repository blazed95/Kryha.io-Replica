import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import img from '../../photos/pexels-dids-3705645.jpg';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { gsap, Power3, Power2 } from "gsap";

import CSSRulePlugin from "gsap/CSSRulePlugin";

const t1 = gsap.timeline();


const landingAnimation = () => {

    t1.to(".home-container", 1.2, { opacity: 1, ease: Power2.easeInOut })
        .from(".text-inner-container h1", 0.6, { y: 50, opacity: 0, stagger: { amount: 0.1 }, ease: Power2.easeInOut })
        .from(".symbol-inner-container", 0.6, { opacity: 0, y: 60, ease: Power2.easeInOut })
}

const scrollAnimation = (fillOnScroll) => {
    gsap.registerPlugin(CSSRulePlugin);

    let rule2 = CSSRulePlugin.getRule(":after");
    if (fillOnScroll) {
        t1.to(rule2[rule2.length - 1], 0.5, { opacity: 0, ease: Power2.easeInOut })
            .to(rule2[rule2.length - 1], { display: "none" })
    }
    else if (!fillOnScroll) {
        t1.to(rule2[rule2.length - 1], 0.5, { opacity: 1, display: "block", ease: Power3.easeInOut })
    }
}


const HomePart1 = () => {

    const [fillOnScroll, setfillOnScroll] = useState(false);


    gsap.registerPlugin(CSSRulePlugin);
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y < 0;
            if (isShow !== fillOnScroll) setfillOnScroll(isShow);
            if (currPos.y === 0) setfillOnScroll(false);
        },
        [fillOnScroll],
        false,
        false,
        50
    );

    useEffect(() => {
        scrollAnimation(fillOnScroll)
    }, [fillOnScroll]);
    useEffect(() => {
        landingAnimation();
    }, [])

    return (
        <StyledHome >
            <div className="home-container" >
                <div className="empty-container"></div>
                <div className="text-container" >
                    <div className="text-inner-container">
                        <h1 className="text 1">Life is a bad joke...</h1>
                        <h1 className="text 2">But i am lauging</h1>
                    </div>
                </div>
                <div className="symbol-container">
                    <div className="symbol-inner-container" >
                        <h1 className="symbol1">616</h1>
                        <h1 className="symbol">WE THE <span className="symbol-golden">GOLDEN</span> BOYS</h1>

                    </div>
                </div>


            </div>
        </StyledHome>
    )
}
export default HomePart1
const StyledHome = styled.div`
width: 100%;
height: 100vh;
background-color: #5E60CE;
.empty-container{
    width: 100%;
    height: 20vh;
}
.home-container{
    height: 200vh;
    width: 100%;
    position:relative;
    
    //display: none;
    opacity:0;
}
.home-container:after{
    content: "";
    background: url(${img}); /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    position: absolute;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;  
}

.symbol-container{
    height: 20vh;
    width: 50%;
    margin-left: 50%;
    display: flex;
    align-items:flex-end;
    text-align:center;   
}
.symbol-inner-container{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height:20%;
    width: 100%;
    border: 1px  solid #1FFFBF;
    border-bottom: 0px;
    border-top: 0px;
    border-right: 0px;
    padding: 20px;
    color: #1FFFBF;
    font-family: Inter;
    letter-spacing: 20px;
    font-size: 10px;
    transition: 0.5s ease-in-out;
    z-index: 1; 
    
    opacity: 1;
}
.symbol-golden{
    color:#ffd500;
}
.symbol1{
    letter-spacing: 10px;
    font-weight: 300;
}
.text-container{
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items:center;


}
.text-inner-container{
    width: 65%;
    z-index: 1;   

}
.text{
    font-size: 100px;
    color: #1FFFBF;
    letter-spacing: 5px;
    transition: 0.5s ease-in-out;
}

@media (max-width: 1700px) {
    .text{
    font-size: 80px;
    transition: 0.5s ease-in-out;
    }
    .symbol-inner-container{
    font-size: 8px;
    transition: 0.5s ease-in-out;
    }   
}
@media (max-width: 1400px) {
    .text{
    font-size: 60px;
    transition: 0.5s ease-in-out;
    }
    .symbol-inner-container{
    font-size: 5px;
    letter-spacing: 18px;
    transition: 0.5s ease-in-out;
    }   

}
@media (max-width: 1000px) {
    .text{
    font-size: 50px;
    transition: 0.5s ease-in-out;
    }
    .symbol-inner-container{
    font-size: 4.5px;
    letter-spacing: 15px;
    transition: 0.5s ease-in-out;
    }   
}
`