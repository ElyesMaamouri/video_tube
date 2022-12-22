import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
height: calc(100vh - 36px)`;

const Wrapper = styled.div`
display: flex;
align-items:center;
flex-direction:column;
gap :10px;
padding : 20px 50px;
border: 0.5px solid #373737;
`
const Title = styled.h1`
font-size: 24px;`;


const SubTitle = styled.h2`
font-size : 20px;
font-weight:300;`;


const Input = styled.input`
border:1px solid #373737;
border-radius: 3px;
padding :10px;
background-color : transparent;
width : 100%
`;


const Button = styled.button`

border-radius:3px;
border: none;
padding: 10px 20px;
font-weight : 500;
cursor : pointer;
`;


const More = styled.div`
display : flex;
margin-top: 10px;
font-size : 12px`;


const Links = styled.div`
margin-left: 50px;
`;


const Link = styled.span`
margin-left:30px`;


const SignIn = () => {

    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle> To be continue to 7GeekGamez </SubTitle>
                <Input placeholder='Username' />
                <Input placeholder='password' type="password" />
                <Button>Sign in</Button>
                <Title>Or</Title>
                <Input placeholder='Username' />
                <Input placeholder='eamil' type="email" />
                <Input placeholder='password' type="password" />
                <Button>Sign Up</Button>
            </Wrapper>
            <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default SignIn