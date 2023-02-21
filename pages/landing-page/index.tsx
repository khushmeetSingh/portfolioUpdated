import { Banner, Bitmoji } from './styles'
import React from 'react';
import BITMOJI from './bitmoji-homepage.png';
import bitmoji from './bitmoji-homepage.png'
import GlobalStyle from './styles';

const bitmojiPath='/images/bitmoji-homepage.png';
//{bitmojiPath,firstHeadingText,secondHeadingText}:LandingPageProps)=>
const LandingPage=function(){
    return<>
   <GlobalStyle/>
    <Banner>
        <Bitmoji src={BITMOJI.src} height={"700px"} width={"auto"}/>
        {/* <NameHeading></NameHeading> */}
    </Banner>
    </>
}

//require('./bitmoji-homepage.png').default

export default LandingPage;