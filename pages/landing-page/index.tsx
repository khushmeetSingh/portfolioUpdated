import React from 'react';
import { Banner, BannerText,SmallerBannerText, Bitmoji, NameHeading, TextDiv , AnimationDiv } from './styles'
import BITMOJI from '/images/Homepage-bitmoji.png';
import GlobalStyle from './global-style';
import { Head } from 'next/document';
import Script from 'next/script';

const LandingPage = function () {
    return <>
        <GlobalStyle />
        <Banner>
            <Bitmoji src={BITMOJI.src} height={"700px"} width={"auto"} />
            <TextDiv>
                <BannerText>Hello, I am</BannerText>
                <AnimationDiv>
                    <NameHeading id="Khushmeet">Khushmeet</NameHeading>
                    <NameHeading id="Singh">Singh</NameHeading>
                </AnimationDiv>
                <SmallerBannerText>:Student, Developer and Chess player</SmallerBannerText>
            </TextDiv>
        </Banner>
        
    </>
}

export default LandingPage;