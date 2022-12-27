import { AccountCircleOutlined, VideoCallOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Container = styled.div`
postion : sticky;
top : 0;
margin-bottom: 25px;
`


const Wrapper = styled.div`
display : flex;
align-items : center;
height : 100%;
padding : 0px 20px;
justify-content : flex-end;
postion : relative;

`


const Search = styled.div`
postion : absolute;
width : 40%;
left : 0px;
right :0px;
margin : auto;
display : flex;
align-items : center;
justify-content : space-between;
padding : 5px;
border : 1px solid #ccc;
border-radius : 3px;
`


const Input = styled.input`
border : none;
`


const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
 
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;`

const User = styled.div`
display : flex;
align-items : center;
font-weight : 500;
`
const Avatar = styled.img`
width : 32px;
height:32px;
border-radius:50%;
background-color : #999
`
const Navbar = () => {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search Here' />
          <SearchIcon />
        </Search>
        { currentUser? (<User>
          <VideoCallOutlinedIcon/>
          <Avatar src={currentUser.image}/>
          {currentUser.name}
        </User>) :(
          <Link to="signin" style={{textDecoration:"none"}}>
          <Button>
            <AccountCircleOutlined />
            SIGN IN
          </Button>
        </Link>
        ) }
      </Wrapper>
    </Container>
  )
}

export default Navbar