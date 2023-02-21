import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'

import { createGlobalStyle } from "styled-components"

 const GlobalStyle= createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
 `

const bgGradient = keyframes`
from {
    background-position: left;
  }
  to {
    background-position: right;
  }
`
export const Banner = styled.div`
height: 100vh;
width: 100vw;
background: linear-gradient(75deg,  #16ffec ,
#0883ffb1 ,
#23abd44e ,
#052c6033);
background-color:#000;

/*Animation for background on splash page's first section*/
animation: ${bgGradient} 7s ease-in infinite alternate;
background-size:150%;
`

export const Bitmoji=styled.img`
right:10000px;
`

export default GlobalStyle;