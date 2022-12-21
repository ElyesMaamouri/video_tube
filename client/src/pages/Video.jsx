import React from 'react'
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../components/Comments';

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

const Details = styled.div`
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
    return (
        //   <div>video</div>
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/4IxQ5H2CPn4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>

                    <Info>126,525 • 10 day ago</Info>

                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon /> 123
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlinedIcon /> Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon /> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src='https://yt3.ggpht.com/ytc/AMLnZu81t6CR-pl7fCLh7tEL1hazE2_P8vSqALGfsi22=s88-c-k-c0x00ffffff-no-rj' />
                        <ChannelDetail>

                            <ChannelName> 7GeekGamez</ChannelName>
                            <ChannelCounter> 200k subcribes</ChannelCounter>
                            <Description>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</Description>


                        </ChannelDetail>

                    </ChannelInfo>
                    <Subcribe>subcribe</Subcribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            <Recommendation>Recommendation</Recommendation>
        </Container>
    )
}

export default Video