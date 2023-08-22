import React from 'react'
import styled from 'styled-components/native'
import Input from '../actions/Input'
import Button from '../actions/Button'

const Form = ({placeholders, buttonText}) => {
  return (
    <>
      <InputsContainer>
        <Input placeholders={placeholders} />
      </InputsContainer>
      <ButtonContainer>
        <Button buttonText={buttonText} />
      </ButtonContainer>
    </>
  )
}

export default Form

const InputsContainer = styled.View`
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  justify-content: space-between;
  margin-top: 45px;
`
const ButtonContainer = styled.View`
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 20px;
`
