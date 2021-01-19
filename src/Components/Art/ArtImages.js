import React, { useEffect, useState } from 'react'
import { gsap, TimelineLite, Power3, Power2 } from "gsap";
import { ReactComponent as RightArrow } from "../../photos/right-arrow.svg"
import { ReactComponent as LeftArrow } from "../../photos/left-arrow.svg"
import styled from "styled-components";
import img1 from '../../photos/photo-mtg-1.png'
import img2 from '../../photos/photo-bnb-2.png'
import img3 from '../../photos/photo-kws-3.png'
import img4 from '../../photos/photo-yoga-4.png'
const images = [
    {
        id: 3,
        title: "KWS-TOUR",
        desc: "Gang Vacations At Kws Island",
        img: img3
    },
    {
        id: 1,
        title: "DIY-MTG",
        desc: "DIY Matsagou Skatepark At Volos",
        img: img1
    },
    {
        id: 4,
        title: "YOGA-LIFE",
        desc: "Free Yoga Classes",
        img: img4
    },
    {
        id: 2,
        title: "BNB-LIVE",
        desc: "Our First Live at Nuestra Barra",
        img: img2
    }

]

const ArtImages = () => {

    const [clicked, setClicked] = useState({
        left: "",
        right: "active"
    })

    useEffect(() => {
        const t1 = gsap.timeline();

        if (clicked.right === "disable") {
            console.log(clicked)
            t1.to(".img-container:nth-of-type(4)", 0, { scale: 0.4, opacity: 0, ease: Power2.easeInOut })
                .to(".img-container:nth-of-type(4)", 0, { left: "calc(-33.33vw * 3)", ease: Power2.easeInOut })
                .to(".img-container:nth-of-type(4)", 1.2, { zIndex: 5, scale: 1, opacity: 1, ease: Power2.easeInOut })
                .to(".img-container:nth-of-type(1), .img-container:nth-of-type(2), .img-container:nth-of-type(3)", 1, { left: "33.333vw" }, "-=1.2s")
        }
        else if (clicked.left === "disable") {
            t1.to(".img-container:nth-of-type(4)", 0.4, { opacity: 0, zIndex: 4, ease: Power2.easeInOut },)
                .to(".img-container:nth-of-type(1), .img-container:nth-of-type(2), .img-container:nth-of-type(3)", 1, { left: "0vw" }, "-=1s")
        }


    }, [clicked])




    return (
        <StyledArtImages clicked={clicked}>
            <div className="images-container">
                <div className="images-row">
                    {images.map((image) =>
                        <div className="img-container" key={image.id}>
                            <div className="image-details">
                                <h2 className="image-title">{image.title}</h2>
                                {/*<p className="image-desc"> {image.desc} </p>*/}
                                <div className="image">
                                    <img className="img" src={image.img} alt={image.title}></img>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <div className="navigation">
                <div className="navigation-arrow left disabled" >
                    <LeftArrow onClick={e => { setClicked({ left: "disable", right: "active" }) }} />
                </div>
                <div className="navigation-arrow right" >
                    <RightArrow onClick={e => { setClicked({ left: "active", right: "disable" }) }} />
                </div>
            </div>
        </StyledArtImages>
    )
}
export default ArtImages

const StyledArtImages = styled.section`

height: 50vh;
display: flex;
    justify-content:flex-end;
.images-container{
    position:relative;
    width: calc(100% - 91.5px);
    height: 50vh;
}
.images-row{
    //background-color: black;
    display:flex;
    overflow:hidden;
}
.img-container{
    cursor:pointer;
    width:33.333vw;
    height: 50vh;
    //left: -33.333vw;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    position:relative;
    z-index: 5;
    box-sizing: border-box;
}
.img-container:hover .img{
opacity:0.4;
}
.image-details{
    width: 33.333vw;
    display: flex;
    justify-content:center;
    align-items: center;
}
.image{
    position: absolute;
    top:0;
    bottom:0; 
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow:hidden;
    opacity: 0.9;
    transition: .3s cubic-bezier(.5,-0.05 ,0.1 ,0.99);
    
}
/*.img-container:nth-of-type(1){
display:none; 
}*/

.img{
    height: 100%;
    width: 100%;
    object-fit:cover;
}
.image-title{
    font-size:40px;
    color: white;
    

}
.navigation{
    position: absolute;
    bottom: 0px;
    width: calc(100% - 91.5px);
    display: flex;
    justify-content: space-between;
    align-items:center;
    z-index:10;
    padding: 20px 30px;
    box-sizing: border-box;

}
.navigation-arrow{
    height:25px;
    width: 25px;
    background-color:white;
    border-radius: 100%;
    padding: 5px;

}
.navigation-arrow-button{
    width: 100%;
    height:100%;
    background-color: red;
    cursor:pointer;
}
.navigation-arrow:hover{
    cursor:pointer;
}
.right{
    opacity:${({ clicked }) => (clicked.right === "active" ? "1" : "0.2")};
  transition: min-height 0.25s ease-in-out;
}
.left{
    opacity:${({ clicked }) => (clicked.left === "active" ? "1" : "0.2")};
  transition: min-height 0.25s ease-in-out;
}
`