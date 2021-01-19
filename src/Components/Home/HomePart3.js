import React from 'react'
import styled from "styled-components";
import img2 from '../../photos/pexels-anni-roenkae-4175070.jpg';

const HomePart3 = () => {




    return (
        <StyledHome >
            <div className="secion3-container" >
                <div className="empty-container" />
                <div className="container-image" >
                    <div className="image">
                        <div className="image-inner1">
                            Takasi Kakubo
                            <p>zero your ego</p>
                        </div>
                        <div className="image-inner2">
                            <p className="image-inner2-paragraph1"> 616</p>
                            <div className="image-inner2-line"></div>
                            <p className="image-inner2-paragraph2"> 616</p>
                        </div>
                        <div className="image-inner3">
                            Cabaret Nocturne
                            <p>just be you</p>
                        </div>
                    </div>

                </div>




            </div>
        </StyledHome>
    )
}
export default HomePart3
const StyledHome = styled.div`
width: 100%;
height: 120vh;
z-index: 0;
background-color: #5E60CE;
.empty-container{
    width: 100%;
    height:20vh;
}
.container-image{
    width: 100%;
    height: 100vh;
    display:flex;
justify-content: flex-end;
align-items: flex-end;
}
.image{
    height:100%;
    width: calc(100% - 91.5px); //90px the widht of nav +1.5px the width of borderline
    //margin-left: 90px;
    background-image: linear-gradient(rgba(94, 96, 206, 1 ), rgba(94, 96, 206, 0.7)),url(${img2}); 
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    text-align: center;

}
.image-inner1, .image-inner3{
    font-size: 70px; 
    color: #faf9f9;
    font-family: "Montserrat", sans-serif;
    text-shadow: 2px 3px 2px #38e09a;
    font-weight: 800 BOLD;
    
}
.image-inner1 p, .image-inner3 p{
    font-size: 10px;
    font-family: "inter";
    color: #1FFFBF;
    text-shadow: 0px 0px 0px #faf9f9;
    letter-spacing: 5px;
}
.image-inner2{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align:center;
}
.image-inner2-line{
    height: 550px;
    border-left: .5px solid #1FFFBF;
}

.image-inner2-paragraph1{
    margin: 40px 0;
    transform: rotate(-90deg);
    color: #1FFFBF;
}
.image-inner2-paragraph2{
    margin: 40px 0;
    transform: rotate(90deg);
    color: #1FFFBF;
}
`