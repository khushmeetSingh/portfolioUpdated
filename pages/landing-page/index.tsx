import React from 'react';
import { Banner, BannerText, Bitmoji, NameHeading, TextDiv } from './styles'
import BITMOJI from '/images/Homepage-bitmoji.png';
import GlobalStyle from './global-style';
import { Head } from 'next/document';
import Script from 'next/script';

//{bitmojiPath,firstHeadingText,secondHeadingText}:LandingPageProps)=>
const LandingPage = function () {
    return <>
        <GlobalStyle />
        <Banner>
            <Bitmoji src={BITMOJI.src} height={"700px"} width={"auto"} />
            <TextDiv>
                <BannerText>Hello, I am</BannerText>
                <NameHeading>KhushmeetSingh</NameHeading>
            </TextDiv>
        </Banner>
    </>
}

//require('./bitmoji-homepage.png').default

export default LandingPage;