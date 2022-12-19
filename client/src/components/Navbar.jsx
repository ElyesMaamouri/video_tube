import { AccountCircleOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
postion : sticky;
top : 0;
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


const Navbar =() => {
  return (
    <Container>
      <Wrapper>
        <Search>
         <Input placeholder='Search Here' />
         <SearchIcon />
        </Search>
        <Button>
            <AccountCircleOutlined/>
            SIGN IN
          </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar