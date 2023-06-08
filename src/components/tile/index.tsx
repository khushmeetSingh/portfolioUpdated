import React from "react";
import styled, { keyframes } from "styled-components";
import EducationPic from 'images/EducationBackground2.png';
import SkillsBackground from 'images/SkillsBackground.png';
import ProjectBackground from 'images/projectsBackground.png'

const backgroundSizeAfterAnimation = '500px';
const backgroundSizeBeforeAnimation = '300px';
const bgSizeAnim = keyframes`
from{
    background-size: ${backgroundSizeBeforeAnimation};

}
to{
    background-size: ${backgroundSizeAfterAnimation};
}
`;
const tileAnimationDuration = '0.6s';

const StyledTile = styled.div<{backgroundColor: string, colorFirst: string, backgroundURL?:string}>`
    border-radius: 8px;
    height: 370px;
    width: 280px;

    background-color: ${props=>props.backgroundColor};
    color: ${props=>props.colorFirst};
    background: #fff url('${props=> props.backgroundURL}') center center no-repeat;
    background-size: ${backgroundSizeBeforeAnimation};
    transition: background ${tileAnimationDuration} ;
    overflow: hidden;

    &:hover{
        background: #fff url('${props=> props.backgroundURL}') left center no-repeat;
        animation: ${bgSizeAnim} ${tileAnimationDuration} ;
    background-size: ${backgroundSizeAfterAnimation};
    }

`;

const InfoTileScreen = styled.div`
    background-color: transparent;
    height: 100%;
    width: 100%;
    transition: background-color 0.5s ease-out;

    color: #000;
    font-size: 48px;
    font-weight: 600;


    &:hover{
        background-color: #bbb7b76e;
        // opacity: 0.6;
    }
`;
const InfoTile = styled.div`
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: #000;
    font-size: 48px;

`


interface TileProps{
    mode: string;
}

function Tile({mode}:TileProps){
    if(mode === 'Education'){
        return <>
            {/* <img src={EducationPic.src} alt="bgEdu" /> */}
            <StyledTile backgroundColor="#fff" backgroundURL={EducationPic.src} colorFirst="#fff">
                <InfoTileScreen>
                </InfoTileScreen>
                <InfoTile>Eua</InfoTile>
            </StyledTile>
        </>;
    }else if(mode === 'Skills'){
        return <>
            <StyledTile backgroundColor="#fff" backgroundURL={SkillsBackground.src} colorFirst="#fff" >
            <InfoTileScreen></InfoTileScreen>
            </StyledTile>
        </>;
    }else if(mode === 'PersonalProjects'){
        return <>
            <StyledTile backgroundColor="#fff" backgroundURL={ProjectBackground.src} colorFirst="#fff" >
            <InfoTileScreen></InfoTileScreen>
            </StyledTile>
        </>;
    }else{
        return <>Wrong Prop passed as mode to Tile component</>;
    } 
}

export default Tile;