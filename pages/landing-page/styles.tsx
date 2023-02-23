import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'


const h1Size='130px';
const h2Size

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
export const Bitmoji=styled.img`
  margin-left:30px;
  display:inline
`

export const Text=styled.h2`
color:#fff;
font-size:
`

//Component for the heading containing the name
export const NameHeading=styled.h1`
  font-size:130px;
  display:inline;

  -webkit-text-stroke:3.5px #fff;
  // background: -webkit-linear-gradient(315deg,#C89D7C,#5f4531);
  // -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size:130%;
  animation: ${bgGradient} 7s ease-in infinite alternate-reverse;
`