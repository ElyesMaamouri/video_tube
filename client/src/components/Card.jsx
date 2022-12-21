import React from 'react'
import styled from 'styled-components'
import {
   Link
  } from "react-router-dom";
const Container = styled.div`
width : ${(props)=> (props.type!=="sm" && "360px")};
margin-bottom :${(props)=> (props.type==="sm" ? "10px" :"45px")};
cursor: pointer;
display : ${(props)=> props.type==="sm" && "flex"}
gap :10px;
`


const Image = styled.img`
width : 100%;
height: ${(props)=> props.type==="sm" ? "160px" :"202px"};
flex: 1;
`

const Details = styled.div`
display:flex;
margin-top:${(props)=> props.type==="sm" && "10px"};
gap:12px;
flex: 1;`

const ChannelImage = styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;`

const Texts = styled.div``;

const Title = styled.h1`
font-size:16px;
font-weight: 500;
color :black;
margin:0;
 
`;

const ChannelName = styled.h2`
font-size:14px;
color:#999;
margin:9px 0px;`;

const Info = styled.div`
font-size:14px;
color:#999;
`
const Card = ({type}) => {
    return (
       <Link to="/video/test" style={{textDecoration:"none"}}>
       <Container type={type}>
            <Image type={type} src="https://miro.medium.com/max/720/1*G1cb_W9COSb914qFifLJ0g.webp" />
            <Details type={type}>
                <ChannelImage type={type} src='https://yt3.ggpht.com/ytc/AMLnZu81t6CR-pl7fCLh7tEL1hazE2_P8vSqALGfsi22=s88-c-k-c0x00ffffff-no-rj' />
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>Channel 1</ChannelName>
                    <Info>128,555 • 10 day ago</Info>
                </Texts>
            </Details>
        </Container>
        </Link>
    )
}


export default Card