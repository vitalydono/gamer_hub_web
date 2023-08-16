// import {useNavigation} from '@react-navigation/native'
import Page from '../layouts/Page.js'
import styled from 'styled-components/native'
import Colors from '../appearance/Colors'
// import {useNavigation} from '@react-navigation/native'
import SignUp from '../components/SignUp.js'

const Register = () => {
  //   const navigation = useNavigation()

  return (
    <Page>
      <SignUp />
    </Page>
  )
}

export default Register

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

const MainText = styled.Text`
  font-size: 40px;
  color: ${Colors.TAUCHABLE};
`
