//This styles file follows top to bottom approach
//The parent element being the root of the tree and the childen being its leaves

import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'

const h1Size = '130px';
const h2Size = '75px';
const h3Size = '50px';
const h4Size = '35px';
const h5Size = '24px';
const h6Size = '16px';
const ParagraphSize = '12px';

//Animation for background for the image as well the text's color
const bgGradient = keyframes`
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
`

//Component for the Banner gradient
export const Banner = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(75deg,  #16ffec ,
  #0883ffb1 ,
  #23abd44e ,
  #052c6033);
  background-color:#000;

  display:flex;
  align-items:center;
  justify-content: space-around;

  /*Animation for background on splash page's first section*/
  animation: ${bgGradient} 7s ease-in infinite alternate;
  background-size:150%;
`

//Component for the img on banner
export const Bitmoji = styled.img`
  margin-left:30px;
  display:inline
`

export const Text = styled.h2`
color:#fff;
font-size:
`

export const TextDiv = styled.div`
display:flex;
flex-direction:column; 
`
const TextFillAnimation=keyframes`
from{
  width:0;
}
to{
  width:100%;
  color:#fff;
}
`

//Component for the heading containing the name
export const NameHeading = styled.h1`
  &{
    color:#100f10;
  font-size:${h1Size};
  // display:inline;

  -webkit-text-stroke:3.5px #fff;
  // background: -webkit-linear-gradient(315deg,#C89D7C,#5f4531);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // background-size:130%;
  // animation: ${bgGradient} 7s ease-in infinite alternate-reverse;
  position:relative;
  }
  &:before {
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #fff;
    overflow: hidden;
    position: absolute;
    content: "KhushmeetSingh";
    border-right : 2px solid #37b9f1;
    -webkit-text-stroke : 0vw #2ecc71;
    animation: ${TextFillAnimation} 3s ;
    animation-iteration-count:1;
  }
`


//Styled component for the text that will be written on the banner except for the name
export const BannerText = styled.h2`
font-size:${h3Size};
color:#fff;
display:inline;

`