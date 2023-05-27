import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Information from '@/components/information';
import { visitLexicalEnvironment } from 'typescript';

const OuterDrawerMenuContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const animation = keyframes`
0%{}
100%{
    transform: rotate3d(0,0,0,45deg);
}
`;
const InnerDrawerMenuContainer = styled.div`
    &{
    width: 900px;
    height: 500px;
    border-radius: 25px;
    // transform: skewY(5deg);
    // transform: rotate3d(1,5,0,-25deg);
    background: linear-gradient(to right,#e9e8ea 85%,#f23269 75% );
    display: flex;

    }
     
    &:hover{
        animation: ${animation} 0.28s ease-in-out;
        animation-fill-mode:forwards;
     }
`;
const InnerInformationContainer = styled.div`
    background-color: #e9e8ea;
    width: 85%;
    height: 100%;
    border-radius: inherit;
`;
const InnerMenuContainer = styled.div`
    background-color: #e9e8ea;
    width: 15%;
    height: 100%;
    background-color: #808080;
    // background-color: inherit;
    border-radius: 0 25px 25px 0;
    display: flex;
`;
const MenuOption = styled.div`
    background-color: ${props=>props.color};
    text-align: center;
    height: 100%;
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    text-orientation: upright;
`
const DrawerMenu = function () {
    const bitmojiElement = useRef(null);
    // useEffect(()=>{
    // addEventListener("scroll",()=>{
    //     // bitmojiElement?.curr\ent.style = `margin:${window.scrollY}px 0 0 ${window.scrollY}px;`;
    // })},);
    // const drawerOptions = ['Education', 'Skills', 'Personal Projects'];
    // const drawerOptions = ['Education', 'Skills', 'Personal Projects'];
    const drawerOptions = [
        {type: "Education",color: '#234443'},
        {type: "Skills",color: '#808080'},
        {type: "Personal Projects",color: '#000'},
    ];
    return <>
        <OuterDrawerMenuContainer>
            <InnerDrawerMenuContainer>
                <InnerInformationContainer>
                    <Information mode='Education'/>
                </InnerInformationContainer>
                <InnerMenuContainer>
                    {drawerOptions.map((value:{ type: string; color: string; })=>{
                        return <MenuOption color={value.color} key={`${value.type}-key`}>{value.type}</MenuOption>;}
                    )}
                </InnerMenuContainer>
            </InnerDrawerMenuContainer>
        </OuterDrawerMenuContainer>
    </>
}

export default DrawerMenu;