import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display : flex;
gap :10px;
margin: 30px 0px;
`

const Avatar = styled.img`
width :50px;
height:50px;
border-radius:50%;`;

const Details = styled.div`
display:flex;
flex-direction: column;
gap:10px;`;

const Name = styled.span`
font-size : 13px;
font-weight:500;`


const Date = styled.span`
font-size : 12px;
font-weight:400;
margin-left : 6px;`


const Text = styled.span`
font-size : 14px;`

export const Comment = () => {
    return (
        <Container>

            <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu81t6CR-pl7fCLh7tEL1hazE2_P8vSqALGfsi22=s88-c-k-c0x00ffffff-no-rj'/>
            <Details>
                <Name> John Doe <Date> 1 Day Ago </Date> </Name>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                </Text>
            </Details>
        </Container>
    )
}
export default Comment