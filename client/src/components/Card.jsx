import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width : 360px;
margin-bottom :45px;
cursor: pointer;
`


const Image = styled.div`
width : 100%;
height: 202px;
background-color : #999

`
 const Card = () => {
  return (
    <Container><Image/></Container>
  )
}


export default Card