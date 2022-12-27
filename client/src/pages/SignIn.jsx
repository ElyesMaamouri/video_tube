


import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useDispatch } from "react-redux";


import { auth, provider } from '../utilis/firebase';
import { signInWithPopup } from "firebase/auth";
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const handleLogin = async (e) => {
        e.preventDefault();

        dispatch(loginStart());
        try {
            const res = await axios.post("auth/signin", { name, password });
            dispatch(loginSuccess(res.data))
        } catch (err) {
            dispatch(loginFailure())
        }
    }

    const signInWithGoogle = () => {
        dispatch(loginStart());
        signInWithPopup(auth, provider).then((result) => {
            axios.post("/auth/google", {
                name: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL
            }).then((res) => {
                dispatch(loginSuccess(res.data))
            })
        }).catch((error) => {
            dispatch(loginFailure());
        })
    }
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle> To be continue to 7GeekGamez </SubTitle>
                <Input placeholder='Username' onChange={e => setName(e.target.value)} />
                <Input placeholder='password' type="password" onChange={e => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Sign in</Button>
                <Button onClick={signInWithGoogle}>Signin with google</Button>
                <Title>Or</Title>
                <Input placeholder='Username' onChange={e => setName(e.target.value)} />
                <Input placeholder='eamil' type="email" onChange={e => setEmail(e.target.value)} />
                <Input placeholder='password' type="password" onChange={e => setPassword(e.target.value)} />
                <Button >Sign Up</Button>
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