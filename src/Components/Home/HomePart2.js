import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom"






const HomePart2 = () => {




    return (
        <StyledHome >
            <div className="secion2-container" >
                <div className="empty-container" />
                <div className="container2" >
                    <div className="slogan-container1">
                        <h1>Keep it Real - Keep it Loco</h1>
                    </div>
                    <div className="slogan-container2">
                        <h1>Or go home</h1>
                    </div>
                    <div className="paragraph-container">
                        <p>
                            What if changing the world was just about being here,
                            by showing up no matter how many times we get told we don’t belong,
                            by staying true even when we’re shamed into being false,
                            by believing in ourselves even when we’re told we’re too different?
                            And if we all held on to that, if we refuse to budge and fall in line,
                            if we stood our ground for long enough, just maybe… The world can’t help but change around us.
                        </p>

                    </div>
                    <div className="outro-container">
                        <Link to="https://www.instagram.com/brock_n_blazed_officialpage/" className="outro-link">Check us</Link>
                    </div>

                </div>




            </div>
        </StyledHome>
    )
}
export default HomePart2
const StyledHome = styled.div`
width: 100%;
height: 100vh;
background-color: #5E60CE;
z-index: 0;
.empty-container{
    height: 20vh;
    width: 100%;
    z-index: 0;
}
.container2{
    height: 70vh;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-size: 30px;
    font-family: Montserrat, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #CAECF7;
    z-index: 0;

}
.slogan-container1 {
    height: 30vh;
    width: 50%;
    display: flex;
    justify-content:flex-start;
    align-items: flex-end ;
    padding-right: 15%;
    text-shadow: 1px 2px 0px #FEFEFF;
}
.slogan-container2 {
    height: 10vh;
    width: 50%;
    display: flex;
    justify-content:flex-start;
    align-items: flex-start ;
    padding-right: 15%;
    text-shadow: 1px 2px 0px #FEFEFF;
}
.paragraph-container{
    height: 30vh;
    width: 40%;
    font-family:Inter;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start ;
    letter-spacing:2px;
    padding-left: 20%;
    
}
 p{
    margin: 5px 0px;
}
.outro-container{
    width: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family:Inter;
    font-size: 20px;
    font-weight: 400;
 
    border-bottom:  1px  solid #ffd500;
    z-index:0;
    cursor: pointer;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    
}
.outro-container a{
    width: 100%;
}
.outro-link{
    color:#ffd500;
    text-decoration: none;
}

.outro-container:hover{
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width:20%;
}

`