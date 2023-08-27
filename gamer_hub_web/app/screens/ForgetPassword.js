import React from 'react'
import Page from '../layouts/Page'

const ForgetPassword = () => {
  const placeholders = ['Email']
  const buttonText = 'Send Password'

  const {Login} = Auth
  return (
    <Page>
      <ForgetPassword />
    </Page>
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
