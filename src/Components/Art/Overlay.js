import React from 'react'
import styled from "styled-components"
import img from '../../photos/pexels-anni-roenkae-4175070.jpg';
const Overlay = () => {
    return (
        <StyledOverlay>
            <div className="image-overlay">
                <div className="overlay"></div>
                <div className="overlay"></div>
                <div className="overlay"></div>
            </div>
        </StyledOverlay>
    )
}
export default Overlay
const StyledOverlay = styled.div`

.image-overlay{
    height:50vh;
    position:absolute;
    width: calc(100% - 91.5px);
    z-index: 10;
    bottom:0;
    left: 91.5px;
    overflow: hidden;
}
.overlay{
    position: absolute;
    height:100%;
    width:33.333vw;
    background: #5E60CE;
    bottom:0;
    left:0;
    right:0;
}
.overlay:nth-child(2){
    left: 33.333vw;
}
.overlay:nth-child(3){
    left: 66.666vw;
    
    
}

`