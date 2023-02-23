import React from 'react';
import { Banner, Bitmoji, NameHeading } from './styles'
import BITMOJI from '/images/Homepage-bitmoji.png';
import GlobalStyle from './global-style';
import { Head } from 'next/document';
import Script from 'next/script';

//{bitmojiPath,firstHeadingText,secondHeadingText}:LandingPageProps)=>
const LandingPage=function(){
    return<>
    <Head>
        {/* <Script src='./index.js' strategy='lazyOnload'></Script> */}
    </Head>
   <GlobalStyle/>
    <Banner>
        <Bitmoji src={BITMOJI.src} height={"700px"} width={"auto"}/>
        <NameHeading>Khushmeet Singh</NameHeading>
    </Banner>
    </>
}

//require('./bitmoji-homepage.png').default

export default LandingPage;