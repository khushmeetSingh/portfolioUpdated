import React, { useEffect, useRef } from 'react';
import Banner, { BannerText,SmallerBannerText, Bitmoji, NameHeading, TextDiv , AnimationDiv } from './styles'
import BITMOJI from '/images/khushmeetPic.png';


const BannerMain = function () {
    const bitmojiElement = useRef(null);
    const obj = {
        imageUrl: BITMOJI.src,
    };
    const img = '/images/Homepage-bitmoji.png';
    return <>
        {/* <GlobalStyle /> */}
        <Banner>
            <Bitmoji src={obj.imageUrl} height={"600px"} width={"auto"} />
            {/* <image */}
            <TextDiv>
                <BannerText>Hello, I am</BannerText>
                <AnimationDiv>
                    <NameHeading id="Khushmeet">Khushmeet</NameHeading>
                    <NameHeading id="Singh">Singh</NameHeading>
                </AnimationDiv>
                <SmallerBannerText>:Student, Developer</SmallerBannerText>
            </TextDiv>
        </Banner>
        
    </>
}

export default BannerMain;