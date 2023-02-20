import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'

const bgGradient=keyframes`
from {
    background-position: left;
  }
  to {
    background-position: right;
  }
`
export const MainDiv=styled.div`
height: 100vh;
width: 100vw;
background: linear-gradient(75deg,  #16ffecd3 ,
#0883ff7c ,
#23abd44e ,
#052c6033);

/*Animation for background on splash page's first section*/
animation: ${bgGradient} 9s ease-in infinite alternate;
background-size:150%;
`
