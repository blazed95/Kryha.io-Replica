import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"



const Navbar = ({ location }) => {

    const urlLocation = String(location.pathname.slice(1))

    return (
        <StyledNav urlLocation={urlLocation}>
            <ul className="items-container">
                <li className="item-links"><Link to="/" className="link home">Home</Link></li>
                {/*<li className="item-links"><Link to="/shop" className="link shop">Shop</Link></li>*/}
                <li className="item-links"><Link to="/art" className="link art">Art</Link></li>
                {/*<li className="item-links"><Link to="/contact" className="link contact">Contact</Link></li>*/}
            </ul>
        </StyledNav>
    )
}
export default Navbar
const StyledNav = styled.div`
position:fixed;
justify-content: center;
display: flex;
align-items: center;
justify-content: center;
width: 90px;
height: 100%;
//background-color: white;
border: solid #80ffdb;
border-bottom-width: 0;
border-top-width: 0;
border-right-width: 1.5px;
border-left-width: 0px;
-webkit-transform-origin: left top;
transform-origin: left top;
z-index:2;
.items-container{
    position: relative;
    height: 70%; 
    width: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    list-style-type: none;
    /*color: #f32f02;*/
    padding:0;
    margin: 0;
} 
.item-links{
    font-family: 'Montserrat';
    text-transform: uppercase;
    transform: rotate(-90deg);
    margin: 0;
    font-size: 15px;
    
}

.link {
    display: flex; 
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 50px;
    color: #1FFFBF;
    text-decoration: none;
    position: relative;

}
.home{
    color: ${({ urlLocation }) =>
        (urlLocation === "") ? "#faf9f9" : "#1FFFBF"};
}
.shop{
    color: ${({ urlLocation }) =>
        (urlLocation === "shop") ? "#faf9f9" : "#1FFFBF"};
}
.art{
    color: ${({ urlLocation }) =>
        (urlLocation === "art") ? "#faf9f9" : "#1FFFBF"};
}
.contact{
    color: ${({ urlLocation }) =>
        (urlLocation === "contact") ? "#faf9f9" : "#1FFFBF"};
}
.link:hover{
    color: #faf9f9;
}
.link:after {    
  background: none repeat scroll 0 0 transparent;
  left: -50%;
  top: 60px;
  content: "";
  height: 3px;
  position: absolute;
  background: #fff;
  width: 0;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  z-index:2;

}
.link:hover:after {
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 200%;    
    z-index:2;
}

`
