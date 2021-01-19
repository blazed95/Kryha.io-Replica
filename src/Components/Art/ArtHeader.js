import React from 'react'
import styled from "styled-components";
import image from '../../photos/pexels1.png'
const ArtHearder = () => {
    return (
        < StyledArtHeader>
            <div className="header-container">
                <div className="intro-container">
                    <div className="intro">
                        <img className="intro-img" src={image} alt="sonia"></img>
                    </div>
                </div>
            </div>

        </ StyledArtHeader>
    )
}
export default ArtHearder

const StyledArtHeader = styled.div`
display: flex;
justify-content: flex-end;
height: 50vh;
position: relative;

.intro-container{
    overflow: hidden;
    width: calc(100vw - 91.5px);
    height: 50vh;

}
.intro {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content:center;
    background-color: #212529;
    width: 100%;
    height: 50vh;
    padding-right: 20%;
    font-size: 50px; 
    color: #faf9f9;
    font-family: "Montserrat", sans-serif;
    text-shadow: 2px 3px 2px #38e09a;
    font-weight: 800 BOLD;
    letter-spacing: 2px;
}
.symbol-golden{
    color:#ffee32;
    text-shadow: 2px 3px 2px #c5a937 ;
}
.intro-img{
    object-fit: cover;
    
    opacity: 0.7;


}
`