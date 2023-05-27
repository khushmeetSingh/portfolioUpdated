import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
    background-color: inherit;
    padding-left: 50px;
`;

const Heading1 = styled.h1`
    background-color: inherit;
    text-align: center;
    line-height: 2.4;
    // margin-bottom: 20px;

`;

const HeadingSpan = styled.span`
    color: ${props=>props.color};
    background-color: inherit;
    font-size: 2.3rem;
    font-weight: 700;
`;

const List = styled.ul`
    background-color: inherit;
`;

const ListItem = styled.li`
    background-color: inherit;
    font-size: 1.4rem;
    font-weight: 700;
`;

const ListItemDescription = styled.p`
    background-color: inherit;
    margin-left: 10px;
    // opacity: 0.7;
`;

const ListItemDescriptionFaded = styled.p`
    background-color: inherit;
    margin-left: 20px;
    opacity: 0.7;
`;

interface InformationProps {
    mode: 'Education' | 'Skills' | 'Projects';
}

function Information({ mode }: InformationProps) {
    if (mode === 'Education') {
        return (<>
            <ContainerDiv>
                <Heading1 color="#f23269"><HeadingSpan color="#f23269">E</HeadingSpan>ducation</Heading1>
                <List>
                    <ListItem>SGTB Khalsa</ListItem>
                    <ListItemDescription>Bachelors of Sciences, Computer Science(Honours)</ListItemDescription>
                    <ListItemDescription>Skills:</ListItemDescription>
                    <ListItemDescriptionFaded>C++, Java, JavaFX, HTML, CSS, Node JS, SQL, </ListItemDescriptionFaded>
                </List>
            </ContainerDiv>
        </>)
    }
    else{
        return<></>;
    }
}

export default Information;