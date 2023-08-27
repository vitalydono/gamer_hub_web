import React from 'react'
import styled from 'styled-components/native'
import Input from '../actions/Input'
import Button from '../actions/Button'
import Colors from '../appearance/Colors'
import {useNavigation} from '@react-navigation/native'

const Form = ({placeholders, buttonText, externalText}) => {
  const navigation = useNavigation()
  const goToForgetPassword = () => navigation.navigate('Login')
  return (
    <>
      <InputsContainer>
        <Input placeholders={placeholders} />
      </InputsContainer>
      {externalText && (
        <ForgotPasswordButton onPress={() => goToForgetPassword()}>
          {externalText}
        </ForgotPasswordButton>
      )}
      <ButtonContainer>
        <Button buttonText={buttonText} />
      </ButtonContainer>
    </>
  )
}

export default Form

const InputsContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  margin-top: 45px;
`
const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`
const ForgotPasswordButton = styled.Text`
  font-size: 12px;
  align-self: flex-end;
  color: ${Colors.GREY};
`
