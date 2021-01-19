import React from 'react'
import styled from "styled-components";
import logo from '../../photos/bnbwhite.png'
import { Link } from "react-router-dom"
const Logo = () => {
    return (
        <StyledLogo>
            <div className="logo-container">

                <Link to="/" className="logo-link">
                    <img className="logo" src={logo} alt="image12">
                    </img>
                </Link>
            </div>
        </StyledLogo>

    )
}
export default Logo

const StyledLogo = styled.div`
height: 20vh;
width: 100%;
color: black;
display: flex;
justify-content: center;
align-items:center;

.logo-container{
    width: 70%;
    z-index: 1; 
}
.logo{
    position: relative;
    color: #faf9f9;
    font-size: 70px;
    font-family: Inter;
    width: 100px;
    z-index: 1; 
}


`