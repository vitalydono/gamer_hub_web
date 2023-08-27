import React from 'react'

const ForgetPassword = () => {
  const placeholders = ['Email']
  const buttonText = 'Send Password'

  const {Login} = Auth
  return (
    <Container>
      <Title>{Login.ForgetPasswordMainTitle}</Title>
      <SubTitle>{Login.ForgetPasswordSubTitle}</SubTitle>
      <Form placeholders={placeholders} buttonText={buttonText} />
    </Container>
  )
}

export default ForgetPassword

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
