//This styles file follows top to bottom approach
//The parent element being the root of the tree and the childen being its leaves

import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'

const h1Size = '72px';
const h2Size = '75px';
const h3Size = '50px';
const h4Size = '35px';
const h5Size = '24px';
const h6Size = '16px';
const ParagraphSize = '12px';
const BannerTextContent='KhushmeetSingh';

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
  margin-left:40px;
  // border-radius: 60%;
  background: transparent;
  scale: 1.3;
  display:inline
`;

export const Text = styled.h2`
  color:#fff;
  font-size:
`;

export const TextDiv = styled.div`
  display:flex;
  flex-direction:column; 
  background: transparent;
`;
const TextFillAnimation=keyframes`
  0%{
    width:0;
  }
  50%{
    width:100%;
  }
  100%{
    width:0;
  }
`;

//Component for the heading containing the name


//Styled component for the text that will be written on the banner except for the name
export const BannerText = styled.h3`
  font-size:${h3Size};
  color:#fff;
  background: inherit;
  display:inline;
`;

export const AnimationDiv=styled.div`
  display:flex;
  flex-direction:row;
`;

export const NameHeading = styled.h1`
  &{
    font-size:${h1Size};
    display:inline;
    -webkit-text-stroke:1.5px #fff;
    mix-blend-mode: color-dodge;
    position:relative;
    margin-right:35px;
    z-index: 1;
  }
  &: before {
    top: 0;
    left: 0;
    background: inherit1q 3;
    width: 0;
    height: 100%;
    color: #fff;
    overflow: hidden;
    position: absolute;
    content: attr(id);
    border-right : 2px solid #37b9f1;
    -webkit-text-stroke : 0vw #2ecc71;
    animation: ${TextFillAnimation} 4s ease-in-out ;
    animation-iteration-count:1;
  }
`;

export const SmallerBannerText=styled.h4`
  font-size:${h4Size};
  color:#fff;
  display:inline;
  background: inherit;
`;

export default Banner;