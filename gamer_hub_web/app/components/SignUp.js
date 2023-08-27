import React from 'react'
import styled from 'styled-components/native'
import Colors from '../appearance/Colors'
import Form from '../Form/Form'
import {Auth} from '../common/texts.js'
import {useNavigation} from '@react-navigation/native'

const SignUp = () => {
  const placeholders = ['Your Name', 'Email', 'Mobile Number', 'Password']
  const buttonText = 'Sign up'
  const navigation = useNavigation()
  const goToSignIn = () => navigation.navigate('Login')

  const {Register} = Auth
  return (
    <Container>
      <Title>{Register.MainTitle}</Title>
      <SubTitle>{Register.SubTitle}</SubTitle>
      <Form placeholders={placeholders} buttonText={buttonText} />
      <AlreadyHaveText onPress={() => goToSignIn()}>
        {Register.BottomTitle}Signin
      </AlreadyHaveText>
    </Container>
  )
}

export default SignUp

const Container = styled.View`
  flex: 1;
  align-items: center;
`
const Title = styled.Text`
  align-items: center;
  font-size: 30px;
  color: ${Colors.GREY};
  margin-top: 30px;
`
const SubTitle = styled.Text`
  align-items: center;
  font-size: 12px;
  color: ${Colors.GREY};
  margin-top: 10px;
`
const AlreadyHaveText = styled.Text`
  font-size: 12px;
  color: ${Colors.GREY};
  align-items: center;
  margin-top: 150px;
`
