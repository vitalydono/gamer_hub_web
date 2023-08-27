import styled from 'styled-components/native'
import React from 'react'
import Colors from '../appearance/Colors'

const Page = ({children}) => {
  return <Container>{children}</Container>
}

export default Page

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${Colors.MAIN};
  padding-right: 10px;
  padding-left: 10px;
`
