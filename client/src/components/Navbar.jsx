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

`


const Search = styled.div``


const Input = styled.input``


const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
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