import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
// import { format } from "timeago.js"
import axios from 'axios';

const Container = styled.div`
width : ${(props) => (props.type !== "sm" && "360px")};
margin-bottom :${(props) => (props.type === "sm" ? "10px" : "45px")};
cursor: pointer;
display : ${(props) => props.type === "sm" && "flex"}
gap :10px;
`


const Image = styled.img`
width : 100%;
height: ${(props) => props.type === "sm" ? "160px" : "202px"};
flex: 1;
`

const Details = styled.div`
display:flex;
margin-top:${(props) => props.type === "sm" && "10px"};
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
const Card = ({ type, video }) => {
    const [channel, setChannel] = useState({});
    useEffect(() => {
        const fetchChannel = async () => {
            const res = await axios.get(`/users/find/${video.userId}`)
            setChannel(res.data)
        }
        fetchChannel()
        console.log('i fire once');
    },[video.userId])
    return (
        <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Image type={type} src={video.imgUrl} />
                <Details type={type}>
                    <ChannelImage type={type} src={channel.image} />
                    <Texts>
                        <Title>{video.title}</Title>
                        <ChannelName>{channel.name} </ChannelName>
                        <Info>{video.views} views •{video.createdAt}</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}


export default Card