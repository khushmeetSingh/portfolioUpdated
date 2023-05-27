import React, { useEffect, useRef } from 'react';
import Banner, { BannerText,SmallerBannerText, Bitmoji, NameHeading, TextDiv , AnimationDiv } from './styles'
import BITMOJI from '/images/Homepage-bitmoji.png';

const BannerMain = function () {
    const bitmojiElement = useRef(null);
    return <>
        {/* <GlobalStyle /> */}
        <Banner>
            <Bitmoji src={BITMOJI.src} height={"700px"} width={"auto"} ref={bitmojiElement} />
            <TextDiv>
                <BannerText>Hello, I am</BannerText>
                <AnimationDiv>
                    <NameHeading id="Khushmeet">Khushmeet</NameHeading>
                    <NameHeading id="Singh">Singh</NameHeading>
                </AnimationDiv>
                <SmallerBannerText>:Student, Developer </SmallerBannerText>
            </TextDiv>
    {/* <Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={200}> */}
        </Banner>
        
    </>
}

export default BannerMain;