import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { useLocation } from "react-router-dom";
import Comments from '../components/Comments';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchSuccess, fetchFailure, like, dislike } from '../redux/videoSlice';


const Container = styled.div`
display:flex;
gap :24px
`

const Content = styled.div`
flex:5;
`
const VideoWrapper = styled.div`
flex:5;
`

const Recommendation = styled.div`
flex:2;
`

const Title = styled.h1`
font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;`;

const DetailsVideo = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;`;

const Info = styled.span``;

const Buttons = styled.div`  
display: flex;
gap: 20px;`;

const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;`;

const Hr = styled.hr`
margin: 15px 0px;
border : 0.5px solid #232323
`
const Channel = styled.div`
display : flex;
justify-content : space-between;

`

const ChannelInfo = styled.div`
display:flex;
gap:20px;
`


const Image = styled.img`
width :50px;
height:50px;
border-radius:50%;
`;
const ChannelDetail = styled.div`
display : flex;
flex-direction:column;
color : #232323;`;
const ChannelName = styled.span`
font-weight :500`;
const ChannelCounter = styled.span`
margin-top :5px;
margin-bottom:20px;
font-size : 12px;
color :#232323;
`;
const Description = styled.span`
font-size : 14px`;
const Subcribe = styled.button`
background-color: red;
font-weight:500;
color: white;
border:none;
border-radius:5px;
height: max-content;
padding :10px 20px;
cursor : pointer;
text-transform: uppercase;
`


const Video = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { currentVideo } = useSelector((state) => state.video)

    // Take id video from path
    const path = useLocation().pathname.split("/")[2];
    const dispatch = useDispatch();
    const [video, setVideo] = useState({});
    const [channel, setChannel] = useState({});



    useEffect(() => {
        const fetchVideoData = async () => {
            console.log('first useeffect')
            try {
                const videoRes = await axios.get(`/videos/find/${path}`);
                console.log('data of video', videoRes.data)
                const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
                setVideo(videoRes.data)
                setChannel(channelRes.data);
                dispatch(fetchSuccess(videoRes.data));
               
            } catch (err) {
                dispatch(fetchFailure());
            }
        };
        fetchVideoData();
    }, [path, dispatch]);

const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    console.log('like like like')
    dispatch(like(currentUser._id))
}

const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id))
}
console.log("Alll likes",currentVideo.likes)
    return (

        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/4IxQ5H2CPn4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoWrapper>
                <Title>{currentVideo.title}</Title>
                <DetailsVideo>

                    <Info>{currentVideo.views} views • {currentVideo.createdAt}
                    </Info>

                    <Buttons>
                        <Button onClick={handleLike}>
                            <ThumbUpOutlinedIcon /> {currentVideo.likes?.length} Like
                        </Button>
                        <Button onClick={handleDislike}>
                            <ThumbDownOffAltOutlinedIcon /> {currentVideo.dislikes?.length} Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon /> Save
                        </Button>
                    </Buttons>
                </DetailsVideo>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src={channel.image} />
                        <ChannelDetail>

                            <ChannelName>{channel.name}</ChannelName>
                            <ChannelCounter> {channel.subscribers} subcribes</ChannelCounter>
                            <Description>
                                {currentVideo.description}
                            </Description>


                        </ChannelDetail>

                    </ChannelInfo>
                    <Subcribe>subcribe</Subcribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>

        </Container>

    )
}

export default Video
