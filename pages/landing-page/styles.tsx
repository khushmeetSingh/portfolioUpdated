import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'


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
margin-left:30px;
`

