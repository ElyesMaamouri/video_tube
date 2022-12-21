import React from 'react'
import styled from "styled-components";
import Comment from './Comment';
const Container = styled.div``;
const NewComment = styled.div`
display : flex;
align-items : center;
gap : 10px;`;
const Avatar = styled.img`
width :50px;
height:50px;
border-radius:50%;`;
const Input = styled.input`
border: none;
height : max-content;
border-bottom : 1px solid #232323;
background-color : transparent;
outline : none;
width : 100%;
`;

const Comments = () =>{
  return (
    <Container>
        <NewComment>
            <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu81t6CR-pl7fCLh7tEL1hazE2_P8vSqALGfsi22=s88-c-k-c0x00ffffff-no-rj' />
            <Input placeholder='add a comment'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments