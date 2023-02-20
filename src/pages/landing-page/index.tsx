import { MainDiv } from './styles'
import React from 'react';

interface LandingPageProps{
    bitmojiPath?:string;
    firstHeadingText?:string;
    secondHeadingText?:string;
}

const LandingPage=({bitmojiPath,firstHeadingText,secondHeadingText}:LandingPageProps)=>{
    return<>
    <MainDiv>
    </MainDiv>
    </>
}

export default LandingPage;