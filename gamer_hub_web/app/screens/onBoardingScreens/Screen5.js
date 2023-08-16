// import {useNavigation} from '@react-navigation/native'
import Page from '../../layouts/Page'
import styled from 'styled-components/native'
import Colors from '../../appearance/Colors'
import {useNavigation} from '@react-navigation/native'

const Screen5 = () => {
  const navigation = useNavigation()

  const goToRegister = () => navigation.navigate('Register')

  return (
    <Page>
      <Container>
        <SkipTouchable onPress={() => goToRegister()}>
          <SkipText>Skip</SkipText>
        </SkipTouchable>
        <MainText>Now Enjoy!</MainText>
        <SpacerGamerHub />
        <SubText>Enjoy your progress</SubText>
      </Container>
    </Page>
  )
}

export default Screen5

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`
const SpacerGamerHub = styled.View`
  margin-top: 5px;
`
const MainText = styled.Text`
  font-size: 40px;
  color: ${Colors.TAUCHABLE};
`
const SubText = styled.Text`
  font-size: 16px;
  color: ${Colors.GREY};
`

const SkipTouchable = styled.TouchableOpacity``

const SkipText = styled.Text`
  font-size: 16px;
  color: ${Colors.GREY};
`
